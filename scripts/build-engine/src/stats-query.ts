
import ps from 'path';
import fs from 'fs-extra';
import JSON5 from 'json5';
import dedent from 'dedent';

interface Config {
    /**
     * Engine features. Keys are feature IDs.
     */
    features: Record<string, Feature>;

    /**
     * Describe how to generate the index module `'cc'`.
     */
    index?: IndexConfig;

    moduleOverrides?: Array<{
        test: Test;
        overrides: Record<string, string>;
    }>;
}

interface IndexConfig {
    modules?: Record<string, {
        /**
         * If specified, export contents of the module into a namespace specified by `ns`
         * and then export that namespace into `'cc'`.
         * If not specified, contents of the module will be directly exported into `'cc'`.
         */
        ns?: string;

        /**
         * If `true`, accesses the exports of this module from `'cc'` will be marked as deprecated.
         */
        deprecated?: boolean;
    }>;
}

type Test = string;

/**
 * An engine feature.
 */
interface Feature {
    /**
     * Modules to be included in this feature in their IDs.
     * The ID of a module is its relative path(no extension) under /exports/.
     */
    modules: string[];
}

interface Context {
    mode?: string;
    platform?: string;
}

/**
 * Query any any stats of the engine.
 */
export class StatsQuery {
    /**
     * @param engine Path to the engine root.
     */
    public static async create(engine: string) {
        const configFile = ps.join(engine, 'cc.config.json');
        const config: Config = JSON5.parse(await fs.readFile(configFile, 'utf8'));
        const query = new StatsQuery(engine, config);
        await query._initialize();
        return query;
    }

    /**
     * Gets the path to the engine root.
     */
    get path () {
        return this._engine;
    }

    /**
     * Gets the path to tsconfig.
     */
    get tsConfigPath() {
        return ps.join(this._engine, 'tsconfig.json');
    }

    /**
     * Gets all features defined.
     */
    public getFeatures() {
        return Object.keys(this._features);
    }

    /**
     * Returns if the specified feature is defined.
     * @param feature Feature ID.
     */
    public hasFeature(feature: string) {
        return !!this._features[feature];
    }

    /**
     * Gets all public modules included in specified features.
     * @param featureIds Feature ID.
     */
    public getModulesOfFeatures(featureIds: string[]) {
        const modules = new Set<string>();
        for (const featureId of featureIds) {
            this._features[featureId]?.modules.forEach(entry => modules.add(entry));
        }
        return Array.from(modules);
    }

    /**
     * Gets all public modules in their names.
     */
    public getPublicModules() {
        return Object.keys(this._publicModules);
    }

    /**
     * Gets the path to source file of the public module.
     * @param moduleId Name of the public module.
     */
    public getPublicModuleFile(moduleName: string) {
        return this._publicModules[moduleName];
    }

    /**
     * Gets all editor public modules in their names.
     */
    public getEditorPublicModules() {
        return Object.keys(this._editorPublicModules);
    }

    /**
     * Gets the path to source file of the editor-public module.
     * @param moduleName Name of the public module.
     */
    public getEditorPublicModuleFile(moduleName: string) {
        return this._editorPublicModules[moduleName];
    }

    /**
     * Gets the source of `'cc'`.
     * @param moduleNames Involved modules.
     * @param mapper If exists, map the module name into another module request.
     */
    public evaluateIndexModuleSource(moduleNames: string[], mapper?: (moduleName: string) => string) {
        return moduleNames.map(moduleName => {
            const indexInfo = this._index.modules[moduleName];
            const ns = indexInfo?.ns;
            if (ns) {
                return dedent`
                    import * as ${ns} from '${mapper?.(moduleName) ?? moduleName}';
                    export { ${ns} };
                `;
            }
            return `export * from '${mapper?.(moduleName) ?? moduleName}';`;
        }).join('\n');
    }

    /**
     * Evaluates the source of `'internal-constants'`(`'cc/env'`),
     * @param context 
     */
    public evaluateEnvModuleSourceFromRecord(record: Record<string, unknown>) {
        return Object.entries(record).map(([k, v]) => `export const ${k} = ${v};`).join('\n');
    }

    /**
     * Evaluates module overrides under specified context.
     * @param context 
     */
    public evaluateModuleOverrides(context: Context) {
        const overrides: Record<string, string> = {};

        const addModuleOverrides = (moduleOverrides: Record<string, string>) => {
            for (const [source, override] of Object.entries(moduleOverrides)) {
                const normalizedSource = ps.resolve(this._engine, source);
                const normalizedOverride = ps.resolve(this._engine, override);
                overrides[normalizedSource] = normalizedOverride;
            }
        };

        this._config.moduleOverrides?.forEach(({ test, overrides }) => {
            if (this._evalTest(test, context)) {
                addModuleOverrides(overrides);
            }
        });

        return overrides;
    }

    private static async _readDomainSpecifiedPublicModules(exportsDir: string, mapper: (baseName: string) => string) {
        const result: Record<string, string> = {};
        for (const entryFileName of await fs.readdir(exportsDir)) {
            const entryExtName = ps.extname(entryFileName);
            if (!entryExtName.toLowerCase().endsWith('.ts')) {
                continue;
            }
            const baseName = ps.basename(entryFileName, entryExtName);
            const moduleName = mapper(baseName);
            const entryFile = ps.join(exportsDir, entryFileName);
            result[moduleName] = entryFile;
        }
        return result;
    }

    private static _baseNameToModuleName(baseName: string) {
        return `cc/${baseName}`;
    }

    private static _editorBaseNameToModuleName(baseName: string) {
        return `cc/editor/exports/${baseName}`;
    }

    private constructor(engine: string, config: Config) {
        this._config = config;
        this._engine = engine;
    }

    private _evalTest<T>(test: Test, context: Context) {
        const result = new Function('context', `return ${test}`)(context) as T;
        console.debug(`Eval "${test}" to ${result}`);
        return result;
    }

    private async _initialize() {
        const { _config: config, _engine: engine } = this;

        const publicModules = this._publicModules = await StatsQuery._readDomainSpecifiedPublicModules(
            ps.join(engine, 'exports'), StatsQuery._baseNameToModuleName);

        for (const [featureName, feature] of Object.entries(config.features)) {
            const parsedFeature = this._features[featureName] = { modules: [] } as Feature;
            for (const moduleFileBaseName of feature.modules) {
                const moduleName = StatsQuery._baseNameToModuleName(moduleFileBaseName);
                if (!publicModules[moduleName]) {
                    throw new Error(`Invalid config file: '${moduleFileBaseName}' is not a valid module.`);
                }
                parsedFeature.modules.push(moduleName);
            }
        }

        if (config.index) {
            if (config.index.modules) {
                for (const [k, v] of Object.entries(config.index.modules)) {
                    this._index.modules[StatsQuery._baseNameToModuleName(k)] = v;
                }
            }
            this._index = {
                ...config.index,
                modules: this._index.modules,
            };
        }

        this._editorPublicModules = await StatsQuery._readDomainSpecifiedPublicModules(
            ps.join(engine, 'editor', 'exports'), StatsQuery._editorBaseNameToModuleName);
    }

    private _engine: string;
    private _index: ParsedIndexConfig = { modules: {}, };
    private _features: Config['features'] = {};
    private _config: Readonly<Config>;
    private _publicModules: Record<string, string> = {};
    private _editorPublicModules: Record<string, string> = {};
}

type ParsedIndexConfig = Omit<IndexConfig, 'modules'> & {
    modules: NonNullable<IndexConfig['modules']>;
};