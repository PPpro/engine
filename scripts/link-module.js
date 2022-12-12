const glob = require('glob');
const fs = require('fs');
const ps = require('path');
const cp = require('child_process');
const chalk = require('chalk').default;

const engineRoot = ps.join(__dirname, '..');
const packageName2File = {}

function detectIndent (content) {
    const lines = content.split('\n');
    let nextLine = 0;
    lines.some((line, index) => {
        if (line.includes('{')) {
            nextLine = index + 1;
            return true;
        }
        return false;
    });
    let indentCount = 0;
    let lineContent = lines[nextLine];
    for (let i = 0; i < lineContent.length; ++i) {
        if (lineContent[i] !== ' ') {
            break;
        }
        indentCount++;
    }
    return indentCount;
}

function indentString (indentCount) {
    return (new Array(indentCount)).fill(' ').join('');
}

// link modules
const ccWorkspaces = JSON.parse(fs.readFileSync(ps.join(__dirname, '../package.json'), 'utf8'))['cc:workspaces'];
ccWorkspaces.forEach(workspace => {
    const absoluteWorkspace = ps.join(engineRoot, workspace);
    const files = glob.sync(absoluteWorkspace);
    files.forEach(file => {
        if (file.endsWith('package.json')) {
            const modulePath = ps.dirname(file).replace(/\\/g, '/');
            console.log(chalk.green(`Linking module: ${modulePath}`));
            const packageName = JSON.parse(fs.readFileSync(file, 'utf8')).name;
            packageName2File[packageName] = file;
            
            const packagePath = ps.join(engineRoot, 'node_modules', packageName).replace(/\\/g, '/');
            if (fs.existsSync(packagePath)) {
                console.log(`Use link cache: ${packagePath}\n`);
                return;
            }
            const res = cp.spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['link', '--no-package-lock', modulePath], {
                cwd: ps.join(__dirname, '..')
            });
            console.log(res.stderr.toString());
        }
    });
});

const packageNames = Object.keys(packageName2File);
console.log(chalk.green('Finish linking !'), packageNames);

// add devDependencies
// const rootPackagePath = ps.join(engineRoot, 'package.json');
// const rootPackageJson = fs.readFileSync(rootPackagePath, 'utf8');
// const indent = detectIndent(rootPackageJson);
// const jsonObj = JSON.parse(rootPackageJson);
// if (typeof jsonObj.devDependencies === 'undefined') {
//     const devDeps = jsonObj.devDependencies = {};
//     packageNames.forEach(name => {
//         devDeps[name] = `file:${ps.relative(engineRoot, ps.dirname(packageName2File[name])).replace(/\\/g, '/')}`;
//     });
//     fs.writeFileSync(rootPackagePath, JSON.stringify(jsonObj, null, indent));
//     console.log('Finish updating devDependencies in package.json !', packageNames.length > 0 ? packageNames : '');
// } else {
//     const keys = Object.keys(jsonObj.devDependencies);
//     const packageNamesToAdd = packageNames.filter(name => !keys.includes(name));
//     const devDeps = jsonObj.devDependencies;
//     packageNamesToAdd.forEach(name => {
//         devDeps[name] = `file:${ps.relative(engineRoot, ps.dirname(packageName2File[name])).replace(/\\/g, '/')}`;
//     });
//     fs.writeFileSync(rootPackagePath, JSON.stringify(jsonObj, null, indent));
//     console.log('Finish updating devDependencies in package.json !', packageNamesToAdd.length > 0 ? packageNamesToAdd : '');
// }

// update tsconfig include
const tsconfigFile = ps.join(engineRoot, 'tsconfig.json');
let tsconfigContent = fs.readFileSync(tsconfigFile, 'utf8');
const tsconfigIndent = detectIndent(tsconfigContent);
let targetIncludePaths = packageNames.map(pkgName => `node_modules/${pkgName}/**/*.ts`);
const includeRegExp = /"include":\s*?\[([\s\S]*?)\]/;
const matchResult = tsconfigContent.match(includeRegExp)[1];
const currentIncludePaths = matchResult.split(',').map(path => path.trim().slice(1, -1));
const includePathsToAdd = targetIncludePaths.filter(path => !currentIncludePaths.includes(path));
targetIncludePaths = currentIncludePaths.concat(includePathsToAdd);

const targetContent = targetIncludePaths.map(path => `${indentString(tsconfigIndent*2)}"${path}"`).join(',\n')
tsconfigContent = tsconfigContent.replace(includeRegExp, `"include": [\n${targetContent}\n${indentString(tsconfigIndent)}]`);
fs.writeFileSync(tsconfigFile, tsconfigContent, 'utf8');
console.log(chalk.green('Finish updating include in tsconfig.json !'), includePathsToAdd.length > 0 ? includePathsToAdd : '');