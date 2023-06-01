const { ESLint } = require("eslint");
const glob = require('glob');
const ps = require('path');
const fs = require('fs');

(async function main() {
    // 1. Create an instance with the `fix` option.
    const eslint = new ESLint({ 
        // fix: true, 
    // baseConfig: {
    //     parser: "@typescript-eslint/parser",
    //     plugins: ["@typescript-eslint", "unused-imports"],
    //     rules: {
    //         "@typescript-eslint/consistent-type-imports": "error",
    //         "unused-imports/no-unused-imports": "error",
    //     },
        // }
    });

    const files = glob.sync(ps.join(__dirname, './**/*.ts'), {
        ignore: [
            ps.join(__dirname, './node_modules/**/*.ts'),
            ps.join(__dirname, './**/*.d.ts'),
            ps.join(__dirname, './scripts/**/*.ts'),
            ps.join(__dirname, './tests/**/*.ts'),
            ps.join(__dirname, './templates/**/*.ts'),
        ]
    });
    // console.log(files);

    files.length = Number.parseInt(files.length / 5)

    // 2. Lint files. This doesn't modify target files.
    const results = await eslint.lintFiles(files);

    // 3. Modify the files with the fixed code.
    // await ESLint.outputFixes(results);

    // // 4. Format the results.
    const formatter = await eslint.loadFormatter();
    const resultText = formatter.format(results);

    // 5. Output it.
    console.log(resultText);
    // fs.writeFileSync('./result.md', resultText, 'utf-8');
})().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});