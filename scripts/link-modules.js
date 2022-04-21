const fs = require('fs');
const ps = require('path');
const globby = require('globby');
const execSync = require('child_process').execSync;
const ts = require('typescript');

function normalizePath (path) {
    return path.replace(/\\/g, '/');
}

const enginePath = ps.dirname(__dirname);
const enginePkgFile = ps.join(enginePath, 'package.json');
let pkgJsonFiles = globby.sync([
    normalizePath(ps.join(enginePath, '**/package.json')),
    `!${normalizePath(enginePkgFile)}`,
    `!${normalizePath(ps.join(enginePath, '**/node_modules/**/*'))}`,
    `!${normalizePath(ps.join(enginePath, 'native/**/*'))}`,
    `!${normalizePath(ps.join(enginePath, 'scripts/**/*'))}`,
]);
console.log('All package.json files: ', pkgJsonFiles);

const pkgExports = [];
pkgJsonFiles.forEach(pkgFile => {
    const pkgJson = JSON.parse(fs.readFileSync(pkgFile, 'utf8'));
    const pkgDir = ps.dirname(pkgFile);
    if (typeof pkgJson.exports === 'object') {
        for (let k in pkgJson.exports) {
            // NOTE: skip root export
            if (k === '.') {
                continue;
            }
            const indexFile = pkgJson.exports[k];
            pkgExports.push(normalizePath(ps.join(pkgDir, indexFile)));
        }
    }
});
console.log('All package exports: ', pkgExports);

//#region update tsconfig.json
const tsconfigFile = ps.join(enginePath, 'tsconfig.json');
const { config } = ts.readConfigFile(tsconfigFile, (config) => {
    return fs.readFileSync(config, 'utf8');
});
const include = config.include;
let tmp = pkgExports.map(pkgExport => normalizePath(ps.relative(enginePath, pkgExport)));
tmp = tmp.filter(i => !include.includes(i));
include.push(...tmp);
fs.writeFileSync(tsconfigFile, JSON.stringify(config, null, 2));

//#endregion

//#region update package.json dependencies
const enginePkgJson = JSON.parse(fs.readFileSync(enginePkgFile, 'utf8'));
const dependencies = enginePkgJson.dependencies;
pkgJsonFiles.forEach(pkgJsonFile => {
    let pkgJson = JSON.parse(fs.readFileSync(pkgJsonFile, 'utf8'));
    let pkgName = pkgJson.name;
    let pkgDir = ps.dirname(pkgJsonFile);
    dependencies[pkgName] = `file:${ps.relative(enginePath, pkgDir)}`;
});
fs.writeFileSync(enginePkgFile, JSON.stringify(enginePkgJson, null, 2));
//#endregion

//#region link modules
pkgJsonFiles.forEach(pkgFile => {
    const dirname = ps.dirname(pkgFile);
    if (dirname === enginePath) return;
    const cmd = `npm link ${ps.dirname(pkgFile)} --no-save`;
    console.log(cmd);
    execSync(cmd, {
        cwd: enginePath
    });
});
//#endregion