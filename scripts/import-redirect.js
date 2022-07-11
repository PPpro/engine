const { ir } = require('import-redirect');
const { join } = require('path');
const { writeFileSync } = require('fs');

function formatJoin (...args) {
    return join(...args).replace(/\\/g, '/');
}

const file2Code = ir.transformPatternImport({
    pattern: formatJoin(__dirname, '../**/*.ts'),
    ignorePatterns: ['**/node_modules/**'],
    moduleIndex: formatJoin(__dirname, '../cocos/core/math/index.ts'),
    moduleName: '@cc/core/math',
    mergeSpecifier: true,
    verbose: true,
});

for (let file in file2Code) {
    const code = file2Code[file];
    writeFileSync(file, code, 'utf8');
}