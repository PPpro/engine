const fs = require('fs-extra')
const ps = require('path');
const glob = require('glob');
const chalk = require('chalk').default;
const cp = require('child_process');

const engineRoot = ps.join(__dirname, '..');

const ccWorkspaces = JSON.parse(fs.readFileSync(ps.join(__dirname, '../package.json'), 'utf8'))['cc:workspaces'];
ccWorkspaces.forEach(workspace => {
    const absoluteWorkspace = ps.join(engineRoot, workspace);
    const files = glob.sync(absoluteWorkspace);
    files.forEach(file => {
        if (file.endsWith('package.json')) {
            const modulePath = ps.dirname(file).replace(/\\/g, '/');
            const pkgConfig = JSON.parse(fs.readFileSync(file, 'utf8'));
            const { name, scripts } = pkgConfig;
            console.log(chalk.green(`Running build in module: ${name} - ${modulePath}`));
            const buildCmd = scripts && scripts.build;
            if (!buildCmd) {
                console.log(chalk.yellow(`There is no build command, skip this module ...\n\n`));
                return;
            }
            const cmdList = buildCmd.split(' ');
            const res = cp.spawnSync(cmdList[0], cmdList.slice(1), {
                cwd: modulePath,
            });
            // console.log(res.stderr.toString());
            console.log(chalk.green('Running build finish !\n\n'));
        }
    });
});