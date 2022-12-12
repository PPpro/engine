const { ir } = require('import-redirect')
const ps = require('path');
const fs = require('fs');
const readline = require('readline');
const chalk = require('chalk').default;

const moduleName = process.argv[2];
let moduleIndex = process.argv[3];

if (typeof moduleName === 'undefined' || typeof moduleIndex === 'undefined') {
    console.error(chalk.redBright(`Usage: 'npm run recast-import [moduleName] [moduleIndexPath]'`));
    console.error(chalk.red(`For Example: 'npm run recast-import math ./cocos/core/math/index.ts'`));
    process.exit(1);
}
if (!ps.isAbsolute(moduleIndex)) {
    moduleIndex = ps.join(process.cwd(), moduleIndex);
}
console.log(chalk.green(`module name: ${moduleName}\n module index path: ${moduleIndex}`));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question(chalk.redBright('This cammand would override all your engine code, are you sure [y/n]?'), (answer) => {
    rl.close();
    if (answer === 'yes' || answer === 'y') {
        transform();
    }
    process.exit(0);
});

function transform () {
    console.log('Scanning files...')
    const engineDir = ps.join(__dirname, '..');
    const res = ir.transformPatternImport({
        moduleIndex: moduleIndex.replace(/\\/g, '/'),
        moduleName,
        mergeSpecifier: true,
        pattern: ps.join(engineDir, '/**/*.ts').replace(/\\/g, '/'),
        ignorePatterns: [
            '**/node_modules/**/*',
        ],
        verbose: true,
    });
    
    console.log('Overriding files...')
    for (let fileName in res) {
        const content = res[fileName];
        fs.writeFileSync(fileName, content, 'utf8')
    }
    
    console.log('finish !')
}