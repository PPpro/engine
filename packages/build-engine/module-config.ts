export interface ModuleConfig {
    exports: {
        /**
         * This is exported to the game runtime.
         * We build the `cc.d.ts` with this export port.
         */
        '.': {
            minigame: string | {
                /**
                 * We use this export port by default for unspecified minigame platforms.
                 */
                default: string,
                wechat?: string,
                bytedance?: string,
                xiaomi?: string,
                alipay?: string,
                taobao_creative_app?: string,
                taobao_minigame?: string,
                oppo?: string,
                vivo?: string,
                huawei?: string,
            },
            native: string | {
                /**
                 * We use this export port by default for unspecified native platforms.
                 */
                default: string,
                android?: string,
                windows?: string,
                ios?: string,
                mac?: string,
                harmonyos?: string,
                open_harmony?: string,
            },
            web: string | {
                /**
                 * We use this export port by default for unspecified native platforms.
                 */
                default: string,
                web_mobile?: string,
                web_desktop?: string,
            },
        },
        /**
         * This is exported to the engine internal.
         * This is usefual when we need to export some friend interface.
         */
        './internal'?: string,
        /**
         * This is exported to the editor.
         * This is useful when we need to export some editor only interface.
         * Also we build `cc.editor.d.ts` from this export port.
         * If this is not specified, we use the '.' export port by default for module editor export.
         */
        './editor'?: string,
    }
}