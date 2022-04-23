const rollup = require('rollup')
const resolve = require('@rollup/plugin-node-resolve')
const rpBabel = require('@rollup/plugin-babel').default
const rpVirtualModuel = require('@rollup/plugin-virtual')
const ps = require('path')

const babelPresetEnv = require('@babel/preset-env');
// const babelPresetTs = require('@babel/preset-typescript')
const babelProposalProperties = require('@babel/plugin-proposal-class-properties')
const babelPresetCC = require('@cocos/babel-preset-cc');


const moduleName = '@cc/pal/audio';
const dependencies = {}

async function test (moduleName) {
    const inputFile = require.resolve(moduleName);
    const presetEnvOptions = {
        loose: true,
        // We need explicitly specified targets.
        // Ignore it to avoid the engine's parent dirs contain unexpected config.
        ignoreBrowserslistConfig: true,
    };
    let input = await rollup.rollup({
        input: [
            inputFile,
            // String.raw`c:/Users/l/Desktop/editor-3d-legacy/resources/3d/engine/pal/audio/index.d.ts`,
            // String.raw`d:\editor-3d\resources\3d\engine\pal\input\index.d.ts`,
            // String.raw`d:\editor-3d\resources\3d\engine\pal\minigame\index.d.ts`,
            // String.raw`d:\editor-3d\resources\3d\engine\pal\screen-adapter\index.d.ts`,
            // String.raw`d:\editor-3d\resources\3d\engine\pal\system-info\index.d.ts`,
        ],
        external: function (
			source,
			importer,
			isResolved ) {
          if (source.startsWith('@cc')) {
            // console.log('test resolve ', require.resolve(source));
            dependencies[source] = false;
            return true
          }
          return false;

        },
        plugins: [
            {
                name: 'my-example', // this name will show up in warnings and errors
                resolveId ( source, importer ) {
                    // console.log('resolveid', source, '             importer ', importer)
                    if (source === './pal') {
                        if (importer === 'C:\\Users\\l\\Desktop\\editor-3d-legacy\\resources\\3d\\engine\\pal\\minigame\\index.d.ts')
                        return ps.join(ps.dirname(importer), 'index.d.ts')
                        // console.log('hack resolveid', ps.join(ps.dirname(importer), 'web/index.ts'));
                        return ps.join(ps.dirname(importer), 'web/index.ts');
                    }
                  return null; // other ids should be handled as usually
                },
                load ( id ) {
                // console.log('load ', id)
                  return null; // other ids should be handled as usually
                }
            },
            // rpVirtualModuel({
            //     './pal': 'export * from \'c:/Users/l/Desktop/editor-3d-legacy/resources/3d/engine/pal/audio/native/player.ts\''
            // }),
            resolve({
                extensions: ['.js', '.ts', '.d.ts'],
                // jail: './'
            }),
            rpBabel({
                babelHelpers: 'bundled',
                extensions: ['.js', '.ts'],
                presets: [
                    [babelPresetEnv, presetEnvOptions],
                    // [babelPresetTs],
                    [babelPresetCC, {
                        allowDeclareFields: true
                    }]
                ],
                // plugins: [
                //     babelProposalProperties
                // ]
            }),
        ]
    });

    await input.write({
        format: 'system',
        file: `./target/${moduleName}.js`
        // dir: './target2/'
    })

    dependencies[moduleName] = true;
    for (let m in dependencies) {
        if (!dependencies[m]) {
            console.log('module ', m)
            await test(m);
        }
    }
}


test(moduleName);