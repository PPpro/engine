/**
 * Abstract platform related export, like `web`, `native` and `minigame`.
 * Usually this is used for PAL modules.
 * The value can be a `string` or a `object` which requires a default item.
 * eg. "web": "/path/to/index.ts" is equals to "web": {default: "/path/to/index.ts"}
 */
type AbstractPlatformConfig<T> = ({
    /**
     * We use this export condition by default for unspecified platforms.
     */
    default: string;
} & T) | string;

/**
 * The export condition item. `types` and `node` fields are required.
 */
type ExportConditionItem<T> = {
    /**
     * `types` is for .d.ts generation and type checking in development.
     */
    types: string;
    /**
     * `node` should be specified as './package.json', we need this field to resolve the condition exports.
     */
    node: './package.json';
} & T;


/**
 * The config for export condition.
 */
interface ExportConditionConfig {
    /**
     * This is exported to the game runtime.
     * Also we build the `cc.d.ts` with this export condition.
     */
    '.': ExportConditionItem<{
        minigame?: AbstractPlatformConfig<{
            wechat?: string;
            bytedance?: string;
            xiaomi?: string;
            alipay?: string;
            taobao_creative_app?: string;
            taobao_minigame?: string;
            oppo?: string;
            vivo?: string;
            huawei?: string;
        }>
        native?: AbstractPlatformConfig<{
            /**
             * This is different with the './editor' export condition.
             * We treat `native editor` as a platform.
             * And this is an implementation version for `types` field.
             */
            editor?: string;
            android?: string;
            windows?: string;
            ios?: string;
            mac?: string;
            harmonyos?: string;
            open_harmony?: string;
        }>,
        web?: AbstractPlatformConfig<{
            /**
             * This is different with the './editor' export condition.
             * We treat `web editor` as a platform.
             * And this is an implementation version for `types` field.
             */
            editor?: string;
            web_mobile?: string;
            web_desktop?: string;
        }>,
    }>,
    /**
     * This is exported to the engine internal.
     * This is useful when we need to export some friend interface for internal engine modules.
     */
    './internal'?: ExportConditionItem<{}>,
    /**
     * This is exported to the editor.
     * This is different with `editor` platform export, 
     * This is useful when we need to export some editor only interface.
     * Also we build `cc.editor.d.ts` from this export condition.
     * If this is not specified, we use the '.' export condition by default for module editor export.
     */
    './editor'?: ExportConditionItem<{}>,
}

export interface ModuleConfig {
    [key: string]: any;
    exports: ExportConditionConfig;
    /**
     * Specify the module dependencies is required if this module import another module.
     */
    dependencies?: Record<string, string>;
    /**
     * Specify the dev dependencies, these dependencies are always used in `scripts` folder.
     */
    devDependencies?: Record<string, string>;
}