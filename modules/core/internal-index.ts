/*
 Copyright (c) 2022-2023 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

// This file only exports functions/classes that are only visible to engine internal.

import * as jsbUtils from './utils/jsb-utils';
import * as RF from './data/utils/requiring-frame';

export { updateChildrenForDeserialize } from './utils/jsb-utils';
export { editable, tooltip, visible, displayName, displayOrder, range, rangeStep, slide, disallowAnimation, rangeMin } from './data/decorators/editable';
export { override } from './data/decorators/override';
export { formerlySerializedAs, serializable, uniquelyReferenced } from './data/decorators/serializable';
export { property, type, executeInEditMode, help, menu, ccclass, float, string, inspector } from './data/class-decorator';
export { readOnly, group, rangeMax, unit, radian, multiline, editorOnly, requireComponent, executionOrder, disallowMultiple, playOnFocus } from './data/decorators'

export * from './algorithm/binary-search';
export { shift } from './algorithm/move';

export { garbageCollectionManager } from './data/garbage-collection';
export { GCObject } from './data/gc-object';

export type { DeserializationContext } from './data/custom-serializable';

export * from './data/utils/asserts';
export * from './data/utils/compiler';

export { ENUM_TAG, BITMASK_TAG } from './data/class';
export { isCCObject, isValid } from './data/object';

export { EasingMethod } from './curves/easing-method';

export { CallbacksInvoker } from './event/callbacks-invoker';
export { applyMixins } from './event/event-target-factory';

export { _resetDebugSetting } from './platform/debug';

/**
 * @engineInternal
 */
export  { jsbUtils };

export type { EditorExtendableObject } from './data/editor-extras-tag';
export { removeIf } from './utils/array';
export { decodeUuid } from './utils/decode-uuid';
export { containerManager } from './memop/container-manager';
export { effectSettings } from './effect-settings';
export { packRGBE } from './math/color';
export { IDGenerator } from './utils/id-generator';
export { extendsEnum } from './data/utils/extends-enum';
export { partition } from './algorithm/partition';
export { StorageUnit, ElementType, combineStorageUnitElementType, extractStorageUnitElementType } from './data/utils/compact-value-type-array';
export { linearToSrgb8Bit, srgb8BitToLinear, srgbToLinear } from './math/color';
export { ScalableContainer } from './memop/scalable-container';
export { KeySharedQuatCurves, KeySharedRealCurves } from './curves/keys-shared-curves';
export { RF };
export { ccwindow } from './global-exports';