const rollup = require('rollup')
const resolve = require('@rollup/plugin-node-resolve')
const rpBabel = require('@rollup/plugin-babel').default
const rpVirtualModuel = require('@rollup/plugin-virtual')


const babelPresetEnv = require('@babel/preset-env');
// const babelPresetTs = require('@babel/preset-typescript')
const babelProposalProperties = require('@babel/plugin-proposal-class-properties')
const babelPresetCC = require('@cocos/babel-preset-cc');


async function test () {
    const presetEnvOptions = {
        loose: true,
        // We need explicitly specified targets.
        // Ignore it to avoid the engine's parent dirs contain unexpected config.
        ignoreBrowserslistConfig: true,
    };
    let input = await rollup.rollup({
        input: [
            String.raw`c:/Users/l/Desktop/editor-3d-legacy/resources/3d/engine/pal/index.d.ts`,
            // String.raw`d:\editor-3d\resources\3d\engine\pal\input\index.d.ts`,
            // String.raw`d:\editor-3d\resources\3d\engine\pal\minigame\index.d.ts`,
            // String.raw`d:\editor-3d\resources\3d\engine\pal\screen-adapter\index.d.ts`,
            // String.raw`d:\editor-3d\resources\3d\engine\pal\system-info\index.d.ts`,
        ],
        plugins: [
            rpVirtualModuel({
                './pal': 'export * from \'c:/Users/l/Desktop/editor-3d-legacy/resources/3d/engine/pal/audio/native/player.ts\''
            }),
            resolve({
                extensions: ['.js', '.ts', '.d.ts']
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

    input.write({
        format: 'system',
        file: './target/pal-audio.js'
        // dir: './target2/'
    })
}


test();
