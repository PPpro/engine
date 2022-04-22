/*
 Copyright (c) 2020 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated engine source code (the "Software"), a limited,
 worldwide, royalty-free, non-assignable, revocable and non-exclusive license
 to use Cocos Creator solely to develop games on your target platforms. You shall
 not use Cocos Creator software for developing other software or tools that's
 used for developing games. You are not granted to publish, distribute,
 sublicense, and/or sell copies of Cocos Creator.

 The software or tools in this License Agreement are licensed, not sold.
 Xiamen Yaji Software Co., Ltd. reserves all rights not expressly granted to you.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

/**
 * @packageDocumentation
 * @hidden
 */

import { legacyCC } from '@cc/core/global';
// has to import predefines first
import '../predefine';

// tslint:disable-next-line: ordered-imports
import '../cocos/core/legacy';
import * as renderer from '../cocos/core/renderer';

// LOAD ENGINE CORE
export * from '../cocos/core';
// export from core module
import * as math from '@cc/core/math';
export * from '@cc/core/math';
export { EventTarget, Eventify } from '@cc/core/event';
export * as math from '@cc/core/math'
legacyCC.math = math;
export {
    debug,
    log,
    error,
    warn,
    assert,
    logID,
    errorID,
    warnID,
    assertID,
    isDisplayStats,
    setDisplayStats,
    getError,
    DebugMode,
} from '@cc/core/debug';
export * from '@cc/core/deprecate';
export { VERSION } from '@cc/core/global';
export * from '@cc/core/value-type';

export { renderer };
legacyCC.renderer = renderer;

export * from '../extensions/ccpool/node-pool';

export { legacyCC as cclegacy };

export {
    Event, EventAcceleration, EventKeyboard, EventMouse, EventTouch,
    SystemEventType, KeyCode, Touch, Acceleration } from '@cc/pal/input';
export * from '../cocos/input';

type Constructor_<T = unknown> = Constructor<T>;

export type { Constructor_ as Constructor };
