System.register(['internal:constants', '@cc/core/value-type'], function (exports) {
    'use strict';
    var EXPORT_TO_GLOBAL, BUILD, TEST, EDITOR, PREVIEW, DEV, DEBUG, JSB, BYTEDANCE, WECHAT, ALIPAY, XIAOMI, BAIDU, COCOSPLAY, HUAWEI, OPPO, VIVO, MINIGAME, RUNTIME_BASED, SUPPORT_JIT, ValueType;
    return {
        setters: [function (module) {
            EXPORT_TO_GLOBAL = module.EXPORT_TO_GLOBAL;
            BUILD = module.BUILD;
            TEST = module.TEST;
            EDITOR = module.EDITOR;
            PREVIEW = module.PREVIEW;
            DEV = module.DEV;
            DEBUG = module.DEBUG;
            JSB = module.JSB;
            BYTEDANCE = module.BYTEDANCE;
            WECHAT = module.WECHAT;
            ALIPAY = module.ALIPAY;
            XIAOMI = module.XIAOMI;
            BAIDU = module.BAIDU;
            COCOSPLAY = module.COCOSPLAY;
            HUAWEI = module.HUAWEI;
            OPPO = module.OPPO;
            VIVO = module.VIVO;
            MINIGAME = module.MINIGAME;
            RUNTIME_BASED = module.RUNTIME_BASED;
            SUPPORT_JIT = module.SUPPORT_JIT;
        }, function (module) {
            ValueType = module.ValueType;
        }],
        execute: function () {

            exports({
                AudioEvent: void 0,
                AudioState: void 0,
                AudioType: void 0,
                BrowserType: void 0,
                Feature: void 0,
                Language: void 0,
                NetworkType: void 0,
                OS: void 0,
                Orientation: void 0,
                Platform: void 0
            });

            var AudioEvent;

            (function (AudioEvent) {
              AudioEvent["PLAYED"] = "play";
              AudioEvent["PAUSED"] = "pause";
              AudioEvent["STOPPED"] = "stop";
              AudioEvent["SEEKED"] = "seeked";
              AudioEvent["ENDED"] = "ended";
              AudioEvent["INTERRUPTION_BEGIN"] = "interruptionBegin";
              AudioEvent["INTERRUPTION_END"] = "interruptionEnd";
              AudioEvent["USER_GESTURE"] = "on_gesture";
            })(AudioEvent || (AudioEvent = exports('AudioEvent', {})));

            var AudioType;

            (function (AudioType) {
              AudioType[AudioType["DOM_AUDIO"] = 0] = "DOM_AUDIO";
              AudioType[AudioType["WEB_AUDIO"] = 1] = "WEB_AUDIO";
              AudioType[AudioType["MINIGAME_AUDIO"] = 2] = "MINIGAME_AUDIO";
              AudioType[AudioType["NATIVE_AUDIO"] = 3] = "NATIVE_AUDIO";
              AudioType[AudioType["UNKNOWN_AUDIO"] = 4] = "UNKNOWN_AUDIO";
            })(AudioType || (AudioType = exports('AudioType', {})));

            var AudioState;

            (function (AudioState) {
              AudioState[AudioState["INIT"] = 0] = "INIT";
              AudioState[AudioState["PLAYING"] = 1] = "PLAYING";
              AudioState[AudioState["PAUSED"] = 2] = "PAUSED";
              AudioState[AudioState["STOPPED"] = 3] = "STOPPED";
              AudioState[AudioState["INTERRUPTED"] = 4] = "INTERRUPTED";
            })(AudioState || (AudioState = exports('AudioState', {})));

            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }

            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps) _defineProperties(Constructor.prototype, protoProps);
              if (staticProps) _defineProperties(Constructor, staticProps);
              return Constructor;
            }

            function _extends() {
              _extends = Object.assign || function (target) {
                for (var i = 1; i < arguments.length; i++) {
                  var source = arguments[i];

                  for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                      target[key] = source[key];
                    }
                  }
                }

                return target;
              };

              return _extends.apply(this, arguments);
            }

            function _inheritsLoose(subClass, superClass) {
              subClass.prototype = Object.create(superClass.prototype);
              subClass.prototype.constructor = subClass;

              _setPrototypeOf(subClass, superClass);
            }

            function _setPrototypeOf(o, p) {
              _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                o.__proto__ = p;
                return o;
              };

              return _setPrototypeOf(o, p);
            }

            function _unsupportedIterableToArray(o, minLen) {
              if (!o) return;
              if (typeof o === "string") return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor) n = o.constructor.name;
              if (n === "Map" || n === "Set") return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
            }

            function _arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length) len = arr.length;

              for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

              return arr2;
            }

            function _createForOfIteratorHelperLoose(o, allowArrayLike) {
              var it;

              if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                  if (it) o = it;
                  var i = 0;
                  return function () {
                    if (i >= o.length) return {
                      done: true
                    };
                    return {
                      done: false,
                      value: o[i++]
                    };
                  };
                }

                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }

              it = o[Symbol.iterator]();
              return it.next.bind(it);
            }

            function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
              var desc = {};
              Object.keys(descriptor).forEach(function (key) {
                desc[key] = descriptor[key];
              });
              desc.enumerable = !!desc.enumerable;
              desc.configurable = !!desc.configurable;

              if ('value' in desc || desc.initializer) {
                desc.writable = true;
              }

              desc = decorators.slice().reverse().reduce(function (desc, decorator) {
                return decorator(target, property, desc) || desc;
              }, desc);

              if (context && desc.initializer !== void 0) {
                desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
                desc.initializer = undefined;
              }

              if (desc.initializer === void 0) {
                Object.defineProperty(target, property, desc);
                desc = null;
              }

              return desc;
            }

            var debugInfos = {
              "1006": "[Action step]. override me",
              "1007": "[Action update]. override me",
              "1008": "[Action reverse]. override me",
              "1100": "Expected 'data' dict, but not found. Config file: %s",
              "1101": "Please load the resource first : %s",
              "1200": "cocos2d: Director: Error in gettimeofday",
              "1204": "Running scene should not be null",
              "1205": "The scene should not be null",
              "1206": "loadScene: The scene index to load (%s) is out of range.",
              "1207": "loadScene: Unknown name type to load: '%s'",
              "1208": "loadScene: Failed to load scene '%s' because '%s' is already being loaded.",
              "1209": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
              "1210": "Failed to preload '%s', %s",
              "1211": "loadScene: The scene index to load (%s) is out of range.",
              "1212": "loadScene: Unknown name type to load: '%s'",
              "1213": "loadScene: Failed to load scene '%s' because '%s' is already loading",
              "1214": "loadScene: Can not load the scene '%s' because it was not in the build settings before playing.",
              "1215": "Failed to preload '%s', %s",
              "1216": "Director.runSceneImmediate: scene is not valid",
              "1217": "Director._initOnEngineInitialized: renderer root initialization failed",
              "1218": "Forward render pipeline initialized.",
              "1219": "Deferred render pipeline initialized. Note that non-transparent materials with no lighting will not be rendered, such as builtin-unlit.",
              "1220": "Failed to set shading scale, pipelineSceneData is invalid.",
              "1221": "Setting orientation is not supported yet.",
              "1300": "%s is not in the model pool and cannot be destroyed by destroyModel.",
              "1400": "'%s' is deprecated, please use '%s' instead.",
              "1404": "cc.spriteFrameCache is removed, please use cc.loader to load and cache sprite frames of atlas format.",
              "1406": "'%s.%s' is removed",
              "1408": "'%s' is removed",
              "1409": "element type is wrong!",
              "1502": "cc.scheduler.scheduleCallbackForTarget(): target should be non-null.",
              "1503": "cc.Scheduler.pauseTarget():target should be non-null",
              "1504": "cc.Scheduler.resumeTarget():target should be non-null",
              "1505": "cc.Scheduler.isTargetPaused():target should be non-null",
              "1506": "warning: you CANNOT change update priority in scheduled function",
              "1507": "scheduler#scheduleSelector. Selector already scheduled. Updating interval from: %.4f to %.4f",
              "1508": "Argument callback must not be empty",
              "1509": "Argument target must be non-nullptr",
              "1510": "cc.Scheduler: Illegal target which doesn't have id, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target",
              "1511": "cc.Scheduler: pause state of the scheduled task doesn't match the element pause state in Scheduler, the given paused state will be ignored.",
              "1513": "cc.Scheduler: scheduler stopped using `__instanceId` as id since v2.0, you should do Scheduler.enableForTarget(target) before all scheduler API usage on target",
              "1607": "removeFromParentAndCleanup is deprecated. Use removeFromParent instead",
              "1619": "callback function must be non-null",
              "1620": "interval must be positive",
              "1623": "Set '%s' to normal node (not persist root node).",
              "1624": "Replacing with the same sgNode",
              "1625": "The replacement sgNode should not contain any child.",
              "1626": "Should not set alpha via 'color', set 'opacity' please.",
              "1627": "Not support for asynchronous creating node in SG",
              "1632": "Node name can not include '/'.",
              "1633": "Internal error, should not remove unknown node from parent.",
              "1635": "reorderChild: this child is not in children list.",
              "1636": "Node's zIndex value can't be greater than cc.macro.MAX_ZINDEX, setting to the maximum value",
              "1637": "Node's zIndex value can't be smaller than cc.macro.MIN_ZINDEX, setting to the minimum value",
              "1638": "Private node's zIndex can't be set, it will keep cc.macro.MIN_ZINDEX as its value",
              "1800": "cc._EventListenerKeyboard.checkAvailable(): Invalid EventListenerKeyboard!",
              "1801": "cc._EventListenerTouchOneByOne.checkAvailable(): Invalid EventListenerTouchOneByOne!",
              "1802": "cc._EventListenerTouchAllAtOnce.checkAvailable(): Invalid EventListenerTouchAllAtOnce!",
              "1803": "cc._EventListenerAcceleration.checkAvailable():_onAccelerationEvent must be non-nil",
              "1900": "Invalid parameter.",
              "2104": "Layer collision. The name of layer (%s) is collided with the name or value of some layer",
              "2200": "Design resolution not valid",
              "2201": "should set resolutionPolicy",
              "2300": "The touches is more than MAX_TOUCHES, nUnusedIndex = %s",
              "2402": "Forward pipeline startup failed!",
              "3103": "cc.Texture.addImage(): path should be non-null",
              "3119": "Lazy init texture with image element failed due to image loading failure: %s",
              "3120": "Loading texture with unsupported type: '%s'. Add '%s' into 'cc.macro.SUPPORT_TEXTURE_FORMATS' please.",
              "3121": "Can't find a texture format supported by the current platform! Please add a fallback format in the editor.",
              "3122": "Error Texture in %s.",
              "3123": "Set same texture %s.",
              "3300": "Rect width exceeds maximum margin: %s",
              "3301": "Rect height exceeds maximum margin: %s",
              "3500": "0 priority is forbidden for fixed priority since it's used for scene graph based priority.",
              "3501": "Invalid listener type!",
              "3502": "Can't set fixed priority with scene graph based listener.",
              "3503": "Invalid parameters.",
              "3504": "listener must be a cc.EventListener object when adding a fixed priority listener",
              "3505": "The listener has been registered, please don't register it again.",
              "3506": "Unsupported listener target.",
              "3507": "Invalid scene graph priority!",
              "3508": "If program goes here, there should be event in dispatch.",
              "3509": "_inDispatch should be 1 here.",
              "3510": "%s's scene graph node not contains in the parent's children",
              "3511": "event is undefined",
              "3512": "Event manager only support scene graph priority for ui nodes which contain UIComponent",
              "3520": "Device Motion Event request permission: %s",
              "3521": "Device Motion Event request permission failed: %s",
              "3601": "The editor property 'playOnFocus' should be used with 'executeInEditMode' in class '%s'",
              "3602": "Unknown editor property '%s' in class '%s'.",
              "3603": "Use 'cc.Float' or 'cc.Integer' instead of 'cc.Number' please.",
              "3604": "Can only indicate one type attribute for %s.",
              "3605": "The default value of %s is not instance of %s.",
              "3606": "No needs to indicate the '%s' attribute for %s, which its default value is type of %s.",
              "3607": "The default value of %s must be an empty string.",
              "3608": "The type of %s must be CCString, not String.",
              "3609": "The type of %s must be CCBoolean, not Boolean.",
              "3610": "The type of %s must be CCFloat or CCInteger, not Number.",
              "3611": "Can not indicate the '%s' attribute for %s, which its default value is type of %s.",
              "3612": "%s Just set the default value to 'new %s()' and it will be handled properly.",
              "3613": "'No need to use 'serializable: false' or 'editorOnly: true' for the getter of '%s.%s', every getter is actually non-serialized.",
              "3614": "Should not define constructor for cc.Component %s.",
              "3615": "Each script can have at most one Component.",
              "3616": "Should not specify class name %s for Component which defines in project.",
              "3618": "ctor of '%s' can not be another CCClass",
              "3623": "Can not use 'editor' attribute, '%s' not inherits from Components.",
              "3625": "[isChildClassOf] superclass should be function type, not",
              "3626": "Can't remove '%s' because '%s' depends on it.",
              "3627": "Should not add renderer component (%s) to a Canvas node.",
              "3628": "Should not add %s to a node which size is already used by its other component.",
              "3633": "Properties function of '%s' should return an object!",
              "3634": "Disallow to use '.' in property name",
              "3637": "Can not declare %s.%s, it is already defined in the prototype of %s",
              "3639": "Can not apply the specified attribute to the getter of '%s.%s', attribute index: %s",
              "3640": "'%s': the setter of '%s' is already defined!",
              "3641": "Can not construct %s because it contains object property.",
              "3644": "Please define 'type' parameter of %s.%s as the actual constructor.",
              "3645": "Please define 'type' parameter of %s.%s as the constructor of %s.",
              "3646": "Unknown 'type' parameter of %s.%s：%s",
              "3647": "The length of range array must be equal or greater than 2",
              "3648": "Can not declare %s.%s method, it is already defined in the properties of %s.",
              "3652": "Failed to `new %s()` under the hood, %s\nIt is used for getting default values declared in TypeScript in the first place.\nPlease ensure the constructor can be called during the script's initialization.",
              "3653": "Please do not specifiy \"default\" attribute in decorator of \"%s\" property in \"%s\" class.\nDefault value must be initialized at their declaration:\n\n \n// Before:\n@property({\n  type: cc.SpriteFrame\n  default: null  // <--\n})\nmyProp;\n// After:\n@property({\n  type: cc.SpriteFrame\n})\nmyProp = null;   // <--",
              "3654": "Please specifiy a default value for \"%s.%s\" property at its declaration:\n\n \n// Before:\n@property(...)\nmyProp;\n// After:\n@property(...)\nmyProp = 0;",
              "3655": "Can not specifiy \"get\" or \"set\"  attribute in decorator for \"%s\" property in \"%s\" class.\nPlease use:\n\n \n@property(...)\nget %s () {\n    ...\n}\n@property\nset %s (value) {\n    ...\n}",
              "3659": "Violation error: extending enumerations shall have non-overlaped member names or member values",
              "3660": "You are explicitly specifying `undefined` type to cc property \"%s\" of cc class \"%s\".\nIs this intended? If not, this may indicate a circular reference.\nFor example:\n\n \n// foo.ts\nimport { _decorator } from 'cc';\nimport { Bar } from './bar';  // Given that './bar' also reference 'foo.ts'.\n                              // When importing './bar', execution of './bar' is hung on to wait execution of 'foo.ts',\n                              // the `Bar` imported here is `undefined` until './bar' finish its execution.\n                              // It leads to that\n@_decorator.ccclass           //  ↓\nexport class Foo {            //  ↓\n    @_decorator.type(Bar)     //  → is equivalent to `@_decorator.type(undefined)`\n    public bar: Bar;          // To eliminate this error, either:\n                              // - Refactor your module structure(recommended), or\n                              // - specify the type as cc class name: `@_decorator.type('Bar'/* or any name you specified for `Bar` */)`\n}",
              "3700": "internal error: _prefab is undefined",
              "3701": "Failed to load prefab asset for node '%s'",
              "3800": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
              "3801": "The node can not be made persist because it's not under root node.",
              "3802": "The node can not be made persist because it's not in current scene.",
              "3803": "The target can not be made persist because it's not a cc.Node or it doesn't have _id property.",
              "3804": "getComponent: Type must be non-nil",
              "3805": "Can't add component '%s' because %s already contains the same component.",
              "3806": "Can't add component '%s' to %s because it conflicts with the existing '%s' derived component.",
              "3807": "addComponent: Failed to get class '%s'",
              "3808": "addComponent: Should not add component ('%s') when the scripts are still loading.",
              "3809": "addComponent: The component to add must be a constructor",
              "3810": "addComponent: The component to add must be child class of cc.Component",
              "3811": "_addComponentAt: The component to add must be a constructor",
              "3812": "_addComponentAt: Index out of range",
              "3813": "removeComponent: Component must be non-nil",
              "3814": "Argument must be non-nil",
              "3815": "Component not owned by this entity",
              "3816": "Node '%s' is already activating",
              "3817": "Sorry, the component of '%s' which with an index of %s is corrupted! It has been removed.",
              "3818": "Failed to read or parse project.json",
              "3819": "Warning: target element is not a DIV or CANVAS",
              "3820": "The renderer doesn't support the renderMode %s",
              "3821": "Cannot change hierarchy while activating or deactivating the parent.",
              "3822": "addComponent: Cannot add any component to the scene.",
              "3823": "The enabled component (id: %s, name: %s) doesn't have a valid node",
              "3900": "Invalid clip to add",
              "3901": "Invalid clip to remove",
              "3902": "clip is defaultClip, set force to true to force remove clip and animation state",
              "3903": "animation state is playing, set force to true to force stop and remove clip and animation state",
              "3904": "motion path of target [%s] in prop [%s] frame [%s] is not valid",
              "3905": "sprite frames must be an Array.",
              "3906": "Can't find easing type [%s]",
              "3907": "animator not added or already removed",
              "3912": "already-playing",
              "3920": "Current context does not allow root motion.",
              "3921": "You provided a ill-formed track path. The last component of track path should be property key, or the setter should not be empty.",
              "3923": "Root motion is ignored since root bone could not be located in animation.",
              "3924": "Root motion is ignored since the root bone could not be located in scene.",
              "3925": "Target of hierarchy path should be of type Node.",
              "3926": "Node \"%s\" has no path \"%s\".",
              "3927": "Target of component path should be of type Node.",
              "3928": "Node \"%s\" has no component \"%s\".",
              "3929": "Target object has no property \"%s\".",
              "3930": "Can not decide type for untyped track: runtime binding does not provide a getter.",
              "3931": "Can not decide type for untyped track: got a unsupported value from runtime binding.",
              "3932": "Common targets should only target Vectors/`Size`/`Color`.",
              "3933": "Each curve that has common target should be numeric curve and targets string property.",
              "3934": "Misconfigured legacy curve: the first keyframe value is number but others aren't.",
              "3935": "We don't currently support conversion of \\`CubicSplineQuatValue\\`.",
              "3936": "Instancing/Batching enabled for non-baked skinning model '%s', this may result in unexpected rendering artifacts. Consider turning it off in the material if you do not intend to do this.",
              "4003": "Label font size can't be shirnked less than 0!",
              "4004": "force notify all fonts loaded!",
              "4011": "Property spriteFrame of Font '%s' is invalid. Using system font instead.",
              "4012": "The texture of Font '%s' must be already loaded on JSB. Using system font instead.",
              "4013": "Sorry, lineHeight of system font not supported on JSB.",
              "4200": "MaskType: IMAGE_STENCIL only support WebGL mode.",
              "4201": "The alphaThreshold invalid in Canvas Mode.",
              "4202": "The inverted invalid in Canvas Mode.",
              "4300": "Can not found the %s page.",
              "4301": "Can not add a page without UITransform.",
              "4302": "Can not set the scroll view content when it hasn't UITransform or its parent hasn't UITransform.",
              "4400": "Invalid RichText img tag! The sprite frame name can't be found in the ImageAtlas!",
              "4500": "Graphics: There is no model in %s.",
              "4600": "Script attached to '%s' is missing or invalid.",
              "4700": "The dom control is not created!",
              "4800": "unknown asset type",
              "4901": "loadRes: should not specify the extname in %s %s",
              "4902": "No need to release non-cached asset.",
              "4914": "Resources url '%s' does not exist.",
              "4915": "Pack indices and data do not match in size",
              "4916": "Failed to download package for %s",
              "4921": "Invalid pipe or invalid index provided!",
              "4922": "The pipe to be inserted is already in the pipeline!",
              "4923": "Uuid Loader: Parse asset [ %s ] failed : %s",
              "4924": "JSON Loader: Input item doesn't contain string content",
              "4925": "Uuid Loader: Deserialize asset [ %s ] failed : %s",
              "4926": "Audio Downloader: no web audio context.",
              "4927": "Audio Downloader: audio not supported on this browser!",
              "4928": "Load %s failed!",
              "4929": "Load Webp ( %s ) failed",
              "4930": "Load image ( %s ) failed",
              "4932": "Since v1.10, for any atlas (\"%s\") in the \"resources\" directory, it is not possible to find the contained SpriteFrames via `loadRes`, `getRes` or `releaseRes`. Load the SpriteAtlas first and then use `spriteAtlas.getSpriteFrame(name)` instead please.",
              "4933": "Download Font [ %s ] failed, using Arial or system default font instead",
              "4934": "Please assure that the full path of sub asset is correct!",
              "4935": "Failed to skip prefab asset while deserializing PrefabInfo",
              "5000": "You are trying to destroy a object twice or more.",
              "5001": "object not yet destroyed",
              "5100": "Not a plist file!",
              "5200": "Warning: localStorage isn't enabled. Please confirm browser cookie or privacy option",
              "5201": "browser don't support web audio",
              "5202": "This feature supports WebGL render mode only.",
              "5300": "Type of target to deserialize not matched with data: target is %s, data is %s",
              "5301": "Can not find script '%s'",
              "5302": "Can not find class '%s'",
              "5303": "Failed to deserialize %s, missing _deserialize function.",
              "5304": "Unable to deserialize version %s data.",
              "5402": "cc.js.addon called on non-object:",
              "5403": "cc.js.mixin: arguments must be type object:",
              "5404": "The base class to extend from must be non-nil",
              "5405": "The class to extend must be non-nil",
              "5406": "Class should be extended before assigning any prototype members.",
              "5500": "'notify' can not be used in 'get/set' !",
              "5501": "'notify' must be used with 'default' !",
              "5507": "The 'default' attribute of '%s.%s' must be an array",
              "5508": "Invalid type of %s.%s",
              "5510": "The 'type' attribute of '%s.%s' can not be 'Number', use cc.Float or cc.Integer instead please.",
              "5511": "The 'type' attribute of '%s.%s' is undefined when loading script",
              "5512": "Can not serialize '%s.%s' because the specified type is anonymous, please provide a class name or set the 'serializable' attribute of '%s.%s' to 'false'.",
              "5513": "The 'default' value of '%s.%s' should not be used with a 'get' function.",
              "5514": "The 'default' value of '%s.%s' should not be used with a 'set' function.",
              "5515": "The 'default' value of '%s.%s' can not be an constructor. Set default to null please.",
              "5517": "'%s.%s' hides inherited property '%s.%s'. To make the current property override that implementation, add the `override: true` attribute please.",
              "5601": "Can not get current scene.",
              "5602": "Scene is destroyed",
              "5603": "reference node is destroyed",
              "5700": "no %s or %s on %s",
              "5800": "%s.lerp not yet implemented.",
              "5801": "%s.clone not yet implemented.",
              "5802": "%s.equals not yet implemented.",
              "5900": "MotionStreak only support WebGL mode.",
              "5901": "cc.MotionStreak.getOpacity has not been supported.",
              "5902": "cc.MotionStreak.setOpacity has not been supported.",
              "6000": "Custom should not be false if file is not specified.",
              "6001": "The new %s must not be NaN",
              "6017": "Incomplete or corrupt PNG file",
              "6018": "Invalid filter algorithm: %s",
              "6019": "Invalid byte order value.",
              "6020": "You forgot your towel!",
              "6021": "Unknown Field Tag: %s",
              "6022": "Too many bits requested",
              "6023": "No bits requested",
              "6024": "Cannot recover from missing StripByteCounts",
              "6025": "Cannot handle sub-byte bits per sample",
              "6026": "Cannot handle sub-byte bits per pixel",
              "6027": "Palette image missing color map",
              "6028": "Unknown Photometric Interpretation: %s",
              "6029": "Unkown error",
              "6030": "cc.ParticleSystem: error decoding or ungzipping textureImageData",
              "6031": "cc.ParticleSystem: unknown image format with Data",
              "6032": "cc.ParticleSystem.initWithDictionary() : error loading the texture",
              "6033": "cc.ParticleSystem: not allowing create to be invoked twice with different particle system",
              "6034": "cc.ParticleSystem: shouldn't be initialized repetitively, otherwise there will be potential leak",
              "6400": "asset.url is not usable in core process",
              "6402": "AssetLibrary has already been initialized!",
              "6500": "Widget target must be one of the parent nodes of it",
              "6600": "collider not added or already removed",
              "6601": "Can't find testFunc for (%s, $s).",
              "6700": "Can't init canvas '%s' because it conflicts with the existing '%s', the scene should only have one active canvas at the same time.",
              "6705": "Argument must be non-nil",
              "6706": "Priority can't be set in RenderRoot2D node",
              "6800": "Callback of event must be non-nil",
              "6801": "The message must be provided",
              "6900": "The thing you want to instantiate must be an object",
              "6901": "The thing you want to instantiate is nil",
              "6902": "The thing you want to instantiate is destroyed",
              "6903": "The instantiate method for given asset do not implemented",
              "6904": "Can not instantiate array",
              "6905": "Can not instantiate DOM element",
              "7100": "%s already defined in Enum.",
              "7101": "Sorry, 'cc.Enum' not available on this platform, please report this error here: <https://github.com/cocos-creator/engine/issues/new>",
              "7200": "Method 'initWithTMXFile' is no effect now, please set property 'tmxAsset' instead.",
              "7201": "Method 'initWithXML' is no effect now, please set property 'tmxAsset' instead.",
              "7202": "Add component TiledLayer into node failed.",
              "7203": "Property 'mapLoaded' is unused now. Please write the logic to the callback 'start'.",
              "7210": "TMX Hexa zOrder not supported",
              "7211": "TMX invalid value",
              "7215": "cocos2d: Warning: TMX Layer %s has no tiles",
              "7216": "cocos2d: TMXFormat: Unsupported TMX version: %s",
              "7217": "cocos2d: TMXFomat: Unsupported orientation: %s",
              "7218": "cc.TMXMapInfo.parseXMLFile(): unsupported compression method",
              "7219": "cc.TMXMapInfo.parseXMLFile(): Only base64 and/or gzip/zlib maps are supported",
              "7221": "cc.TMXMapInfo.parseXMLFile(): Texture '%s' not found.",
              "7222": "Parse %s failed.",
              "7236": "cc.TMXLayer.getTileAt(): TMXLayer: the tiles map has been released",
              "7237": "cc.TMXLayer.getTileGIDAt(): TMXLayer: the tiles map has been released",
              "7238": "cc.TMXLayer.setTileGID(): TMXLayer: the tiles map has been released",
              "7239": "cc.TMXLayer.setTileGID(): invalid gid: %s",
              "7240": "cc.TMXLayer.getTileFlagsAt(): TMXLayer: the tiles map has been released",
              "7241": "cc.TiledMap.initWithXML(): Map not found. Please check the filename.",
              "7401": "Failed to set _defaultArmatureIndex for '%s' because the index is out of range.",
              "7402": "Failed to set _animationIndex for '%s' because the index is out of range.",
              "7501": "Failed to set _defaultSkinIndex for '%s' because the index is out of range.",
              "7502": "Failed to set _animationIndex for '%s' because its skeletonData is invalid.",
              "7503": "Failed to set _animationIndex for '%s' because the index is out of range.",
              "7504": "Can not render dynamic created SkeletonData",
              "7506": "Failed to load spine atlas '$s'",
              "7507": "Please re-import '%s' because its textures is not initialized! (This workflow will be improved in the future.)",
              "7508": "The atlas asset of '%s' is not exists!",
              "7509": "Spine: Animation not found: %s",
              "7510": "Spine: Animation not found: %s",
              "7600": "The context of RenderTexture is invalid.",
              "7601": "cc.RenderTexture._initWithWidthAndHeightForWebGL() : only RGB and RGBA formats are valid for a render texture;",
              "7602": "Could not attach texture to the framebuffer",
              "7603": "clearDepth isn't supported on Cocos2d-Html5",
              "7604": "saveToFile isn't supported on Cocos2d-Html5",
              "7605": "newCCImage isn't supported on Cocos2d-Html5",
              "7606": "GFXTexture is null",
              "7607": "readPixels buffer size smaller than %d",
              "7700": "On the web is always keep the aspect ratio",
              "7701": "Can't know status",
              "7702": "Video player's duration is not ready to get now!",
              "7703": "Video Downloader: video not supported on this browser!",
              "7800": "Web does not support loading",
              "7801": "Web does not support query history",
              "7802": "Web does not support query history",
              "7803": "The current browser does not support the GoBack",
              "7804": "The current browser does not support the GoForward",
              "7805": "Web does not support zoom",
              "7900": "cc.math.Matrix3.assign(): current matrix equals matIn",
              "7901": "cc.math.mat4Assign(): pOut equals pIn",
              "7902": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
              "7903": "cc.math.Matrix4 equal: pMat1 and pMat2 are same object.",
              "7904": "cc.math.Matrix4.extractPlane: Invalid plane index",
              "7905": "cc.math.mat4Assign(): pOut equals pIn",
              "7906": "cc.mat.Matrix4.assignFrom(): mat4 equals current matrix",
              "7907": "cc.math.Matrix4 equals: pMat1 and pMat2 are same object.",
              "7908": "Invalid matrix mode specified",
              "7909": "current quaternion is an invalid value",
              "8000": "Can't handle this field type or size",
              "8001": "No bytes requested",
              "8002": "Too many bytes requested",
              "8003": "Missing StripByteCounts!",
              "8100": "cocos2d: ERROR: Failed to compile shader:\n %s",
              "8101": "cocos2d: ERROR: Failed to compile vertex shader",
              "8102": "cocos2d: ERROR: Failed to compile fragment shader",
              "8103": "cc.GLProgram.link(): Cannot link invalid program",
              "8104": "cocos2d: ERROR: Failed to link program: %s",
              "8105": "cocos2d: cc.shaderCache._loadDefaultShader, error shader type",
              "8106": "Please load the resource firset : %s",
              "8107": "cc.GLProgram.getUniformLocationForName(): uniform name should be non-null",
              "8108": "cc.GLProgram.getUniformLocationForName(): Invalid operation. Cannot get uniform location when program is not initialized",
              "8109": "modelView matrix is undefined.",
              "8200": "Please set node's active instead of rigidbody's enabled.",
              "8300": "Should only one camera exists, please check your project.",
              "8301": "Camera does not support Canvas Mode.",
              "8302": "Camera.viewport is deprecated, please use setViewportInOrientedSpace instead.",
              "8400": "Wrong type arguments, 'filePath' must be a String.",
              "9000": "Stencil manager does not support level bigger than %d in this device.",
              "9001": "Stencil manager is already empty, cannot pop any mask",
              "9002": "Failed to request any buffer from a mesh buffer without accessor",
              "9003": "The internal state of LinearBufferAccessor have severe issue and irreversible, please check the reason",
              "9004": "Failed to allocate chunk in StaticVBAccessor, the requested buffer might be too large: %d bytes",
              "9005": "BATCHER2D_MEM_INCREMENT is too large, the Max value for BATCHER2D_MEM_INCREMENT is 2303KB (smaller than 65536 * 9 * 4 / 1024 = 2304KB)",
              "9006": "QuadRenderData is removed, please use MeshRenderData instead.",
              "9100": "texture size exceeds current device limits %d/%d",
              "9201": "Cannot access game frame or container.",
              "9202": "Setting window size is not supported.",
              "9300": "The current buffer beyond the limit in ui static component, please reduce the amount",
              "9301": "The UI has not been initialized",
              "9302": "Can't getGFXSampler with out device",
              "9600": "[Physics]: please check to see if physics modules are included",
              "9610": "[Physics]: cannon.js physics system doesn't support capsule collider",
              "9611": "[Physics]: builtin physics system doesn't support mesh collider",
              "9612": "[Physics]: builtin physics system doesn't support cylinder collider",
              "9620": "[Physics][Ammo]: changing the mesh is not supported after the initialization is completed",
              "10001": "The sub-mesh contains %d vertices, which beyonds the capability (%d vertices most) of renderer of your platform.",
              "10002": "Sub-mesh may include at most %d morph targets, but you specified %d.",
              "11000": "WebGL context lost.",
              "12001": "BlendFactors are disabled when using custom material, please modify the blend state in the material instead.",
              "12002": "Can't add renderable component to this node because it already have one.",
              "12004": "SubModel can only support %d passes.",
              "12005": "Material already initialized, request aborted.",
              "12006": "Pass already destroyed.",
              "12007": "This is old usage, please swap the parameters.",
              "12008": "GeometryRenderer: too many lines.",
              "12009": "GeometryRenderer: too many triangles.",
              "12100": "The font size is too big to be fitted into texture atlas. Please switch to other label cache modes or choose a smaller font size.",
              "12101": "The asset %s has been destroyed!",
              "13100": "Incorrect CCON magic.",
              "13101": "Unknown CCON version number: %d.",
              "13102": "CCON Format error.",
              "13103": "Can not encode CCON binary: lack of text encoder.",
              "13104": "Can not decode CCON binary: lack of text decoder.",
              "14000": "Graph update has been interrupted since too many transitions(greater than %s) occurred during one frame.",
              "14100": "Pool.destroy no longer take a function as parameter, Please specify destruct function in the construction of Pool instead",
              "14200": "Can not update a static mesh.",
              "14201": "The primitiveIndex is out of range.",
              "0100": "%s not yet implemented.",
              "0200": "You should specify a valid DOM canvas element."
            };

            /*
             Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

             http://www.cocos.com

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

            var _global = typeof window === 'undefined' ? global : window;
            /**
             * @en
             * The main namespace of Cocos2d-JS, all engine core classes, functions, properties and constants are defined in this namespace.
             * @zh
             * Cocos 引擎的主要命名空间，引擎代码中所有的类，函数，属性和常量都在这个命名空间中定义。
             * @deprecated
             */


            var legacyCC = {
              _global: _global
            }; // For internal usage

            legacyCC.internal = {};

            if (EXPORT_TO_GLOBAL) {
              // Supports dynamically access from external scripts such as adapters and debugger.
              // So macros should still defined in global even if inlined in engine.

              /**
               * @en The pre-compilation constant for code tree shaking: CC_BUILD (Available for built package)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BUILD（在构建后生效）
               */
              _global.CC_BUILD = BUILD;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_TEST (Available for ci test environment)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_TEST（在 CI 测试环境下生效）
               */

              _global.CC_TEST = TEST;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_EDITOR (Available for editor environment)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_EDITOR（在编辑器环境下生效）
               */

              _global.CC_EDITOR = EDITOR;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_PREVIEW (Available for preview)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_PREVIEW（预览时生效）
               */

              _global.CC_PREVIEW = PREVIEW;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_DEV (Internal)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_DEV（内部使用）
               */

              _global.CC_DEV = DEV;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_DEBUG (Available for debug environment)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_DEBUG（在调试模式下生效）
               */

              _global.CC_DEBUG = DEBUG;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_JSB (Available for native application environment)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_JSB（在原生应用环境下生效）
               */

              _global.CC_JSB = JSB;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_BYTEDANCE (Available for Bytedance platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BYTEDANCE（在字节平台上生效）
               */

              _global.CC_BYTEDANCE = BYTEDANCE;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_WECHAT (Available for Wechat mini game platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_WECHAT（在微信小游戏平台上生效）
               */

              _global.CC_WECHAT = WECHAT;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_ALIPAY (Available for Alipay mini game platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_ALIPAY（在支付宝小游戏平台上生效）
               */

              _global.CC_ALIPAY = ALIPAY;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_XIAOMI (Available for MI mini game platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_XIAOMI（在小米小游戏平台上生效）
               */

              _global.CC_XIAOMI = XIAOMI;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_BAIDU (Available for Baidu mini game platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_BAIDU（在百度小游戏平台上生效）
               */

              _global.CC_BAIDU = BAIDU;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_COCOSPLAY (Available for Cocos Play platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_COCOSPLAY（在 CocosPlay 小游戏平台上生效）
               */

              _global.CC_COCOSPLAY = COCOSPLAY;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_HUAWEI (Available for Huawei mini game platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_HUAWEI（在华为快游戏平台上生效）
               */

              _global.CC_HUAWEI = HUAWEI;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_OPPO (Available for OPPO mini game platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_OPPO（在 OPPO 小游戏平台上生效）
               */

              _global.CC_OPPO = OPPO;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_VIVO (Available for Vivo mini game platform)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_VIVO（在 Vivo 小游戏平台上生效）
               */

              _global.CC_VIVO = VIVO;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_MINIGAME (Available for general mini game platforms)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_MINIGAME（在各个小游戏平台上生效）
               */

              _global.CC_MINIGAME = MINIGAME;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_RUNTIME_BASED (Available for Huawei, OPPO, Vivo and Cocos Play)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_RUNTIME_BASED（在华为、OPPO、Vivo 和 CocosPlay 平台上生效）
               */

              _global.CC_RUNTIME_BASED = RUNTIME_BASED;
              /**
               * @en The pre-compilation constant for code tree shaking: CC_SUPPORT_JIT (Available for platforms support JIT)
               * @zh 预编译宏变量，通常用来做平台或环境相关自动代码剔除：CC_SUPPORT_JIT（在支持 JIT 的平台上生效）
               */

              _global.CC_SUPPORT_JIT = SUPPORT_JIT;
            }

            if (DEV) {
              legacyCC._Test = {};
            }

            var engineVersion = '3.6.0';
            /**
             * The current version of Cocos2d being used.<br/>
             * Please DO NOT remove this String, it is an important flag for bug tracking.<br/>
             * If you post a bug to forum, please attach this flag.
             */

            _global.CocosEngine = legacyCC.ENGINE_VERSION = engineVersion;
            _global.cc = legacyCC;

            /*
             Copyright (c) 2018-2020 Xiamen Yaji Software Co., Ltd.

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
            var ERROR_MAP_URL = 'https://github.com/cocos-creator/engine/blob/develop/EngineErrorMap.md'; // The html element displays log in web page (DebugMode.INFO_FOR_WEB_PAGE)
            var ccLog = console.log.bind(console);
            var ccWarn = ccLog;
            var ccError = ccLog;

            function formatString(message) {
              for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                optionalParams[_key2 - 1] = arguments[_key2];
              }

              // eslint-disable-next-line @typescript-eslint/no-unsafe-return
              return legacyCC.js.formatStr.apply(null, [message].concat(optionalParams));
            }
            /**
             * @en Outputs a message to the Cocos Creator Console (editor) or Web Console (runtime).
             * @zh 输出一条消息到 Cocos Creator 编辑器的 Console 或运行时 Web 端的 Console 中。
             * @param message - A JavaScript string containing zero or more substitution strings.
             * @param optionalParams - JavaScript objects with which to replace substitution strings within msg.
             * This gives you additional control over the format of the output.
             */


            function log(message) {
              for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                optionalParams[_key3 - 1] = arguments[_key3];
              }

              return ccLog.apply(void 0, [message].concat(optionalParams));
            }
            /**
             * @en
             * Outputs a warning message to the Cocos Creator Console (editor) or Web Console (runtime).
             * - In Cocos Creator, warning is yellow.
             * - In Chrome, warning have a yellow warning icon with the message text.
             * @zh
             * 输出警告消息到 Cocos Creator 编辑器的 Console 或运行时 Web 端的 Console 中。<br/>
             * - 在 Cocos Creator 中，警告信息显示是黄色的。<br/>
             * - 在 Chrome 中，警告信息有着黄色的图标以及黄色的消息文本。<br/>
             * @param message - A JavaScript string containing zero or more substitution strings.
             * @param optionalParams - JavaScript objects with which to replace substitution strings within msg.
             * This gives you additional control over the format of the output.
             */

            function warn(message) {
              for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                optionalParams[_key4 - 1] = arguments[_key4];
              }

              return ccWarn.apply(void 0, [message].concat(optionalParams));
            }
            /**
             * @en
             * Outputs an error message to the Cocos Creator Console (editor) or Web Console (runtime).<br/>
             * - In Cocos Creator, error is red.<br/>
             * - In Chrome, error have a red icon along with red message text.<br/>
             * @zh
             * 输出错误消息到 Cocos Creator 编辑器的 Console 或运行时页面端的 Console 中。<br/>
             * - 在 Cocos Creator 中，错误信息显示是红色的。<br/>
             * - 在 Chrome 中，错误信息有红色的图标以及红色的消息文本。<br/>
             * @param message - A JavaScript string containing zero or more substitution strings.
             * @param optionalParams - JavaScript objects with which to replace substitution strings within msg.
             * This gives you additional control over the format of the output.
             */

            function error(message) {
              for (var _len5 = arguments.length, optionalParams = new Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
                optionalParams[_key5 - 1] = arguments[_key5];
              }

              return ccError.apply(void 0, [message].concat(optionalParams));
            }

            function getTypedFormatter(type) {
              return function (id) {
                var msg = DEBUG ? debugInfos[id] || 'unknown id' : type + " " + id + ", please go to " + ERROR_MAP_URL + "#" + id + " to see details.";

                for (var _len16 = arguments.length, args = new Array(_len16 > 1 ? _len16 - 1 : 0), _key16 = 1; _key16 < _len16; _key16++) {
                  args[_key16 - 1] = arguments[_key16];
                }

                if (args.length === 0) {
                  return msg;
                } // eslint-disable-next-line @typescript-eslint/no-unsafe-return


                return DEBUG ? formatString.apply(void 0, [msg].concat(args)) : msg + " Arguments: " + args.join(', ');
              };
            }

            var logFormatter = getTypedFormatter('Log');
            function logID(id) {
              for (var _len17 = arguments.length, optionalParams = new Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
                optionalParams[_key17 - 1] = arguments[_key17];
              }

              log(logFormatter.apply(void 0, [id].concat(optionalParams)));
            }
            var warnFormatter = getTypedFormatter('Warning');
            function warnID(id) {
              for (var _len18 = arguments.length, optionalParams = new Array(_len18 > 1 ? _len18 - 1 : 0), _key18 = 1; _key18 < _len18; _key18++) {
                optionalParams[_key18 - 1] = arguments[_key18];
              }

              warn(warnFormatter.apply(void 0, [id].concat(optionalParams)));
            }
            var errorFormatter = getTypedFormatter('Error');
            function errorID(id) {
              for (var _len19 = arguments.length, optionalParams = new Array(_len19 > 1 ? _len19 - 1 : 0), _key19 = 1; _key19 < _len19; _key19++) {
                optionalParams[_key19 - 1] = arguments[_key19];
              }

              error(errorFormatter.apply(void 0, [id].concat(optionalParams)));
            }
            /**
             * @en Enum for debug modes.
             * @zh 调试模式。
             */

            var DebugMode;
            /**
             * @en Gets error message with the error id and possible parameters.
             * @zh 通过 error id 和必要的参数来获取错误信息。
             */

            (function (DebugMode) {
              DebugMode[DebugMode["NONE"] = 0] = "NONE";
              DebugMode[DebugMode["VERBOSE"] = 1] = "VERBOSE";
              DebugMode[DebugMode["INFO"] = 2] = "INFO";
              DebugMode[DebugMode["WARN"] = 3] = "WARN";
              DebugMode[DebugMode["ERROR"] = 4] = "ERROR";
              DebugMode[DebugMode["INFO_FOR_WEB_PAGE"] = 5] = "INFO_FOR_WEB_PAGE";
              DebugMode[DebugMode["WARN_FOR_WEB_PAGE"] = 6] = "WARN_FOR_WEB_PAGE";
              DebugMode[DebugMode["ERROR_FOR_WEB_PAGE"] = 7] = "ERROR_FOR_WEB_PAGE";
            })(DebugMode || (DebugMode = {}));

            var BrowserType;

            (function (BrowserType) {
              BrowserType["UNKNOWN"] = "unknown";
              BrowserType["WECHAT"] = "wechat";
              BrowserType["ANDROID"] = "androidbrowser";
              BrowserType["IE"] = "ie";
              BrowserType["EDGE"] = "edge";
              BrowserType["QQ"] = "qqbrowser";
              BrowserType["MOBILE_QQ"] = "mqqbrowser";
              BrowserType["UC"] = "ucbrowser";
              BrowserType["UCBS"] = "ucbs";
              BrowserType["BROWSER_360"] = "360browser";
              BrowserType["BAIDU_APP"] = "baiduboxapp";
              BrowserType["BAIDU"] = "baidubrowser";
              BrowserType["MAXTHON"] = "maxthon";
              BrowserType["OPERA"] = "opera";
              BrowserType["OUPENG"] = "oupeng";
              BrowserType["MIUI"] = "miuibrowser";
              BrowserType["FIREFOX"] = "firefox";
              BrowserType["SAFARI"] = "safari";
              BrowserType["CHROME"] = "chrome";
              BrowserType["LIEBAO"] = "liebao";
              BrowserType["QZONE"] = "qzone";
              BrowserType["SOUGOU"] = "sogou";
              BrowserType["HUAWEI"] = "huawei";
            })(BrowserType || (BrowserType = exports('BrowserType', {})));

            var Language;

            (function (Language) {
              Language["UNKNOWN"] = "unknown";
              Language["ENGLISH"] = "en";
              Language["CHINESE"] = "zh";
              Language["FRENCH"] = "fr";
              Language["ITALIAN"] = "it";
              Language["GERMAN"] = "de";
              Language["SPANISH"] = "es";
              Language["DUTCH"] = "du";
              Language["RUSSIAN"] = "ru";
              Language["KOREAN"] = "ko";
              Language["JAPANESE"] = "ja";
              Language["HUNGARIAN"] = "hu";
              Language["PORTUGUESE"] = "pt";
              Language["ARABIC"] = "ar";
              Language["NORWEGIAN"] = "no";
              Language["POLISH"] = "pl";
              Language["TURKISH"] = "tr";
              Language["UKRAINIAN"] = "uk";
              Language["ROMANIAN"] = "ro";
              Language["BULGARIAN"] = "bg";
            })(Language || (Language = exports('Language', {})));

            var NetworkType;

            (function (NetworkType) {
              NetworkType[NetworkType["NONE"] = 0] = "NONE";
              NetworkType[NetworkType["LAN"] = 1] = "LAN";
              NetworkType[NetworkType["WWAN"] = 2] = "WWAN";
            })(NetworkType || (NetworkType = exports('NetworkType', {})));

            var OS;

            (function (OS) {
              OS["UNKNOWN"] = "Unknown";
              OS["IOS"] = "iOS";
              OS["ANDROID"] = "Android";
              OS["WINDOWS"] = "Windows";
              OS["LINUX"] = "Linux";
              OS["OSX"] = "OS X";
              OS["OHOS"] = "OHOS";
            })(OS || (OS = exports('OS', {})));

            var Platform;

            (function (Platform) {
              Platform["UNKNOWN"] = "UNKNOWN";
              Platform["EDITOR_PAGE"] = "EDITOR_PAGE";
              Platform["EDITOR_CORE"] = "EDITOR_CORE";
              Platform["MOBILE_BROWSER"] = "MOBILE_BROWSER";
              Platform["DESKTOP_BROWSER"] = "DESKTOP_BROWSER";
              Platform["WIN32"] = "WIN32";
              Platform["ANDROID"] = "ANDROID";
              Platform["IOS"] = "IOS";
              Platform["MACOS"] = "MACOS";
              Platform["OHOS"] = "OHOS";
              Platform["WECHAT_GAME"] = "WECHAT_GAME";
              Platform["BAIDU_MINI_GAME"] = "BAIDU_MINI_GAME";
              Platform["XIAOMI_QUICK_GAME"] = "XIAOMI_QUICK_GAME";
              Platform["ALIPAY_MINI_GAME"] = "ALIPAY_MINI_GAME";
              Platform["BYTEDANCE_MINI_GAME"] = "BYTEDANCE_MINI_GAME";
              Platform["OPPO_MINI_GAME"] = "OPPO_MINI_GAME";
              Platform["VIVO_MINI_GAME"] = "VIVO_MINI_GAME";
              Platform["HUAWEI_QUICK_GAME"] = "HUAWEI_QUICK_GAME";
              Platform["COCOSPLAY"] = "COCOSPLAY";
              Platform["LINKSURE_MINI_GAME"] = "LINKSURE_MINI_GAME";
              Platform["QTT_MINI_GAME"] = "QTT_MINI_GAME";
            })(Platform || (Platform = exports('Platform', {})));

            var Feature;

            (function (Feature) {
              Feature["WEBP"] = "WEBP";
              Feature["IMAGE_BITMAP"] = "IMAGE_BITMAP";
              Feature["WEB_VIEW"] = "WEB_VIEW";
              Feature["VIDEO_PLAYER"] = "VIDEO_PLAYER";
              Feature["SAFE_AREA"] = "SAFE_AREA";
              Feature["INPUT_TOUCH"] = "INPUT_TOUCH";
              Feature["EVENT_KEYBOARD"] = "EVENT_KEYBOARD";
              Feature["EVENT_MOUSE"] = "EVENT_MOUSE";
              Feature["EVENT_TOUCH"] = "EVENT_TOUCH";
              Feature["EVENT_ACCELEROMETER"] = "EVENT_ACCELEROMETER";
            })(Feature || (Feature = exports('Feature', {})));

            /*
             Copyright (c) 2013-2016 Chukong Technologies Inc.
             Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

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
             * @module core
             */

            /**
             * @example
             * ```
             * import { js } from 'cc';
             * var array = [0, 1, 2, 3, 4];
             * var iterator = new js.array.MutableForwardIterator(array);
             * for (iterator.i = 0; iterator.i < array.length; ++iterator.i) {
             *     var item = array[iterator.i];
             *     ...
             * }
             * ```
             */
            var MutableForwardIterator = /*#__PURE__*/function () {
              function MutableForwardIterator(array) {
                this.i = 0;
                this.array = array;
              }

              var _proto = MutableForwardIterator.prototype;

              _proto.remove = function remove(value) {
                var index = this.array.indexOf(value);

                if (index >= 0) {
                  this.removeAt(index);
                }
              };

              _proto.removeAt = function removeAt(i) {
                this.array.splice(i, 1);

                if (i <= this.i) {
                  --this.i;
                }
              };

              _proto.fastRemove = function fastRemove(value) {
                var index = this.array.indexOf(value);

                if (index >= 0) {
                  this.fastRemoveAt(index);
                }
              };

              _proto.fastRemoveAt = function fastRemoveAt(i) {
                var array = this.array;
                array[i] = array[array.length - 1];
                --array.length;

                if (i <= this.i) {
                  --this.i;
                }
              };

              _proto.push = function push(item) {
                this.array.push(item);
              };

              _createClass(MutableForwardIterator, [{
                key: "length",
                get: function get() {
                  return this.array.length;
                },
                set: function set(value) {
                  this.array.length = value;

                  if (this.i >= value) {
                    this.i = value - 1;
                  }
                }
              }]);

              return MutableForwardIterator;
            }();

            /**
             * @zh
             * 移除指定索引的数组元素。
             * @en
             * Removes the array item at the specified index.
             * @param array 数组。
             * @param index 待移除元素的索引。
             */

            function removeAt(array, index) {
              array.splice(index, 1);
            }
            /**
             * @zh
             * 移除指定索引的数组元素。
             * 此函数十分高效，但会改变数组的元素次序。
             * @en
             * Removes the array item at the specified index.
             * It's faster but the order of the array will be changed.
             * @param array 数组。
             * @param index 待移除元素的索引。
             */

            function fastRemoveAt(array, index) {
              var length = array.length;

              if (index < 0 || index >= length) {
                return;
              }

              array[index] = array[length - 1];
              array.length = length - 1;
            }
            /**
             * @zh
             * 移除首个指定的数组元素。判定元素相等时相当于于使用了 `Array.prototype.indexOf`。
             * @en
             * Removes the first occurrence of a specific object from the array.
             * Decision of the equality of elements is similar to `Array.prototype.indexOf`.
             * @param array 数组。
             * @param value 待移除元素。
             */

            function remove(array, value) {
              var index = array.indexOf(value);

              if (index >= 0) {
                removeAt(array, index);
                return true;
              } else {
                return false;
              }
            }
            /**
             * @zh
             * 移除首个指定的数组元素。判定元素相等时相当于于使用了 `Array.prototype.indexOf`。
             * 此函数十分高效，但会改变数组的元素次序。
             * @en
             * Removes the first occurrence of a specific object from the array.
             * Decision of the equality of elements is similar to `Array.prototype.indexOf`.
             * It's faster but the order of the array will be changed.
             * @param array 数组。
             * @param value 待移除元素。
             */

            function fastRemove(array, value) {
              var index = array.indexOf(value);

              if (index >= 0) {
                array[index] = array[array.length - 1];
                --array.length;
              }
            }
            /**
             * @zh
             * 移除首个使谓词满足的数组元素。
             * @en
             * Removes the first occurrence of a specific object from the array where `predicate` is `true`.
             * @param array 数组。
             * @param predicate 谓词。
             */

            function removeIf(array, predicate) {
              var index = array.findIndex(predicate);

              if (index >= 0) {
                var _value = array[index];
                removeAt(array, index);
                return _value;
              }
            }
            /**
             * @zh
             * 验证数组的类型。
             * 此函数将用 `instanceof` 操作符验证每一个元素。
             * @en
             * Verify array's Type.
             * This function tests each element using `instanceof` operator.
             * @param array 数组。
             * @param type 类型。
             * @returns 当每一个元素都是指定类型时返回 `true`，否则返回 `false`。
             */

            function verifyType(array, type) {
              if (array && array.length > 0) {
                for (var _iterator = _createForOfIteratorHelperLoose(array), _step; !(_step = _iterator()).done;) {
                  var item = _step.value;

                  if (!(item instanceof type)) {
                    logID(1300);
                    return false;
                  }
                }
              }

              return true;
            }
            /**
             * @zh
             * 移除多个数组元素。
             * @en
             * Removes multiple array elements.
             * @param array 源数组。
             * @param removals 所有待移除的元素。此数组的每个元素所对应的首个源数组的元素都会被移除。
             */

            function removeArray(array, removals) {
              for (var i = 0, l = removals.length; i < l; i++) {
                remove(array, removals[i]);
              }
            }
            /**
             * @zh
             * 在数组的指定索引上插入对象。
             * @en
             * Inserts some objects at specified index.
             * @param array 数组。
             * @param objects 插入的所有对象。
             * @param index 插入的索引。
             * @returns `array`。
             */

            function appendObjectsAt(array, objects, index) {
              array.splice.apply(array, [index, 0].concat(objects));
              return array;
            }
            /**
             * @zh
             * 返回数组是否包含指定的元素。
             * @en
             * Determines whether the array contains a specific element.
             * @returns 返回数组是否包含指定的元素。
             */

            function contains(array, value) {
              return array.indexOf(value) >= 0;
            }
            /**
             * @zh
             * 拷贝数组。
             * @en
             * Copy an array.
             * @param 源数组。
             * @returns 数组的副本。
             */

            function copy(array) {
              var len = array.length;
              var cloned = new Array(len);

              for (var i = 0; i < len; i += 1) {
                cloned[i] = array[i];
              }

              return cloned;
            }

            var jsarray = /*#__PURE__*/Object.freeze({
                __proto__: null,
                removeAt: removeAt,
                fastRemoveAt: fastRemoveAt,
                remove: remove,
                fastRemove: fastRemove,
                removeIf: removeIf,
                verifyType: verifyType,
                removeArray: removeArray,
                appendObjectsAt: appendObjectsAt,
                contains: contains,
                copy: copy,
                MutableForwardIterator: MutableForwardIterator
            });

            /*
             Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

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
            var NonUuidMark = '.';
            /**
             * ID generator for runtime.
             */

            var IDGenerator = /*#__PURE__*/function () {
              /*
              * The global id generator might have a conflict problem once every 365 days,
              * if the game runs at 60 FPS and each frame 4760273 counts of new id are requested.
              */

              /**
               * @param [category] You can specify a unique category to avoid id collision with other instance of IdGenerator.
               */
              function IDGenerator(category) {
                this.id = void 0;
                this.prefix = void 0;
                // Tnit with a random id to emphasize that the returns id should not be stored in persistence data.
                this.id = 0 | Math.random() * 998;
                this.prefix = category ? category + NonUuidMark : '';
              }

              var _proto = IDGenerator.prototype;

              _proto.getNewId = function getNewId() {
                if (EDITOR && (this.prefix === 'Node.' || this.prefix === 'Comp.')) {
                  return EditorExtends.UuidUtils.uuid();
                }

                return this.prefix + ++this.id;
              };

              return IDGenerator;
            }();

            IDGenerator.global = new IDGenerator('global');

            var tempCIDGenerator = new IDGenerator('TmpCId.');
            var aliasesTag = typeof Symbol === 'undefined' ? '__aliases__' : Symbol('[[Aliases]]');
            var classNameTag = '__classname__';
            var classIdTag = '__cid__';
            /**
             * Check the object whether is number or not
             * If a number is created by using 'new Number(10086)', the typeof it will be "object"...
             * Then you can use this function if you care about this case.
             */

            function isNumber(object) {
              return typeof object === 'number' || object instanceof Number;
            }
            /**
             * Check the object whether is string or not.
             * If a string is created by using 'new String("blabla")', the typeof it will be "object"...
             * Then you can use this function if you care about this case.
             */

            function isString(object) {
              return typeof object === 'string' || object instanceof String;
            }
            /**
             * Checks if the object `obj` does not have one or more enumerable properties (including properties from proto chain).
             * @param obj The object.
             * @returns The result. Note that if the `obj` is not of type `'object'`, `true` is returned.
             */

            function isEmptyObject(obj) {
              for (var key in obj) {
                return false;
              }

              return true;
            }
            /**
             * Define value, just help to call Object.defineProperty.<br>
             * The configurable will be true.
             * @param [writable=false]
             * @param [enumerable=false]
             */

            var value = function () {
              var descriptor = {
                value: undefined,
                enumerable: false,
                writable: false,
                configurable: true
              };
              return function (object, propertyName, value_, writable, enumerable) {
                descriptor.value = value_;
                descriptor.writable = writable;
                descriptor.enumerable = enumerable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.value = undefined;
              };
            }();
            /**
             * Define get set accessor, just help to call Object.defineProperty(...).
             * @param [setter=null]
             * @param [enumerable=false]
             * @param [configurable=false]
             */

            var getset = function () {
              var descriptor = {
                get: undefined,
                set: undefined,
                enumerable: false
              };
              return function (object, propertyName, getter, setter, enumerable, configurable) {
                if (enumerable === void 0) {
                  enumerable = false;
                }

                if (configurable === void 0) {
                  configurable = false;
                }

                if (typeof setter === 'boolean') {
                  enumerable = setter;
                  setter = undefined;
                }

                descriptor.get = getter;
                descriptor.set = setter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.get = undefined;
                descriptor.set = undefined;
              };
            }();
            /**
             * Define get accessor, just help to call Object.defineProperty(...).
             * @param [enumerable=false]
             * @param [configurable=false]
             */

            var get = function () {
              var descriptor = {
                get: undefined,
                enumerable: false,
                configurable: false
              };
              return function (object, propertyName, getter, enumerable, configurable) {
                descriptor.get = getter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.get = undefined;
              };
            }();
            /**
             * Define set accessor, just help to call Object.defineProperty(...).
             * @param [enumerable=false]
             * @param [configurable=false]
             */

            var set = function () {
              var descriptor = {
                set: undefined,
                enumerable: false,
                configurable: false
              };
              return function (object, propertyName, setter, enumerable, configurable) {
                descriptor.set = setter;
                descriptor.enumerable = enumerable;
                descriptor.configurable = configurable;
                Object.defineProperty(object, propertyName, descriptor);
                descriptor.set = undefined;
              };
            }();
            /**
             * @en
             * A simple wrapper of `Object.create(null)` which ensures the return object have no prototype (and thus no inherited members).
             * This eliminates the need to make `hasOwnProperty` judgments when we look for values by key on the object,
             * which is helpful for performance in this case.
             * @zh
             * 该方法是对 `Object.create(null)` 的简单封装。
             * `Object.create(null)` 用于创建无 prototype （也就无继承）的空对象。
             * 这样我们在该对象上查找属性时，就不用进行 `hasOwnProperty` 判断，此时对性能提升有帮助。
             *
             * @param [forceDictMode=false] Apply the delete operator to newly created map object.
             * This causes V8 to put the object in "dictionary mode" and disables creation of hidden classes
             * which are very expensive for objects that are constantly changing shape.
             */

            function createMap(forceDictMode) {
              var map = Object.create(null);

              if (forceDictMode) {
                var INVALID_IDENTIFIER_1 = '.';
                var INVALID_IDENTIFIER_2 = '/'; // assign dummy values on the object

                map[INVALID_IDENTIFIER_1] = 1;
                map[INVALID_IDENTIFIER_2] = 1;
                delete map[INVALID_IDENTIFIER_1];
                delete map[INVALID_IDENTIFIER_2];
              }

              return map;
            }
            /**
             * Get class name of the object, if object is just a {} (and which class named 'Object'), it will return "".
             * (modified from <a href="http://stackoverflow.com/questions/1249531/how-to-get-a-javascript-objects-class">the code from this stackoverflow post</a>)
             * @param objOrCtor instance or constructor
             */

            function getClassName(objOrCtor) {
              if (typeof objOrCtor === 'function') {
                var prototype = objOrCtor.prototype;

                if (prototype && prototype.hasOwnProperty(classNameTag) && prototype[classNameTag]) {
                  return prototype[classNameTag];
                }

                var retval = ''; //  for browsers which have name property in the constructor of the object, such as chrome

                if (objOrCtor.name) {
                  retval = objOrCtor.name;
                }

                if (objOrCtor.toString) {
                  var arr;
                  var str = objOrCtor.toString();

                  if (str.charAt(0) === '[') {
                    // str is "[object objectClass]"
                    arr = str.match(/\[\w+\s*(\w+)\]/);
                  } else {
                    // str is function objectClass () {} for IE Firefox
                    arr = str.match(/function\s*(\w+)/);
                  }

                  if (arr && arr.length === 2) {
                    retval = arr[1];
                  }
                }

                return retval !== 'Object' ? retval : '';
              } else if (objOrCtor && objOrCtor.constructor) {
                return getClassName(objOrCtor.constructor);
              }

              return '';
            }
            /**
             * Defines a polyfill field for obsoleted codes.
             * @param object - YourObject or YourClass.prototype
             * @param obsoleted - "OldParam" or "YourClass.OldParam"
             * @param newExpr - "NewParam" or "YourClass.NewParam"
             * @param  [writable=false]
             */

            function obsolete(object, obsoleted, newExpr, writable) {
              var extractPropName = /([^.]+)$/;
              var oldProp = extractPropName.exec(obsoleted)[0];
              var newProp = extractPropName.exec(newExpr)[0];

              function getter() {
                if (DEV) {
                  warnID(5400, obsoleted, newExpr);
                }

                return this[newProp];
              }

              function setter(value_) {
                if (DEV) {
                  warnID(5401, obsoleted, newExpr);
                }

                this[newProp] = value_;
              }

              if (writable) {
                getset(object, oldProp, getter, setter);
              } else {
                get(object, oldProp, getter);
              }
            }
            /**
             * Defines all polyfill fields for obsoleted codes corresponding to the enumerable properties of props.
             * @param obj - YourObject or YourClass.prototype
             * @param objName - "YourObject" or "YourClass"
             * @param props
             * @param [writable=false]
             */

            function obsoletes(obj, objName, props, writable) {
              for (var obsoleted in props) {
                var newName = props[obsoleted];
                obsolete(obj, objName + "." + obsoleted, newName, writable);
              }
            }
            var REGEXP_NUM_OR_STR = /(%d)|(%s)/;
            var REGEXP_STR = /%s/;
            /**
             * A string tool to construct a string with format string.
             * @param msg - A JavaScript string containing zero or more substitution strings (%s).
             * @param subst - JavaScript objects with which to replace substitution strings within msg.
             * This gives you additional control over the format of the output.
             * @example
             * ```
             * import { js } from 'cc';
             * js.formatStr("a: %s, b: %s", a, b);
             * js.formatStr(a, b, c);
             * ```
             */

            function formatStr(msg) {
              for (var _len = arguments.length, subst = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                subst[_key - 1] = arguments[_key];
              }

              if (arguments.length === 0) {
                return '';
              }

              if (subst.length === 0) {
                return "" + msg;
              }

              var hasSubstitution = typeof msg === 'string' && REGEXP_NUM_OR_STR.test(msg);

              if (hasSubstitution) {
                for (var _iterator = _createForOfIteratorHelperLoose(subst), _step; !(_step = _iterator()).done;) {
                  var arg = _step.value;
                  var regExpToTest = typeof arg === 'number' ? REGEXP_NUM_OR_STR : REGEXP_STR;

                  if (regExpToTest.test(msg)) {
                    var notReplaceFunction = "" + arg;
                    msg = msg.replace(regExpToTest, notReplaceFunction);
                  } else {
                    msg += " " + arg;
                  }
                }
              } else {
                for (var _iterator2 = _createForOfIteratorHelperLoose(subst), _step2; !(_step2 = _iterator2()).done;) {
                  var _arg = _step2.value;
                  msg += " " + _arg;
                }
              }

              return msg;
            } // see https://github.com/petkaantonov/bluebird/issues/1389

            function shiftArguments() {
              var len = arguments.length - 1;
              var args = new Array(len);

              for (var i = 0; i < len; ++i) {
                args[i] = arguments[i + 1];
              }

              return args;
            }
            /**
             * Get property descriptor in object and all its ancestors.
             */

            function getPropertyDescriptor(object, propertyName) {
              while (object) {
                var pd = Object.getOwnPropertyDescriptor(object, propertyName);

                if (pd) {
                  return pd;
                }

                object = Object.getPrototypeOf(object);
              }

              return null;
            }

            function _copyprop(name, source, target) {
              var pd = getPropertyDescriptor(source, name);

              if (pd) {
                Object.defineProperty(target, name, pd);
              }
            }
            /**
             * Copy all properties not defined in object from arguments[1...n].
             * @param object Object to extend its properties.
             * @param sources Source object to copy properties from.
             * @return The result object.
             */


            function addon(object) {
              object = object || {};

              for (var _len2 = arguments.length, sources = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                sources[_key2 - 1] = arguments[_key2];
              }

              for (var _i = 0, _sources = sources; _i < _sources.length; _i++) {
                var source = _sources[_i];

                if (source) {
                  if (typeof source !== 'object') {
                    errorID(5402, source);
                    continue;
                  }

                  for (var name in source) {
                    if (!(name in object)) {
                      _copyprop(name, source, object);
                    }
                  }
                }
              }

              return object;
            }
            /**
             * Copy all properties from arguments[1...n] to object.
             * @return The result object.
             */

            function mixin(object) {
              object = object || {};

              for (var _len3 = arguments.length, sources = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
                sources[_key3 - 1] = arguments[_key3];
              }

              for (var _i2 = 0, _sources2 = sources; _i2 < _sources2.length; _i2++) {
                var source = _sources2[_i2];

                if (source) {
                  if (typeof source !== 'object') {
                    errorID(5403, source);
                    continue;
                  }

                  for (var name in source) {
                    _copyprop(name, source, object);
                  }
                }
              }

              return object;
            }
            /**
             * Derive the class from the supplied base class.
             * Both classes are just native javascript constructors, not created by `Class`, so
             * usually you will want to inherit using [[Class]] instead.
             * @param base The baseclass to inherit.
             * @return The result class.
             */

            function extend(cls, base) {
              if (DEV) {
                if (!base) {
                  errorID(5404);
                  return;
                }

                if (!cls) {
                  errorID(5405);
                  return;
                }

                if (Object.keys(cls.prototype).length > 0) {
                  errorID(5406);
                }
              }

              for (var p in base) {
                if (base.hasOwnProperty(p)) {
                  cls[p] = base[p];
                }
              }

              cls.prototype = Object.create(base.prototype, {
                constructor: {
                  value: cls,
                  writable: true,
                  configurable: true
                }
              });
              return cls;
            }
            /**
             * Get super class.
             * @param constructor The constructor of subclass.
             */

            function getSuper(constructor) {
              var proto = constructor.prototype; // binded function do not have prototype

              var dunderProto = proto && Object.getPrototypeOf(proto);
              return dunderProto && dunderProto.constructor;
            }
            /**
             * Checks whether subclass is child of superclass or equals to superclass.
             */

            function isChildClassOf(subclass, superclass) {
              if (subclass && superclass) {
                if (typeof subclass !== 'function') {
                  return false;
                }

                if (typeof superclass !== 'function') {
                  if (DEV) {
                    warnID(3625, superclass);
                  }

                  return false;
                }

                if (subclass === superclass) {
                  return true;
                }

                for (;;) {
                  subclass = getSuper(subclass);

                  if (!subclass) {
                    return false;
                  }

                  if (subclass === superclass) {
                    return true;
                  }
                }
              }

              return false;
            }
            /**
             * Removes all enumerable properties from object.
             */

            function clear(object) {
              for (var _i3 = 0, _Object$keys = Object.keys(object); _i3 < _Object$keys.length; _i3++) {
                var key = _Object$keys[_i3];
                delete object[key];
              }
            }

            function isTempClassId(id) {
              return typeof id !== 'string' || id.startsWith(tempCIDGenerator.prefix);
            } // id registration

            /**
             * @legacyPublic
             */


            var _idToClass = createMap(true);
            /**
             * @legacyPublic
             */

            var _nameToClass = createMap(true);

            function setup(tag, table) {
              return function (id, constructor) {
                // deregister old
                if (constructor.prototype.hasOwnProperty(tag)) {
                  delete table[constructor.prototype[tag]];
                }

                value(constructor.prototype, tag, id); // register class

                if (id) {
                  var registered = table[id];

                  if (registered && registered !== constructor) {
                    var err = "A Class already exists with the same " + tag + " : \"" + id + "\".";

                    if (TEST) {
                      err += ' (This may be caused by error of unit test.) \
If you dont need serialization, you can set class id to "". You can also call \
js.unregisterClass to remove the id of unused class';
                    }

                    error(err);
                  } else {
                    table[id] = constructor;
                  } // if (id === "") {
                  //    console.trace("", table === _nameToClass);
                  // }

                }
              };
            }
            /**
             * Register the class by specified id, if its classname is not defined, the class name will also be set.
             * @method _setClassId
             * @param classId
             * @param constructor
             * @legacyPublic
             */


            var _setClassId = setup('__cid__', _idToClass);
            var doSetClassName = setup('__classname__', _nameToClass);
            /**
             * Register the class by specified name manually
             * @method setClassName
             * @param className
             * @param constructor
             */

            function setClassName(className, constructor) {
              doSetClassName(className, constructor); // auto set class id

              if (!constructor.prototype.hasOwnProperty(classIdTag)) {
                var id = className || tempCIDGenerator.getNewId();

                if (id) {
                  _setClassId(id, constructor);
                }
              }
            }
            /**
             * @en Set an alias name for class.
             * If `setClassAlias(target, alias)`, `alias` will be a single way short cut for class `target`.
             * If you try `js.getClassByName(alias)`, you will get target.
             * But `js.getClassName(target)` will return the original name of `target`, not the alias.
             * @zh 为类设置别名。
             * 当 `setClassAlias(target, alias)` 后，
             * `alias` 将作为类 `target`的“单向 ID” 和“单向名称”。
             * 因此，`_getClassById(alias)` 和 `getClassByName(alias)` 都会得到 `target`。
             * 这种映射是单向的，意味着 `getClassName(target)` 和 `_getClassId(target)` 将不会是 `alias`。
             * @param target Constructor of target class.
             * @param alias Alias to set. The name shall not have been set as class name or alias of another class.
             */

            function setClassAlias(target, alias) {
              var nameRegistry = _nameToClass[alias];
              var idRegistry = _idToClass[alias];
              var ok = true;

              if (nameRegistry && nameRegistry !== target) {
                error("\"" + alias + "\" has already been set as name or alias of another class.");
                ok = false;
              }

              if (idRegistry && idRegistry !== target) {
                error("\"" + alias + "\" has already been set as id or alias of another class.");
                ok = false;
              }

              if (ok) {
                var classAliases = target[aliasesTag];

                if (!classAliases) {
                  classAliases = [];
                  target[aliasesTag] = classAliases;
                }

                classAliases.push(alias);
                _nameToClass[alias] = target;
                _idToClass[alias] = target;
              }
            }
            /**
             * Unregister a class from fireball.
             *
             * If you dont need a registered class anymore, you should unregister the class so that Fireball will not keep its reference anymore.
             * Please note that its still your responsibility to free other references to the class.
             *
             * @param ...constructor - the class you will want to unregister, any number of classes can be added
             */

            function unregisterClass() {
              for (var _len4 = arguments.length, constructors = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
                constructors[_key4] = arguments[_key4];
              }

              for (var _i4 = 0, _constructors = constructors; _i4 < _constructors.length; _i4++) {
                var _constructor = _constructors[_i4];
                var p = _constructor.prototype;
                var classId = p[classIdTag];

                if (classId) {
                  delete _idToClass[classId];
                }

                var classname = p[classNameTag];

                if (classname) {
                  delete _nameToClass[classname];
                }

                var aliases = p[aliasesTag];

                if (aliases) {
                  for (var iAlias = 0; iAlias < aliases.length; ++iAlias) {
                    var alias = aliases[iAlias];
                    delete _nameToClass[alias];
                    delete _idToClass[alias];
                  }
                }
              }
            }
            /**
             * Get the registered class by id
             * @param classId
             * @return constructor
             * @legacyPublic
             */

            function _getClassById(classId) {
              return _idToClass[classId];
            }
            /**
             * Get the registered class by name
             * @param classname
             * @return constructor of the class
             */

            function getClassByName(classname) {
              return _nameToClass[classname];
            }
            /**
             * Get class id of the object
             * @param obj - instance or constructor
             * @param [allowTempId = true]   - can return temp id in editor
             * @return
             * @legacyPublic
             */

            function _getClassId(obj, allowTempId) {
              allowTempId = typeof allowTempId !== 'undefined' ? allowTempId : true;
              var res;

              if (typeof obj === 'function' && obj.prototype.hasOwnProperty(classIdTag)) {
                res = obj.prototype[classIdTag];

                if (!allowTempId && (DEV || EDITOR) && isTempClassId(res)) {
                  return '';
                }

                return res;
              }

              if (obj && obj.constructor) {
                var prototype = obj.constructor.prototype;

                if (prototype && prototype.hasOwnProperty(classIdTag)) {
                  res = obj[classIdTag];

                  if (!allowTempId && (DEV || EDITOR) && isTempClassId(res)) {
                    return '';
                  }

                  return res;
                }
              }

              return '';
            }

            /*
             Copyright (c) 2018-2020 Xiamen Yaji Software Co., Ltd.

             http://www.cocos.com

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
             * @module core
             */

            /**
             * @en
             * A fixed-length object pool designed for general type.<br>
             * The implementation of this object pool is very simple,
             * it can helps you to improve your game performance for objects which need frequent release and recreate operations<br/>
             * @zh
             * 长度固定的对象缓存池，可以用来缓存各种对象类型。<br/>
             * 这个对象池的实现非常精简，它可以帮助您提高游戏性能，适用于优化对象的反复创建和销毁。
             * @class js.Pool
             * @example
             * ```
             *
             * Example 1:
             *
             * function Details () {
             *     this.uuidList = [];
             * };
             * Details.prototype.reset = function () {
             *     this.uuidList.length = 0;
             * };
             * Details.pool = new js.Pool(function (obj) {
             *     obj.reset();
             * }, 5);
             * Details.pool.get = function () {
             *     return this._get() || new Details();
             * };
             *
             * var detail = Details.pool.get();
             * ...
             * Details.pool.put(detail);
             *
             * Example 2:
             *
             * function Details (buffer) {
             *    this.uuidList = buffer;
             * };
             * ...
             * Details.pool.get = function (buffer) {
             *     var cached = this._get();
             *     if (cached) {
             *         cached.uuidList = buffer;
             *         return cached;
             *     }
             *     else {
             *         return new Details(buffer);
             *     }
             * };
             *
             * var detail = Details.pool.get( [] );
             * ...
             * ```
             */
            var Pool = /*#__PURE__*/function () {
              var _proto = Pool.prototype;

              /**
               * @en
               * The current number of available objects, the default is 0, it will gradually increase with the recycle of the object,
               * the maximum will not exceed the size specified when the constructor is called.
               * @zh
               * 当前可用对象数量，一开始默认是 0，随着对象的回收会逐渐增大，最大不会超过调用构造函数时指定的 size。
               * @default 0
               */

              /**
               * @en
               * Get and initialize an object from pool. This method defaults to null and requires the user to implement it.
               * @zh
               * 获取并初始化对象池中的对象。这个方法默认为空，需要用户自己实现。
               * @param args - parameters to used to initialize the object
               */
              _proto.get = function get() {
                return this._get();
              };

              function Pool(_0, _1) {
                this.count = void 0;
                this._pool = void 0;
                this._cleanup = void 0;
                var size = _1 === undefined ? _0 : _1;
                var cleanupFunc = _1 === undefined ? null : _0;
                this.count = 0;
                this._pool = new Array(size);
                this._cleanup = cleanupFunc;
              }
              /**
               * @en
               * Get an object from pool, if no available object in the pool, null will be returned.
               * @zh
               * 获取对象池中的对象，如果对象池没有可用对象，则返回空。
               *
               * @legacyPublic
               */


              _proto._get = function _get() {
                if (this.count > 0) {
                  --this.count;
                  var cache = this._pool[this.count];
                  this._pool[this.count] = null;
                  return cache;
                }

                return null;
              }
              /**
               * @en Put an object into the pool.
               * @zh 向对象池返还一个不再需要的对象。
               */
              ;

              _proto.put = function put(obj) {
                var pool = this._pool;

                if (this.count < pool.length) {
                  if (this._cleanup && this._cleanup(obj) === false) {
                    return;
                  }

                  pool[this.count] = obj;
                  ++this.count;
                }
              }
              /**
               * @en Resize the pool.
               * @zh 设置对象池容量。
               */
              ;

              _proto.resize = function resize(length) {
                if (length >= 0) {
                  this._pool.length = length;

                  if (this.count > length) {
                    this.count = length;
                  }
                }
              };

              return Pool;
            }();

            var js = {
              IDGenerator: IDGenerator,
              Pool: Pool,
              array: jsarray,
              isNumber: isNumber,
              isString: isString,
              isEmptyObject: isEmptyObject,
              getPropertyDescriptor: getPropertyDescriptor,
              addon: addon,
              mixin: mixin,
              extend: extend,
              getSuper: getSuper,
              isChildClassOf: isChildClassOf,
              clear: clear,
              value: value,
              getset: getset,
              get: get,
              set: set,
              unregisterClass: unregisterClass,
              getClassName: getClassName,
              setClassName: setClassName,
              setClassAlias: setClassAlias,
              getClassByName: getClassByName,

              /**
               * @en All classes registered in the engine, indexed by name.
               * @zh 引擎中已注册的所有类型，通过名称进行索引。
               * @legacyPublic
               * @example
               * ```
               * import { js } from 'cc';
               * // save all registered classes before loading scripts
               * let builtinClassIds = js._registeredClassIds;
               * let builtinClassNames = js._registeredClassNames;
               * // load some scripts that contain CCClass
               * ...
               * // clear all loaded classes
               * js._registeredClassIds = builtinClassIds;
               * js._registeredClassNames = builtinClassNames;
               * ```
               *
               * @legacyPublic
               */
              get _registeredClassNames() {
                return _extends({}, _nameToClass);
              },

              set _registeredClassNames(value) {
                clear(_nameToClass);
                Object.assign(_nameToClass, value);
              },

              /**
               * @en All classes registered in the engine, indexed by ID.
               * @zh 引擎中已注册的所有类型，通过 ID 进行索引。
               * @example
               * ```
               * import { js } from 'cc';
               * // save all registered classes before loading scripts
               * let builtinClassIds = js._registeredClassIds;
               * let builtinClassNames = js._registeredClassNames;
               * // load some scripts that contain CCClass
               * ...
               * // clear all loaded classes
               * js._registeredClassIds = builtinClassIds;
               * js._registeredClassNames = builtinClassNames;
               * ```
               *
               * @legacyPublic
               */
              get _registeredClassIds() {
                return _extends({}, _idToClass);
              },

              set _registeredClassIds(value) {
                clear(_idToClass);
                Object.assign(_idToClass, value);
              },

              /**
               * @legacyPublic
               */
              _getClassId: _getClassId,

              /**
               * @legacyPublic
               */
              _setClassId: _setClassId,

              /**
               * @legacyPublic
               */
              _getClassById: _getClassById,
              obsolete: obsolete,
              obsoletes: obsoletes,
              formatStr: formatStr,
              shiftArguments: shiftArguments,
              createMap: createMap
            };
            /**
             * @en This module provides some JavaScript utilities. All members can be accessed via `import { js } from 'cc'`.
             * @zh 这个模块封装了 JavaScript 相关的一些实用函数，你可以通过 `import { js } from 'cc'` 来访问这个模块。
             */

            legacyCC.js = js;

            /*
             Copyright (c) 2021 Xiamen Yaji Software Co., Ltd.

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
            var fastRemoveAt$1 = js.array.fastRemoveAt;

            var ContainerManager = /*#__PURE__*/function () {
              function ContainerManager() {
                this._pools = [];
                this._lastShrinkPassed = 0;
                this.shrinkTimeSpan = 5;
              }

              var _proto = ContainerManager.prototype;

              _proto.addContainer = function addContainer(pool) {
                if (pool._poolHandle !== -1) return;
                pool._poolHandle = this._pools.length;

                this._pools.push(pool);
              };

              _proto.removeContainer = function removeContainer(pool) {
                if (pool._poolHandle === -1) return;
                this._pools[this._pools.length - 1]._poolHandle = pool._poolHandle;
                fastRemoveAt$1(this._pools, pool._poolHandle);
                pool._poolHandle = -1;
              };

              _proto.tryShrink = function tryShrink() {
                for (var i = 0; i < this._pools.length; i++) {
                  this._pools[i].tryShrink();
                }
              };

              _proto.update = function update(dt) {
                this._lastShrinkPassed += dt;

                if (this._lastShrinkPassed > this.shrinkTimeSpan) {
                  this.tryShrink();
                  this._lastShrinkPassed -= this.shrinkTimeSpan;
                }
              };

              return ContainerManager;
            }();

            var containerManager = new ContainerManager();

            /*
             Copyright (c) 2021 Xiamen Yaji Software Co., Ltd.

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
            var ScalableContainer = /*#__PURE__*/function () {
              /**
               * @legacyPublic
               */
              function ScalableContainer() {
                this._poolHandle = -1;
                containerManager.addContainer(this);
              }

              var _proto = ScalableContainer.prototype;

              _proto.destroy = function destroy() {
                containerManager.removeContainer(this);
              };

              return ScalableContainer;
            }();

            /**
             * @en Typed object pool.
             * It's a traditional design, you can get elements out of the pool or recycle elements by putting back into the pool.
             * @zh 支持类型的对象池。这是一个传统设计的对象池，你可以从对象池中取出对象或是放回不再需要对象来复用。
             * @see [[RecyclePool]]
             */

            var Pool$1 = /*#__PURE__*/function (_ScalableContainer) {
              _inheritsLoose(Pool, _ScalableContainer);

              /**
               * @en Constructor with the allocator of elements and initial pool size
               * @zh 使用元素的构造器和初始大小的构造函数
               * @param ctor The allocator of elements in pool, it's invoked directly without `new`
               * @param elementsPerBatch Initial pool size, this size will also be the incremental size when the pool is overloaded
               * @param dtor The finalizer of element, it's invoked when this container is destroyed or shrunk
               */
              function Pool(ctor, elementsPerBatch, dtor) {
                var _this;

                _this = _ScalableContainer.call(this) || this;
                _this._ctor = void 0;
                _this._elementsPerBatch = void 0;
                _this._nextAvail = void 0;
                _this._freepool = [];
                _this._dtor = void 0;
                _this._ctor = ctor;
                _this._dtor = dtor || null;
                _this._elementsPerBatch = Math.max(elementsPerBatch, 1);
                _this._nextAvail = _this._elementsPerBatch - 1;

                for (var i = 0; i < _this._elementsPerBatch; ++i) {
                  _this._freepool.push(ctor());
                }

                return _this;
              }
              /**
               * @en Take an object out of the object pool.
               * @zh 从对象池中取出一个对象。
               * @return An object ready for use. This function always return an object.
               */


              var _proto = Pool.prototype;

              _proto.alloc = function alloc() {
                if (this._nextAvail < 0) {
                  this._freepool.length = this._elementsPerBatch;

                  for (var i = 0; i < this._elementsPerBatch; i++) {
                    this._freepool[i] = this._ctor();
                  }

                  this._nextAvail = this._elementsPerBatch - 1;
                }

                return this._freepool[this._nextAvail--];
              }
              /**
               * @en Put an object back into the object pool.
               * @zh 将一个对象放回对象池中。
               * @param obj The object to be put back into the pool
               */
              ;

              _proto.free = function free(obj) {
                this._freepool[++this._nextAvail] = obj;
              }
              /**
               * @en Put multiple objects back into the object pool.
               * @zh 将一组对象放回对象池中。
               * @param objs An array of objects to be put back into the pool
               */
              ;

              _proto.freeArray = function freeArray(objs) {
                this._freepool.length = this._nextAvail + 1;
                Array.prototype.push.apply(this._freepool, objs);
                this._nextAvail += objs.length;
              };

              _proto.tryShrink = function tryShrink() {
                if (this._nextAvail >> 1 > this._elementsPerBatch) {
                  if (this._dtor) {
                    for (var i = this._nextAvail >> 1; i <= this._nextAvail; i++) {
                      this._dtor(this._freepool[i]);
                    }
                  }

                  this._freepool.length = this._nextAvail >> 1;
                  this._nextAvail = this._freepool.length - 1;
                }
              }
              /**
               * @en Destroy all elements and clear the pool.
               * @zh 释放对象池中所有资源并清空缓存池。
               */
              ;

              _proto.destroy = function destroy() {
                var dtor = arguments.length > 0 ? arguments[0] : null;

                if (dtor) {
                  warnID(14100);
                }

                var readDtor = dtor || this._dtor;

                if (readDtor) {
                  for (var i = 0; i <= this._nextAvail; i++) {
                    readDtor(this._freepool[i]);
                  }
                }

                this._freepool.length = 0;
                this._nextAvail = -1;

                _ScalableContainer.prototype.destroy.call(this);
              };

              return Pool;
            }(ScalableContainer);

            /*
             Copyright (c) 2013-2016 Chukong Technologies Inc.
             Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

             http://www.cocos.com

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
            var CCObject = legacyCC.CCObject,
                isValid = legacyCC.isValid;
            var array = js.array,
                createMap$1 = js.createMap;
            var fastRemoveAt$2 = array.fastRemoveAt;

            function empty() {}

            var CallbackInfo = /*#__PURE__*/function () {
              function CallbackInfo() {
                this.callback = empty;
                this.target = undefined;
                this.once = false;
              }

              var _proto = CallbackInfo.prototype;

              _proto.set = function set(callback, target, once) {
                this.callback = callback || empty;
                this.target = target;
                this.once = !!once;
              };

              _proto.reset = function reset() {
                this.target = undefined;
                this.callback = empty;
                this.once = false;
              };

              _proto.check = function check() {
                // Validation
                if (this.target instanceof CCObject && !isValid(this.target, true)) {
                  return false;
                } else {
                  return true;
                }
              };

              return CallbackInfo;
            }();

            var callbackInfoPool = new Pool$1(function () {
              return new CallbackInfo();
            }, 32);
            /**
             * @zh 事件监听器列表的简单封装。
             * @en A simple list of event callbacks
             */

            var CallbackList = /*#__PURE__*/function () {
              function CallbackList() {
                this.callbackInfos = [];
                this.isInvoking = false;
                this.containCanceled = false;
              }

              var _proto2 = CallbackList.prototype;

              /**
               * @zh 从列表中移除与指定目标相同回调函数的事件。
               * @en Remove the event listeners with the given callback from the list
               *
               * @param cb - The callback to be removed
               */
              _proto2.removeByCallback = function removeByCallback(cb) {
                for (var i = 0; i < this.callbackInfos.length; ++i) {
                  var info = this.callbackInfos[i];

                  if (info && info.callback === cb) {
                    info.reset();
                    callbackInfoPool.free(info);
                    fastRemoveAt$2(this.callbackInfos, i);
                    --i;
                  }
                }
              }
              /**
               * @zh 从列表中移除与指定目标相同调用者的事件。
               * @en Remove the event listeners with the given target from the list
               * @param target
               */
              ;

              _proto2.removeByTarget = function removeByTarget(target) {
                for (var i = 0; i < this.callbackInfos.length; ++i) {
                  var info = this.callbackInfos[i];

                  if (info && info.target === target) {
                    info.reset();
                    callbackInfoPool.free(info);
                    fastRemoveAt$2(this.callbackInfos, i);
                    --i;
                  }
                }
              }
              /**
               * @zh 移除指定编号事件。
               * @en Remove the event listener at the given index
               * @param index
               */
              ;

              _proto2.cancel = function cancel(index) {
                var info = this.callbackInfos[index];

                if (info) {
                  info.reset();

                  if (this.isInvoking) {
                    this.callbackInfos[index] = null;
                  } else {
                    fastRemoveAt$2(this.callbackInfos, index);
                  }

                  callbackInfoPool.free(info);
                }

                this.containCanceled = true;
              }
              /**
               * @zh 注销所有事件。
               * @en Cancel all event listeners
               */
              ;

              _proto2.cancelAll = function cancelAll() {
                for (var i = 0; i < this.callbackInfos.length; i++) {
                  var info = this.callbackInfos[i];

                  if (info) {
                    info.reset();
                    callbackInfoPool.free(info);
                    this.callbackInfos[i] = null;
                  }
                }

                this.containCanceled = true;
              }
              /**
               * @zh 立即删除所有取消的回调。（在移除过程中会更加紧凑的排列数组）
               * @en Delete all canceled callbacks and compact array
               */
              ;

              _proto2.purgeCanceled = function purgeCanceled() {
                for (var i = this.callbackInfos.length - 1; i >= 0; --i) {
                  var info = this.callbackInfos[i];

                  if (!info) {
                    fastRemoveAt$2(this.callbackInfos, i);
                  }
                }

                this.containCanceled = false;
              }
              /**
               * @zh 清除并重置所有数据。
               * @en Clear all data
               */
              ;

              _proto2.clear = function clear() {
                this.cancelAll();
                this.callbackInfos.length = 0;
                this.isInvoking = false;
                this.containCanceled = false;
              };

              return CallbackList;
            }();
            var MAX_SIZE = 16;
            var callbackListPool = new Pool$1(function () {
              return new CallbackList();
            }, MAX_SIZE);

            /**
             * @zh CallbacksInvoker 用来根据事件名（Key）管理事件监听器列表并调用回调方法。
             * @en CallbacksInvoker is used to manager and invoke event listeners with different event keys,
             * each key is mapped to a CallbackList.
             */
            var CallbacksInvoker = /*#__PURE__*/function () {
              function CallbacksInvoker() {
                this._callbackTable = createMap$1(true);
                this._offCallback = void 0;
              }

              var _proto3 = CallbacksInvoker.prototype;

              /**
               * @zh 向一个事件名注册一个新的事件监听器，包含回调函数和调用者
               * @en Register an event listener to a given event key with callback and target.
               *
               * @param key - Event type
               * @param callback - Callback function when event triggered
               * @param target - Callback callee
               * @param once - Whether invoke the callback only once (and remove it)
               */
              _proto3.on = function on(key, callback, target, once) {
                if (!this.hasEventListener(key, callback, target)) {
                  var list = this._callbackTable[key];

                  if (!list) {
                    list = this._callbackTable[key] = callbackListPool.alloc();
                  }

                  var info = callbackInfoPool.alloc();
                  info.set(callback, target, once);
                  list.callbackInfos.push(info);
                }

                return callback;
              }
              /**
               * @zh 检查指定事件是否已注册回调。
               * @en Checks whether there is correspond event listener registered on the given event
               * @param key - Event type
               * @param callback - Callback function when event triggered
               * @param target - Callback callee
               */
              ;

              _proto3.hasEventListener = function hasEventListener(key, callback, target) {
                var list = this._callbackTable && this._callbackTable[key];

                if (!list) {
                  return false;
                } // check any valid callback


                var infos = list.callbackInfos;

                if (!callback) {
                  // Make sure no cancelled callbacks
                  if (list.isInvoking) {
                    for (var i = 0; i < infos.length; ++i) {
                      if (infos[i]) {
                        return true;
                      }
                    }

                    return false;
                  } else {
                    return infos.length > 0;
                  }
                }

                for (var _i = 0; _i < infos.length; ++_i) {
                  var info = infos[_i];

                  if (info && info.check() && info.callback === callback && info.target === target) {
                    return true;
                  }
                }

                return false;
              }
              /**
               * @zh 移除在特定事件类型中注册的所有回调或在某个目标中注册的所有回调。
               * @en Removes all callbacks registered in a certain event type or all callbacks registered with a certain target
               * @param keyOrTarget - The event type or target with which the listeners will be removed
               */
              ;

              _proto3.removeAll = function removeAll(keyOrTarget) {
                var type = typeof keyOrTarget;

                if (type === 'string' || type === 'number') {
                  // remove by key
                  var list = this._callbackTable && this._callbackTable[keyOrTarget];

                  if (list) {
                    if (list.isInvoking) {
                      list.cancelAll();
                    } else {
                      list.clear();
                      callbackListPool.free(list);
                      delete this._callbackTable[keyOrTarget];
                    }
                  }
                } else if (keyOrTarget) {
                  // remove by target
                  for (var key in this._callbackTable) {
                    var _list = this._callbackTable[key];

                    if (_list.isInvoking) {
                      var infos = _list.callbackInfos;

                      for (var i = 0; i < infos.length; ++i) {
                        var info = infos[i];

                        if (info && info.target === keyOrTarget) {
                          _list.cancel(i);
                        }
                      }
                    } else {
                      _list.removeByTarget(keyOrTarget);
                    }
                  }
                }
              }
              /**
               * @zh 删除以指定事件，回调函数，目标注册的回调。
               * @en Remove event listeners registered with the given event key, callback and target
               * @param key - Event type
               * @param callback - The callback function of the event listener, if absent all event listeners for the given type will be removed
               * @param target - The callback callee of the event listener
               */
              ;

              _proto3.off = function off(key, callback, target) {
                var _this$_offCallback;

                var list = this._callbackTable && this._callbackTable[key];

                if (list) {
                  var infos = list.callbackInfos;

                  if (callback) {
                    for (var i = 0; i < infos.length; ++i) {
                      var info = infos[i];

                      if (info && info.callback === callback && info.target === target) {
                        list.cancel(i);
                        break;
                      }
                    }
                  } else {
                    this.removeAll(key);
                  }
                }

                (_this$_offCallback = this._offCallback) === null || _this$_offCallback === void 0 ? void 0 : _this$_offCallback.call(this);
              }
              /**
               * @zh 派发一个指定事件，并传递需要的参数
               * @en Trigger an event directly with the event name and necessary arguments.
               * @param key - event type
               * @param arg0 - The first argument to be passed to the callback
               * @param arg1 - The second argument to be passed to the callback
               * @param arg2 - The third argument to be passed to the callback
               * @param arg3 - The fourth argument to be passed to the callback
               * @param arg4 - The fifth argument to be passed to the callback
               */
              ;

              _proto3.emit = function emit(key, arg0, arg1, arg2, arg3, arg4) {
                var list = this._callbackTable && this._callbackTable[key];

                if (list) {
                  var rootInvoker = !list.isInvoking;
                  list.isInvoking = true;
                  var infos = list.callbackInfos;

                  for (var i = 0, len = infos.length; i < len; ++i) {
                    var info = infos[i];

                    if (info) {
                      var callback = info.callback;
                      var target = info.target; // Pre off once callbacks to avoid influence on logic in callback

                      if (info.once) {
                        this.off(key, callback, target);
                      } // Lazy check validity of callback target,
                      // if target is CCObject and is no longer valid, then remove the callback info directly


                      if (!info.check()) {
                        this.off(key, callback, target);
                      } else if (target) {
                        callback.call(target, arg0, arg1, arg2, arg3, arg4);
                      } else {
                        callback(arg0, arg1, arg2, arg3, arg4);
                      }
                    }
                  }

                  if (rootInvoker) {
                    list.isInvoking = false;

                    if (list.containCanceled) {
                      list.purgeCanceled();
                    }
                  }
                }
              }
              /**
               * 移除所有回调。
               */
              ;

              _proto3.clear = function clear() {
                for (var key in this._callbackTable) {
                  var list = this._callbackTable[key];

                  if (list) {
                    list.clear();
                    callbackListPool.free(list);
                    delete this._callbackTable[key];
                  }
                }
              };

              _proto3._registerOffCallback = function _registerOffCallback(cb) {
                this._offCallback = cb;
              };

              return CallbacksInvoker;
            }();

            if (TEST) {
              legacyCC._Test.CallbacksInvoker = CallbacksInvoker;
            }

            var createMap$2 = js.createMap;

            /**
             * @en Generate a new class from the given base class, after polyfill all functionalities in [[IEventified]] as if it's extended from [[EventTarget]]
             * @zh 生成一个类，该类继承自指定的基类，并以和 [[EventTarget]] 等同的方式实现了 [[IEventified]] 的所有接口。
             * @param base The base class
             * @example
             * ```ts
             * class Base { say() { console.log('Hello!'); } }
             * class MyClass extends Eventify(Base) { }
             * function (o: MyClass) {
             *     o.say(); // Ok: Extend from `Base`
             *     o.emit('sing', 'The ghost'); // Ok: `MyClass` implements IEventified
             * }
             * ```
             */
            function Eventify(base) {
              var Eventified = /*#__PURE__*/function (_ref) {
                _inheritsLoose(Eventified, _ref);

                function Eventified() {
                  var _this;

                  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                  }

                  _this = _ref.call.apply(_ref, [this].concat(args)) || this;
                  _this._callbackTable = createMap$2(true);
                  return _this;
                }

                var _proto = Eventified.prototype;

                _proto.once = function once(type, callback, target) {
                  return this.on(type, callback, target, true);
                };

                _proto.targetOff = function targetOff(typeOrTarget) {
                  this.removeAll(typeOrTarget);
                };

                return Eventified;
              }(base); // Mixin with `CallbacksInvokers`'s prototype


              var callbacksInvokerPrototype = CallbacksInvoker.prototype;
              var propertyKeys = Object.getOwnPropertyNames(callbacksInvokerPrototype).concat(Object.getOwnPropertySymbols(callbacksInvokerPrototype));

              for (var iPropertyKey = 0; iPropertyKey < propertyKeys.length; ++iPropertyKey) {
                var propertyKey = propertyKeys[iPropertyKey];

                if (!(propertyKey in Eventified.prototype)) {
                  var propertyDescriptor = Object.getOwnPropertyDescriptor(callbacksInvokerPrototype, propertyKey);

                  if (propertyDescriptor) {
                    Object.defineProperty(Eventified.prototype, propertyKey, propertyDescriptor);
                  }
                }
              }

              return Eventified;
            }

            /*
             Copyright (c) 2013-2016 Chukong Technologies Inc.
             Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

             http://www.cocos.com

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

            var Empty = function Empty() {};
            /**
             * @en
             * EventTarget is an object to which an event is dispatched when something has occurred.
             * [[Node]]s are the most common event targets, but other objects can be event targets too.
             * If a class cannot extend from EventTarget, it can consider using [[Eventify]].
             *
             * @zh
             * 事件目标是具有注册监听器、派发事件能力的类，[[Node]] 是最常见的事件目标，
             * 但是其他类也可以继承自事件目标以获得管理监听器和派发事件的能力。
             * 如果无法继承自 EventTarget，也可以使用 [[Eventify]]
             */


            var EventTarget = Eventify(Empty);
            legacyCC.EventTarget = EventTarget;

            var SystemInfo = /*#__PURE__*/function (_EventTarget) {
              _inheritsLoose(SystemInfo, _EventTarget);

              function SystemInfo() {
                var _nav$getBattery, _this$_featureMap;

                var _this;

                _this = _EventTarget.call(this) || this;
                _this.networkType = void 0;
                _this.isNative = void 0;
                _this.isBrowser = void 0;
                _this.isMobile = void 0;
                _this.isLittleEndian = void 0;
                _this.platform = void 0;
                _this.language = void 0;
                _this.nativeLanguage = void 0;
                _this.os = void 0;
                _this.osVersion = void 0;
                _this.osMainVersion = void 0;
                _this.browserType = void 0;
                _this.browserVersion = void 0;
                _this._battery = void 0;
                _this._featureMap = void 0;
                var nav = window.navigator;
                var ua = nav.userAgent.toLowerCase(); // @ts-expect-error getBattery is not totally supported

                (_nav$getBattery = nav.getBattery) === null || _nav$getBattery === void 0 ? void 0 : _nav$getBattery.call(nav).then(function (battery) {
                  _this._battery = battery;
                });
                _this.networkType = NetworkType.LAN; // TODO

                _this.isNative = false;
                _this.isBrowser = true; // init isMobile and platform

                if (EDITOR) {
                  _this.isMobile = false;
                  _this.platform = Platform.EDITOR_PAGE; // TODO
                } else {
                  _this.isMobile = /mobile|android|iphone|ipad/.test(ua);
                  _this.platform = _this.isMobile ? Platform.MOBILE_BROWSER : Platform.DESKTOP_BROWSER;
                } // init isLittleEndian


                _this.isLittleEndian = function () {
                  var buffer = new ArrayBuffer(2);
                  new DataView(buffer).setInt16(0, 256, true); // Int16Array uses the platform's endianness.

                  return new Int16Array(buffer)[0] === 256;
                }(); // init languageCode and language


                var currLanguage = nav.language;
                _this.nativeLanguage = currLanguage.toLowerCase();
                currLanguage = currLanguage || nav.browserLanguage;
                currLanguage = currLanguage ? currLanguage.split('-')[0] : Language.ENGLISH;
                _this.language = currLanguage; // init os, osVersion and osMainVersion

                var isAndroid = false;
                var iOS = false;
                var osVersion = '';
                var osMajorVersion = 0;
                var uaResult = /android\s*(\d+(?:\.\d+)*)/i.exec(ua) || /android\s*(\d+(?:\.\d+)*)/i.exec(nav.platform);

                if (uaResult) {
                  isAndroid = true;
                  osVersion = uaResult[1] || '';
                  osMajorVersion = parseInt(osVersion) || 0;
                }

                uaResult = /(iPad|iPhone|iPod).*OS ((\d+_?){2,3})/i.exec(ua);

                if (uaResult) {
                  iOS = true;
                  osVersion = uaResult[2] || '';
                  osMajorVersion = parseInt(osVersion) || 0; // refer to https://github.com/cocos-creator/engine/pull/5542 , thanks for contribition from @krapnikkk
                  // ipad OS 13 safari identifies itself as "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 (KHTML, like Gecko)"
                  // so use maxTouchPoints to check whether it's desktop safari or not.
                  // reference: https://stackoverflow.com/questions/58019463/how-to-detect-device-name-in-safari-on-ios-13-while-it-doesnt-show-the-correct
                  // FIXME: should remove it when touch-enabled mac are available
                  // TODO: due to compatibility issues, it is still determined to be ios, and a new operating system type ipados may be added later？
                } else if (/(iPhone|iPad|iPod)/.exec(nav.platform) || nav.platform === 'MacIntel' && nav.maxTouchPoints && nav.maxTouchPoints > 1) {
                  iOS = true;
                  osVersion = '';
                  osMajorVersion = 0;
                }

                var osName = OS.UNKNOWN;

                if (nav.appVersion.indexOf('Win') !== -1) {
                  osName = OS.WINDOWS;
                } else if (iOS) {
                  osName = OS.IOS;
                } else if (nav.appVersion.indexOf('Mac') !== -1) {
                  osName = OS.OSX;
                } else if (nav.appVersion.indexOf('X11') !== -1 && nav.appVersion.indexOf('Linux') === -1) {
                  osName = OS.LINUX;
                } else if (isAndroid) {
                  osName = OS.ANDROID;
                } else if (nav.appVersion.indexOf('Linux') !== -1 || ua.indexOf('ubuntu') !== -1) {
                  osName = OS.LINUX;
                }

                _this.os = osName;
                _this.osVersion = osVersion;
                _this.osMainVersion = osMajorVersion; // TODO: use dack-type to determine the browserType
                // init browserType and browserVersion

                _this.browserType = BrowserType.UNKNOWN;
                var typeReg0 = /wechat|weixin|micromessenger/i;
                var typeReg1 = /mqqbrowser|micromessenger|qqbrowser|sogou|qzone|liebao|maxthon|ucbs|360 aphone|360browser|baiduboxapp|baidubrowser|maxthon|mxbrowser|miuibrowser/i;
                var typeReg2 = /qq|qqbrowser|ucbrowser|ubrowser|edge|HuaweiBrowser/i;
                var typeReg3 = /chrome|safari|firefox|trident|opera|opr\/|oupeng/i;
                var browserTypes = typeReg0.exec(ua) || typeReg1.exec(ua) || typeReg2.exec(ua) || typeReg3.exec(ua);
                var browserType = browserTypes ? browserTypes[0].toLowerCase() : OS.UNKNOWN;

                if (browserType === 'safari' && isAndroid) {
                  browserType = BrowserType.ANDROID;
                } else if (browserType === 'qq' && /android.*applewebkit/i.test(ua)) {
                  browserType = BrowserType.ANDROID;
                }

                var typeMap = {
                  micromessenger: BrowserType.WECHAT,
                  wechat: BrowserType.WECHAT,
                  weixin: BrowserType.WECHAT,
                  trident: BrowserType.IE,
                  edge: BrowserType.EDGE,
                  '360 aphone': BrowserType.BROWSER_360,
                  mxbrowser: BrowserType.MAXTHON,
                  'opr/': BrowserType.OPERA,
                  ubrowser: BrowserType.UC,
                  huaweibrowser: BrowserType.HUAWEI
                };
                _this.browserType = typeMap[browserType] || browserType; // init browserVersion

                _this.browserVersion = '';
                var versionReg1 = /(mqqbrowser|micromessenger|qqbrowser|sogou|qzone|liebao|maxthon|uc|ucbs|360 aphone|360|baiduboxapp|baidu|maxthon|mxbrowser|miui(?:.hybrid)?)(mobile)?(browser)?\/?([\d.]+)/i;
                var versionReg2 = /(qq|chrome|safari|firefox|trident|opera|opr\/|oupeng)(mobile)?(browser)?\/?([\d.]+)/i;
                var tmp = versionReg1.exec(ua);

                if (!tmp) {
                  tmp = versionReg2.exec(ua);
                }

                _this.browserVersion = tmp ? tmp[4] : ''; // init capability

                var _tmpCanvas1 = document.createElement('canvas');

                var supportCanvas = TEST ? false : !!_tmpCanvas1.getContext('2d');

                var supportWebp;

                try {
                  supportWebp = TEST ? false : _tmpCanvas1.toDataURL('image/webp').startsWith('data:image/webp');
                } catch (e) {
                  supportWebp = false;
                }

                var supportImageBitmap = false;

                if (!TEST && typeof createImageBitmap !== 'undefined' && typeof Blob !== 'undefined') {
                  _tmpCanvas1.width = _tmpCanvas1.height = 2;
                  createImageBitmap(_tmpCanvas1, {}).then(function (imageBitmap) {
                    supportImageBitmap = true;
                    imageBitmap === null || imageBitmap === void 0 ? void 0 : imageBitmap.close();
                  })["catch"](function (err) {});
                }

                var supportTouch = document.documentElement.ontouchstart !== undefined || document.ontouchstart !== undefined;
                var supportMouse = !EDITOR && document.documentElement.onmouseup !== undefined;
                _this._featureMap = (_this$_featureMap = {}, _this$_featureMap[Feature.WEBP] = supportWebp, _this$_featureMap[Feature.IMAGE_BITMAP] = supportImageBitmap, _this$_featureMap[Feature.WEB_VIEW] = true, _this$_featureMap[Feature.VIDEO_PLAYER] = true, _this$_featureMap[Feature.SAFE_AREA] = false, _this$_featureMap[Feature.INPUT_TOUCH] = supportTouch, _this$_featureMap[Feature.EVENT_KEYBOARD] = document.documentElement.onkeyup !== undefined, _this$_featureMap[Feature.EVENT_MOUSE] = supportMouse, _this$_featureMap[Feature.EVENT_TOUCH] = supportTouch || supportMouse, _this$_featureMap[Feature.EVENT_ACCELEROMETER] = window.DeviceMotionEvent !== undefined || window.DeviceOrientationEvent !== undefined, _this$_featureMap);

                _this._registerEvent();

                return _this;
              }

              var _proto = SystemInfo.prototype;

              _proto._registerEvent = function _registerEvent() {
                var _this2 = this;

                var hiddenPropName;

                if (typeof document.hidden !== 'undefined') {
                  hiddenPropName = 'hidden';
                } else if (typeof document.mozHidden !== 'undefined') {
                  hiddenPropName = 'mozHidden';
                } else if (typeof document.msHidden !== 'undefined') {
                  hiddenPropName = 'msHidden';
                } else if (typeof document.webkitHidden !== 'undefined') {
                  hiddenPropName = 'webkitHidden';
                } else {
                  hiddenPropName = 'hidden';
                }

                var hidden = false;

                var onHidden = function onHidden() {
                  if (!hidden) {
                    hidden = true;

                    _this2.emit('hide');
                  }
                }; // In order to adapt the most of platforms the onshow API.


                var onShown = function onShown(arg0, arg1, arg2, arg3, arg4) {
                  if (hidden) {
                    hidden = false;

                    _this2.emit('show', arg0, arg1, arg2, arg3, arg4);
                  }
                };

                if (hiddenPropName) {
                  var changeList = ['visibilitychange', 'mozvisibilitychange', 'msvisibilitychange', 'webkitvisibilitychange', 'qbrowserVisibilityChange'];

                  for (var i = 0; i < changeList.length; i++) {
                    document.addEventListener(changeList[i], function (event) {
                      var visible = document[hiddenPropName]; // @ts-expect-error QQ App need hidden property

                      visible = visible || event.hidden;

                      if (visible) {
                        onHidden();
                      } else {
                        onShown();
                      }
                    });
                  }
                } else {
                  window.addEventListener('blur', onHidden);
                  window.addEventListener('focus', onShown);
                }

                if (window.navigator.userAgent.indexOf('MicroMessenger') > -1) {
                  window.onfocus = onShown;
                }

                if ('onpageshow' in window && 'onpagehide' in window) {
                  window.addEventListener('pagehide', onHidden);
                  window.addEventListener('pageshow', onShown); // Taobao UIWebKit

                  document.addEventListener('pagehide', onHidden);
                  document.addEventListener('pageshow', onShown);
                }
              };

              _proto.hasFeature = function hasFeature(feature) {
                return this._featureMap[feature];
              };

              _proto.getBatteryLevel = function getBatteryLevel() {
                if (this._battery) {
                  return this._battery.level;
                } else {
                  if (DEBUG) {
                    console.warn('getBatteryLevel is not supported');
                  }

                  return 1;
                }
              };

              _proto.triggerGC = function triggerGC() {
                if (DEBUG) {
                  console.warn('triggerGC is not supported.');
                }
              };

              _proto.openURL = function openURL(url) {
                window.open(url);
              };

              _proto.now = function now() {
                if (Date.now) {
                  return Date.now();
                }

                return +new Date();
              };

              _proto.restartJSVM = function restartJSVM() {
                if (DEBUG) {
                  console.warn('restartJSVM is not supported.');
                }
              };

              _proto.close = function close() {
                this.emit('close');
                window.close();
              };

              return SystemInfo;
            }(EventTarget);

            var systemInfo = exports('systemInfo', new SystemInfo());

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
            var REVERSE_TABLE = new Array(256);

            (function (tab) {
              for (var i = 0; i < 256; ++i) {
                var v = i;
                var r = i;
                var s = 7;

                for (v >>>= 1; v; v >>>= 1) {
                  r <<= 1;
                  r |= v & 1;
                  --s;
                }

                tab[i] = r << s & 0xff;
              }
            })(REVERSE_TABLE);

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
            var defaultLogTimes = 10;
            var replaceProperty;
            var replacePropertyLog;

            var messageID = 0;
            var messageMap = new Map();

            replacePropertyLog = function replacePropertyLog(n, dp, n2, newp, f, id, s) {
              var item = messageMap.get(id);

              if (item && item.logTimes > item.count) {
                f("'%s' is deprecated, please use '%s' instead. " + s, n + "." + dp, n2 + "." + newp);
                item.count++;
              }
            };

            replaceProperty = function replaceProperty(owner, ownerName, properties) {
              if (owner == null) return;
              properties.forEach(function (item) {
                var id = messageID++;
                messageMap.set(id, {
                  id: id,
                  count: 0,
                  logTimes: item.logTimes !== undefined ? item.logTimes : defaultLogTimes
                });
                var target = item.target != null ? item.target : owner;
                var newName = item.newName != null ? item.newName : item.name;
                var targetName = item.targetName != null ? item.targetName : ownerName;
                var sameTarget = target === owner;
                var suggest = item.suggest ? "(" + item.suggest + ")" : '';

                if (item.customFunction != null) {
                  owner[item.name] = function () {
                    var _ref;

                    replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                    return (_ref = item.customFunction).call.apply(_ref, [this].concat(Array.prototype.slice.call(arguments)));
                  };
                } else if (item.customSetter != null || item.customGetter != null) {
                  var hasSetter = item.customSetter != null;
                  var hasGetter = item.customGetter != null;

                  if (hasSetter && hasGetter) {
                    Object.defineProperty(owner, item.name, {
                      get: function get() {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                        return item.customGetter.call(this);
                      },
                      set: function set(v) {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                        item.customSetter.call(this, v);
                      },
                      enumerable: false
                    });
                  } else if (hasSetter) {
                    Object.defineProperty(owner, item.name, {
                      set: function set(v) {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                        item.customSetter.call(this, v);
                      },
                      enumerable: false
                    });
                  } else if (hasGetter) {
                    Object.defineProperty(owner, item.name, {
                      get: function get() {
                        replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                        return item.customGetter.call(this);
                      },
                      enumerable: false
                    });
                  }
                } else {
                  Object.defineProperty(owner, item.name, {
                    get: function get() {
                      replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);
                      return sameTarget ? this[newName] : target[newName];
                    },
                    set: function set(v) {
                      replacePropertyLog(ownerName, item.name, targetName, newName, warn, id, suggest);

                      if (sameTarget) {
                        this[newName] = v;
                      } else {
                        target[newName] = v;
                      }
                    },
                    enumerable: false
                  });
                }
              });
            };
            //     // for compatible
            //     replaceProperty = () => { };
            //     removeProperty = () => { };
            //     markAsWarning = () => { };
            //     replacePropertyLog = () => { };
            //     removePropertyLog = () => { };
            //     markAsWarningLog = () => { };
            // }

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

            var _r2d = 180.0 / Math.PI;

            var EPSILON = 0.000001;
            /**
             * @en Clamps a value between a minimum float and maximum float value.<br/>
             * @zh 返回最小浮点数和最大浮点数之间的一个数值。可以使用 clamp 函数将不断变化的数值限制在范围内。
             * @param val
             * @param min
             * @param max
             */

            function clamp(val, min, max) {
              if (min > max) {
                var temp = min;
                min = max;
                max = temp;
              }

              return val < min ? min : val > max ? max : val;
            }
            /**
             * @en Clamps a value between 0 and 1.<br/>
             * @zh 将值限制在0和1之间。
             * @param val
             */

            function clamp01(val) {
              return val < 0 ? 0 : val > 1 ? 1 : val;
            }
            /**
             * @en Convert Radian To Degree<br/>
             * @zh 把弧度换算成角度。
             * @param {Number} a Angle in Radian
             */

            function toDegree(a) {
              return a * _r2d;
            }
            /**
             * @method random
             */

            var random = Math.random;

            var toFloat = 1 / 255;
            /**
             * @en Representation of RGBA colors.<br/>
             * Each color component is an integer value with a range from 0 to 255.<br/>
             * @zh 通过 Red、Green、Blue 颜色通道表示颜色，并通过 Alpha 通道表示不透明度。<br/>
             * 每个通道都为取值范围 [0, 255] 的整数。<br/>
             */

            var Color = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Color, _ValueType);

              /**
               * @en Copy content of a color into another and save the results to out color.
               * @zh 获得指定颜色的拷贝
               */
              Color.clone = function clone(a) {
                var out = new Color();

                if (a._val) {
                  out._val = a._val;
                } else {
                  out._val = (a.a << 24 >>> 0) + (a.b << 16) + (a.g << 8) + a.r;
                }

                return out;
              }
              /**
               * @en Clone a color and save the results to out color.
               * @zh 复制目标颜色
               */
              ;

              Color.copy = function copy(out, a) {
                out.r = a.r;
                out.g = a.g;
                out.b = a.b;
                out.a = a.a;
                return out;
              }
              /**
               * @en Set the components of a color to the given values and save the results to out color.
               * @zh 设置颜色值
               */
              ;

              Color.set = function set(out, r, g, b, a) {
                out.r = r;
                out.g = g;
                out.b = b;
                out.a = a;
                return out;
              }
              /**
               * @en Converts the hexadecimal formal color into rgb formal and save the results to out color.
               * @zh 从十六进制颜色字符串中读入颜色到 out 中
               */
              ;

              Color.fromHEX = function fromHEX(out, hexString) {
                hexString = hexString.indexOf('#') === 0 ? hexString.substring(1) : hexString;
                out.r = parseInt(hexString.substr(0, 2), 16) || 0;
                out.g = parseInt(hexString.substr(2, 2), 16) || 0;
                out.b = parseInt(hexString.substr(4, 2), 16) || 0;
                var a = parseInt(hexString.substr(6, 2), 16);
                out.a = !Number.isNaN(a) ? a : 255;
                out._val = (out.a << 24 >>> 0) + (out.b << 16) + (out.g << 8) + out.r;
                return out;
              }
              /**
               * @en Add two colors by components. And save the results to out color.
               * @zh 逐通道颜色加法
               */
              ;

              Color.add = function add(out, a, b) {
                out.r = a.r + b.r;
                out.g = a.g + b.g;
                out.b = a.b + b.b;
                out.a = a.a + b.a;
                return out;
              }
              /**
               * @en Subtract each components of color b from each components of color a. And save the results to out color.
               * @zh 逐通道颜色减法
               */
              ;

              Color.subtract = function subtract(out, a, b) {
                out.r = a.r - b.r;
                out.g = a.g - b.g;
                out.b = a.b - b.b;
                out.a = a.a - b.a;
                return out;
              }
              /**
               * @en Multiply each components of two colors. And save the results to out color.
               * @zh 逐通道颜色乘法
               */
              ;

              Color.multiply = function multiply(out, a, b) {
                out.r = a.r * b.r;
                out.g = a.g * b.g;
                out.b = a.b * b.b;
                out.a = a.a * b.a;
                return out;
              }
              /**
               * @en Divide each components of color a by each components of color b. And save the results to out color.
               * @zh 逐通道颜色除法
               */
              ;

              Color.divide = function divide(out, a, b) {
                out.r = a.r / b.r;
                out.g = a.g / b.g;
                out.b = a.b / b.b;
                out.a = a.a / b.a;
                return out;
              }
              /**
               * @en Multiply all channels in a color with the given scale factor, and save the results to out color.
               * @zh 全通道统一缩放颜色
               */
              ;

              Color.scale = function scale(out, a, b) {
                out.r = a.r * b;
                out.g = a.g * b;
                out.b = a.b * b;
                out.a = a.a * b;
                return out;
              }
              /**
               * @en Performs a linear interpolation between two colors.
               * @zh 逐通道颜色线性插值：A + t * (B - A)
               */
              ;

              Color.lerp = function lerp(out, from, to, ratio) {
                var r = from.r;
                var g = from.g;
                var b = from.b;
                var a = from.a;
                r += (to.r - r) * ratio;
                g += (to.g - g) * ratio;
                b += (to.b - b) * ratio;
                a += (to.a - a) * ratio;
                out._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
                return out;
              }
              /**
               * @en Convert a color object to a RGBA array, and save the results to out color.
               * @zh 颜色转数组
               * @param ofs Array Start Offset
               */
              ;

              Color.toArray = function toArray(out, a, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                var scale = a instanceof Color || a.a > 1 ? 1 / 255 : 1;
                out[ofs + 0] = a.r * scale;
                out[ofs + 1] = a.g * scale;
                out[ofs + 2] = a.b * scale;
                out[ofs + 3] = a.a * scale;
                return out;
              }
              /**
               * @en Sets the given color with RGBA values in an array, and save the results to out color.
               * @zh 数组转颜色
               * @param ofs Array Start Offset
               */
              ;

              Color.fromArray = function fromArray(arr, out, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.r = arr[ofs + 0] * 255;
                out.g = arr[ofs + 1] * 255;
                out.b = arr[ofs + 2] * 255;
                out.a = arr[ofs + 3] * 255;
                return out;
              }
              /**
               * @en Check whether the two given colors are identical
               * @zh 颜色等价判断
               */
              ;

              Color.strictEquals = function strictEquals(a, b) {
                return a.r === b.r && a.g === b.g && a.b === b.b && a.a === b.a;
              }
              /**
               * @en Check whether the two given colors are approximately equivalent. Difference of each channel is smaller that the epsilon.
               * @zh 排除浮点数误差的颜色近似等价判断
               */
              ;

              Color.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.r - b.r) <= epsilon * Math.max(1.0, Math.abs(a.r), Math.abs(b.r)) && Math.abs(a.g - b.g) <= epsilon * Math.max(1.0, Math.abs(a.g), Math.abs(b.g)) && Math.abs(a.b - b.b) <= epsilon * Math.max(1.0, Math.abs(a.b), Math.abs(b.b)) && Math.abs(a.a - b.a) <= epsilon * Math.max(1.0, Math.abs(a.a), Math.abs(b.a));
              }
              /**
               * @en Convert the given color to a hex color value. And save the results to out color.
               * @zh 获取指定颜色的整型数据表示
               */
              ;

              Color.hex = function hex(a) {
                return (a.r * 255 << 24 | a.g * 255 << 16 | a.b * 255 << 8 | a.a * 255) >>> 0;
              }
              /**
               * @en Get or set red channel value.
               * @zh 获取或设置当前颜色的 Red 通道。
               */
              ;

              _createClass(Color, [{
                key: "r",
                get: function get() {
                  return this._val & 0x000000ff;
                },
                set: function set(red) {
                  red = ~~clamp(red, 0, 255);
                  this._val = (this._val & 0xffffff00 | red) >>> 0;
                }
                /**
                 * @en Get or set green channel value.
                 * @zh 获取或设置当前颜色的 Green 通道。
                 */

              }, {
                key: "g",
                get: function get() {
                  return (this._val & 0x0000ff00) >> 8;
                },
                set: function set(green) {
                  green = ~~clamp(green, 0, 255);
                  this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
                }
                /**
                 * @en Get or set blue channel value.
                 * @zh 获取或设置当前颜色的 Blue 通道。
                 */

              }, {
                key: "b",
                get: function get() {
                  return (this._val & 0x00ff0000) >> 16;
                },
                set: function set(blue) {
                  blue = ~~clamp(blue, 0, 255);
                  this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
                }
                /** @en Get or set alpha channel value.
                 * @zh 获取或设置当前颜色的透明度通道。
                 */

              }, {
                key: "a",
                get: function get() {
                  return (this._val & 0xff000000) >>> 24;
                },
                set: function set(alpha) {
                  alpha = ~~clamp(alpha, 0, 255);
                  this._val = (this._val & 0x00ffffff | alpha << 24) >>> 0;
                } // compatibility with vector interfaces

              }, {
                key: "x",
                get: function get() {
                  return this.r * toFloat;
                },
                set: function set(value) {
                  this.r = value * 255;
                }
              }, {
                key: "y",
                get: function get() {
                  return this.g * toFloat;
                },
                set: function set(value) {
                  this.g = value * 255;
                }
              }, {
                key: "z",
                get: function get() {
                  return this.b * toFloat;
                },
                set: function set(value) {
                  this.b = value * 255;
                }
              }, {
                key: "w",
                get: function get() {
                  return this.a * toFloat;
                },
                set: function set(value) {
                  this.a = value * 255;
                }
                /**
                 * @legacyPublic
                 */

              }]);

              function Color(r, g, b, a) {
                var _this;

                _this = _ValueType.call(this) || this;
                _this._val = 0;

                if (typeof r === 'string') {
                  _this.fromHEX(r);
                } else if (g !== undefined) {
                  _this.set(r, g, b, a);
                } else {
                  _this.set(r);
                }

                return _this;
              }
              /**
               * @en Clone a new color from the current color.
               * @zh 克隆当前颜色。
               */


              var _proto = Color.prototype;

              _proto.clone = function clone() {
                var ret = new Color();
                ret._val = this._val;
                return ret;
              }
              /**
               * @en Check whether the current color is identical with the given color
               * @zh 判断当前颜色是否与指定颜色相等。
               * @param other Specified color
               * @returns Returns `true` when all channels of both colours are equal; otherwise returns `false`.
               */
              ;

              _proto.equals = function equals(other) {
                return other && this._val === other._val;
              }
              /**
               * @en Calculate linear interpolation result between this color and another one with given ratio。
               * @zh 根据指定的插值比率，从当前颜色到目标颜色之间做插值。
               * @param to Target color
               * @param ratio The interpolation coefficient.The range is [0,1].
               */
              ;

              _proto.lerp = function lerp(to, ratio) {
                var r = this.r;
                var g = this.g;
                var b = this.b;
                var a = this.a;
                r += (to.r - r) * ratio;
                g += (to.g - g) * ratio;
                b += (to.b - b) * ratio;
                a += (to.a - a) * ratio;
                this._val = Math.floor((a << 24 >>> 0) + (b << 16) + (g << 8) + r);
                return this;
              }
              /**
               * @en Convert to string with color informations
               * @zh 返回当前颜色的字符串表示。
               * @returns A string representation of the current color.
               */
              ;

              _proto.toString = function toString() {
                return "rgba(" + this.r.toFixed() + ", " + this.g.toFixed() + ", " + this.b.toFixed() + ", " + this.a.toFixed() + ")";
              }
              /**
               * @en Convert color to css format.
               * @zh 将当前颜色转换为 CSS 格式。
               * @param opt "rgba", "rgb", "#rgb" or "#rrggbb".
               * @returns CSS format for the current color.
               * @example
               * ```ts
               * let color = cc.Color.BLACK;
               * color.toCSS();          // "rgba(0,0,0,1.00)";
               * color.toCSS("rgba");    // "rgba(0,0,0,1.00)";
               * color.toCSS("rgb");     // "rgba(0,0,0)";
               * color.toCSS("#rgb");    // "#000";
               * color.toCSS("#rrggbb"); // "#000000";
               * ```
               */
              ;

              _proto.toCSS = function toCSS(opt) {
                if (opt === void 0) {
                  opt = 'rgba';
                }

                if (opt === 'rgba') {
                  return "rgba(" + this.r + "," + this.g + "," + this.b + "," + (this.a * toFloat).toFixed(2) + ")";
                } else if (opt === 'rgb') {
                  return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
                } else {
                  return "#" + this.toHEX(opt);
                }
              }
              /**
               * @en Read hex string and store color data into the current color object, the hex string must be formatted as rgba or rgb.
               * @zh 从十六进制颜色字符串中读入当前颜色。<br/>
               * 十六进制颜色字符串应该以可选的 "#" 开头，紧跟最多 8 个代表十六进制数字的字符；<br/>
               * 每两个连续字符代表的数值依次作为 Red、Green、Blue 和 Alpha 通道；<br/>
               * 缺省的颜色通道将视为 0；缺省的透明通道将视为 255。<br/>
               * @param hexString the hex string
               * @returns `this`
               */
              ;

              _proto.fromHEX = function fromHEX(hexString) {
                hexString = hexString.indexOf('#') === 0 ? hexString.substring(1) : hexString;
                var r = parseInt(hexString.substr(0, 2), 16) || 0;
                var g = parseInt(hexString.substr(2, 2), 16) || 0;
                var b = parseInt(hexString.substr(4, 2), 16) || 0;
                var a = parseInt(hexString.substr(6, 2), 16);
                a = !Number.isNaN(a) ? a : 255;
                this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                return this;
              }
              /**
               * @en convert Color to HEX color string.
               * @zh 转换当前颜色为十六进制颜色字符串。
               * @param fmt "#rrggbb" or "#rrggbbaa".
               * - `'#rrggbbaa'` obtains the hexadecimal value of the Red, Green, Blue, Alpha channels (**two**, high complement 0) and connects them sequentially.
               * - `'#rrggbb'` is similar to `'#rrggbbaa'` but does not include the Alpha channel.
               * @returns the Hex color string
               * @example
               * ```
               * const color = new Color(255, 14, 0, 255);
               * color.toHEX("#rgb");      // "f00";
               * color.toHEX("#rrggbbaa"); // "ff0e00ff"
               * color.toHEX("#rrggbb");   // "ff0e00"
               * ```
               */
              ;

              _proto.toHEX = function toHEX(fmt) {
                if (fmt === void 0) {
                  fmt = '#rrggbb';
                }

                var prefix = '0'; // #rrggbb

                var hex = [(this.r < 16 ? prefix : '') + this.r.toString(16), (this.g < 16 ? prefix : '') + this.g.toString(16), (this.b < 16 ? prefix : '') + this.b.toString(16)];

                if (fmt === '#rgb') {
                  hex[0] = hex[0][0];
                  hex[1] = hex[1][0];
                  hex[2] = hex[2][0];
                } else if (fmt === '#rrggbbaa') {
                  hex.push((this.a < 16 ? prefix : '') + this.a.toString(16));
                }

                return hex.join('');
              }
              /**
               * @en Convert to rgb value.
               * @zh 将当前颜色转换为 RGB 整数值。
               * @returns RGB integer value. Starting from the lowest valid bit, each 8 bits is the value of the Red, Green, and Blue channels respectively.
               * @example
               * ```
               * const color = Color.YELLOW;
               * color.toRGBValue();
               * ```
               */
              ;

              _proto.toRGBValue = function toRGBValue() {
                return this._val & 0x00ffffff;
              }
              /**
               * @en Read HSV model color and convert to RGB color.
               * @zh 从 HSV 颜色中读入当前颜色。
               * @param h H value。
               * @param s S value。
               * @param v V value。
               * @returns `this`
               * @example
               * ```
               * const color = Color.YELLOW;
               * color.fromHSV(0, 0, 1); // Color {r: 255, g: 255, b: 255, a: 255};
               * ```
               */
              ;

              _proto.fromHSV = function fromHSV(h, s, v) {
                var r = 0;
                var g = 0;
                var b = 0;

                if (s === 0) {
                  r = g = b = v;
                } else if (v === 0) {
                  r = g = b = 0;
                } else {
                  if (h === 1) {
                    h = 0;
                  }

                  h *= 6;
                  var i = Math.floor(h);
                  var f = h - i;
                  var p = v * (1 - s);
                  var q = v * (1 - s * f);
                  var t = v * (1 - s * (1 - f));

                  switch (i) {
                    case 0:
                      r = v;
                      g = t;
                      b = p;
                      break;

                    case 1:
                      r = q;
                      g = v;
                      b = p;
                      break;

                    case 2:
                      r = p;
                      g = v;
                      b = t;
                      break;

                    case 3:
                      r = p;
                      g = q;
                      b = v;
                      break;

                    case 4:
                      r = t;
                      g = p;
                      b = v;
                      break;

                    case 5:
                      r = v;
                      g = p;
                      b = q;
                      break;
                  }
                }

                r *= 255;
                g *= 255;
                b *= 255;
                this._val = (this.a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                return this;
              }
              /**
               * @en Transform to HSV model color.
               * @zh 转换当前颜色为 HSV 颜色。
               * @returns HSV format color
               * @example
               * ```
               * import { Color } from 'cc';
               * const color = Color.YELLOW;
               * color.toHSV(); // {h: 0.1533864541832669, s: 0.9843137254901961, v: 1}
               * ```
               */
              ;

              _proto.toHSV = function toHSV() {
                var r = this.r * toFloat;
                var g = this.g * toFloat;
                var b = this.b * toFloat;
                var hsv = {
                  h: 0,
                  s: 0,
                  v: 0
                };
                var max = Math.max(r, g, b);
                var min = Math.min(r, g, b);
                var delta = 0;
                hsv.v = max;
                hsv.s = max ? (max - min) / max : 0;

                if (!hsv.s) {
                  hsv.h = 0;
                } else {
                  delta = max - min;

                  if (r === max) {
                    hsv.h = (g - b) / delta;
                  } else if (g === max) {
                    hsv.h = 2 + (b - r) / delta;
                  } else {
                    hsv.h = 4 + (r - g) / delta;
                  }

                  hsv.h /= 6;

                  if (hsv.h < 0) {
                    hsv.h += 1.0;
                  }
                }

                return hsv;
              }
              /**
               * @en Set the color.
               * @zh 设置当前颜色使其与指定颜色相等。
               * @param other The specified color.
               * @overload
               * @param [r=0] red component of the color, the range is [0-255]
               * @param [g=0] green component of the color
               * @param [b=0] blue component of the color
               * @param [a=255] alpha component of the color
               * @returns Current color.
               */
              ;

              _proto.set = function set(r, g, b, a) {
                if (typeof r === 'object') {
                  if (r._val != null) {
                    this._val = r._val;
                  } else {
                    g = r.g || 0;
                    b = r.b || 0;
                    a = typeof r.a === 'number' ? r.a : 255;
                    r = r.r || 0;
                    this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                  }
                } else {
                  r = r || 0;
                  g = g || 0;
                  b = b || 0;
                  a = typeof a === 'number' ? a : 255;
                  this._val = (a << 24 >>> 0) + (b << 16) + (g << 8) + (r | 0);
                }

                return this;
              }
              /**
               * @en Multiplies the current color by the specified color.
               * @zh 将当前颜色乘以与指定颜色
               * @param other The specified color.
               */
              ;

              _proto.multiply = function multiply(other) {
                var r = (this._val & 0x000000ff) * other.r >> 8;
                var g = (this._val & 0x0000ff00) * other.g >> 8;
                var b = (this._val & 0x00ff0000) * other.b >> 8;
                var a = ((this._val & 0xff000000) >>> 8) * other.a;
                this._val = a & 0xff000000 | b & 0x00ff0000 | g & 0x0000ff00 | r & 0x000000ff;
                return this;
              }
              /**
               * @legacyPublic
               */
              ;

              _proto._set_r_unsafe = function _set_r_unsafe(red) {
                this._val = (this._val & 0xffffff00 | red) >>> 0;
                return this;
              }
              /**
               * @legacyPublic
               */
              ;

              _proto._set_g_unsafe = function _set_g_unsafe(green) {
                this._val = (this._val & 0xffff00ff | green << 8) >>> 0;
                return this;
              }
              /**
               * @legacyPublic
               */
              ;

              _proto._set_b_unsafe = function _set_b_unsafe(blue) {
                this._val = (this._val & 0xff00ffff | blue << 16) >>> 0;
                return this;
              }
              /**
               * @legacyPublic
               */
              ;

              _proto._set_a_unsafe = function _set_a_unsafe(alpha) {
                this._val = (this._val & 0x00ffffff | alpha << 24) >>> 0;
                return this;
              };

              return Color;
            }(ValueType);
            Color.WHITE = Object.freeze(new Color(255, 255, 255, 255));
            Color.GRAY = Object.freeze(new Color(127, 127, 127, 255));
            Color.BLACK = Object.freeze(new Color(0, 0, 0, 255));
            Color.TRANSPARENT = Object.freeze(new Color(0, 0, 0, 0));
            Color.RED = Object.freeze(new Color(255, 0, 0, 255));
            Color.GREEN = Object.freeze(new Color(0, 255, 0, 255));
            Color.BLUE = Object.freeze(new Color(0, 0, 255, 255));
            Color.CYAN = Object.freeze(new Color(0, 255, 255, 255));
            Color.MAGENTA = Object.freeze(new Color(255, 0, 255, 255));
            Color.YELLOW = Object.freeze(new Color(255, 255, 0, 255));
            legacyCC.Color = Color;
            function color(r, g, b, a) {
              return new Color(r, g, b, a);
            }
            legacyCC.color = color;

            /**
             * @en Representation of 3D vectors and points.
             * @zh 三维向量。
             */

            var Vec3 = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Vec3, _ValueType);

              // we use -z for view-dir

              /**
               * @en return a Vec3 object with x = 0, y = 0, z = 0.
               * @zh 将目标赋值为零向量
               */
              Vec3.zero = function zero(out) {
                out.x = 0;
                out.y = 0;
                out.z = 0;
                return out;
              }
              /**
               * @en Obtains a clone of the given vector object
               * @zh 获得指定向量的拷贝
               */
              ;

              Vec3.clone = function clone(a) {
                return new Vec3(a.x, a.y, a.z);
              }
              /**
               * @en Copy the target vector and save the results to out vector object
               * @zh 复制目标向量
               */
              ;

              Vec3.copy = function copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                return out;
              }
              /**
               * @en Sets the out vector with the given x, y and z values
               * @zh 设置向量值
               */
              ;

              Vec3.set = function set(out, x, y, z) {
                out.x = x;
                out.y = y;
                out.z = z;
                return out;
              }
              /**
               * @en Element-wise vector addition and save the results to out vector object
               * @zh 逐元素向量加法
               */
              ;

              Vec3.add = function add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                out.z = a.z + b.z;
                return out;
              }
              /**
               * @en Element-wise vector subtraction and save the results to out vector object
               * @zh 逐元素向量减法
               */
              ;

              Vec3.subtract = function subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                out.z = a.z - b.z;
                return out;
              }
              /**
               * @en Element-wise vector multiplication and save the results to out vector object
               * @zh 逐元素向量乘法 (分量积)
               */
              ;

              Vec3.multiply = function multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                out.z = a.z * b.z;
                return out;
              }
              /**
               * @en Element-wise vector division and save the results to out vector object
               * @zh 逐元素向量除法
               */
              ;

              Vec3.divide = function divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                out.z = a.z / b.z;
                return out;
              }
              /**
               * @en Rounds up by elements of the vector and save the results to out vector object
               * @zh 逐元素向量向上取整
               */
              ;

              Vec3.ceil = function ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                out.z = Math.ceil(a.z);
                return out;
              }
              /**
               * @en Element-wise rounds down of the current vector and save the results to the out vector
               * @zh 逐元素向量向下取整
               */
              ;

              Vec3.floor = function floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                out.z = Math.floor(a.z);
                return out;
              }
              /**
               * @en Calculates element-wise minimum values and save to the out vector
               * @zh 逐元素向量最小值
               */
              ;

              Vec3.min = function min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                out.z = Math.min(a.z, b.z);
                return out;
              }
              /**
               * @en Calculates element-wise maximum values and save to the out vector
               * @zh 逐元素向量最大值
               */
              ;

              Vec3.max = function max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                out.z = Math.max(a.z, b.z);
                return out;
              }
              /**
               * @en Calculates element-wise round results and save to the out vector
               * @zh 逐元素向量四舍五入取整
               */
              ;

              Vec3.round = function round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                out.z = Math.round(a.z);
                return out;
              }
              /**
               * @en Vector scalar multiplication and save the results to out vector object
               * @zh 向量标量乘法
               */
              ;

              Vec3.multiplyScalar = function multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                return out;
              }
              /**
               * @en Element-wise multiplication and addition with the equation: a + b * scale
               * @zh 逐元素向量乘加: A + B * scale
               */
              ;

              Vec3.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                return out;
              }
              /**
               * @en Calculates the euclidean distance of two vectors
               * @zh 求两向量的欧氏距离
               */
              ;

              Vec3.distance = function distance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                var z = b.z - a.z;
                return Math.sqrt(x * x + y * y + z * z);
              }
              /**
               * @en Calculates the squared euclidean distance of two vectors
               * @zh 求两向量的欧氏距离平方
               */
              ;

              Vec3.squaredDistance = function squaredDistance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                var z = b.z - a.z;
                return x * x + y * y + z * z;
              }
              /**
               * @en Calculates the length of the vector
               * @zh 求向量长度
               */
              ;

              Vec3.len = function len(a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                return Math.sqrt(x * x + y * y + z * z);
              }
              /**
               * @en Calculates the squared length of the vector
               * @zh 求向量长度平方
               */
              ;

              Vec3.lengthSqr = function lengthSqr(a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                return x * x + y * y + z * z;
              }
              /**
               * @en Sets each element to its negative value
               * @zh 逐元素向量取负
               */
              ;

              Vec3.negate = function negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                return out;
              }
              /**
               * @en Sets each element to its inverse value, zero value will become Infinity
               * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
               */
              ;

              Vec3.invert = function invert(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                out.z = 1.0 / a.z;
                return out;
              }
              /**
               * @en Sets each element to its inverse value, zero value will remain zero
               * @zh 逐元素向量取倒数，接近 0 时返回 0
               */
              ;

              Vec3.invertSafe = function invertSafe(out, a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;

                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }

                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }

                if (Math.abs(z) < EPSILON) {
                  out.z = 0;
                } else {
                  out.z = 1.0 / z;
                }

                return out;
              }
              /**
               * @en Sets the normalized vector to the out vector
               * @zh 归一化向量
               */
              ;

              Vec3.normalize = function normalize(out, a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var len = x * x + y * y + z * z;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                  out.z = z * len;
                }

                return out;
              }
              /**
               * @en Calculates the dot product of the vector
               * @zh 向量点积（数量积）
               */
              ;

              Vec3.dot = function dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z;
              }
              /**
               * @en Calculates the cross product of the vector
               * @zh 向量叉积（向量积）
               */
              ;

              Vec3.cross = function cross(out, a, b) {
                var ax = a.x,
                    ay = a.y,
                    az = a.z;
                var bx = b.x,
                    by = b.y,
                    bz = b.z;
                out.x = ay * bz - az * by;
                out.y = az * bx - ax * bz;
                out.z = ax * by - ay * bx;
                return out;
              }
              /**
               * @en Calculates the linear interpolation between two vectors with a given ratio
               * @zh 逐元素向量线性插值： A + t * (B - A)
               */
              ;

              Vec3.lerp = function lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                return out;
              }
              /**
               * @en Generates a uniformly distributed random vector points from center to the surface of the unit sphere
               * @zh 生成一个在单位球体上均匀分布的随机向量
               * @param scale vector length
               */
              ;

              Vec3.random = function random$1(out, scale) {
                scale = scale || 1.0;
                var phi = random() * 2.0 * Math.PI;
                var cosTheta = random() * 2 - 1;
                var sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
                out.x = sinTheta * Math.cos(phi) * scale;
                out.y = sinTheta * Math.sin(phi) * scale;
                out.z = cosTheta * scale;
                return out;
              }
              /**
               * @en Vector and fourth order matrix multiplication, will complete the vector with a fourth value as one
               * @zh 向量与四维矩阵乘法，默认向量第四位为 1。
               */
              ;

              Vec3.transformMat4 = function transformMat4(out, a, m) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var rhw = m.m03 * x + m.m07 * y + m.m11 * z + m.m15;
                rhw = rhw ? Math.abs(1 / rhw) : 1;
                out.x = (m.m00 * x + m.m04 * y + m.m08 * z + m.m12) * rhw;
                out.y = (m.m01 * x + m.m05 * y + m.m09 * z + m.m13) * rhw;
                out.z = (m.m02 * x + m.m06 * y + m.m10 * z + m.m14) * rhw;
                return out;
              }
              /**
               * @en Vector and fourth order matrix multiplication, will complete the vector with a fourth element as one
               * @zh 向量与四维矩阵乘法，默认向量第四位为 0。
               */
              ;

              Vec3.transformMat4Normal = function transformMat4Normal(out, a, m) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var rhw = m.m03 * x + m.m07 * y + m.m11 * z;
                rhw = rhw ? Math.abs(1 / rhw) : 1;
                out.x = (m.m00 * x + m.m04 * y + m.m08 * z) * rhw;
                out.y = (m.m01 * x + m.m05 * y + m.m09 * z) * rhw;
                out.z = (m.m02 * x + m.m06 * y + m.m10 * z) * rhw;
                return out;
              }
              /**
               * @en Vector and third order matrix multiplication
               * @zh 向量与三维矩阵乘法
               */
              ;

              Vec3.transformMat3 = function transformMat3(out, a, m) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                out.x = x * m.m00 + y * m.m03 + z * m.m06;
                out.y = x * m.m01 + y * m.m04 + z * m.m07;
                out.z = x * m.m02 + y * m.m05 + z * m.m08;
                return out;
              }
              /**
               * @en Affine transformation vector
               * @zh 向量仿射变换
               */
              ;

              Vec3.transformAffine = function transformAffine(out, v, m) {
                var x = v.x;
                var y = v.y;
                var z = v.z;
                out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12;
                out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13;
                out.x = m.m02 * x + m.m06 * y + m.m10 * z + m.m14;
                return out;
              }
              /**
               * @en Vector quaternion multiplication
               * @zh 向量四元数乘法
               */
              ;

              Vec3.transformQuat = function transformQuat(out, a, q) {
                // benchmarks: http://jsperf.com/quaternion-transform-Vec3-implementations
                // calculate quat * vec
                var ix = q.w * a.x + q.y * a.z - q.z * a.y;
                var iy = q.w * a.y + q.z * a.x - q.x * a.z;
                var iz = q.w * a.z + q.x * a.y - q.y * a.x;
                var iw = -q.x * a.x - q.y * a.y - q.z * a.z; // calculate result * inverse quat

                out.x = ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y;
                out.y = iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z;
                out.z = iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x;
                return out;
              }
              /**
               * @en Transforms the current vector with given scale, rotation and translation in order
               * @zh 以缩放 -> 旋转 -> 平移顺序变换向量
               */
              ;

              Vec3.transformRTS = function transformRTS(out, a, r, t, s) {
                var x = a.x * s.x;
                var y = a.y * s.y;
                var z = a.z * s.z;
                var ix = r.w * x + r.y * z - r.z * y;
                var iy = r.w * y + r.z * x - r.x * z;
                var iz = r.w * z + r.x * y - r.y * x;
                var iw = -r.x * x - r.y * y - r.z * z;
                out.x = ix * r.w + iw * -r.x + iy * -r.z - iz * -r.y + t.x;
                out.y = iy * r.w + iw * -r.y + iz * -r.x - ix * -r.z + t.y;
                out.z = iz * r.w + iw * -r.z + ix * -r.y - iy * -r.x + t.z;
                return out;
              }
              /**
               * @en Transforms the current vector with given scale, rotation and translation in reverse order
               * @zh 以平移 -> 旋转 -> 缩放顺序逆变换向量
               */
              ;

              Vec3.transformInverseRTS = function transformInverseRTS(out, a, r, t, s) {
                var x = a.x - t.x;
                var y = a.y - t.y;
                var z = a.z - t.z;
                var ix = r.w * x - r.y * z + r.z * y;
                var iy = r.w * y - r.z * x + r.x * z;
                var iz = r.w * z - r.x * y + r.y * x;
                var iw = r.x * x + r.y * y + r.z * z;
                out.x = (ix * r.w + iw * r.x + iy * r.z - iz * r.y) / s.x;
                out.y = (iy * r.w + iw * r.y + iz * r.x - ix * r.z) / s.y;
                out.z = (iz * r.w + iw * r.z + ix * r.y - iy * r.x) / s.z;
                return out;
              }
              /**
               * @en Rotates the vector with specified angle around X axis
               * @zh 绕 X 轴旋转向量指定弧度
               * @param v rotation vector
               * @param o center of rotation
               * @param a radius of rotation
               */
              ;

              Vec3.rotateX = function rotateX(out, v, o, a) {
                // Translate point to the origin
                var x = v.x - o.x;
                var y = v.y - o.y;
                var z = v.z - o.z; // perform rotation

                var cos = Math.cos(a);
                var sin = Math.sin(a);
                var rx = x;
                var ry = y * cos - z * sin;
                var rz = y * sin + z * cos; // translate to correct position

                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              }
              /**
               * @en Rotates the vector with specified angle around Y axis
               * @zh 绕 Y 轴旋转向量指定弧度
               * @param v rotation vector
               * @param o center of rotation
               * @param a radius of rotation
               */
              ;

              Vec3.rotateY = function rotateY(out, v, o, a) {
                // Translate point to the origin
                var x = v.x - o.x;
                var y = v.y - o.y;
                var z = v.z - o.z; // perform rotation

                var cos = Math.cos(a);
                var sin = Math.sin(a);
                var rx = z * sin + x * cos;
                var ry = y;
                var rz = z * cos - x * sin; // translate to correct position

                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              }
              /**
               * @en Rotates the vector with specified angle around Z axis
               * @zh 绕 Z 轴旋转向量指定弧度
               * @param v rotation vector
               * @param o center of rotation
               * @param a radius of rotation
               */
              ;

              Vec3.rotateZ = function rotateZ(out, v, o, a) {
                // Translate point to the origin
                var x = v.x - o.x;
                var y = v.y - o.y;
                var z = v.z - o.z; // perform rotation

                var cos = Math.cos(a);
                var sin = Math.sin(a);
                var rx = x * cos - y * sin;
                var ry = x * sin + y * cos;
                var rz = z; // translate to correct position

                out.x = rx + o.x;
                out.y = ry + o.y;
                out.z = rz + o.z;
                return out;
              }
              /**
               * @en Converts the given vector to an array
               * @zh 向量转数组
               * @param ofs Array Start Offset
               */
              ;

              Vec3.toArray = function toArray(out, v, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                out[ofs + 2] = v.z;
                return out;
              }
              /**
               * @en Converts the given array to a vector
               * @zh 数组转向量
               * @param ofs Array Start Offset
               */
              ;

              Vec3.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                return out;
              }
              /**
               * @en Check the equality of the two given vectors
               * @zh 向量等价判断
               */
              ;

              Vec3.strictEquals = function strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z;
              }
              /**
               * @en Check whether the two given vectors are approximately equivalent
               * @zh 排除浮点数误差的向量近似等价判断
               */
              ;

              Vec3.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                var a0 = a.x,
                    a1 = a.y,
                    a2 = a.z;
                var b0 = b.x,
                    b1 = b.y,
                    b2 = b.z;
                return Math.abs(a0 - b0) <= epsilon * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= epsilon * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= epsilon * Math.max(1.0, Math.abs(a2), Math.abs(b2));
              }
              /**
               * @en Calculates the radian angle between two vectors
               * @zh 求两向量夹角弧度
               */
              ;

              Vec3.angle = function angle(a, b) {
                Vec3.normalize(v3_1, a);
                Vec3.normalize(v3_2, b);
                var cosine = Vec3.dot(v3_1, v3_2);

                if (cosine > 1.0) {
                  return 0;
                }

                if (cosine < -1.0) {
                  return Math.PI;
                }

                return Math.acos(cosine);
              }
              /**
               * @en Calculates the projection vector on the specified plane
               * @zh 计算向量在指定平面上的投影
               * @param a projection vector
               * @param n the normal line of specified plane
               */
              ;

              Vec3.projectOnPlane = function projectOnPlane(out, a, n) {
                return Vec3.subtract(out, a, Vec3.project(out, a, n));
              }
              /**
               * @en Calculates the projection on the specified vector
               * @zh 计算向量在指定向量上的投影
               * @param a projection vector
               * @param n target vector
               */
              ;

              Vec3.project = function project(out, a, b) {
                var sqrLen = Vec3.lengthSqr(b);

                if (sqrLen < 0.000001) {
                  return Vec3.set(out, 0, 0, 0);
                } else {
                  return Vec3.multiplyScalar(out, b, Vec3.dot(a, b) / sqrLen);
                }
              }
              /**
               * @en x component.
               * @zh x 分量。
               */
              ;

              function Vec3(x, y, z) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.x = x.x;
                  _this.y = x.y;
                  _this.z = x.z;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                  _this.z = z || 0;
                }

                return _this;
              }
              /**
               * @en clone a Vec3 value
               * @zh 克隆当前向量。
               */


              var _proto = Vec3.prototype;

              _proto.clone = function clone() {
                return new Vec3(this.x, this.y, this.z);
              }
              /**
               * @en Set the current vector value with the given vector.
               * @zh 设置当前向量使其与指定向量相等。
               * @param other Specified vector
               * @returns `this`
               */
              ;

              _proto.set = function set(x, y, z) {
                if (x && typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                }

                return this;
              }
              /**
               * @en Check whether the vector approximately equals another one.
               * @zh 判断当前向量是否在误差范围内与指定向量相等。
               * @param other Specified vector
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z));
              }
              /**
               * @en Check whether the vector approximately equals another one.
               * @zh 判断当前向量是否在误差范围内与指定分量的向量相等。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.equals3f = function equals3f(x, y, z, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y)) && Math.abs(this.z - z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(z));
              }
              /**
               * @en Check whether the current vector strictly equals another Vec3.
               * @zh 判断当前向量是否与指定向量相等。
               * @param other specified vector
               * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.strictEquals = function strictEquals(other) {
                return this.x === other.x && this.y === other.y && this.z === other.z;
              }
              /**
               * @en Check whether the current vector strictly equals another Vec3.
               * @zh 判断当前向量是否与指定分量的向量相等。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.strictEquals3f = function strictEquals3f(x, y, z) {
                return this.x === x && this.y === y && this.z === z;
              }
              /**
               * @en Transform to string with vector information.
               * @zh 返回当前向量的字符串表示。
               * @returns The string with vector information
               */
              ;

              _proto.toString = function toString() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.z.toFixed(2) + ")";
              }
              /**
               * @en Calculate linear interpolation result between this vector and another one with given ratio.
               * @zh 根据指定的插值比率，从当前向量到目标向量之间做插值。
               * @param to Target vector
               * @param ratio The interpolation coefficient.The range is [0,1].
               */
              ;

              _proto.lerp = function lerp(to, ratio) {
                this.x += ratio * (to.x - this.x);
                this.y += ratio * (to.y - this.y);
                this.z += ratio * (to.z - this.z);
                return this;
              }
              /**
               * @en Adds the current vector with another one and return this
               * @zh 向量加法。将当前向量与指定向量的相加
               * @param other specified vector
               */
              ;

              _proto.add = function add(other) {
                this.x += other.x;
                this.y += other.y;
                this.z += other.z;
                return this;
              }
              /**
               * @en Adds the current vector with another one and return this
               * @zh 向量加法。将当前向量与指定分量的向量相加
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               */
              ;

              _proto.add3f = function add3f(x, y, z) {
                this.x += x;
                this.y += y;
                this.z += z;
                return this;
              }
              /**
               * @en Subtracts one vector from this, and returns this.
               * @zh 向量减法。将当前向量减去指定向量的结果。
               * @param other specified vector
               */
              ;

              _proto.subtract = function subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                this.z -= other.z;
                return this;
              }
              /**
               * @en Subtracts one vector from this, and returns this.
               * @zh 向量减法。将当前向量减去指定分量的向量
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               */
              ;

              _proto.subtract3f = function subtract3f(x, y, z) {
                this.x -= x;
                this.y -= y;
                this.z -= z;
                return this;
              }
              /**
               * @en Multiplies the current vector with a number, and returns this.
               * @zh 向量数乘。将当前向量数乘指定标量
               * @param scalar scalar number
               */
              ;

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec3.multiply for vector * vector operation');
                }

                this.x *= scalar;
                this.y *= scalar;
                this.z *= scalar;
                return this;
              }
              /**
               * @en Multiplies the current vector with another one and return this
               * @zh 向量乘法。将当前向量乘以与指定向量的结果赋值给当前向量。
               * @param other specified vector
               */
              ;

              _proto.multiply = function multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec3.scale for vector * scalar operation');
                }

                this.x *= other.x;
                this.y *= other.y;
                this.z *= other.z;
                return this;
              }
              /**
               * @en Multiplies the current vector with another one and return this
               * @zh 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               */
              ;

              _proto.multiply3f = function multiply3f(x, y, z) {
                this.x *= x;
                this.y *= y;
                this.z *= z;
                return this;
              }
              /**
               * @en Element-wisely divides this vector with another one, and return this.
               * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
               * @param other specified vector
               */
              ;

              _proto.divide = function divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                this.z /= other.z;
                return this;
              }
              /**
               * @en Element-wisely divides this vector with another one, and return this.
               * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               */
              ;

              _proto.divide3f = function divide3f(x, y, z) {
                this.x /= x;
                this.y /= y;
                this.z /= z;
                return this;
              }
              /**
               * @en Sets each component of this vector with its negative value
               * @zh 将当前向量的各个分量取反
               */
              ;

              _proto.negative = function negative() {
                this.x = -this.x;
                this.y = -this.y;
                this.z = -this.z;
                return this;
              }
              /**
               * @en Clamp the vector between minInclusive and maxInclusive.
               * @zh 设置当前向量的值，使其各个分量都处于指定的范围内。
               * @param minInclusive Minimum value allowed
               * @param maxInclusive Maximum value allowed
               * @returns `this`
               */
              ;

              _proto.clampf = function clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
                return this;
              }
              /**
               * @en Calculates the dot product with another vector
               * @zh 向量点乘。
               * @param other specified vector
               * @returns The result of calculates the dot product with another vector
               */
              ;

              _proto.dot = function dot(other) {
                return this.x * other.x + this.y * other.y + this.z * other.z;
              }
              /**
               * @en Calculates the cross product with another vector.
               * @zh 向量叉乘。将当前向量左叉乘指定向量
               * @param other specified vector
               */
              ;

              _proto.cross = function cross(other) {
                var ax = this.x,
                    ay = this.y,
                    az = this.z;
                var bx = other.x,
                    by = other.y,
                    bz = other.z;
                this.x = ay * bz - az * by;
                this.y = az * bx - ax * bz;
                this.z = ax * by - ay * bx;
                return this;
              }
              /**
               * @en Returns the length of this vector.
               * @zh 计算向量的长度（模）。
               * @returns Length of vector
               */
              ;

              _proto.length = function length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
              }
              /**
               * @en Returns the squared length of this vector.
               * @zh 计算向量长度（模）的平方。
               * @returns the squared length of this vector
               */
              ;

              _proto.lengthSqr = function lengthSqr() {
                return this.x * this.x + this.y * this.y + this.z * this.z;
              }
              /**
               * @en Normalize the current vector.
               * @zh 将当前向量归一化
               */
              ;

              _proto.normalize = function normalize() {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var len = x * x + y * y + z * z;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x = x * len;
                  this.y = y * len;
                  this.z = z * len;
                }

                return this;
              }
              /**
               * @en Transforms the vec3 with a mat4. 4th vector component is implicitly '1'
               * @zh 将当前向量视为 w 分量为 1 的四维向量，应用四维矩阵变换到当前矩阵
               * @param matrix matrix to transform with
               */
              ;

              _proto.transformMat4 = function transformMat4(matrix) {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var rhw = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15;
                rhw = rhw ? 1 / rhw : 1;
                this.x = (matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12) * rhw;
                this.y = (matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13) * rhw;
                this.z = (matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14) * rhw;
                return this;
              };

              return Vec3;
            }(ValueType);
            Vec3.UNIT_X = Object.freeze(new Vec3(1, 0, 0));
            Vec3.UNIT_Y = Object.freeze(new Vec3(0, 1, 0));
            Vec3.UNIT_Z = Object.freeze(new Vec3(0, 0, 1));
            Vec3.RIGHT = Object.freeze(new Vec3(1, 0, 0));
            Vec3.UP = Object.freeze(new Vec3(0, 1, 0));
            Vec3.FORWARD = Object.freeze(new Vec3(0, 0, -1));
            Vec3.ZERO = Object.freeze(new Vec3(0, 0, 0));
            Vec3.ONE = Object.freeze(new Vec3(1, 1, 1));
            Vec3.NEG_ONE = Object.freeze(new Vec3(-1, -1, -1));
            var v3_1 = new Vec3();
            var v3_2 = new Vec3();
            legacyCC.Vec3 = Vec3;
            function v3(x, y, z) {
              return new Vec3(x, y, z);
            }
            legacyCC.v3 = v3;

            /**
             * @en Mathematical 3x3 matrix.
             * @zh 表示三维（3x3）矩阵。
             */

            var Mat3 = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Mat3, _ValueType);

              /**
               * @en Clone a matrix and save the results to out matrix
               * @zh 获得指定矩阵的拷贝
               */
              Mat3.clone = function clone(a) {
                return new Mat3(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08);
              }
              /**
               * @en Copy content of a matrix into another and save the results to out matrix
               * @zh 复制目标矩阵
               */
              ;

              Mat3.copy = function copy(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m03;
                out.m04 = a.m04;
                out.m05 = a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                return out;
              }
              /**
               * @en Sets the elements of a matrix with the given values and save the results to out matrix
               * @zh 设置矩阵值
               */
              ;

              Mat3.set = function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
                out.m00 = m00;
                out.m01 = m01;
                out.m02 = m02;
                out.m03 = m10;
                out.m04 = m11;
                out.m05 = m12;
                out.m06 = m20;
                out.m07 = m21;
                out.m08 = m22;
                return out;
              }
              /**
               * @en Reset the out matrix to an identity matrix
               * @zh 将目标赋值为单位矩阵
               */
              ;

              Mat3.identity = function identity(out) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 1;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              }
              /**
               * @en Transposes a matrix and save the results to out matrix
               * @zh 转置矩阵
               */
              ;

              Mat3.transpose = function transpose(out, a) {
                // If we are transposing ourselves we can skip a few steps but have to cache some values
                if (out === a) {
                  var a01 = a.m01;
                  var a02 = a.m02;
                  var a12 = a.m05;
                  out.m01 = a.m03;
                  out.m02 = a.m06;
                  out.m03 = a01;
                  out.m05 = a.m07;
                  out.m06 = a02;
                  out.m07 = a12;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m03;
                  out.m02 = a.m06;
                  out.m03 = a.m01;
                  out.m04 = a.m04;
                  out.m05 = a.m07;
                  out.m06 = a.m02;
                  out.m07 = a.m05;
                  out.m08 = a.m08;
                }

                return out;
              }
              /**
               * @en Inverts a matrix. When matrix is not invertible the matrix will be set to zeros.
               * @zh 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
               */
              ;

              Mat3.invert = function invert(out, a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var b01 = a22 * a11 - a12 * a21;
                var b11 = -a22 * a10 + a12 * a20;
                var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

                var det = a00 * b01 + a01 * b11 + a02 * b21;

                if (det === 0) {
                  out.m00 = 0;
                  out.m01 = 0;
                  out.m02 = 0;
                  out.m03 = 0;
                  out.m04 = 0;
                  out.m05 = 0;
                  out.m06 = 0;
                  out.m07 = 0;
                  out.m08 = 0;
                  return out;
                }

                det = 1.0 / det;
                out.m00 = b01 * det;
                out.m01 = (-a22 * a01 + a02 * a21) * det;
                out.m02 = (a12 * a01 - a02 * a11) * det;
                out.m03 = b11 * det;
                out.m04 = (a22 * a00 - a02 * a20) * det;
                out.m05 = (-a12 * a00 + a02 * a10) * det;
                out.m06 = b21 * det;
                out.m07 = (-a21 * a00 + a01 * a20) * det;
                out.m08 = (a11 * a00 - a01 * a10) * det;
                return out;
              }
              /**
               * @en Calculates the determinant of a matrix
               * @zh 矩阵行列式
               */
              ;

              Mat3.determinant = function determinant(a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
              }
              /**
               * @en Multiply two matrices explicitly and save the results to out matrix
               * @zh 矩阵乘法
               */
              ;

              Mat3.multiply = function multiply(out, a, b) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var b00 = b.m00;
                var b01 = b.m01;
                var b02 = b.m02;
                var b10 = b.m03;
                var b11 = b.m04;
                var b12 = b.m05;
                var b20 = b.m06;
                var b21 = b.m07;
                var b22 = b.m08;
                out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return out;
              }
              /**
               * @en Take the first third order of the fourth order matrix and multiply by the third order matrix
               * @zh 取四阶矩阵的前三阶，与三阶矩阵相乘
               */
              ;

              Mat3.multiplyMat4 = function multiplyMat4(out, a, b) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var b00 = b.m00;
                var b01 = b.m01;
                var b02 = b.m02;
                var b10 = b.m04;
                var b11 = b.m05;
                var b12 = b.m06;
                var b20 = b.m08;
                var b21 = b.m09;
                var b22 = b.m10;
                out.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                out.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                out.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                out.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                out.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                out.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                out.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                out.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                out.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return out;
              }
              /**
               * @en Multiply a matrix with a translation vector given by a translation offset.
               * @zh 在给定矩阵变换基础上加入变换
               */
              ;

              Mat3.transform = function transform(out, a, v) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var x = v.x;
                var y = v.y;
                out.m00 = a00;
                out.m01 = a01;
                out.m02 = a02;
                out.m03 = a10;
                out.m04 = a11;
                out.m05 = a12;
                out.m06 = x * a00 + y * a10 + a20;
                out.m07 = x * a01 + y * a11 + a21;
                out.m08 = x * a02 + y * a12 + a22;
                return out;
              }
              /**
               * @en Multiply a matrix with a scale matrix given by a scale vector and save the results to out matrix
               * @zh 在给定矩阵变换基础上加入新缩放变换
               */
              ;

              Mat3.scale = function scale(out, a, v) {
                var x = v.x;
                var y = v.y;
                out.m00 = x * a.m00;
                out.m01 = x * a.m01;
                out.m02 = x * a.m02;
                out.m03 = y * a.m03;
                out.m04 = y * a.m04;
                out.m05 = y * a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                return out;
              }
              /**
               * @en Rotates the transform by the given angle and save the results into the out matrix
               * @zh 在给定矩阵变换基础上加入新旋转变换
               * @param rad radius of rotation
               */
              ;

              Mat3.rotate = function rotate(out, a, rad) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a10 = a.m03;
                var a11 = a.m04;
                var a12 = a.m05;
                var a20 = a.m06;
                var a21 = a.m07;
                var a22 = a.m08;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                out.m00 = c * a00 + s * a10;
                out.m01 = c * a01 + s * a11;
                out.m02 = c * a02 + s * a12;
                out.m03 = c * a10 - s * a00;
                out.m04 = c * a11 - s * a01;
                out.m05 = c * a12 - s * a02;
                out.m06 = a20;
                out.m07 = a21;
                out.m08 = a22;
                return out;
              }
              /**
               * @en Copies the first third order matrix of a fourth order matrix to the out third order matrix
               * @zh 取四阶矩阵的前三阶
               */
              ;

              Mat3.fromMat4 = function fromMat4(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m04;
                out.m04 = a.m05;
                out.m05 = a.m06;
                out.m06 = a.m08;
                out.m07 = a.m09;
                out.m08 = a.m10;
                return out;
              }
              /**
               * @en Sets a third order matrix with view direction and up direction. Then save the results to out matrix
               * @zh 根据视口前方向和上方向计算矩阵
               * @param view The view direction, it`s must be normalized.
               * @param up The view up direction, it`s must be normalized, default value is (0, 1, 0).
               */
              ;

              Mat3.fromViewUp = function fromViewUp(out, view, up) {
                if (Vec3.lengthSqr(view) < EPSILON * EPSILON) {
                  Mat3.identity(out);
                  return out;
                }

                up = up || Vec3.UNIT_Y;
                Vec3.normalize(v3_1$1, Vec3.cross(v3_1$1, up, view));

                if (Vec3.lengthSqr(v3_1$1) < EPSILON * EPSILON) {
                  Mat3.identity(out);
                  return out;
                }

                Vec3.cross(v3_2$1, view, v3_1$1);
                Mat3.set(out, v3_1$1.x, v3_1$1.y, v3_1$1.z, v3_2$1.x, v3_2$1.y, v3_2$1.z, view.x, view.y, view.z);
                return out;
              }
              /**
               * @en Sets the given matrix with a translation vector and save the results to out matrix
               * @zh 计算位移矩阵
               */
              ;

              Mat3.fromTranslation = function fromTranslation(out, v) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 1;
                out.m05 = 0;
                out.m06 = v.x;
                out.m07 = v.y;
                out.m08 = 1;
                return out;
              }
              /**
               * @en Sets the given matrix with a scale vector and save the results to out matrix
               * @zh 计算缩放矩阵
               */
              ;

              Mat3.fromScaling = function fromScaling(out, v) {
                out.m00 = v.x;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = v.y;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              }
              /**
               * @en Sets the given matrix with a given angle and save the results to out matrix
               * @zh 计算旋转矩阵
               */
              ;

              Mat3.fromRotation = function fromRotation(out, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                out.m00 = c;
                out.m01 = s;
                out.m02 = 0;
                out.m03 = -s;
                out.m04 = c;
                out.m05 = 0;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 1;
                return out;
              }
              /**
               * @en Sets the given matrix with the given quaternion and save the results to out matrix
               * @zh 根据四元数旋转信息计算矩阵
               */
              ;

              Mat3.fromQuat = function fromQuat(out, q) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var yx = y * x2;
                var yy = y * y2;
                var zx = z * x2;
                var zy = z * y2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                out.m00 = 1 - yy - zz;
                out.m03 = yx - wz;
                out.m06 = zx + wy;
                out.m01 = yx + wz;
                out.m04 = 1 - xx - zz;
                out.m07 = zy - wx;
                out.m02 = zx - wy;
                out.m05 = zy + wx;
                out.m08 = 1 - xx - yy;
                return out;
              }
              /**
               * @en Calculates the upper-left 3x3 matrix of a 4x4 matrix's inverse transpose
               * @zh 计算指定四维矩阵的逆转置三维矩阵
               */
              ;

              Mat3.inverseTransposeMat4 = function inverseTransposeMat4(out, a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (!det) {
                  return null;
                }

                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m03 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m04 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m05 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m06 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m07 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m08 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                return out;
              }
              /**
               * @en Transform a matrix object to a flat array
               * @zh 矩阵转数组
               * @param ofs Array Start Offset
               */
              ;

              Mat3.toArray = function toArray(out, m, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = m.m00;
                out[ofs + 1] = m.m01;
                out[ofs + 2] = m.m02;
                out[ofs + 3] = m.m03;
                out[ofs + 4] = m.m04;
                out[ofs + 5] = m.m05;
                out[ofs + 6] = m.m06;
                out[ofs + 7] = m.m07;
                out[ofs + 8] = m.m08;
                return out;
              }
              /**
               * @en Generates or sets a matrix with a flat array
               * @zh 数组转矩阵
               * @param ofs Array Start Offset
               */
              ;

              Mat3.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.m00 = arr[ofs + 0];
                out.m01 = arr[ofs + 1];
                out.m02 = arr[ofs + 2];
                out.m03 = arr[ofs + 3];
                out.m04 = arr[ofs + 4];
                out.m05 = arr[ofs + 5];
                out.m06 = arr[ofs + 6];
                out.m07 = arr[ofs + 7];
                out.m08 = arr[ofs + 8];
                return out;
              }
              /**
               * @en Adds two matrices and save the results to out matrix
               * @zh 逐元素矩阵加法
               */
              ;

              Mat3.add = function add(out, a, b) {
                out.m00 = a.m00 + b.m00;
                out.m01 = a.m01 + b.m01;
                out.m02 = a.m02 + b.m02;
                out.m03 = a.m03 + b.m03;
                out.m04 = a.m04 + b.m04;
                out.m05 = a.m05 + b.m05;
                out.m06 = a.m06 + b.m06;
                out.m07 = a.m07 + b.m07;
                out.m08 = a.m08 + b.m08;
                return out;
              }
              /**
               * @en Subtracts matrix b from matrix a and save the results to out matrix
               * @zh 逐元素矩阵减法
               */
              ;

              Mat3.subtract = function subtract(out, a, b) {
                out.m00 = a.m00 - b.m00;
                out.m01 = a.m01 - b.m01;
                out.m02 = a.m02 - b.m02;
                out.m03 = a.m03 - b.m03;
                out.m04 = a.m04 - b.m04;
                out.m05 = a.m05 - b.m05;
                out.m06 = a.m06 - b.m06;
                out.m07 = a.m07 - b.m07;
                out.m08 = a.m08 - b.m08;
                return out;
              }
              /**
               * @en Multiply each element of a matrix by a scalar number and save the results to out matrix
               * @zh 矩阵标量乘法
               */
              ;

              Mat3.multiplyScalar = function multiplyScalar(out, a, b) {
                out.m00 = a.m00 * b;
                out.m01 = a.m01 * b;
                out.m02 = a.m02 * b;
                out.m03 = a.m03 * b;
                out.m04 = a.m04 * b;
                out.m05 = a.m05 * b;
                out.m06 = a.m06 * b;
                out.m07 = a.m07 * b;
                out.m08 = a.m08 * b;
                return out;
              }
              /**
               * @en Adds two matrices after multiplying each element of the second operand by a scalar number. And save the results to out matrix.
               * @zh 逐元素矩阵标量乘加: A + B * scale
               */
              ;

              Mat3.multiplyScalarAndAdd = function multiplyScalarAndAdd(out, a, b, scale) {
                out.m00 = b.m00 * scale + a.m00;
                out.m01 = b.m01 * scale + a.m01;
                out.m02 = b.m02 * scale + a.m02;
                out.m03 = b.m03 * scale + a.m03;
                out.m04 = b.m04 * scale + a.m04;
                out.m05 = b.m05 * scale + a.m05;
                out.m06 = b.m06 * scale + a.m06;
                out.m07 = b.m07 * scale + a.m07;
                out.m08 = b.m08 * scale + a.m08;
                return out;
              }
              /**
               * @en Returns whether the specified matrices are equal.
               * @zh 矩阵等价判断
               */
              ;

              Mat3.strictEquals = function strictEquals(a, b) {
                return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08;
              }
              /**
               * @en Returns whether the specified matrices are approximately equal.
               * @zh 排除浮点数误差的矩阵近似等价判断
               */
              ;

              Mat3.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08));
              }
              /**
               * @en Value at column 0 row 0 of the matrix.
               * @zh 矩阵第 0 列第 0 行的元素。
               */
              ;

              function Mat3(m00, m01, m02, m03, m04, m05, m06, m07, m08) {
                var _this;

                if (m00 === void 0) {
                  m00 = 1;
                }

                if (m01 === void 0) {
                  m01 = 0;
                }

                if (m02 === void 0) {
                  m02 = 0;
                }

                if (m03 === void 0) {
                  m03 = 0;
                }

                if (m04 === void 0) {
                  m04 = 1;
                }

                if (m05 === void 0) {
                  m05 = 0;
                }

                if (m06 === void 0) {
                  m06 = 0;
                }

                if (m07 === void 0) {
                  m07 = 0;
                }

                if (m08 === void 0) {
                  m08 = 1;
                }

                _this = _ValueType.call(this) || this;

                if (typeof m00 === 'object') {
                  _this.m00 = m00.m00;
                  _this.m01 = m00.m01;
                  _this.m02 = m00.m02;
                  _this.m03 = m00.m03;
                  _this.m04 = m00.m04;
                  _this.m05 = m00.m05;
                  _this.m06 = m00.m06;
                  _this.m07 = m00.m07;
                  _this.m08 = m00.m08;
                } else {
                  _this.m00 = m00;
                  _this.m01 = m01;
                  _this.m02 = m02;
                  _this.m03 = m03;
                  _this.m04 = m04;
                  _this.m05 = m05;
                  _this.m06 = m06;
                  _this.m07 = m07;
                  _this.m08 = m08;
                }

                return _this;
              }
              /**
               * @en Clone a new matrix from the current matrix.
               * @zh 克隆当前矩阵。
               */


              var _proto = Mat3.prototype;

              _proto.clone = function clone() {
                var t = this;
                return new Mat3(t.m00, t.m01, t.m02, t.m03, t.m04, t.m05, t.m06, t.m07, t.m08);
              }
              /**
               * @en Sets the matrix with another one's value.
               * @zh 设置当前矩阵使其与指定矩阵相等。
               * @param other Specified matrix
               * @return this
               */
              ;

              _proto.set = function set(m00, m01, m02, m03, m04, m05, m06, m07, m08) {
                if (m00 === void 0) {
                  m00 = 1;
                }

                if (m01 === void 0) {
                  m01 = 0;
                }

                if (m02 === void 0) {
                  m02 = 0;
                }

                if (m03 === void 0) {
                  m03 = 0;
                }

                if (m04 === void 0) {
                  m04 = 1;
                }

                if (m05 === void 0) {
                  m05 = 0;
                }

                if (m06 === void 0) {
                  m06 = 0;
                }

                if (m07 === void 0) {
                  m07 = 0;
                }

                if (m08 === void 0) {
                  m08 = 1;
                }

                if (typeof m00 === 'object') {
                  this.m00 = m00.m00;
                  this.m01 = m00.m01;
                  this.m02 = m00.m02;
                  this.m03 = m00.m03;
                  this.m04 = m00.m04;
                  this.m05 = m00.m05;
                  this.m06 = m00.m06;
                  this.m07 = m00.m07;
                  this.m08 = m00.m08;
                } else {
                  this.m00 = m00;
                  this.m01 = m01;
                  this.m02 = m02;
                  this.m03 = m03;
                  this.m04 = m04;
                  this.m05 = m05;
                  this.m06 = m06;
                  this.m07 = m07;
                  this.m08 = m08;
                }

                return this;
              }
              /**
               * @en Returns whether the specified matrices are approximately equal.
               * @zh 判断当前矩阵是否在误差范围内与指定矩阵相等。
               * @param other Comparative matrix
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @return Returns `true' when the elements of both matrices are equal; otherwise returns `false'.
               */
              ;

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08));
              }
              /**
               * @en Returns whether the specified matrices are equal.
               * @zh 判断当前矩阵是否与指定矩阵相等。
               * @param other Comparative matrix
               * @return Returns `true' when the elements of both matrices are equal; otherwise returns `false'.
               */
              ;

              _proto.strictEquals = function strictEquals(other) {
                return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08;
              }
              /**
               * @en Returns a string representation of a matrix.
               * @zh 返回当前矩阵的字符串表示。
               * @return The string representation of this matrix
               */
              ;

              _proto.toString = function toString() {
                var t = this;
                return "[\n" + t.m00 + ", " + t.m01 + ", " + t.m02 + ",\n" + t.m03 + ",\n" + t.m04 + ", " + t.m05 + ",\n" + t.m06 + ", " + t.m07 + ",\n" + t.m08 + "\n" + "]";
              }
              /**
               * @en set the current matrix to an identity matrix.
               * @zh 将当前矩阵设为单位矩阵。
               * @return `this`
               */
              ;

              _proto.identity = function identity() {
                this.m00 = 1;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 1;
                this.m05 = 0;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 1;
                return this;
              }
              /**
               * @en Transposes the current matrix.
               * @zh 计算当前矩阵的转置矩阵。
               */
              ;

              _proto.transpose = function transpose() {
                var a01 = this.m01;
                var a02 = this.m02;
                var a12 = this.m05;
                this.m01 = this.m03;
                this.m02 = this.m06;
                this.m03 = a01;
                this.m05 = this.m07;
                this.m06 = a02;
                this.m07 = a12;
                return this;
              }
              /**
               * @en Inverts the current matrix. When matrix is not invertible the matrix will be set to zeros.
               * @zh 计算当前矩阵的逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
               */
              ;

              _proto.invert = function invert() {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a10 = this.m03;
                var a11 = this.m04;
                var a12 = this.m05;
                var a20 = this.m06;
                var a21 = this.m07;
                var a22 = this.m08;
                var b01 = a22 * a11 - a12 * a21;
                var b11 = -a22 * a10 + a12 * a20;
                var b21 = a21 * a10 - a11 * a20; // Calculate the determinant

                var det = a00 * b01 + a01 * b11 + a02 * b21;

                if (det === 0) {
                  this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                  return this;
                }

                det = 1.0 / det;
                this.m00 = b01 * det;
                this.m01 = (-a22 * a01 + a02 * a21) * det;
                this.m02 = (a12 * a01 - a02 * a11) * det;
                this.m03 = b11 * det;
                this.m04 = (a22 * a00 - a02 * a20) * det;
                this.m05 = (-a12 * a00 + a02 * a10) * det;
                this.m06 = b21 * det;
                this.m07 = (-a21 * a00 + a01 * a20) * det;
                this.m08 = (a11 * a00 - a01 * a10) * det;
                return this;
              }
              /**
               * @en Calculates the determinant of the current matrix.
               * @zh 计算当前矩阵的行列式。
               * @return 当前矩阵的行列式。
               */
              ;

              _proto.determinant = function determinant() {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a10 = this.m03;
                var a11 = this.m04;
                var a12 = this.m05;
                var a20 = this.m06;
                var a21 = this.m07;
                var a22 = this.m08;
                return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
              }
              /**
               * @en Adds the current matrix and another matrix to the current matrix.
               * @zh 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。
               * @param mat the second operand
               */
              ;

              _proto.add = function add(mat) {
                this.m00 += mat.m00;
                this.m01 += mat.m01;
                this.m02 += mat.m02;
                this.m03 += mat.m03;
                this.m04 += mat.m04;
                this.m05 += mat.m05;
                this.m06 += mat.m06;
                this.m07 += mat.m07;
                this.m08 += mat.m08;
                return this;
              }
              /**
               * @en Subtracts another matrix from the current matrix.
               * @zh 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。
               * @param mat the second operand
               */
              ;

              _proto.subtract = function subtract(mat) {
                this.m00 -= mat.m00;
                this.m01 -= mat.m01;
                this.m02 -= mat.m02;
                this.m03 -= mat.m03;
                this.m04 -= mat.m04;
                this.m05 -= mat.m05;
                this.m06 -= mat.m06;
                this.m07 -= mat.m07;
                this.m08 -= mat.m08;
                return this;
              }
              /**
               * @en Multiply the current matrix with another matrix.
               * @zh 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。
               * @param mat the second operand
               */
              ;

              _proto.multiply = function multiply(mat) {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a10 = this.m03;
                var a11 = this.m04;
                var a12 = this.m05;
                var a20 = this.m06;
                var a21 = this.m07;
                var a22 = this.m08;
                var b00 = mat.m00;
                var b01 = mat.m01;
                var b02 = mat.m02;
                var b10 = mat.m03;
                var b11 = mat.m04;
                var b12 = mat.m05;
                var b20 = mat.m06;
                var b21 = mat.m07;
                var b22 = mat.m08;
                this.m00 = b00 * a00 + b01 * a10 + b02 * a20;
                this.m01 = b00 * a01 + b01 * a11 + b02 * a21;
                this.m02 = b00 * a02 + b01 * a12 + b02 * a22;
                this.m03 = b10 * a00 + b11 * a10 + b12 * a20;
                this.m04 = b10 * a01 + b11 * a11 + b12 * a21;
                this.m05 = b10 * a02 + b11 * a12 + b12 * a22;
                this.m06 = b20 * a00 + b21 * a10 + b22 * a20;
                this.m07 = b20 * a01 + b21 * a11 + b22 * a21;
                this.m08 = b20 * a02 + b21 * a12 + b22 * a22;
                return this;
              }
              /**
               * @en Multiply each element of the current matrix by a scalar number.
               * @zh 矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。
               * @param scalar amount to scale the matrix's elements by
               */
              ;

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                this.m00 *= scalar;
                this.m01 *= scalar;
                this.m02 *= scalar;
                this.m03 *= scalar;
                this.m04 *= scalar;
                this.m05 *= scalar;
                this.m06 *= scalar;
                this.m07 *= scalar;
                this.m08 *= scalar;
                return this;
              }
              /**
               * @en Multiply the current matrix with a scale matrix given by a scale vector.
               * @zh 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。
               * @param vec vector to scale by
               */
              ;

              _proto.scale = function scale(vec) {
                var x = vec.x;
                var y = vec.y;
                this.m00 = x * this.m00;
                this.m01 = x * this.m01;
                this.m02 = x * this.m02;
                this.m03 = y * this.m03;
                this.m04 = y * this.m04;
                this.m05 = y * this.m05;
                this.m06 = this.m06;
                this.m07 = this.m07;
                this.m08 = this.m08;
                return this;
              }
              /**
               * @en Rotates the current matrix by the given angle.
               * @zh 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。
               * @param rad radius of rotation
               */
              ;

              _proto.rotate = function rotate(rad) {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a10 = this.m03;
                var a11 = this.m04;
                var a12 = this.m05;
                var a20 = this.m06;
                var a21 = this.m07;
                var a22 = this.m08;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                this.m00 = c * a00 + s * a10;
                this.m01 = c * a01 + s * a11;
                this.m02 = c * a02 + s * a12;
                this.m03 = c * a10 - s * a00;
                this.m04 = c * a11 - s * a01;
                this.m05 = c * a12 - s * a02;
                this.m06 = a20;
                this.m07 = a21;
                this.m08 = a22;
                return this;
              }
              /**
               * @en Resets the current matrix from the given quaternion.
               * @zh 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。
               * @param q The quaternion.
               * @returns this
               */
              ;

              _proto.fromQuat = function fromQuat(q) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var yx = y * x2;
                var yy = y * y2;
                var zx = z * x2;
                var zy = z * y2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                this.m00 = 1 - yy - zz;
                this.m03 = yx - wz;
                this.m06 = zx + wy;
                this.m01 = yx + wz;
                this.m04 = 1 - xx - zz;
                this.m07 = zy - wx;
                this.m02 = zx - wy;
                this.m05 = zy + wx;
                this.m08 = 1 - xx - yy;
                return this;
              };

              return Mat3;
            }(ValueType);
            Mat3.IDENTITY = Object.freeze(new Mat3());
            var v3_1$1 = new Vec3();
            var v3_2$1 = new Vec3();
            legacyCC.Mat3 = Mat3;

            /**
             * @en quaternion
             * @zh 四元数
             */

            var Quat = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Quat, _ValueType);

              /**
               * @en Obtain a copy of the given quaternion
               * @zh 获得指定四元数的拷贝
               */
              Quat.clone = function clone(a) {
                return new Quat(a.x, a.y, a.z, a.w);
              }
              /**
               * @en Copy the given quaternion to the out quaternion
               * @zh 复制目标四元数
               */
              ;

              Quat.copy = function copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = a.w;
                return out;
              }
              /**
               * @en Sets the out quaternion with values of each component
               * @zh 设置四元数值
               */
              ;

              Quat.set = function set(out, x, y, z, w) {
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              }
              /**
               * @en Sets the out quaternion to an identity quaternion
               * @zh 将目标赋值为单位四元数
               */
              ;

              Quat.identity = function identity(out) {
                out.x = 0;
                out.y = 0;
                out.z = 0;
                out.w = 1;
                return out;
              }
              /**
               * @en Sets the out quaternion with the shortest path orientation between two vectors, considering both vectors normalized
               * @zh 设置四元数为两向量间的最短路径旋转，默认两向量都已归一化
               */
              ;

              Quat.rotationTo = function rotationTo(out, a, b) {
                var dot = Vec3.dot(a, b);

                if (dot < -0.999999) {
                  Vec3.cross(v3_1$2, Vec3.UNIT_X, a);

                  if (v3_1$2.length() < 0.000001) {
                    Vec3.cross(v3_1$2, Vec3.UNIT_Y, a);
                  }

                  Vec3.normalize(v3_1$2, v3_1$2);
                  Quat.fromAxisAngle(out, v3_1$2, Math.PI);
                  return out;
                } else if (dot > 0.999999) {
                  out.x = 0;
                  out.y = 0;
                  out.z = 0;
                  out.w = 1;
                  return out;
                } else {
                  Vec3.cross(v3_1$2, a, b);
                  out.x = v3_1$2.x;
                  out.y = v3_1$2.y;
                  out.z = v3_1$2.z;
                  out.w = 1 + dot;
                  return Quat.normalize(out, out);
                }
              }
              /**
               * @en Gets the rotation axis and the arc of rotation from the quaternion
               * @zh 获取四元数的旋转轴和旋转弧度
               * @param outAxis output axis
               * @param q input quaternion
               * @return radius of rotation
               */
              ;

              Quat.getAxisAngle = function getAxisAngle(outAxis, q) {
                var rad = Math.acos(q.w) * 2.0;
                var s = Math.sin(rad / 2.0);

                if (s !== 0.0) {
                  outAxis.x = q.x / s;
                  outAxis.y = q.y / s;
                  outAxis.z = q.z / s;
                } else {
                  // If s is zero, return any axis (no rotation - axis does not matter)
                  outAxis.x = 1;
                  outAxis.y = 0;
                  outAxis.z = 0;
                }

                return rad;
              }
              /**
               * @en Quaternion multiplication and save the results to out quaternion
               * @zh 四元数乘法
               */
              ;

              Quat.multiply = function multiply(out, a, b) {
                var x = a.x * b.w + a.w * b.x + a.y * b.z - a.z * b.y;
                var y = a.y * b.w + a.w * b.y + a.z * b.x - a.x * b.z;
                var z = a.z * b.w + a.w * b.z + a.x * b.y - a.y * b.x;
                var w = a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z;
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              }
              /**
               * @en Quaternion scalar multiplication and save the results to out quaternion
               * @zh 四元数标量乘法
               */
              ;

              Quat.multiplyScalar = function multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                out.w = a.w * b;
                return out;
              }
              /**
               * @en Quaternion multiplication and addition: A + B * scale
               * @zh 四元数乘加：A + B * scale
               */
              ;

              Quat.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                out.w = a.w + b.w * scale;
                return out;
              }
              /**
               * @en Sets the out quaternion to represent a radian rotation around x axis
               * @zh 绕 X 轴旋转指定四元数
               * @param rad radius of rotation
               */
              ;

              Quat.rotateX = function rotateX(out, a, rad) {
                rad *= 0.5;
                var bx = Math.sin(rad);
                var bw = Math.cos(rad);
                var x = a.x,
                    y = a.y,
                    z = a.z,
                    w = a.w;
                out.x = x * bw + w * bx;
                out.y = y * bw + z * bx;
                out.z = z * bw - y * bx;
                out.w = w * bw - x * bx;
                return out;
              }
              /**
               * @en Sets the out quaternion to represent a radian rotation around y axis
               * @zh 绕 Y 轴旋转指定四元数
               * @param rad radius of rotation
               */
              ;

              Quat.rotateY = function rotateY(out, a, rad) {
                rad *= 0.5;
                var by = Math.sin(rad);
                var bw = Math.cos(rad);
                var x = a.x,
                    y = a.y,
                    z = a.z,
                    w = a.w;
                out.x = x * bw - z * by;
                out.y = y * bw + w * by;
                out.z = z * bw + x * by;
                out.w = w * bw - y * by;
                return out;
              }
              /**
               * @en Sets the out quaternion to represent a radian rotation around z axis
               * @zh 绕 Z 轴旋转指定四元数
               * @param rad radius of rotation
               */
              ;

              Quat.rotateZ = function rotateZ(out, a, rad) {
                rad *= 0.5;
                var bz = Math.sin(rad);
                var bw = Math.cos(rad);
                var x = a.x,
                    y = a.y,
                    z = a.z,
                    w = a.w;
                out.x = x * bw + y * bz;
                out.y = y * bw - x * bz;
                out.z = z * bw + w * bz;
                out.w = w * bw - z * bz;
                return out;
              }
              /**
               * @en Sets the out quaternion to represent a radian rotation around a given rotation axis in world space
               * @zh 绕世界空间下指定轴旋转四元数
               * @param axis axis of rotation, normalized by default
               * @param rad radius of rotation
               */
              ;

              Quat.rotateAround = function rotateAround(out, rot, axis, rad) {
                // get inv-axis (local to rot)
                Quat.invert(qt_1, rot);
                Vec3.transformQuat(v3_1$2, axis, qt_1); // rotate by inv-axis

                Quat.fromAxisAngle(qt_1, v3_1$2, rad);
                Quat.multiply(out, rot, qt_1);
                return out;
              }
              /**
               * @en Sets the out quaternion to represent a radian rotation around a given rotation axis in local space
               * @zh 绕本地空间下指定轴旋转四元数
               * @param axis axis of rotation
               * @param rad radius of rotation
               */
              ;

              Quat.rotateAroundLocal = function rotateAroundLocal(out, rot, axis, rad) {
                Quat.fromAxisAngle(qt_1, axis, rad);
                Quat.multiply(out, rot, qt_1);
                return out;
              }
              /**
               * @en Calculates the w component with xyz components, considering the given quaternion normalized
               * @zh 根据 xyz 分量计算 w 分量，默认已归一化
               */
              ;

              Quat.calculateW = function calculateW(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = Math.sqrt(Math.abs(1.0 - a.x * a.x - a.y * a.y - a.z * a.z));
                return out;
              }
              /**
               * @en Quaternion dot product (scalar product)
               * @zh 四元数点积（数量积）
               */
              ;

              Quat.dot = function dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
              }
              /**
               * @en Element by element linear interpolation: A + t * (B - A)
               * @zh 逐元素线性插值： A + t * (B - A)
               */
              ;

              Quat.lerp = function lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                out.w = a.w + t * (b.w - a.w);
                return out;
              }
              /**
               * @en Spherical quaternion interpolation
               * @zh 四元数球面插值
               */
              ;

              Quat.slerp = function slerp(out, a, b, t) {
                // benchmarks:
                //    http://jsperf.com/quaternion-slerp-implementations
                var scale0 = 0;
                var scale1 = 0;
                var bx = b.x;
                var by = b.y;
                var bz = b.z;
                var bw = b.w; // calc cosine

                var cosom = a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w; // adjust signs (if necessary)

                if (cosom < 0.0) {
                  cosom = -cosom;
                  bx = -bx;
                  by = -by;
                  bz = -bz;
                  bw = -bw;
                } // calculate coefficients


                if (1.0 - cosom > 0.000001) {
                  // standard case (slerp)
                  var omega = Math.acos(cosom);
                  var sinom = Math.sin(omega);
                  scale0 = Math.sin((1.0 - t) * omega) / sinom;
                  scale1 = Math.sin(t * omega) / sinom;
                } else {
                  // "from" and "to" quaternions are very close
                  //  ... so we can do a linear interpolation
                  scale0 = 1.0 - t;
                  scale1 = t;
                } // calculate final values


                out.x = scale0 * a.x + scale1 * bx;
                out.y = scale0 * a.y + scale1 * by;
                out.z = scale0 * a.z + scale1 * bz;
                out.w = scale0 * a.w + scale1 * bw;
                return out;
              }
              /**
               * @en Spherical quaternion interpolation with two control points
               * @zh 带两个控制点的四元数球面插值
               */
              ;

              Quat.sqlerp = function sqlerp(out, a, b, c, d, t) {
                Quat.slerp(qt_1, a, d, t);
                Quat.slerp(qt_2, b, c, t);
                Quat.slerp(out, qt_1, qt_2, 2 * t * (1 - t));
                return out;
              }
              /**
               * @en Sets the inverse of the given quaternion to out quaternion
               * @zh 四元数求逆
               */
              ;

              Quat.invert = function invert(out, a) {
                var dot = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
                var invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

                out.x = -a.x * invDot;
                out.y = -a.y * invDot;
                out.z = -a.z * invDot;
                out.w = a.w * invDot;
                return out;
              }
              /**
               * @en Conjugating a quaternion, it's equivalent to the inverse of the unit quaternion, but more efficient
               * @zh 求共轭四元数，对单位四元数与求逆等价，但更高效
               */
              ;

              Quat.conjugate = function conjugate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                out.w = a.w;
                return out;
              }
              /**
               * @en Calculates the length of the quaternion
               * @zh 求四元数长度
               */
              ;

              Quat.len = function len(a) {
                return Math.sqrt(a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w);
              }
              /**
               * @en Calculates the squared length of the quaternion
               * @zh 求四元数长度平方
               */
              ;

              Quat.lengthSqr = function lengthSqr(a) {
                return a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;
              }
              /**
               * @en Normalize the given quaternion
               * @zh 归一化四元数
               */
              ;

              Quat.normalize = function normalize(out, a) {
                var len = a.x * a.x + a.y * a.y + a.z * a.z + a.w * a.w;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = a.x * len;
                  out.y = a.y * len;
                  out.z = a.z * len;
                  out.w = a.w * len;
                }

                return out;
              }
              /**
               * @en Calculated the quaternion represents the given coordinates, considering all given vectors are normalized and mutually perpendicular
               * @zh 根据本地坐标轴朝向计算四元数，默认三向量都已归一化且相互垂直
               */
              ;

              Quat.fromAxes = function fromAxes(out, xAxis, yAxis, zAxis) {
                Mat3.set(m3_1, xAxis.x, xAxis.y, xAxis.z, yAxis.x, yAxis.y, yAxis.z, zAxis.x, zAxis.y, zAxis.z);
                return Quat.normalize(out, Quat.fromMat3(out, m3_1));
              }
              /**
               * @en Calculates the quaternion with the up direction and the direction of the viewport
               * @zh 根据视口的前方向和上方向计算四元数
               * @param view The view direction, it`s must be normalized.
               * @param up The view up direction, it`s must be normalized, default value is (0, 1, 0).
               */
              ;

              Quat.fromViewUp = function fromViewUp(out, view, up) {
                Mat3.fromViewUp(m3_1, view, up);
                return Quat.normalize(out, Quat.fromMat3(out, m3_1));
              }
              /**
               * @en Calculates the quaternion from a given rotary shaft and a radian rotation around it.
               * @zh 根据旋转轴和旋转弧度计算四元数
               */
              ;

              Quat.fromAxisAngle = function fromAxisAngle(out, axis, rad) {
                rad *= 0.5;
                var s = Math.sin(rad);
                out.x = s * axis.x;
                out.y = s * axis.y;
                out.z = s * axis.z;
                out.w = Math.cos(rad);
                return out;
              }
              /**
               * @en Calculates the quaternion with the three-dimensional transform matrix, considering no scale included in the matrix
               * @zh 根据三维矩阵信息计算四元数，默认输入矩阵不含有缩放信息
               */
              ;

              Quat.fromMat3 = function fromMat3(out, m) {
                var m00 = m.m00,
                    m01 = m.m03,
                    m02 = m.m06,
                    m10 = m.m01,
                    m11 = m.m04,
                    m12 = m.m07,
                    m20 = m.m02,
                    m21 = m.m05,
                    m22 = m.m08;
                var trace = m00 + m11 + m22;

                if (trace > 0) {
                  var s = 0.5 / Math.sqrt(trace + 1.0);
                  out.w = 0.25 / s;
                  out.x = (m21 - m12) * s;
                  out.y = (m02 - m20) * s;
                  out.z = (m10 - m01) * s;
                } else if (m00 > m11 && m00 > m22) {
                  var _s = 2.0 * Math.sqrt(1.0 + m00 - m11 - m22);

                  out.w = (m21 - m12) / _s;
                  out.x = 0.25 * _s;
                  out.y = (m01 + m10) / _s;
                  out.z = (m02 + m20) / _s;
                } else if (m11 > m22) {
                  var _s2 = 2.0 * Math.sqrt(1.0 + m11 - m00 - m22);

                  out.w = (m02 - m20) / _s2;
                  out.x = (m01 + m10) / _s2;
                  out.y = 0.25 * _s2;
                  out.z = (m12 + m21) / _s2;
                } else {
                  var _s3 = 2.0 * Math.sqrt(1.0 + m22 - m00 - m11);

                  out.w = (m10 - m01) / _s3;
                  out.x = (m02 + m20) / _s3;
                  out.y = (m12 + m21) / _s3;
                  out.z = 0.25 * _s3;
                }

                return out;
              }
              /**
               * @en Calculates the quaternion with Euler angles, the rotation order is YZX
               * @zh 根据欧拉角信息计算四元数，旋转顺序为 YZX
               */
              ;

              Quat.fromEuler = function fromEuler(out, x, y, z) {
                x *= halfToRad;
                y *= halfToRad;
                z *= halfToRad;
                var sx = Math.sin(x);
                var cx = Math.cos(x);
                var sy = Math.sin(y);
                var cy = Math.cos(y);
                var sz = Math.sin(z);
                var cz = Math.cos(z);
                out.x = sx * cy * cz + cx * sy * sz;
                out.y = cx * sy * cz + sx * cy * sz;
                out.z = cx * cy * sz - sx * sy * cz;
                out.w = cx * cy * cz - sx * sy * sz;
                return out;
              }
              /**
               * @en Calculates the quaternion with given 2D angle (0, 0, z).
               * @zh 根据 2D 角度（0, 0, z）计算四元数
               *
               * @param out Output quaternion
               * @param z Angle to rotate around Z axis in degrees.
               */
              ;

              Quat.fromAngleZ = function fromAngleZ(out, z) {
                z *= halfToRad;
                out.x = out.y = 0;
                out.z = Math.sin(z);
                out.w = Math.cos(z);
                return out;
              }
              /**
               * @en This returns the X-axis vector of the quaternion
               * @zh 返回定义此四元数的坐标系 X 轴向量
               */
              ;

              Quat.toAxisX = function toAxisX(out, q) {
                var fy = 2.0 * q.y;
                var fz = 2.0 * q.z;
                out.x = 1.0 - fy * q.y - fz * q.z;
                out.y = fy * q.x + fz * q.w;
                out.z = fz * q.x + fy * q.w;
                return out;
              }
              /**
               * @en This returns the Y-axis vector of the quaternion
               * @zh 返回定义此四元数的坐标系 Y 轴向量
               */
              ;

              Quat.toAxisY = function toAxisY(out, q) {
                var fx = 2.0 * q.x;
                var fy = 2.0 * q.y;
                var fz = 2.0 * q.z;
                out.x = fy * q.x - fz * q.w;
                out.y = 1.0 - fx * q.x - fz * q.z;
                out.z = fz * q.y + fx * q.w;
                return out;
              }
              /**
               * @en This returns the Z-axis vector of the quaternion
               * @zh 返回定义此四元数的坐标系 Z 轴向量
               */
              ;

              Quat.toAxisZ = function toAxisZ(out, q) {
                var fx = 2.0 * q.x;
                var fy = 2.0 * q.y;
                var fz = 2.0 * q.z;
                out.x = fz * q.x - fy * q.w;
                out.y = fz * q.y - fx * q.w;
                out.z = 1.0 - fx * q.x - fy * q.y;
                return out;
              }
              /**
               * @en Converts the quaternion to angles, result angle x, y in the range of [-180, 180], z in the range of [-90, 90] interval, the rotation order is YZX
               * @zh 根据四元数计算欧拉角，返回角度 x, y 在 [-180, 180] 区间内, z 默认在 [-90, 90] 区间内，旋转顺序为 YZX
               * @param outerZ change z value range to [-180, -90] U [90, 180]
               */
              ;

              Quat.toEuler = function toEuler(out, q, outerZ) {
                var x = q.x,
                    y = q.y,
                    z = q.z,
                    w = q.w;
                var bank = 0;
                var heading = 0;
                var attitude = 0;
                var test = x * y + z * w;

                if (test > 0.499999) {
                  bank = 0; // default to zero

                  heading = toDegree(2 * Math.atan2(x, w));
                  attitude = 90;
                } else if (test < -0.499999) {
                  bank = 0; // default to zero

                  heading = -toDegree(2 * Math.atan2(x, w));
                  attitude = -90;
                } else {
                  var sqx = x * x;
                  var sqy = y * y;
                  var sqz = z * z;
                  bank = toDegree(Math.atan2(2 * x * w - 2 * y * z, 1 - 2 * sqx - 2 * sqz));
                  heading = toDegree(Math.atan2(2 * y * w - 2 * x * z, 1 - 2 * sqy - 2 * sqz));
                  attitude = toDegree(Math.asin(2 * test));

                  if (outerZ) {
                    bank = -180 * Math.sign(bank + 1e-6) + bank;
                    heading = -180 * Math.sign(heading + 1e-6) + heading;
                    attitude = 180 * Math.sign(attitude + 1e-6) - attitude;
                  }
                }

                out.x = bank;
                out.y = heading;
                out.z = attitude;
                return out;
              }
              /**
               * @en Converts quaternion to an array
               * @zh 四元数转数组
               * @param ofs Array Start Offset
               */
              ;

              Quat.toArray = function toArray(out, q, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = q.x;
                out[ofs + 1] = q.y;
                out[ofs + 2] = q.z;
                out[ofs + 3] = q.w;
                return out;
              }
              /**
               * @en Array to a quaternion
               * @zh 数组转四元数
               * @param ofs Array Start Offset
               */
              ;

              Quat.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                out.w = arr[ofs + 3];
                return out;
              }
              /**
               * @en Check whether two quaternions are equal
               * @zh 四元数等价判断
               */
              ;

              Quat.strictEquals = function strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
              }
              /**
               * @en Check whether two quaternions are approximately equal
               * @zh 排除浮点数误差的四元数近似等价判断
               */
              ;

              Quat.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
              }
              /**
               * @en x component.
               * @zh x 分量。
               */
              ;

              function Quat(x, y, z, w) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.x = x.x;
                  _this.y = x.y;
                  _this.z = x.z;
                  _this.w = x.w;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                  _this.z = z || 0;
                  _this.w = w !== null && w !== void 0 ? w : 1;
                }

                return _this;
              }
              /**
               * @en clone the current Quat
               * @zh 克隆当前四元数。
               */


              var _proto = Quat.prototype;

              _proto.clone = function clone() {
                return new Quat(this.x, this.y, this.z, this.w);
              }
              /**
               * @en Set values with another quaternion
               * @zh 设置当前四元数使其与指定四元数相等。
               * @param other Specified quaternion
               * @returns `this`
               */
              ;

              _proto.set = function set(x, y, z, w) {
                if (x && typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                  this.w = x.w;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                  this.w = w !== null && w !== void 0 ? w : 1;
                }

                return this;
              }
              /**
               * @en Check whether the quaternion approximately equals another one
               * @zh 判断当前四元数是否在误差范围内与指定向量相等。
               * @param other Comparative quaternion
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @returns Returns `true' when the components of the two quaternions are equal within the specified error range; otherwise, returns `false'.
               */
              ;

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
              }
              /**
               * @en Check whether the current quaternion strictly equals other quaternion
               * @zh 判断当前四元数是否与指定四元数相等。
               * @param other Comparative quaternion
               * @returns Returns `true' when the components of the two quaternions are equal within the specified error range; otherwise, returns `false'.
               */
              ;

              _proto.strictEquals = function strictEquals(other) {
                return other && this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
              }
              /**
               * @en Convert quaternion to Euler angles
               * @zh 将当前四元数转化为欧拉角（x-y-z）并赋值给出口向量。
               * @param out the output vector
               */
              ;

              _proto.getEulerAngles = function getEulerAngles(out) {
                return Quat.toEuler(out, this);
              }
              /**
               * @en Calculate the linear interpolation result between this quaternion and another one with given ratio
               * @zh 根据指定的插值比率，从当前四元数到目标四元数之间做线性插值。
               * @param to The target quaternion
               * @param ratio The interpolation coefficient. The range is [0,1].
               */
              ;

              _proto.lerp = function lerp(to, ratio) {
                this.x += ratio * (to.x - this.x);
                this.y += ratio * (to.y - this.y);
                this.z += ratio * (to.z - this.z);
                this.w += ratio * (to.w - this.w);
                return this;
              }
              /**
               * @en Calculates the spherical interpolation result between this quaternion and another one with the given ratio
               * @zh 根据指定的插值比率，从当前四元数到目标四元数之间做球面插值。
               * @param to The target quaternion
               * @param ratio The interpolation coefficient. The range is [0,1].
               */
              ;

              _proto.slerp = function slerp(to, ratio) {
                return Quat.slerp(this, this, to, ratio);
              }
              /**
               * @en Calculates the length of the quaternion
               * @zh 求四元数长度
               */
              ;

              _proto.length = function length() {
                return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
              }
              /**
               * @en Calculates the squared length of the quaternion
               * @zh 求四元数长度平方
               */
              ;

              _proto.lengthSqr = function lengthSqr() {
                return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
              };

              return Quat;
            }(ValueType);
            Quat.IDENTITY = Object.freeze(new Quat());
            var qt_1 = new Quat();
            var qt_2 = new Quat();
            var v3_1$2 = new Vec3();
            var m3_1 = new Mat3();
            var halfToRad = 0.5 * Math.PI / 180.0;
            legacyCC.Quat = Quat;
            function quat(x, y, z, w) {
              if (x === void 0) {
                x = 0;
              }

              if (y === void 0) {
                y = 0;
              }

              if (z === void 0) {
                z = 0;
              }

              if (w === void 0) {
                w = 1;
              }

              return new Quat(x, y, z, w);
            }
            legacyCC.quat = quat;

            var preTransforms = Object.freeze([Object.freeze([1, 0, 0, 1]), // SurfaceTransform.IDENTITY
            Object.freeze([0, 1, -1, 0]), // SurfaceTransform.ROTATE_90
            Object.freeze([-1, 0, 0, -1]), // SurfaceTransform.ROTATE_180
            Object.freeze([0, -1, 1, 0]) // SurfaceTransform.ROTATE_270
            ]);
            /**
             * @en Mathematical 4x4 matrix.
             * @zh 表示四维（4x4）矩阵。
             */

            var Mat4 = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Mat4, _ValueType);

              /**
               * @en Clone a matrix and save the results to out matrix
               * @zh 获得指定矩阵的拷贝
               */
              Mat4.clone = function clone(a) {
                return new Mat4(a.m00, a.m01, a.m02, a.m03, a.m04, a.m05, a.m06, a.m07, a.m08, a.m09, a.m10, a.m11, a.m12, a.m13, a.m14, a.m15);
              }
              /**
               * @en Copy a matrix into the out matrix
               * @zh 复制目标矩阵
               */
              ;

              Mat4.copy = function copy(out, a) {
                out.m00 = a.m00;
                out.m01 = a.m01;
                out.m02 = a.m02;
                out.m03 = a.m03;
                out.m04 = a.m04;
                out.m05 = a.m05;
                out.m06 = a.m06;
                out.m07 = a.m07;
                out.m08 = a.m08;
                out.m09 = a.m09;
                out.m10 = a.m10;
                out.m11 = a.m11;
                out.m12 = a.m12;
                out.m13 = a.m13;
                out.m14 = a.m14;
                out.m15 = a.m15;
                return out;
              }
              /**
               * @en Sets a matrix with the given values and save the results to out matrix
               * @zh 设置矩阵值
               */
              ;

              Mat4.set = function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
                out.m00 = m00;
                out.m01 = m01;
                out.m02 = m02;
                out.m03 = m03;
                out.m04 = m10;
                out.m05 = m11;
                out.m06 = m12;
                out.m07 = m13;
                out.m08 = m20;
                out.m09 = m21;
                out.m10 = m22;
                out.m11 = m23;
                out.m12 = m30;
                out.m13 = m31;
                out.m14 = m32;
                out.m15 = m33;
                return out;
              }
              /**
               * @en return an identity matrix.
               * @zh 将目标赋值为单位矩阵
               */
              ;

              Mat4.identity = function identity(out) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Transposes a matrix and save the results to out matrix
               * @zh 转置矩阵
               */
              ;

              Mat4.transpose = function transpose(out, a) {
                // If we are transposing ourselves we can skip a few steps but have to cache some values
                if (out === a) {
                  var a01 = a.m01;
                  var a02 = a.m02;
                  var a03 = a.m03;
                  var a12 = a.m06;
                  var a13 = a.m07;
                  var a23 = a.m11;
                  out.m01 = a.m04;
                  out.m02 = a.m08;
                  out.m03 = a.m12;
                  out.m04 = a01;
                  out.m06 = a.m09;
                  out.m07 = a.m13;
                  out.m08 = a02;
                  out.m09 = a12;
                  out.m11 = a.m14;
                  out.m12 = a03;
                  out.m13 = a13;
                  out.m14 = a23;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m04;
                  out.m02 = a.m08;
                  out.m03 = a.m12;
                  out.m04 = a.m01;
                  out.m05 = a.m05;
                  out.m06 = a.m09;
                  out.m07 = a.m13;
                  out.m08 = a.m02;
                  out.m09 = a.m06;
                  out.m10 = a.m10;
                  out.m11 = a.m14;
                  out.m12 = a.m03;
                  out.m13 = a.m07;
                  out.m14 = a.m11;
                  out.m15 = a.m15;
                }

                return out;
              }
              /**
               * @en Inverts a matrix. When matrix is not invertible the matrix will be set to zeros.
               * @zh 矩阵求逆，注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
               */
              ;

              Mat4.invert = function invert(out, a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (det === 0) {
                  out.m00 = 0;
                  out.m01 = 0;
                  out.m02 = 0;
                  out.m03 = 0;
                  out.m04 = 0;
                  out.m05 = 0;
                  out.m06 = 0;
                  out.m07 = 0;
                  out.m08 = 0;
                  out.m09 = 0;
                  out.m10 = 0;
                  out.m11 = 0;
                  out.m12 = 0;
                  out.m13 = 0;
                  out.m14 = 0;
                  out.m15 = 0;
                  return out;
                }

                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
                out.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
                out.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                out.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
                out.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
                out.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
                out.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
                out.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
                return out;
              }
              /**
               * @en Calculates the determinant of a matrix
               * @zh 矩阵行列式
               */
              ;

              Mat4.determinant = function determinant(a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

                return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
              }
              /**
               * @en Multiply two matrices and save the results to out matrix
               * @zh 矩阵乘法
               */
              ;

              Mat4.multiply = function multiply(out, a, b) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15; // Cache only the current line of the second matrix

                var b0 = b.m00;
                var b1 = b.m01;
                var b2 = b.m02;
                var b3 = b.m03;
                out.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m04;
                b1 = b.m05;
                b2 = b.m06;
                b3 = b.m07;
                out.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m08;
                b1 = b.m09;
                b2 = b.m10;
                b3 = b.m11;
                out.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = b.m12;
                b1 = b.m13;
                b2 = b.m14;
                b3 = b.m15;
                out.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                out.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                out.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                out.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                return out;
              }
              /**
               * @en Transform a matrix with the given vector and save results to the out matrix
               * @zh 在给定矩阵变换基础上加入变换
               */
              ;

              Mat4.transform = function transform(out, a, v) {
                var x = v.x;
                var y = v.y;
                var z = v.z;

                if (a === out) {
                  out.m12 = a.m00 * x + a.m04 * y + a.m08 * z + a.m12;
                  out.m13 = a.m01 * x + a.m05 * y + a.m09 * z + a.m13;
                  out.m14 = a.m02 * x + a.m06 * y + a.m10 * z + a.m14;
                  out.m15 = a.m03 * x + a.m07 * y + a.m11 * z + a.m15;
                } else {
                  var a00 = a.m00;
                  var a01 = a.m01;
                  var a02 = a.m02;
                  var a03 = a.m03;
                  var a10 = a.m04;
                  var a11 = a.m05;
                  var a12 = a.m06;
                  var a13 = a.m07;
                  var a20 = a.m08;
                  var a21 = a.m09;
                  var a22 = a.m10;
                  var a23 = a.m11;
                  var a30 = a.m12;
                  var a31 = a.m13;
                  var a32 = a.m14;
                  var a33 = a.m15;
                  out.m00 = a00;
                  out.m01 = a01;
                  out.m02 = a02;
                  out.m03 = a03;
                  out.m04 = a10;
                  out.m05 = a11;
                  out.m06 = a12;
                  out.m07 = a13;
                  out.m08 = a20;
                  out.m09 = a21;
                  out.m10 = a22;
                  out.m11 = a23;
                  out.m12 = a00 * x + a10 * y + a20 * z + a.m12;
                  out.m13 = a01 * x + a11 * y + a21 * z + a.m13;
                  out.m14 = a02 * x + a12 * y + a22 * z + a.m14;
                  out.m15 = a03 * x + a13 * y + a23 * z + a.m15;
                }

                return out;
              }
              /**
               * @en Transform a matrix with the given translation vector and save results to the out matrix
               * @zh 在给定矩阵变换基础上加入新位移变换
               */
              ;

              Mat4.translate = function translate(out, a, v) {
                console.warn('function changed');

                if (a === out) {
                  out.m12 += v.x;
                  out.m13 += v.y;
                  out.m14 += v.z;
                } else {
                  out.m00 = a.m00;
                  out.m01 = a.m01;
                  out.m02 = a.m02;
                  out.m03 = a.m03;
                  out.m04 = a.m04;
                  out.m05 = a.m05;
                  out.m06 = a.m06;
                  out.m07 = a.m07;
                  out.m08 = a.m08;
                  out.m09 = a.m09;
                  out.m10 = a.m10;
                  out.m11 = a.m11;
                  out.m12 += v.x;
                  out.m13 += v.y;
                  out.m14 += v.z;
                  out.m15 = a.m15;
                }

                return out;
              }
              /**
               * @en Multiply a matrix with a scale matrix given by a scale vector and save the results into the out matrix
               * @zh 在给定矩阵变换基础上加入新缩放变换
               */
              ;

              Mat4.scale = function scale(out, a, v) {
                var x = v.x;
                var y = v.y;
                var z = v.z;
                out.m00 = a.m00 * x;
                out.m01 = a.m01 * x;
                out.m02 = a.m02 * x;
                out.m03 = a.m03 * x;
                out.m04 = a.m04 * y;
                out.m05 = a.m05 * y;
                out.m06 = a.m06 * y;
                out.m07 = a.m07 * y;
                out.m08 = a.m08 * z;
                out.m09 = a.m09 * z;
                out.m10 = a.m10 * z;
                out.m11 = a.m11 * z;
                out.m12 = a.m12;
                out.m13 = a.m13;
                out.m14 = a.m14;
                out.m15 = a.m15;
                return out;
              }
              /**
               * @en Rotates the transform by the given angle and save the results into the out matrix
               * @zh 在给定矩阵变换基础上加入新旋转变换
               * @param rad Angle of rotation (in radians)
               * @param axis axis of rotation
               */
              ;

              Mat4.rotate = function rotate(out, a, rad, axis) {
                var x = axis.x;
                var y = axis.y;
                var z = axis.z;
                var len = Math.sqrt(x * x + y * y + z * z);

                if (Math.abs(len) < EPSILON) {
                  return null;
                }

                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c;
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11; // Construct the elements of the rotation matrix

                var b00 = x * x * t + c;
                var b01 = y * x * t + z * s;
                var b02 = z * x * t - y * s;
                var b10 = x * y * t - z * s;
                var b11 = y * y * t + c;
                var b12 = z * y * t + x * s;
                var b20 = x * z * t + y * s;
                var b21 = y * z * t - x * s;
                var b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

                out.m00 = a00 * b00 + a10 * b01 + a20 * b02;
                out.m01 = a01 * b00 + a11 * b01 + a21 * b02;
                out.m02 = a02 * b00 + a12 * b01 + a22 * b02;
                out.m03 = a03 * b00 + a13 * b01 + a23 * b02;
                out.m04 = a00 * b10 + a10 * b11 + a20 * b12;
                out.m05 = a01 * b10 + a11 * b11 + a21 * b12;
                out.m06 = a02 * b10 + a12 * b11 + a22 * b12;
                out.m07 = a03 * b10 + a13 * b11 + a23 * b12;
                out.m08 = a00 * b20 + a10 * b21 + a20 * b22;
                out.m09 = a01 * b20 + a11 * b21 + a21 * b22;
                out.m10 = a02 * b20 + a12 * b21 + a22 * b22;
                out.m11 = a03 * b20 + a13 * b21 + a23 * b22; // If the source and destination differ, copy the unchanged last row

                if (a !== out) {
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                }

                return out;
              }
              /**
               * @en Transform a matrix with a given angle around X axis and save the results to the out matrix
               * @zh 在给定矩阵变换基础上加入绕 X 轴的旋转变换
               * @param rad Angle of rotation (in radians)
               */
              ;

              Mat4.rotateX = function rotateX(out, a, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;

                if (a !== out) {
                  // If the source and destination differ, copy the unchanged rows
                  out.m00 = a.m00;
                  out.m01 = a.m01;
                  out.m02 = a.m02;
                  out.m03 = a.m03;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                } // Perform axis-specific matrix multiplication


                out.m04 = a10 * c + a20 * s;
                out.m05 = a11 * c + a21 * s;
                out.m06 = a12 * c + a22 * s;
                out.m07 = a13 * c + a23 * s;
                out.m08 = a20 * c - a10 * s;
                out.m09 = a21 * c - a11 * s;
                out.m10 = a22 * c - a12 * s;
                out.m11 = a23 * c - a13 * s;
                return out;
              }
              /**
               * @en Transform a matrix with a given angle around Y axis and save the results to the out matrix
               * @zh 在给定矩阵变换基础上加入绕 Y 轴的旋转变换
               * @param rad Angle of rotation (in radians)
               */
              ;

              Mat4.rotateY = function rotateY(out, a, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;

                if (a !== out) {
                  // If the source and destination differ, copy the unchanged rows
                  out.m04 = a.m04;
                  out.m05 = a.m05;
                  out.m06 = a.m06;
                  out.m07 = a.m07;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                } // Perform axis-specific matrix multiplication


                out.m00 = a00 * c - a20 * s;
                out.m01 = a01 * c - a21 * s;
                out.m02 = a02 * c - a22 * s;
                out.m03 = a03 * c - a23 * s;
                out.m08 = a00 * s + a20 * c;
                out.m09 = a01 * s + a21 * c;
                out.m10 = a02 * s + a22 * c;
                out.m11 = a03 * s + a23 * c;
                return out;
              }
              /**
               * @en Transform a matrix with a given angle around Z axis and save the results to the out matrix
               * @zh 在给定矩阵变换基础上加入绕 Z 轴的旋转变换
               * @param rad Angle of rotation (in radians)
               */
              ;

              Mat4.rotateZ = function rotateZ(out, a, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07; // If the source and destination differ, copy the unchanged last row

                if (a !== out) {
                  out.m08 = a.m08;
                  out.m09 = a.m09;
                  out.m10 = a.m10;
                  out.m11 = a.m11;
                  out.m12 = a.m12;
                  out.m13 = a.m13;
                  out.m14 = a.m14;
                  out.m15 = a.m15;
                } // Perform axis-specific matrix multiplication


                out.m00 = a00 * c + a10 * s;
                out.m01 = a01 * c + a11 * s;
                out.m02 = a02 * c + a12 * s;
                out.m03 = a03 * c + a13 * s;
                out.m04 = a10 * c - a00 * s;
                out.m05 = a11 * c - a01 * s;
                out.m06 = a12 * c - a02 * s;
                out.m07 = a13 * c - a03 * s;
                return out;
              }
              /**
               * @en Sets the out matrix with a translation vector
               * @zh 计算位移矩阵
               */
              ;

              Mat4.fromTranslation = function fromTranslation(out, v) {
                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Sets the out matrix with a scale vector
               * @zh 计算缩放矩阵
               */
              ;

              Mat4.fromScaling = function fromScaling(out, v) {
                out.m00 = v.x;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = v.y;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = v.z;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Sets the out matrix with rotation angle
               * @zh 计算旋转矩阵
               */
              ;

              Mat4.fromRotation = function fromRotation(out, rad, axis) {
                var x = axis.x;
                var y = axis.y;
                var z = axis.z;
                var len = Math.sqrt(x * x + y * y + z * z);

                if (Math.abs(len) < EPSILON) {
                  return null;
                }

                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c; // Perform rotation-specific matrix multiplication

                out.m00 = x * x * t + c;
                out.m01 = y * x * t + z * s;
                out.m02 = z * x * t - y * s;
                out.m03 = 0;
                out.m04 = x * y * t - z * s;
                out.m05 = y * y * t + c;
                out.m06 = z * y * t + x * s;
                out.m07 = 0;
                out.m08 = x * z * t + y * s;
                out.m09 = y * z * t - x * s;
                out.m10 = z * z * t + c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Calculates the matrix representing a rotation around the X axis
               * @zh 计算绕 X 轴的旋转矩阵
               */
              ;

              Mat4.fromXRotation = function fromXRotation(out, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad); // Perform axis-specific matrix multiplication

                out.m00 = 1;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = c;
                out.m06 = s;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = -s;
                out.m10 = c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Calculates the matrix representing a rotation around the Y axis
               * @zh 计算绕 Y 轴的旋转矩阵
               */
              ;

              Mat4.fromYRotation = function fromYRotation(out, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad); // Perform axis-specific matrix multiplication

                out.m00 = c;
                out.m01 = 0;
                out.m02 = -s;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = 1;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = s;
                out.m09 = 0;
                out.m10 = c;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Calculates the matrix representing a rotation around the Z axis
               * @zh 计算绕 Z 轴的旋转矩阵
               */
              ;

              Mat4.fromZRotation = function fromZRotation(out, rad) {
                var s = Math.sin(rad);
                var c = Math.cos(rad); // Perform axis-specific matrix multiplication

                out.m00 = c;
                out.m01 = s;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = -s;
                out.m05 = c;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = 1;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Calculates the transform representing the combination of a rotation and a translation
               * @zh 根据旋转和位移信息计算矩阵
               */
              ;

              Mat4.fromRT = function fromRT(out, q, v) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                out.m00 = 1 - (yy + zz);
                out.m01 = xy + wz;
                out.m02 = xz - wy;
                out.m03 = 0;
                out.m04 = xy - wz;
                out.m05 = 1 - (xx + zz);
                out.m06 = yz + wx;
                out.m07 = 0;
                out.m08 = xz + wy;
                out.m09 = yz - wx;
                out.m10 = 1 - (xx + yy);
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Extracts the translation from the matrix, assuming it's composed in order of scale, rotation, translation
               * @zh 提取矩阵的位移信息, 默认矩阵中的变换以 S->R->T 的顺序应用
               */
              ;

              Mat4.getTranslation = function getTranslation(out, mat) {
                out.x = mat.m12;
                out.y = mat.m13;
                out.z = mat.m14;
                return out;
              }
              /**
               * @en Extracts the scale vector from the matrix, assuming it's composed in order of scale, rotation, translation
               * @zh 提取矩阵的缩放信息, 默认矩阵中的变换以 S->R->T 的顺序应用
               */
              ;

              Mat4.getScaling = function getScaling(out, mat) {
                var m00 = m3_1$1.m00 = mat.m00;
                var m01 = m3_1$1.m01 = mat.m01;
                var m02 = m3_1$1.m02 = mat.m02;
                var m04 = m3_1$1.m03 = mat.m04;
                var m05 = m3_1$1.m04 = mat.m05;
                var m06 = m3_1$1.m05 = mat.m06;
                var m08 = m3_1$1.m06 = mat.m08;
                var m09 = m3_1$1.m07 = mat.m09;
                var m10 = m3_1$1.m08 = mat.m10;
                out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
                out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
                out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10); // account for refections

                if (Mat3.determinant(m3_1$1) < 0) {
                  out.x *= -1;
                }

                return out;
              }
              /**
               * @en Extracts the rotation from the matrix, assuming it's composed in order of scale, rotation, translation
               * @zh 提取矩阵的旋转信息, 默认输入矩阵不含有缩放信息，如考虑缩放应使用 `toRTS` 函数。
               */
              ;

              Mat4.getRotation = function getRotation(out, mat) {
                var trace = mat.m00 + mat.m05 + mat.m10;
                var S = 0;

                if (trace > 0) {
                  S = Math.sqrt(trace + 1.0) * 2;
                  out.w = 0.25 * S;
                  out.x = (mat.m06 - mat.m09) / S;
                  out.y = (mat.m08 - mat.m02) / S;
                  out.z = (mat.m01 - mat.m04) / S;
                } else if (mat.m00 > mat.m05 && mat.m00 > mat.m10) {
                  S = Math.sqrt(1.0 + mat.m00 - mat.m05 - mat.m10) * 2;
                  out.w = (mat.m06 - mat.m09) / S;
                  out.x = 0.25 * S;
                  out.y = (mat.m01 + mat.m04) / S;
                  out.z = (mat.m08 + mat.m02) / S;
                } else if (mat.m05 > mat.m10) {
                  S = Math.sqrt(1.0 + mat.m05 - mat.m00 - mat.m10) * 2;
                  out.w = (mat.m08 - mat.m02) / S;
                  out.x = (mat.m01 + mat.m04) / S;
                  out.y = 0.25 * S;
                  out.z = (mat.m06 + mat.m09) / S;
                } else {
                  S = Math.sqrt(1.0 + mat.m10 - mat.m00 - mat.m05) * 2;
                  out.w = (mat.m01 - mat.m04) / S;
                  out.x = (mat.m08 + mat.m02) / S;
                  out.y = (mat.m06 + mat.m09) / S;
                  out.z = 0.25 * S;
                }

                return out;
              }
              /**
               * @en Extracts the scale, rotation and translation from the matrix, assuming it's composed in order of scale, rotation, translation
               * @zh 提取旋转、位移、缩放信息， 默认矩阵中的变换以 S->R->T 的顺序应用
               */
              ;

              Mat4.toRTS = function toRTS(m, q, v, s) {
                s.x = Vec3.set(v3_1$3, m.m00, m.m01, m.m02).length();
                m3_1$1.m00 = m.m00 / s.x;
                m3_1$1.m01 = m.m01 / s.x;
                m3_1$1.m02 = m.m02 / s.x;
                s.y = Vec3.set(v3_1$3, m.m04, m.m05, m.m06).length();
                m3_1$1.m03 = m.m04 / s.y;
                m3_1$1.m04 = m.m05 / s.y;
                m3_1$1.m05 = m.m06 / s.y;
                s.z = Vec3.set(v3_1$3, m.m08, m.m09, m.m10).length();
                m3_1$1.m06 = m.m08 / s.z;
                m3_1$1.m07 = m.m09 / s.z;
                m3_1$1.m08 = m.m10 / s.z;
                var det = Mat3.determinant(m3_1$1);

                if (det < 0) {
                  s.x *= -1;
                  m3_1$1.m00 *= -1;
                  m3_1$1.m01 *= -1;
                  m3_1$1.m02 *= -1;
                }

                Quat.fromMat3(q, m3_1$1); // already normalized

                Vec3.set(v, m.m12, m.m13, m.m14);
              }
              /**
               * @en Compose a matrix from scale, rotation and translation, applied in order.
               * @zh 根据旋转、位移、缩放信息计算矩阵，以 S->R->T 的顺序应用
               */
              ;

              Mat4.fromRTS = function fromRTS(out, q, v, s) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                var sx = s.x;
                var sy = s.y;
                var sz = s.z;
                out.m00 = (1 - (yy + zz)) * sx;
                out.m01 = (xy + wz) * sx;
                out.m02 = (xz - wy) * sx;
                out.m03 = 0;
                out.m04 = (xy - wz) * sy;
                out.m05 = (1 - (xx + zz)) * sy;
                out.m06 = (yz + wx) * sy;
                out.m07 = 0;
                out.m08 = (xz + wy) * sz;
                out.m09 = (yz - wx) * sz;
                out.m10 = (1 - (xx + yy)) * sz;
                out.m11 = 0;
                out.m12 = v.x;
                out.m13 = v.y;
                out.m14 = v.z;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Compose a matrix from scale, rotation and translation, applied in order, from a given origin
               * @zh 根据指定的旋转、位移、缩放及变换中心信息计算矩阵，以 S->R->T 的顺序应用
               * @param q Rotation quaternion
               * @param v Translation vector
               * @param s Scaling vector
               * @param o transformation Center
               */
              ;

              Mat4.fromRTSOrigin = function fromRTSOrigin(out, q, v, s, o) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                var sx = s.x;
                var sy = s.y;
                var sz = s.z;
                var ox = o.x;
                var oy = o.y;
                var oz = o.z;
                out.m00 = (1 - (yy + zz)) * sx;
                out.m01 = (xy + wz) * sx;
                out.m02 = (xz - wy) * sx;
                out.m03 = 0;
                out.m04 = (xy - wz) * sy;
                out.m05 = (1 - (xx + zz)) * sy;
                out.m06 = (yz + wx) * sy;
                out.m07 = 0;
                out.m08 = (xz + wy) * sz;
                out.m09 = (yz - wx) * sz;
                out.m10 = (1 - (xx + yy)) * sz;
                out.m11 = 0;
                out.m12 = v.x + ox - (out.m00 * ox + out.m04 * oy + out.m08 * oz);
                out.m13 = v.y + oy - (out.m01 * ox + out.m05 * oy + out.m09 * oz);
                out.m14 = v.z + oz - (out.m02 * ox + out.m06 * oy + out.m10 * oz);
                out.m15 = 1;
                return out;
              }
              /**
               * @en Sets the out matrix with the given quaternion
               * @zh 根据指定的旋转信息计算矩阵
               */
              ;

              Mat4.fromQuat = function fromQuat(out, q) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var yx = y * x2;
                var yy = y * y2;
                var zx = z * x2;
                var zy = z * y2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                out.m00 = 1 - yy - zz;
                out.m01 = yx + wz;
                out.m02 = zx - wy;
                out.m03 = 0;
                out.m04 = yx - wz;
                out.m05 = 1 - xx - zz;
                out.m06 = zy + wx;
                out.m07 = 0;
                out.m08 = zx + wy;
                out.m09 = zy - wx;
                out.m10 = 1 - xx - yy;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Calculates the matrix representing the given frustum
               * @zh 根据指定的视锥体信息计算矩阵
               * @param left The X coordinate of the left side of the near projection plane in view space.
               * @param right The X coordinate of the right side of the near projection plane in view space.
               * @param bottom The Y coordinate of the bottom side of the near projection plane in view space.
               * @param top The Y coordinate of the top side of the near projection plane in view space.
               * @param near Z distance to the near plane from the origin in view space.
               * @param far Z distance to the far plane from the origin in view space.
               */
              ;

              Mat4.frustum = function frustum(out, left, right, bottom, top, near, far) {
                var rl = 1 / (right - left);
                var tb = 1 / (top - bottom);
                var nf = 1 / (near - far);
                out.m00 = near * 2 * rl;
                out.m01 = 0;
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = 0;
                out.m05 = near * 2 * tb;
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = (right + left) * rl;
                out.m09 = (top + bottom) * tb;
                out.m10 = (far + near) * nf;
                out.m11 = -1;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = far * near * 2 * nf;
                out.m15 = 0;
                return out;
              }
              /**
               * @en Calculates perspective projection matrix
               * @zh 计算透视投影矩阵
               * @param fovy Vertical field-of-view in degrees.
               * @param aspect Aspect ratio
               * @param near Near depth clipping plane value.
               * @param far Far depth clipping plane value.
               */
              ;

              Mat4.perspective = function perspective(out, fov, aspect, near, far, isFOVY, minClipZ, projectionSignY, orientation) {
                if (isFOVY === void 0) {
                  isFOVY = true;
                }

                if (minClipZ === void 0) {
                  minClipZ = -1;
                }

                if (projectionSignY === void 0) {
                  projectionSignY = 1;
                }

                if (orientation === void 0) {
                  orientation = 0;
                }

                var f = 1.0 / Math.tan(fov / 2);
                var nf = 1 / (near - far);
                var x = isFOVY ? f / aspect : f;
                var y = (isFOVY ? f : f * aspect) * projectionSignY;
                var preTransform = preTransforms[orientation];
                out.m00 = x * preTransform[0];
                out.m01 = x * preTransform[1];
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = y * preTransform[2];
                out.m05 = y * preTransform[3];
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = (far - minClipZ * near) * nf;
                out.m11 = -1;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = far * near * nf * (1 - minClipZ);
                out.m15 = 0;
                return out;
              }
              /**
               * @en Calculates orthogonal projection matrix
               * @zh 计算正交投影矩阵
               * @param left Left-side x-coordinate.
               * @param right Right-side x-coordinate.
               * @param bottom Bottom y-coordinate.
               * @param top Top y-coordinate.
               * @param near Near depth clipping plane value.
               * @param far Far depth clipping plane value.
               */
              ;

              Mat4.ortho = function ortho(out, left, right, bottom, top, near, far, minClipZ, projectionSignY, orientation) {
                if (minClipZ === void 0) {
                  minClipZ = -1;
                }

                if (projectionSignY === void 0) {
                  projectionSignY = 1;
                }

                if (orientation === void 0) {
                  orientation = 0;
                }

                var lr = 1 / (left - right);
                var bt = 1 / (bottom - top) * projectionSignY;
                var nf = 1 / (near - far);
                var x = -2 * lr;
                var y = -2 * bt;
                var dx = (left + right) * lr;
                var dy = (top + bottom) * bt;
                var preTransform = preTransforms[orientation];
                out.m00 = x * preTransform[0];
                out.m01 = x * preTransform[1];
                out.m02 = 0;
                out.m03 = 0;
                out.m04 = y * preTransform[2];
                out.m05 = y * preTransform[3];
                out.m06 = 0;
                out.m07 = 0;
                out.m08 = 0;
                out.m09 = 0;
                out.m10 = nf * (1 - minClipZ);
                out.m11 = 0;
                out.m12 = dx * preTransform[0] + dy * preTransform[2];
                out.m13 = dx * preTransform[1] + dy * preTransform[3];
                out.m14 = (near - minClipZ * far) * nf;
                out.m15 = 1;
                return out;
              }
              /**
               * @en
               * Calculates the matrix with the view point information, given by eye position, target center and the up vector.
               * Note that center to eye vector can't be zero or parallel to the up vector
               * @zh
               * 根据视点计算矩阵，注意 `eye - center` 不能为零向量或与 `up` 向量平行
               * @param eye The source point.
               * @param center The target point.
               * @param up The vector describing the up direction.
               */
              ;

              Mat4.lookAt = function lookAt(out, eye, center, up) {
                var eyex = eye.x;
                var eyey = eye.y;
                var eyez = eye.z;
                var upx = up.x;
                var upy = up.y;
                var upz = up.z;
                var centerx = center.x;
                var centery = center.y;
                var centerz = center.z;
                var z0 = eyex - centerx;
                var z1 = eyey - centery;
                var z2 = eyez - centerz;
                var len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
                z0 *= len;
                z1 *= len;
                z2 *= len;
                var x0 = upy * z2 - upz * z1;
                var x1 = upz * z0 - upx * z2;
                var x2 = upx * z1 - upy * z0;
                len = 1 / Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
                x0 *= len;
                x1 *= len;
                x2 *= len;
                var y0 = z1 * x2 - z2 * x1;
                var y1 = z2 * x0 - z0 * x2;
                var y2 = z0 * x1 - z1 * x0;
                out.m00 = x0;
                out.m01 = y0;
                out.m02 = z0;
                out.m03 = 0;
                out.m04 = x1;
                out.m05 = y1;
                out.m06 = z1;
                out.m07 = 0;
                out.m08 = x2;
                out.m09 = y2;
                out.m10 = z2;
                out.m11 = 0;
                out.m12 = -(x0 * eyex + x1 * eyey + x2 * eyez);
                out.m13 = -(y0 * eyex + y1 * eyey + y2 * eyez);
                out.m14 = -(z0 * eyex + z1 * eyey + z2 * eyez);
                out.m15 = 1;
                return out;
              }
              /**
               * @en Calculates the inverse transpose of a matrix and save the results to out matrix
               * @zh 计算逆转置矩阵
               */
              ;

              Mat4.inverseTranspose = function inverseTranspose(out, a) {
                var a00 = a.m00;
                var a01 = a.m01;
                var a02 = a.m02;
                var a03 = a.m03;
                var a10 = a.m04;
                var a11 = a.m05;
                var a12 = a.m06;
                var a13 = a.m07;
                var a20 = a.m08;
                var a21 = a.m09;
                var a22 = a.m10;
                var a23 = a.m11;
                var a30 = a.m12;
                var a31 = a.m13;
                var a32 = a.m14;
                var a33 = a.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (!det) {
                  return null;
                }

                det = 1.0 / det;
                out.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                out.m01 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                out.m02 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                out.m03 = 0;
                out.m04 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                out.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                out.m06 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                out.m07 = 0;
                out.m08 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                out.m09 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                out.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                out.m11 = 0;
                out.m12 = 0;
                out.m13 = 0;
                out.m14 = 0;
                out.m15 = 1;
                return out;
              }
              /**
               * @en Transform a matrix object to a flat array
               * @zh 矩阵转数组
               * @param ofs Array Start Offset
               */
              ;

              Mat4.toArray = function toArray(out, m, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = m.m00;
                out[ofs + 1] = m.m01;
                out[ofs + 2] = m.m02;
                out[ofs + 3] = m.m03;
                out[ofs + 4] = m.m04;
                out[ofs + 5] = m.m05;
                out[ofs + 6] = m.m06;
                out[ofs + 7] = m.m07;
                out[ofs + 8] = m.m08;
                out[ofs + 9] = m.m09;
                out[ofs + 10] = m.m10;
                out[ofs + 11] = m.m11;
                out[ofs + 12] = m.m12;
                out[ofs + 13] = m.m13;
                out[ofs + 14] = m.m14;
                out[ofs + 15] = m.m15;
                return out;
              }
              /**
               * @en Generates or sets a matrix with a flat array
               * @zh 数组转矩阵
               * @param ofs Array Start Offset
               */
              ;

              Mat4.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.m00 = arr[ofs + 0];
                out.m01 = arr[ofs + 1];
                out.m02 = arr[ofs + 2];
                out.m03 = arr[ofs + 3];
                out.m04 = arr[ofs + 4];
                out.m05 = arr[ofs + 5];
                out.m06 = arr[ofs + 6];
                out.m07 = arr[ofs + 7];
                out.m08 = arr[ofs + 8];
                out.m09 = arr[ofs + 9];
                out.m10 = arr[ofs + 10];
                out.m11 = arr[ofs + 11];
                out.m12 = arr[ofs + 12];
                out.m13 = arr[ofs + 13];
                out.m14 = arr[ofs + 14];
                out.m15 = arr[ofs + 15];
                return out;
              }
              /**
               * @en Adds two matrices and save the results to out matrix
               * @zh 逐元素矩阵加法
               */
              ;

              Mat4.add = function add(out, a, b) {
                out.m00 = a.m00 + b.m00;
                out.m01 = a.m01 + b.m01;
                out.m02 = a.m02 + b.m02;
                out.m03 = a.m03 + b.m03;
                out.m04 = a.m04 + b.m04;
                out.m05 = a.m05 + b.m05;
                out.m06 = a.m06 + b.m06;
                out.m07 = a.m07 + b.m07;
                out.m08 = a.m08 + b.m08;
                out.m09 = a.m09 + b.m09;
                out.m10 = a.m10 + b.m10;
                out.m11 = a.m11 + b.m11;
                out.m12 = a.m12 + b.m12;
                out.m13 = a.m13 + b.m13;
                out.m14 = a.m14 + b.m14;
                out.m15 = a.m15 + b.m15;
                return out;
              }
              /**
               * @en Subtracts matrix b from matrix a and save the results to out matrix
               * @zh 逐元素矩阵减法
               */
              ;

              Mat4.subtract = function subtract(out, a, b) {
                out.m00 = a.m00 - b.m00;
                out.m01 = a.m01 - b.m01;
                out.m02 = a.m02 - b.m02;
                out.m03 = a.m03 - b.m03;
                out.m04 = a.m04 - b.m04;
                out.m05 = a.m05 - b.m05;
                out.m06 = a.m06 - b.m06;
                out.m07 = a.m07 - b.m07;
                out.m08 = a.m08 - b.m08;
                out.m09 = a.m09 - b.m09;
                out.m10 = a.m10 - b.m10;
                out.m11 = a.m11 - b.m11;
                out.m12 = a.m12 - b.m12;
                out.m13 = a.m13 - b.m13;
                out.m14 = a.m14 - b.m14;
                out.m15 = a.m15 - b.m15;
                return out;
              }
              /**
               * @en Multiply each element of a matrix by a scalar number and save the results to out matrix
               * @zh 矩阵标量乘法
               */
              ;

              Mat4.multiplyScalar = function multiplyScalar(out, a, b) {
                out.m00 = a.m00 * b;
                out.m01 = a.m01 * b;
                out.m02 = a.m02 * b;
                out.m03 = a.m03 * b;
                out.m04 = a.m04 * b;
                out.m05 = a.m05 * b;
                out.m06 = a.m06 * b;
                out.m07 = a.m07 * b;
                out.m08 = a.m08 * b;
                out.m09 = a.m09 * b;
                out.m10 = a.m10 * b;
                out.m11 = a.m11 * b;
                out.m12 = a.m12 * b;
                out.m13 = a.m13 * b;
                out.m14 = a.m14 * b;
                out.m15 = a.m15 * b;
                return out;
              }
              /**
               * @en Adds two matrices after multiplying each element of the second operand by a scalar number. And save the results to out matrix.
               * @zh 逐元素矩阵标量乘加: A + B * scale
               */
              ;

              Mat4.multiplyScalarAndAdd = function multiplyScalarAndAdd(out, a, b, scale) {
                out.m00 = a.m00 + b.m00 * scale;
                out.m01 = a.m01 + b.m01 * scale;
                out.m02 = a.m02 + b.m02 * scale;
                out.m03 = a.m03 + b.m03 * scale;
                out.m04 = a.m04 + b.m04 * scale;
                out.m05 = a.m05 + b.m05 * scale;
                out.m06 = a.m06 + b.m06 * scale;
                out.m07 = a.m07 + b.m07 * scale;
                out.m08 = a.m08 + b.m08 * scale;
                out.m09 = a.m09 + b.m09 * scale;
                out.m10 = a.m10 + b.m10 * scale;
                out.m11 = a.m11 + b.m11 * scale;
                out.m12 = a.m12 + b.m12 * scale;
                out.m13 = a.m13 + b.m13 * scale;
                out.m14 = a.m14 + b.m14 * scale;
                out.m15 = a.m15 + b.m15 * scale;
                return out;
              }
              /**
               * @en Returns whether the specified matrices are equal.
               * @zh 矩阵等价判断
               */
              ;

              Mat4.strictEquals = function strictEquals(a, b) {
                return a.m00 === b.m00 && a.m01 === b.m01 && a.m02 === b.m02 && a.m03 === b.m03 && a.m04 === b.m04 && a.m05 === b.m05 && a.m06 === b.m06 && a.m07 === b.m07 && a.m08 === b.m08 && a.m09 === b.m09 && a.m10 === b.m10 && a.m11 === b.m11 && a.m12 === b.m12 && a.m13 === b.m13 && a.m14 === b.m14 && a.m15 === b.m15;
              }
              /**
               * @en Returns whether the specified matrices are approximately equal.
               * @zh 排除浮点数误差的矩阵近似等价判断
               */
              ;

              Mat4.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                // TAOCP vol.2, 3rd ed., s.4.2.4, p.213-225
                // defines a 'close enough' relationship between u and v that scales for magnitude
                return Math.abs(a.m00 - b.m00) <= epsilon * Math.max(1.0, Math.abs(a.m00), Math.abs(b.m00)) && Math.abs(a.m01 - b.m01) <= epsilon * Math.max(1.0, Math.abs(a.m01), Math.abs(b.m01)) && Math.abs(a.m02 - b.m02) <= epsilon * Math.max(1.0, Math.abs(a.m02), Math.abs(b.m02)) && Math.abs(a.m03 - b.m03) <= epsilon * Math.max(1.0, Math.abs(a.m03), Math.abs(b.m03)) && Math.abs(a.m04 - b.m04) <= epsilon * Math.max(1.0, Math.abs(a.m04), Math.abs(b.m04)) && Math.abs(a.m05 - b.m05) <= epsilon * Math.max(1.0, Math.abs(a.m05), Math.abs(b.m05)) && Math.abs(a.m06 - b.m06) <= epsilon * Math.max(1.0, Math.abs(a.m06), Math.abs(b.m06)) && Math.abs(a.m07 - b.m07) <= epsilon * Math.max(1.0, Math.abs(a.m07), Math.abs(b.m07)) && Math.abs(a.m08 - b.m08) <= epsilon * Math.max(1.0, Math.abs(a.m08), Math.abs(b.m08)) && Math.abs(a.m09 - b.m09) <= epsilon * Math.max(1.0, Math.abs(a.m09), Math.abs(b.m09)) && Math.abs(a.m10 - b.m10) <= epsilon * Math.max(1.0, Math.abs(a.m10), Math.abs(b.m10)) && Math.abs(a.m11 - b.m11) <= epsilon * Math.max(1.0, Math.abs(a.m11), Math.abs(b.m11)) && Math.abs(a.m12 - b.m12) <= epsilon * Math.max(1.0, Math.abs(a.m12), Math.abs(b.m12)) && Math.abs(a.m13 - b.m13) <= epsilon * Math.max(1.0, Math.abs(a.m13), Math.abs(b.m13)) && Math.abs(a.m14 - b.m14) <= epsilon * Math.max(1.0, Math.abs(a.m14), Math.abs(b.m14)) && Math.abs(a.m15 - b.m15) <= epsilon * Math.max(1.0, Math.abs(a.m15), Math.abs(b.m15));
              }
              /**
               * @en Value at column 0 row 0 of the matrix.
               * @zh 矩阵第 0 列第 0 行的元素。
               */
              ;

              function Mat4(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15) {
                var _this;

                if (m00 === void 0) {
                  m00 = 1;
                }

                if (m01 === void 0) {
                  m01 = 0;
                }

                if (m02 === void 0) {
                  m02 = 0;
                }

                if (m03 === void 0) {
                  m03 = 0;
                }

                if (m04 === void 0) {
                  m04 = 0;
                }

                if (m05 === void 0) {
                  m05 = 1;
                }

                if (m06 === void 0) {
                  m06 = 0;
                }

                if (m07 === void 0) {
                  m07 = 0;
                }

                if (m08 === void 0) {
                  m08 = 0;
                }

                if (m09 === void 0) {
                  m09 = 0;
                }

                if (m10 === void 0) {
                  m10 = 1;
                }

                if (m11 === void 0) {
                  m11 = 0;
                }

                if (m12 === void 0) {
                  m12 = 0;
                }

                if (m13 === void 0) {
                  m13 = 0;
                }

                if (m14 === void 0) {
                  m14 = 0;
                }

                if (m15 === void 0) {
                  m15 = 1;
                }

                _this = _ValueType.call(this) || this;
                _this.m00 = void 0;
                _this.m01 = void 0;
                _this.m02 = void 0;
                _this.m03 = void 0;
                _this.m04 = void 0;
                _this.m05 = void 0;
                _this.m06 = void 0;
                _this.m07 = void 0;
                _this.m08 = void 0;
                _this.m09 = void 0;
                _this.m10 = void 0;
                _this.m11 = void 0;
                _this.m12 = void 0;
                _this.m13 = void 0;
                _this.m14 = void 0;
                _this.m15 = void 0;

                if (typeof m00 === 'object') {
                  _this.m00 = m00.m00;
                  _this.m01 = m00.m01;
                  _this.m02 = m00.m02;
                  _this.m03 = m00.m03;
                  _this.m04 = m00.m04;
                  _this.m05 = m00.m05;
                  _this.m06 = m00.m06;
                  _this.m07 = m00.m07;
                  _this.m08 = m00.m08;
                  _this.m09 = m00.m09;
                  _this.m10 = m00.m10;
                  _this.m11 = m00.m11;
                  _this.m12 = m00.m12;
                  _this.m13 = m00.m13;
                  _this.m14 = m00.m14;
                  _this.m15 = m00.m15;
                } else {
                  _this.m00 = m00;
                  _this.m01 = m01;
                  _this.m02 = m02;
                  _this.m03 = m03;
                  _this.m04 = m04;
                  _this.m05 = m05;
                  _this.m06 = m06;
                  _this.m07 = m07;
                  _this.m08 = m08;
                  _this.m09 = m09;
                  _this.m10 = m10;
                  _this.m11 = m11;
                  _this.m12 = m12;
                  _this.m13 = m13;
                  _this.m14 = m14;
                  _this.m15 = m15;
                }

                return _this;
              }
              /**
               * @en Clone a new matrix from the current matrix.
               * @zh 克隆当前矩阵。
               */


              var _proto = Mat4.prototype;

              _proto.clone = function clone() {
                return new Mat4(this.m00, this.m01, this.m02, this.m03, this.m04, this.m05, this.m06, this.m07, this.m08, this.m09, this.m10, this.m11, this.m12, this.m13, this.m14, this.m15);
              }
              /**
               * @en Sets the matrix with another one's value.
               * @zh 设置当前矩阵使其与指定矩阵相等。
               * @param other Specified matrix.
               * @return this
               */
              ;

              _proto.set = function set(m00, m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15) {
                if (m00 === void 0) {
                  m00 = 1;
                }

                if (m01 === void 0) {
                  m01 = 0;
                }

                if (m02 === void 0) {
                  m02 = 0;
                }

                if (m03 === void 0) {
                  m03 = 0;
                }

                if (m04 === void 0) {
                  m04 = 0;
                }

                if (m05 === void 0) {
                  m05 = 1;
                }

                if (m06 === void 0) {
                  m06 = 0;
                }

                if (m07 === void 0) {
                  m07 = 0;
                }

                if (m08 === void 0) {
                  m08 = 0;
                }

                if (m09 === void 0) {
                  m09 = 0;
                }

                if (m10 === void 0) {
                  m10 = 1;
                }

                if (m11 === void 0) {
                  m11 = 0;
                }

                if (m12 === void 0) {
                  m12 = 0;
                }

                if (m13 === void 0) {
                  m13 = 0;
                }

                if (m14 === void 0) {
                  m14 = 0;
                }

                if (m15 === void 0) {
                  m15 = 1;
                }

                if (typeof m00 === 'object') {
                  this.m01 = m00.m01;
                  this.m02 = m00.m02;
                  this.m03 = m00.m03;
                  this.m04 = m00.m04;
                  this.m05 = m00.m05;
                  this.m06 = m00.m06;
                  this.m07 = m00.m07;
                  this.m08 = m00.m08;
                  this.m09 = m00.m09;
                  this.m10 = m00.m10;
                  this.m11 = m00.m11;
                  this.m12 = m00.m12;
                  this.m13 = m00.m13;
                  this.m14 = m00.m14;
                  this.m15 = m00.m15;
                  this.m00 = m00.m00;
                } else {
                  this.m01 = m01;
                  this.m02 = m02;
                  this.m03 = m03;
                  this.m04 = m04;
                  this.m05 = m05;
                  this.m06 = m06;
                  this.m07 = m07;
                  this.m08 = m08;
                  this.m09 = m09;
                  this.m10 = m10;
                  this.m11 = m11;
                  this.m12 = m12;
                  this.m13 = m13;
                  this.m14 = m14;
                  this.m15 = m15;
                  this.m00 = m00;
                }

                return this;
              }
              /**
               * @en Returns whether the specified matrices are approximately equal.
               * @zh 判断当前矩阵是否在误差范围内与指定矩阵相等。
               * @param other Comparative matrix
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @return Returns `true' when the elements of both matrices are equal; otherwise returns `false'.
               */
              ;

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.m00 - other.m00) <= epsilon * Math.max(1.0, Math.abs(this.m00), Math.abs(other.m00)) && Math.abs(this.m01 - other.m01) <= epsilon * Math.max(1.0, Math.abs(this.m01), Math.abs(other.m01)) && Math.abs(this.m02 - other.m02) <= epsilon * Math.max(1.0, Math.abs(this.m02), Math.abs(other.m02)) && Math.abs(this.m03 - other.m03) <= epsilon * Math.max(1.0, Math.abs(this.m03), Math.abs(other.m03)) && Math.abs(this.m04 - other.m04) <= epsilon * Math.max(1.0, Math.abs(this.m04), Math.abs(other.m04)) && Math.abs(this.m05 - other.m05) <= epsilon * Math.max(1.0, Math.abs(this.m05), Math.abs(other.m05)) && Math.abs(this.m06 - other.m06) <= epsilon * Math.max(1.0, Math.abs(this.m06), Math.abs(other.m06)) && Math.abs(this.m07 - other.m07) <= epsilon * Math.max(1.0, Math.abs(this.m07), Math.abs(other.m07)) && Math.abs(this.m08 - other.m08) <= epsilon * Math.max(1.0, Math.abs(this.m08), Math.abs(other.m08)) && Math.abs(this.m09 - other.m09) <= epsilon * Math.max(1.0, Math.abs(this.m09), Math.abs(other.m09)) && Math.abs(this.m10 - other.m10) <= epsilon * Math.max(1.0, Math.abs(this.m10), Math.abs(other.m10)) && Math.abs(this.m11 - other.m11) <= epsilon * Math.max(1.0, Math.abs(this.m11), Math.abs(other.m11)) && Math.abs(this.m12 - other.m12) <= epsilon * Math.max(1.0, Math.abs(this.m12), Math.abs(other.m12)) && Math.abs(this.m13 - other.m13) <= epsilon * Math.max(1.0, Math.abs(this.m13), Math.abs(other.m13)) && Math.abs(this.m14 - other.m14) <= epsilon * Math.max(1.0, Math.abs(this.m14), Math.abs(other.m14)) && Math.abs(this.m15 - other.m15) <= epsilon * Math.max(1.0, Math.abs(this.m15), Math.abs(other.m15));
              }
              /**
               * @en Returns whether the specified matrices are equal.
               * @zh 判断当前矩阵是否与指定矩阵相等。
               * @param other Comparative matrix
               * @return Returns `true' when the elements of both matrices are equal; otherwise returns `false'.
               */
              ;

              _proto.strictEquals = function strictEquals(other) {
                return this.m00 === other.m00 && this.m01 === other.m01 && this.m02 === other.m02 && this.m03 === other.m03 && this.m04 === other.m04 && this.m05 === other.m05 && this.m06 === other.m06 && this.m07 === other.m07 && this.m08 === other.m08 && this.m09 === other.m09 && this.m10 === other.m10 && this.m11 === other.m11 && this.m12 === other.m12 && this.m13 === other.m13 && this.m14 === other.m14 && this.m15 === other.m15;
              }
              /**
               * @en Returns a string representation of a matrix.
               * @zh 返回当前矩阵的字符串表示。
               * @return 当前矩阵的字符串表示。
               */
              ;

              _proto.toString = function toString() {
                return "[\n" + this.m00 + ", " + this.m01 + ", " + this.m02 + ", " + this.m03 + ",\n" + this.m04 + ", " + this.m05 + ", " + this.m06 + ", " + this.m07 + ",\n" + this.m08 + ", " + this.m09 + ", " + this.m10 + ", " + this.m11 + ",\n" + this.m12 + ", " + this.m13 + ", " + this.m14 + ", " + this.m15 + "\n" + ']';
              }
              /**
               * @en set the current matrix to an identity matrix.
               * @zh 将当前矩阵设为单位矩阵。
               * @return `this`
               */
              ;

              _proto.identity = function identity() {
                this.m00 = 1;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 0;
                this.m05 = 1;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 0;
                this.m09 = 0;
                this.m10 = 1;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 1;
                return this;
              }
              /**
               * @en set the current matrix to an zero matrix.
               * @zh 将当前矩阵设为 0矩阵。
               * @return `this`
               */
              ;

              _proto.zero = function zero() {
                this.m00 = 0;
                this.m01 = 0;
                this.m02 = 0;
                this.m03 = 0;
                this.m04 = 0;
                this.m05 = 0;
                this.m06 = 0;
                this.m07 = 0;
                this.m08 = 0;
                this.m09 = 0;
                this.m10 = 0;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 0;
                return this;
              }
              /**
               * @en Transposes the current matrix.
               * @zh 计算当前矩阵的转置矩阵。
               */
              ;

              _proto.transpose = function transpose() {
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a12 = this.m06;
                var a13 = this.m07;
                var a23 = this.m11;
                this.m01 = this.m04;
                this.m02 = this.m08;
                this.m03 = this.m12;
                this.m04 = a01;
                this.m06 = this.m09;
                this.m07 = this.m13;
                this.m08 = a02;
                this.m09 = a12;
                this.m11 = this.m14;
                this.m12 = a03;
                this.m13 = a13;
                this.m14 = a23;
                return this;
              }
              /**
               * @en Inverts the current matrix. When matrix is not invertible the matrix will be set to zeros.
               * @zh 计算当前矩阵的逆矩阵。注意，在矩阵不可逆时，会返回一个全为 0 的矩阵。
               */
              ;

              _proto.invert = function invert() {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a10 = this.m04;
                var a11 = this.m05;
                var a12 = this.m06;
                var a13 = this.m07;
                var a20 = this.m08;
                var a21 = this.m09;
                var a22 = this.m10;
                var a23 = this.m11;
                var a30 = this.m12;
                var a31 = this.m13;
                var a32 = this.m14;
                var a33 = this.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

                var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

                if (det === 0) {
                  this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                  return this;
                }

                det = 1.0 / det;
                this.m00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
                this.m01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
                this.m02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
                this.m03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
                this.m04 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
                this.m05 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
                this.m06 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
                this.m07 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
                this.m08 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
                this.m09 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
                this.m10 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
                this.m11 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
                this.m12 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
                this.m13 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
                this.m14 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
                this.m15 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
                return this;
              }
              /**
               * @en Calculates the determinant of the current matrix.
               * @zh 计算当前矩阵的行列式。
               * @return 当前矩阵的行列式。
               */
              ;

              _proto.determinant = function determinant() {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a10 = this.m04;
                var a11 = this.m05;
                var a12 = this.m06;
                var a13 = this.m07;
                var a20 = this.m08;
                var a21 = this.m09;
                var a22 = this.m10;
                var a23 = this.m11;
                var a30 = this.m12;
                var a31 = this.m13;
                var a32 = this.m14;
                var a33 = this.m15;
                var b00 = a00 * a11 - a01 * a10;
                var b01 = a00 * a12 - a02 * a10;
                var b02 = a00 * a13 - a03 * a10;
                var b03 = a01 * a12 - a02 * a11;
                var b04 = a01 * a13 - a03 * a11;
                var b05 = a02 * a13 - a03 * a12;
                var b06 = a20 * a31 - a21 * a30;
                var b07 = a20 * a32 - a22 * a30;
                var b08 = a20 * a33 - a23 * a30;
                var b09 = a21 * a32 - a22 * a31;
                var b10 = a21 * a33 - a23 * a31;
                var b11 = a22 * a33 - a23 * a32; // Calculate the determinant

                return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
              }
              /**
               * @en Adds the current matrix and another matrix to the current matrix.
               * @zh 矩阵加法。将当前矩阵与指定矩阵的相加，结果返回给当前矩阵。
               * @param mat the second operand
               */
              ;

              _proto.add = function add(mat) {
                this.m00 += mat.m00;
                this.m01 += mat.m01;
                this.m02 += mat.m02;
                this.m03 += mat.m03;
                this.m04 += mat.m04;
                this.m05 += mat.m05;
                this.m06 += mat.m06;
                this.m07 += mat.m07;
                this.m08 += mat.m08;
                this.m09 += mat.m09;
                this.m10 += mat.m10;
                this.m11 += mat.m11;
                this.m12 += mat.m12;
                this.m13 += mat.m13;
                this.m14 += mat.m14;
                this.m15 += mat.m15;
                return this;
              }
              /**
               * @en Subtracts another matrix from the current matrix.
               * @zh 计算矩阵减法。将当前矩阵减去指定矩阵的结果赋值给当前矩阵。
               * @param mat the second operand
               */
              ;

              _proto.subtract = function subtract(mat) {
                this.m00 -= mat.m00;
                this.m01 -= mat.m01;
                this.m02 -= mat.m02;
                this.m03 -= mat.m03;
                this.m04 -= mat.m04;
                this.m05 -= mat.m05;
                this.m06 -= mat.m06;
                this.m07 -= mat.m07;
                this.m08 -= mat.m08;
                this.m09 -= mat.m09;
                this.m10 -= mat.m10;
                this.m11 -= mat.m11;
                this.m12 -= mat.m12;
                this.m13 -= mat.m13;
                this.m14 -= mat.m14;
                this.m15 -= mat.m15;
                return this;
              }
              /**
               * @en Multiply the current matrix with another matrix.
               * @zh 矩阵乘法。将当前矩阵左乘指定矩阵的结果赋值给当前矩阵。
               * @param mat the second operand
               */
              ;

              _proto.multiply = function multiply(mat) {
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a10 = this.m04;
                var a11 = this.m05;
                var a12 = this.m06;
                var a13 = this.m07;
                var a20 = this.m08;
                var a21 = this.m09;
                var a22 = this.m10;
                var a23 = this.m11;
                var a30 = this.m12;
                var a31 = this.m13;
                var a32 = this.m14;
                var a33 = this.m15; // Cache only the current line of the second matrix

                var b0 = mat.m00;
                var b1 = mat.m01;
                var b2 = mat.m02;
                var b3 = mat.m03;
                this.m00 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m01 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m02 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m03 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m04;
                b1 = mat.m05;
                b2 = mat.m06;
                b3 = mat.m07;
                this.m04 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m05 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m06 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m07 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m08;
                b1 = mat.m09;
                b2 = mat.m10;
                b3 = mat.m11;
                this.m08 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m09 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m10 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m11 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                b0 = mat.m12;
                b1 = mat.m13;
                b2 = mat.m14;
                b3 = mat.m15;
                this.m12 = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
                this.m13 = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
                this.m14 = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
                this.m15 = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
                return this;
              }
              /**
               * @en Multiply each element of the current matrix by a scalar number.
               * @zh 矩阵数乘。将当前矩阵与指定标量的数乘结果赋值给当前矩阵。
               * @param scalar amount to scale the matrix's elements by
               */
              ;

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                this.m00 *= scalar;
                this.m01 *= scalar;
                this.m02 *= scalar;
                this.m03 *= scalar;
                this.m04 *= scalar;
                this.m05 *= scalar;
                this.m06 *= scalar;
                this.m07 *= scalar;
                this.m08 *= scalar;
                this.m09 *= scalar;
                this.m10 *= scalar;
                this.m11 *= scalar;
                this.m12 *= scalar;
                this.m13 *= scalar;
                this.m14 *= scalar;
                this.m15 *= scalar;
                return this;
              }
              /**
               * @en Translate the current matrix by the given vector
               * @zh 将当前矩阵左乘位移矩阵的结果赋值给当前矩阵，位移矩阵由各个轴的位移给出。
               * @param vec vector to translate by
               */
              ;

              _proto.translate = function translate(vec) {
                console.warn('function changed');
                this.m12 += vec.x;
                this.m13 += vec.y;
                this.m14 += vec.z;
                return this;
              }
              /**
               * @en Multiply the current matrix with a scale vector.
               * @zh 将当前矩阵左乘缩放矩阵的结果赋值给当前矩阵，缩放矩阵由各个轴的缩放给出。
               * @param vec vector to scale by
               */
              ;

              _proto.scale = function scale(vec) {
                var x = vec.x;
                var y = vec.y;
                var z = vec.z;
                this.m00 *= x;
                this.m01 *= x;
                this.m02 *= x;
                this.m03 *= x;
                this.m04 *= y;
                this.m05 *= y;
                this.m06 *= y;
                this.m07 *= y;
                this.m08 *= z;
                this.m09 *= z;
                this.m10 *= z;
                this.m11 *= z;
                return this;
              }
              /**
               * @en Rotates the current matrix by the given angle around the given axis
               * @zh 将当前矩阵左乘旋转矩阵的结果赋值给当前矩阵，旋转矩阵由旋转轴和旋转角度给出。
               * @param rad Angle of rotation (in radians)
               * @param axis Axis of rotation
               */
              ;

              _proto.rotate = function rotate(rad, axis) {
                var x = axis.x;
                var y = axis.y;
                var z = axis.z;
                var len = Math.sqrt(x * x + y * y + z * z);

                if (Math.abs(len) < EPSILON) {
                  return null;
                }

                len = 1 / len;
                x *= len;
                y *= len;
                z *= len;
                var s = Math.sin(rad);
                var c = Math.cos(rad);
                var t = 1 - c;
                var a00 = this.m00;
                var a01 = this.m01;
                var a02 = this.m02;
                var a03 = this.m03;
                var a10 = this.m04;
                var a11 = this.m05;
                var a12 = this.m06;
                var a13 = this.m07;
                var a20 = this.m08;
                var a21 = this.m09;
                var a22 = this.m10;
                var a23 = this.m11; // Construct the elements of the rotation matrix

                var b00 = x * x * t + c;
                var b01 = y * x * t + z * s;
                var b02 = z * x * t - y * s;
                var b10 = x * y * t - z * s;
                var b11 = y * y * t + c;
                var b12 = z * y * t + x * s;
                var b20 = x * z * t + y * s;
                var b21 = y * z * t - x * s;
                var b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

                this.m00 = a00 * b00 + a10 * b01 + a20 * b02;
                this.m01 = a01 * b00 + a11 * b01 + a21 * b02;
                this.m02 = a02 * b00 + a12 * b01 + a22 * b02;
                this.m03 = a03 * b00 + a13 * b01 + a23 * b02;
                this.m04 = a00 * b10 + a10 * b11 + a20 * b12;
                this.m05 = a01 * b10 + a11 * b11 + a21 * b12;
                this.m06 = a02 * b10 + a12 * b11 + a22 * b12;
                this.m07 = a03 * b10 + a13 * b11 + a23 * b12;
                this.m08 = a00 * b20 + a10 * b21 + a20 * b22;
                this.m09 = a01 * b20 + a11 * b21 + a21 * b22;
                this.m10 = a02 * b20 + a12 * b21 + a22 * b22;
                this.m11 = a03 * b20 + a13 * b21 + a23 * b22;
                return this;
              }
              /**
               * @en Returns the translation vector component of a transformation matrix.
               * @zh 从当前矩阵中计算出位移变换的部分，并以各个轴上位移的形式赋值给出口向量。
               * @param out Vector to receive translation component.
               */
              ;

              _proto.getTranslation = function getTranslation(out) {
                out.x = this.m12;
                out.y = this.m13;
                out.z = this.m14;
                return out;
              }
              /**
               * @en Returns the scale factor component of a transformation matrix
               * @zh 从当前矩阵中计算出缩放变换的部分，并以各个轴上缩放的形式赋值给出口向量。
               * @param out Vector to receive scale component
               */
              ;

              _proto.getScale = function getScale(out) {
                var m00 = m3_1$1.m00 = this.m00;
                var m01 = m3_1$1.m01 = this.m01;
                var m02 = m3_1$1.m02 = this.m02;
                var m04 = m3_1$1.m03 = this.m04;
                var m05 = m3_1$1.m04 = this.m05;
                var m06 = m3_1$1.m05 = this.m06;
                var m08 = m3_1$1.m06 = this.m08;
                var m09 = m3_1$1.m07 = this.m09;
                var m10 = m3_1$1.m08 = this.m10;
                out.x = Math.sqrt(m00 * m00 + m01 * m01 + m02 * m02);
                out.y = Math.sqrt(m04 * m04 + m05 * m05 + m06 * m06);
                out.z = Math.sqrt(m08 * m08 + m09 * m09 + m10 * m10); // account for refections

                if (Mat3.determinant(m3_1$1) < 0) {
                  out.x *= -1;
                }

                return out;
              }
              /**
               * @en Returns the rotation factor component of a transformation matrix
               * @zh 从当前矩阵中计算出旋转变换的部分，并以四元数的形式赋值给出口四元数。
               * @param out Vector to receive rotation component
               */
              ;

              _proto.getRotation = function getRotation(out) {
                var trace = this.m00 + this.m05 + this.m10;
                var S = 0;

                if (trace > 0) {
                  S = Math.sqrt(trace + 1.0) * 2;
                  out.w = 0.25 * S;
                  out.x = (this.m06 - this.m09) / S;
                  out.y = (this.m08 - this.m02) / S;
                  out.z = (this.m01 - this.m04) / S;
                } else if (this.m00 > this.m05 && this.m00 > this.m10) {
                  S = Math.sqrt(1.0 + this.m00 - this.m05 - this.m10) * 2;
                  out.w = (this.m06 - this.m09) / S;
                  out.x = 0.25 * S;
                  out.y = (this.m01 + this.m04) / S;
                  out.z = (this.m08 + this.m02) / S;
                } else if (this.m05 > this.m10) {
                  S = Math.sqrt(1.0 + this.m05 - this.m00 - this.m10) * 2;
                  out.w = (this.m08 - this.m02) / S;
                  out.x = (this.m01 + this.m04) / S;
                  out.y = 0.25 * S;
                  out.z = (this.m06 + this.m09) / S;
                } else {
                  S = Math.sqrt(1.0 + this.m10 - this.m00 - this.m05) * 2;
                  out.w = (this.m01 - this.m04) / S;
                  out.x = (this.m08 + this.m02) / S;
                  out.y = (this.m06 + this.m09) / S;
                  out.z = 0.25 * S;
                }

                return out;
              }
              /**
               * @en Resets the matrix values by the given rotation quaternion, translation vector and scale vector
               * @zh 重置当前矩阵的值，使其表示指定的旋转、缩放、位移依次组合的变换。
               * @param q Rotation quaternion
               * @param v Translation vector
               * @param s Scaling vector
               * @return `this`
               */
              ;

              _proto.fromRTS = function fromRTS(q, v, s) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var xy = x * y2;
                var xz = x * z2;
                var yy = y * y2;
                var yz = y * z2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                var sx = s.x;
                var sy = s.y;
                var sz = s.z;
                this.m00 = (1 - (yy + zz)) * sx;
                this.m01 = (xy + wz) * sx;
                this.m02 = (xz - wy) * sx;
                this.m03 = 0;
                this.m04 = (xy - wz) * sy;
                this.m05 = (1 - (xx + zz)) * sy;
                this.m06 = (yz + wx) * sy;
                this.m07 = 0;
                this.m08 = (xz + wy) * sz;
                this.m09 = (yz - wx) * sz;
                this.m10 = (1 - (xx + yy)) * sz;
                this.m11 = 0;
                this.m12 = v.x;
                this.m13 = v.y;
                this.m14 = v.z;
                this.m15 = 1;
                return this;
              }
              /**
               * @en Resets the current matrix from the given quaternion.
               * @zh 重置当前矩阵的值，使其表示指定四元数表示的旋转变换。
               * @param q Rotation quaternion
               * @return `this`
               */
              ;

              _proto.fromQuat = function fromQuat(q) {
                var x = q.x;
                var y = q.y;
                var z = q.z;
                var w = q.w;
                var x2 = x + x;
                var y2 = y + y;
                var z2 = z + z;
                var xx = x * x2;
                var yx = y * x2;
                var yy = y * y2;
                var zx = z * x2;
                var zy = z * y2;
                var zz = z * z2;
                var wx = w * x2;
                var wy = w * y2;
                var wz = w * z2;
                this.m00 = 1 - yy - zz;
                this.m01 = yx + wz;
                this.m02 = zx - wy;
                this.m03 = 0;
                this.m04 = yx - wz;
                this.m05 = 1 - xx - zz;
                this.m06 = zy + wx;
                this.m07 = 0;
                this.m08 = zx + wy;
                this.m09 = zy - wx;
                this.m10 = 1 - xx - yy;
                this.m11 = 0;
                this.m12 = 0;
                this.m13 = 0;
                this.m14 = 0;
                this.m15 = 1;
                return this;
              };

              return Mat4;
            }(ValueType);
            Mat4.IDENTITY = Object.freeze(new Mat4());
            var v3_1$3 = new Vec3();
            var m3_1$1 = new Mat3();
            legacyCC.Mat4 = Mat4;
            function mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
              return new Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33);
            }
            legacyCC.mat4 = mat4;

            /**
             * @en Representation of 2D vectors and points.
             * @zh 二维向量。
             */

            var Vec2 = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Vec2, _ValueType);

              /**
               * @en Obtains a clone of the given vector object
               * @zh 获得指定向量的拷贝
               */
              Vec2.clone = function clone(a) {
                return new Vec2(a.x, a.y);
              }
              /**
               * @en Copy the target vector and save the results to out vector object
               * @zh 复制目标向量
               */
              ;

              Vec2.copy = function copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                return out;
              }
              /**
               * @en Sets the out vector with the given x and y values
               * @zh 设置向量值
               */
              ;

              Vec2.set = function set(out, x, y) {
                out.x = x;
                out.y = y;
                return out;
              }
              /**
               * @en Element-wise vector addition and save the results to out vector object
               * @zh 逐元素向量加法
               */
              ;

              Vec2.add = function add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                return out;
              }
              /**
               * @en Element-wise vector subtraction and save the results to out vector object
               * @zh 逐元素向量减法
               */
              ;

              Vec2.subtract = function subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                return out;
              }
              /**
               * @en Element-wise vector multiplication and save the results to out vector object
               * @zh 逐元素向量乘法
               */
              ;

              Vec2.multiply = function multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                return out;
              }
              /**
               * @en Element-wise vector division and save the results to out vector object
               * @zh 逐元素向量除法
               */
              ;

              Vec2.divide = function divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                return out;
              }
              /**
               * @en Rounds up by elements of the vector and save the results to out vector object
               * @zh 逐元素向量向上取整
               */
              ;

              Vec2.ceil = function ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                return out;
              }
              /**
               * @en Element-wise rounds down of the current vector and save the results to the out vector
               * @zh 逐元素向量向下取整
               */
              ;

              Vec2.floor = function floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                return out;
              }
              /**
               * @en Calculates element-wise minimum values and save to the out vector
               * @zh 逐元素向量最小值
               */
              ;

              Vec2.min = function min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                return out;
              }
              /**
               * @en Calculates element-wise maximum values and save to the out vector
               * @zh 逐元素向量最大值
               */
              ;

              Vec2.max = function max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                return out;
              }
              /**
               * @en Calculates element-wise round results and save to the out vector
               * @zh 逐元素向量四舍五入取整
               */
              ;

              Vec2.round = function round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                return out;
              }
              /**
               * @en Vector scalar multiplication and save the results to out vector object
               * @zh 向量标量乘法
               */
              ;

              Vec2.multiplyScalar = function multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                return out;
              }
              /**
               * @en Element-wise multiplication and addition with the equation: a + b * scale
               * @zh 逐元素向量乘加: A + B * scale
               */
              ;

              Vec2.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                return out;
              }
              /**
               * @en Calculates the euclidean distance of two vectors
               * @zh 求两向量的欧氏距离
               */
              ;

              Vec2.distance = function distance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                return Math.sqrt(x * x + y * y);
              }
              /**
               * @en Calculates the squared euclidean distance of two vectors
               * @zh 求两向量的欧氏距离平方
               */
              ;

              Vec2.squaredDistance = function squaredDistance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                return x * x + y * y;
              }
              /**
               * @en Calculates the length of the vector
               * @zh 求向量长度
               */
              ;

              Vec2.len = function len(a) {
                var x = a.x;
                var y = a.y;
                return Math.sqrt(x * x + y * y);
              }
              /**
               * @en Calculates the squared length of the vector
               * @zh 求向量长度平方
               */
              ;

              Vec2.lengthSqr = function lengthSqr(a) {
                var x = a.x;
                var y = a.y;
                return x * x + y * y;
              }
              /**
               * @en Sets each element to its negative value
               * @zh 逐元素向量取负
               */
              ;

              Vec2.negate = function negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                return out;
              }
              /**
               * @en Sets each element to its inverse value, zero value will become Infinity
               * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
               */
              ;

              Vec2.inverse = function inverse(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                return out;
              }
              /**
               * @en Sets each element to its inverse value, zero value will remain zero
               * @zh 逐元素向量取倒数，接近 0 时返回 0
               */
              ;

              Vec2.inverseSafe = function inverseSafe(out, a) {
                var x = a.x;
                var y = a.y;

                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }

                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }

                return out;
              }
              /**
               * @en Sets the normalized vector to the out vector
               * @zh 归一化向量
               */
              ;

              Vec2.normalize = function normalize(out, a) {
                var x = a.x;
                var y = a.y;
                var len = x * x + y * y;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                }

                return out;
              }
              /**
               * @en Calculates the dot product of the vector
               * @zh 向量点积（数量积）
               */
              ;

              Vec2.dot = function dot(a, b) {
                return a.x * b.x + a.y * b.y;
              }
              /**
               * @en Calculates the cross product of the vector
               * @zh 向量叉积（向量积），注意二维向量的叉积为与 Z 轴平行的三维向量
               * @override (a:Vec2, b:Vec2) => number
               * @override [deprecated] (out:Vec3, a:Vec2, b:Vec2) => Vec3
               */
              ;

              Vec2.cross = function cross(out, a, b) {
                if (out instanceof Vec3) {
                  out.x = out.y = 0;
                  out.z = a.x * b.y - a.y * b.x;
                  return out;
                } else {
                  return out.x * a.y - out.y * a.x;
                }
              }
              /**
               * @en Calculates the linear interpolation between two vectors with a given ratio
               * @zh 逐元素向量线性插值： A + t * (B - A)
               */
              ;

              Vec2.lerp = function lerp(out, a, b, t) {
                var x = a.x;
                var y = a.y;
                out.x = x + t * (b.x - x);
                out.y = y + t * (b.y - y);
                return out;
              }
              /**
               * @en Generates a uniformly distributed random vector points from center to the surface of the unit sphere
               * @zh 生成一个在单位圆上均匀分布的随机向量
               * @param scale vector length
               */
              ;

              Vec2.random = function random$1(out, scale) {
                scale = scale || 1.0;
                var r = random() * 2.0 * Math.PI;
                out.x = Math.cos(r) * scale;
                out.y = Math.sin(r) * scale;
                return out;
              }
              /**
               * @en Vector and third order matrix multiplication, will complete the vector with a third value as one
               * @zh 向量与三维矩阵乘法，默认向量第三位为 1。
               */
              ;

              Vec2.transformMat3 = function transformMat3(out, a, m) {
                var x = a.x;
                var y = a.y;
                out.x = m.m00 * x + m.m03 * y + m.m06;
                out.y = m.m01 * x + m.m04 * y + m.m07;
                return out;
              }
              /**
               * @en Vector and third order matrix multiplication, will complete the vector with a third and a fourth element as one
               * @zh 向量与四维矩阵乘法，默认向量第三位为 0，第四位为 1。
               */
              ;

              Vec2.transformMat4 = function transformMat4(out, a, m) {
                var x = a.x;
                var y = a.y;
                out.x = m.m00 * x + m.m04 * y + m.m12;
                out.y = m.m01 * x + m.m05 * y + m.m13;
                return out;
              }
              /**
               * @en Gets the string representation of the given vector
               * @zh 返回向量的字符串表示
               */
              ;

              Vec2.str = function str(a) {
                return "Vec2(" + a.x + ", " + a.y + ")";
              }
              /**
               * @en Converts the given vector to an array
               * @zh 向量转数组
               * @param ofs Array Start Offset
               */
              ;

              Vec2.toArray = function toArray(out, v, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                return out;
              }
              /**
               * @en Converts the given array to a vector
               * @zh 数组转向量
               * @param ofs Array Start Offset
               */
              ;

              Vec2.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                return out;
              }
              /**
               * @en Check the equality of the two given vectors
               * @zh 向量等价判断
               */
              ;

              Vec2.strictEquals = function strictEquals(a, b) {
                return a.x === b.x && a.y === b.y;
              }
              /**
               * @en Check whether the two given vectors are approximately equivalent
               * @zh 排除浮点数误差的向量近似等价判断
               */
              ;

              Vec2.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y));
              }
              /**
               * @en Calculates the radian angle between two vectors
               * @zh 求两向量夹角弧度
               */
              ;

              Vec2.angle = function angle(a, b) {
                Vec2.normalize(v2_1, a);
                Vec2.normalize(v2_2, b);
                var cosine = Vec2.dot(v2_1, v2_2);

                if (cosine > 1.0) {
                  return 0;
                }

                if (cosine < -1.0) {
                  return Math.PI;
                }

                return Math.acos(cosine);
              }
              /**
               * @en x component.
               * @zh x 分量。
               */
              ;

              function Vec2(x, y) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.x = x.x;
                  _this.y = x.y;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                }

                return _this;
              }
              /**
               * @en clone a Vec2 value
               * @zh 克隆当前向量。
               */


              var _proto = Vec2.prototype;

              _proto.clone = function clone() {
                return new Vec2(this.x, this.y);
              }
              /**
               * @en Set the current vector value with the given vector.
               * @zh 设置当前向量使其与指定向量相等。
               * @param other Specified vector
               * @return `this`
               */
              ;

              _proto.set = function set(x, y) {
                if (x && typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                }

                return this;
              }
              /**
               * @en Check whether the vector approximately equals another one.
               * @zh 判断当前向量是否在误差范围内与指定向量相等。
               * @param other Specified vector
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @return Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y));
              }
              /**
               * @en Check whether the vector approximately equals another one.
               * @zh 判断当前向量是否在误差范围内与指定分量的向量相等。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @return Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.equals2f = function equals2f(x, y, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y));
              }
              /**
               * @en Check whether the current vector strictly equals another Vec2.
               * @zh 判断当前向量是否与指定向量相等。
               * @param other specified vector
               * @return Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.strictEquals = function strictEquals(other) {
                return other && this.x === other.x && this.y === other.y;
              }
              /**
               * @en Check whether the current vector strictly equals another Vec2.
               * @zh 判断当前向量是否与指定分量的向量相等。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @return Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.strictEquals2f = function strictEquals2f(x, y) {
                return this.x === x && this.y === y;
              }
              /**
               * @en Transform to string with vector information.
               * @zh 返回当前向量的字符串表示。
               * @returns The string with vector information
               */
              ;

              _proto.toString = function toString() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ")";
              }
              /**
               * @en Calculate linear interpolation result between this vector and another one with given ratio.
               * @zh 根据指定的插值比率，从当前向量到目标向量之间做插值。
               * @param to Target vector
               * @param ratio The interpolation coefficient.The range is [0,1].
               */
              ;

              _proto.lerp = function lerp(to, ratio) {
                var x = this.x;
                var y = this.y;
                this.x = x + ratio * (to.x - x);
                this.y = y + ratio * (to.y - y);
                return this;
              }
              /**
               * @en Clamp the vector between minInclusive and maxInclusive.
               * @zh 设置当前向量的值，使其各个分量都处于指定的范围内。
               * @param minInclusive Minimum value allowed
               * @param maxInclusive Maximum value allowed
               * @return `this`
               */
              ;

              _proto.clampf = function clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                return this;
              }
              /**
               * @en Adds the current vector with another one and return this
               * @zh 向量加法。将当前向量与指定向量的相加
               * @param other specified vector
               */
              ;

              _proto.add = function add(other) {
                this.x += other.x;
                this.y += other.y;
                return this;
              }
              /**
               * @en Adds the current vector with another one and return this
               * @zh 向量加法。将当前向量与指定分量的向量相加
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               */
              ;

              _proto.add2f = function add2f(x, y) {
                this.x += x;
                this.y += y;
                return this;
              }
              /**
               * @en Subtracts one vector from this, and returns this.
               * @zh 向量减法。将当前向量减去指定向量
               * @param other specified vector
               */
              ;

              _proto.subtract = function subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                return this;
              }
              /**
               * @en Subtracts one vector from this, and returns this.
               * @zh 向量减法。将当前向量减去指定分量的向量
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               */
              ;

              _proto.subtract2f = function subtract2f(x, y) {
                this.x -= x;
                this.y -= y;
                return this;
              }
              /**
               * @en Multiplies the current vector with a number, and returns this.
               * @zh 向量数乘。将当前向量数乘指定标量
               * @param scalar scalar number
               */
              ;

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec2.multiply for vector * vector operation');
                }

                this.x *= scalar;
                this.y *= scalar;
                return this;
              }
              /**
               * @en Multiplies the current vector with another one and return this
               * @zh 向量乘法。将当前向量乘以与指定向量的结果赋值给当前向量。
               * @param other specified vector
               */
              ;

              _proto.multiply = function multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec2.scale for vector * scalar operation');
                }

                this.x *= other.x;
                this.y *= other.y;
                return this;
              }
              /**
               * @en Multiplies the current vector with another one and return this
               * @zh 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               */
              ;

              _proto.multiply2f = function multiply2f(x, y) {
                this.x *= x;
                this.y *= y;
                return this;
              }
              /**
               * @en Element-wisely divides this vector with another one, and return this.
               * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
               * @param other specified vector
               */
              ;

              _proto.divide = function divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                return this;
              }
              /**
               * @en Element-wisely divides this vector with another one, and return this.
               * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               */
              ;

              _proto.divide2f = function divide2f(x, y) {
                this.x /= x;
                this.y /= y;
                return this;
              }
              /**
               * @en Sets each component of this vector with its negative value
               * @zh 将当前向量的各个分量取反
               */
              ;

              _proto.negative = function negative() {
                this.x = -this.x;
                this.y = -this.y;
                return this;
              }
              /**
               * @en Calculates the dot product with another vector
               * @zh 向量点乘。
               * @param other specified vector
               * @return The result of calculates the dot product with another vector
               */
              ;

              _proto.dot = function dot(other) {
                return this.x * other.x + this.y * other.y;
              }
              /**
               * @en Calculates the cross product with another vector.
               * @zh 向量叉乘。
               * @param other specified vector
               * @return `out`
               */
              ;

              _proto.cross = function cross(other) {
                return this.x * other.y - this.y * other.x;
              }
              /**
               * @en Returns the length of this vector.
               * @zh 计算向量的长度（模）。
               * @return Length of vector
               */
              ;

              _proto.length = function length() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
              }
              /**
               * @en Returns the squared length of this vector.
               * @zh 计算向量长度（模）的平方。
               * @return the squared length of this vector
               */
              ;

              _proto.lengthSqr = function lengthSqr() {
                return this.x * this.x + this.y * this.y;
              }
              /**
               * @en Normalize the current vector.
               * @zh 将当前向量归一化。
               */
              ;

              _proto.normalize = function normalize() {
                var x = this.x;
                var y = this.y;
                var len = x * x + y * y;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x *= len;
                  this.y *= len;
                }

                return this;
              }
              /**
               * @en Calculates radian angle between two vectors
               * @zh 获取当前向量和指定向量之间的角度。
               * @param other specified vector
               * @return The angle between the current vector and the specified vector (in radians); if there are zero vectors in the current vector and the specified vector, 0 is returned.
               */
              ;

              _proto.angle = function angle(other) {
                var magSqr1 = this.lengthSqr();
                var magSqr2 = other.lengthSqr();

                if (magSqr1 === 0 || magSqr2 === 0) {
                  console.warn('Can\'t get angle between zero vector');
                  return 0.0;
                }

                var dot = this.dot(other);
                var theta = dot / Math.sqrt(magSqr1 * magSqr2);
                theta = clamp(theta, -1.0, 1.0);
                return Math.acos(theta);
              }
              /**
               * @en Get angle in radian between this and vector with direction.
               * @zh 获取当前向量和指定向量之间的有符号角度。<br/>
               * 有符号角度的取值范围为 (-180, 180]，当前向量可以通过逆时针旋转有符号角度与指定向量同向。<br/>
               * @param other specified vector
               * @return The signed angle between the current vector and the specified vector (in radians); if there is a zero vector in the current vector and the specified vector, 0 is returned.
               */
              ;

              _proto.signAngle = function signAngle(other) {
                var angle = this.angle(other);
                return this.cross(other) < 0 ? -angle : angle;
              }
              /**
               * @en Rotates the current vector by an angle in radian value
               * @zh 将当前向量的旋转
               * @param radians radius of rotation
               */
              ;

              _proto.rotate = function rotate(radians) {
                var x = this.x;
                var y = this.y;
                var sin = Math.sin(radians);
                var cos = Math.cos(radians);
                this.x = cos * x - sin * y;
                this.y = sin * x + cos * y;
                return this;
              }
              /**
               * @en Projects the current vector on another one
               * @zh 计算当前向量在指定向量上的投影向量。
               * @param other specified vector
               */
              ;

              _proto.project = function project(other) {
                var scalar = this.dot(other) / other.dot(other);
                this.x = other.x * scalar;
                this.y = other.y * scalar;
                return this;
              }
              /**
               * @en Transforms the vec2 with a mat4. 3rd vector component is implicitly '0', 4th vector component is implicitly '1'
               * @zh 将当前向量视为 z 分量为 0、w 分量为 1 的四维向量，<br/>
               * 应用四维矩阵变换到当前矩阵<br/>
               * @param matrix matrix to transform with
               */
              ;

              _proto.transformMat4 = function transformMat4(matrix) {
                var x = this.x;
                var y = this.y;
                this.x = matrix.m00 * x + matrix.m04 * y + matrix.m12;
                this.y = matrix.m01 * x + matrix.m05 * y + matrix.m13;
                return this;
              };

              return Vec2;
            }(ValueType);
            Vec2.ZERO = Object.freeze(new Vec2(0, 0));
            Vec2.ONE = Object.freeze(new Vec2(1, 1));
            Vec2.NEG_ONE = Object.freeze(new Vec2(-1, -1));
            Vec2.UNIT_X = Object.freeze(new Vec2(1, 0));
            Vec2.UNIT_Y = Object.freeze(new Vec2(0, 1));
            var v2_1 = new Vec2();
            var v2_2 = new Vec2();
            legacyCC.Vec2 = Vec2;
            function v2(x, y) {
              return new Vec2(x, y);
            }
            legacyCC.v2 = v2;

            /**
             * @en Representation of four-dimensional vectors.
             * @zh 四维向量。
             */

            var Vec4 = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Vec4, _ValueType);

              /**
               * @en Obtains a clone of the given vector object
               * @zh 获得指定向量的拷贝
               */
              Vec4.clone = function clone(a) {
                return new Vec4(a.x, a.y, a.z, a.w);
              }
              /**
               * @en Copy the target vector and save the results to out vector object
               * @zh 复制目标向量
               */
              ;

              Vec4.copy = function copy(out, a) {
                out.x = a.x;
                out.y = a.y;
                out.z = a.z;
                out.w = a.w;
                return out;
              }
              /**
               * @en Sets the out vector with the given x, y, z and w values
               * @zh 设置向量值
               */
              ;

              Vec4.set = function set(out, x, y, z, w) {
                out.x = x;
                out.y = y;
                out.z = z;
                out.w = w;
                return out;
              }
              /**
               * @en Element-wise vector addition and save the results to out vector object
               * @zh 逐元素向量加法
               */
              ;

              Vec4.add = function add(out, a, b) {
                out.x = a.x + b.x;
                out.y = a.y + b.y;
                out.z = a.z + b.z;
                out.w = a.w + b.w;
                return out;
              }
              /**
               * @en Element-wise vector subtraction and save the results to out vector object
               * @zh 逐元素向量减法
               */
              ;

              Vec4.subtract = function subtract(out, a, b) {
                out.x = a.x - b.x;
                out.y = a.y - b.y;
                out.z = a.z - b.z;
                out.w = a.w - b.w;
                return out;
              }
              /**
               * @en Element-wise vector multiplication and save the results to out vector object
               * @zh 逐元素向量乘法
               */
              ;

              Vec4.multiply = function multiply(out, a, b) {
                out.x = a.x * b.x;
                out.y = a.y * b.y;
                out.z = a.z * b.z;
                out.w = a.w * b.w;
                return out;
              }
              /**
               * @en Element-wise vector division and save the results to out vector object
               * @zh 逐元素向量除法
               */
              ;

              Vec4.divide = function divide(out, a, b) {
                out.x = a.x / b.x;
                out.y = a.y / b.y;
                out.z = a.z / b.z;
                out.w = a.w / b.w;
                return out;
              }
              /**
               * @en Rounds up by elements of the vector and save the results to out vector object
               * @zh 逐元素向量向上取整
               */
              ;

              Vec4.ceil = function ceil(out, a) {
                out.x = Math.ceil(a.x);
                out.y = Math.ceil(a.y);
                out.z = Math.ceil(a.z);
                out.w = Math.ceil(a.w);
                return out;
              }
              /**
               * @en Element-wise rounds down of the current vector and save the results to the out vector
               * @zh 逐元素向量向下取整
               */
              ;

              Vec4.floor = function floor(out, a) {
                out.x = Math.floor(a.x);
                out.y = Math.floor(a.y);
                out.z = Math.floor(a.z);
                out.w = Math.floor(a.w);
                return out;
              }
              /**
               * @en Calculates the minimum values by elements of the vector and save the results to the out vector
               * @zh 逐元素向量最小值
               */
              ;

              Vec4.min = function min(out, a, b) {
                out.x = Math.min(a.x, b.x);
                out.y = Math.min(a.y, b.y);
                out.z = Math.min(a.z, b.z);
                out.w = Math.min(a.w, b.w);
                return out;
              }
              /**
               * @en Calculates the maximum values by elements of the vector and save the results to the out vector
               * @zh 逐元素向量最大值
               */
              ;

              Vec4.max = function max(out, a, b) {
                out.x = Math.max(a.x, b.x);
                out.y = Math.max(a.y, b.y);
                out.z = Math.max(a.z, b.z);
                out.w = Math.max(a.w, b.w);
                return out;
              }
              /**
               * @en Calculates element-wise round results and save to the out vector
               * @zh 逐元素向量四舍五入取整
               */
              ;

              Vec4.round = function round(out, a) {
                out.x = Math.round(a.x);
                out.y = Math.round(a.y);
                out.z = Math.round(a.z);
                out.w = Math.round(a.w);
                return out;
              }
              /**
               * @en Vector scalar multiplication and save the results to out vector object
               * @zh 向量标量乘法
               */
              ;

              Vec4.multiplyScalar = function multiplyScalar(out, a, b) {
                out.x = a.x * b;
                out.y = a.y * b;
                out.z = a.z * b;
                out.w = a.w * b;
                return out;
              }
              /**
               * @en Element-wise multiplication and addition with the equation: a + b * scale
               * @zh 逐元素向量乘加: A + B * scale
               */
              ;

              Vec4.scaleAndAdd = function scaleAndAdd(out, a, b, scale) {
                out.x = a.x + b.x * scale;
                out.y = a.y + b.y * scale;
                out.z = a.z + b.z * scale;
                out.w = a.w + b.w * scale;
                return out;
              }
              /**
               * @en Calculates the euclidean distance of two vectors
               * @zh 求两向量的欧氏距离
               */
              ;

              Vec4.distance = function distance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                var z = b.z - a.z;
                var w = b.w - a.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              }
              /**
               * @en Calculates the squared euclidean distance of two vectors
               * @zh 求两向量的欧氏距离平方
               */
              ;

              Vec4.squaredDistance = function squaredDistance(a, b) {
                var x = b.x - a.x;
                var y = b.y - a.y;
                var z = b.z - a.z;
                var w = b.w - a.w;
                return x * x + y * y + z * z + w * w;
              }
              /**
               * @en Calculates the length of the vector
               * @zh 求向量长度
               */
              ;

              Vec4.len = function len(a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              }
              /**
               * @en Calculates the squared length of the vector
               * @zh 求向量长度平方
               */
              ;

              Vec4.lengthSqr = function lengthSqr(a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;
                return x * x + y * y + z * z + w * w;
              }
              /**
               * @en Sets each element to its negative value
               * @zh 逐元素向量取负
               */
              ;

              Vec4.negate = function negate(out, a) {
                out.x = -a.x;
                out.y = -a.y;
                out.z = -a.z;
                out.w = -a.w;
                return out;
              }
              /**
               * @en Sets each element to its inverse value, zero value will become Infinity
               * @zh 逐元素向量取倒数，接近 0 时返回 Infinity
               */
              ;

              Vec4.inverse = function inverse(out, a) {
                out.x = 1.0 / a.x;
                out.y = 1.0 / a.y;
                out.z = 1.0 / a.z;
                out.w = 1.0 / a.w;
                return out;
              }
              /**
               * @en Sets each element to its inverse value, zero value will remain zero
               * @zh 逐元素向量取倒数，接近 0 时返回 0
               */
              ;

              Vec4.inverseSafe = function inverseSafe(out, a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;

                if (Math.abs(x) < EPSILON) {
                  out.x = 0;
                } else {
                  out.x = 1.0 / x;
                }

                if (Math.abs(y) < EPSILON) {
                  out.y = 0;
                } else {
                  out.y = 1.0 / y;
                }

                if (Math.abs(z) < EPSILON) {
                  out.z = 0;
                } else {
                  out.z = 1.0 / z;
                }

                if (Math.abs(w) < EPSILON) {
                  out.w = 0;
                } else {
                  out.w = 1.0 / w;
                }

                return out;
              }
              /**
               * @en Sets the normalized vector to the out vector
               * @zh 归一化向量
               */
              ;

              Vec4.normalize = function normalize(out, a) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;
                var len = x * x + y * y + z * z + w * w;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  out.x = x * len;
                  out.y = y * len;
                  out.z = z * len;
                  out.w = w * len;
                }

                return out;
              }
              /**
               * @en Calculates the dot product of the vector
               * @zh 向量点积（数量积）
               */
              ;

              Vec4.dot = function dot(a, b) {
                return a.x * b.x + a.y * b.y + a.z * b.z + a.w * b.w;
              }
              /**
               * @en Calculates the linear interpolation between two vectors with a given ratio
               * @zh 逐元素向量线性插值： A + t * (B - A)
               */
              ;

              Vec4.lerp = function lerp(out, a, b, t) {
                out.x = a.x + t * (b.x - a.x);
                out.y = a.y + t * (b.y - a.y);
                out.z = a.z + t * (b.z - a.z);
                out.w = a.w + t * (b.w - a.w);
                return out;
              }
              /**
               * @en Generates a uniformly distributed random vector points from center to the surface of the unit sphere
               * @zh 生成一个在单位球体上均匀分布的随机向量
               * @param scale vector length
               */
              ;

              Vec4.random = function random$1(out, scale) {
                scale = scale || 1.0;
                var phi = random() * 2.0 * Math.PI;
                var cosTheta = random() * 2 - 1;
                var sinTheta = Math.sqrt(1 - cosTheta * cosTheta);
                out.x = sinTheta * Math.cos(phi) * scale;
                out.y = sinTheta * Math.sin(phi) * scale;
                out.z = cosTheta * scale;
                out.w = 0;
                return out;
              }
              /**
               * @en Vector and fourth order matrix multiplication
               * @zh 向量与四维矩阵乘法
               */
              ;

              Vec4.transformMat4 = function transformMat4(out, a, m) {
                var x = a.x;
                var y = a.y;
                var z = a.z;
                var w = a.w;
                out.x = m.m00 * x + m.m04 * y + m.m08 * z + m.m12 * w;
                out.y = m.m01 * x + m.m05 * y + m.m09 * z + m.m13 * w;
                out.z = m.m02 * x + m.m06 * y + m.m10 * z + m.m14 * w;
                out.w = m.m03 * x + m.m07 * y + m.m11 * z + m.m15 * w;
                return out;
              }
              /**
               * @en Transform the vector with the given affine transformation
               * @zh 向量仿射变换
               */
              ;

              Vec4.transformAffine = function transformAffine(out, v, m) {
                var x = v.x;
                var y = v.y;
                var z = v.z;
                var w = v.w;
                out.x = m.m00 * x + m.m01 * y + m.m02 * z + m.m03 * w;
                out.y = m.m04 * x + m.m05 * y + m.m06 * z + m.m07 * w;
                out.x = m.m08 * x + m.m09 * y + m.m10 * z + m.m11 * w;
                out.w = v.w;
                return out;
              }
              /**
               * @en Vector quaternion multiplication
               * @zh 向量四元数乘法
               */
              ;

              Vec4.transformQuat = function transformQuat(out, a, q) {
                var x = a.x,
                    y = a.y,
                    z = a.z;
                var _x = q.x;
                var _y = q.y;
                var _z = q.z;
                var _w = q.w; // calculate quat * vec

                var ix = _w * x + _y * z - _z * y;
                var iy = _w * y + _z * x - _x * z;
                var iz = _w * z + _x * y - _y * x;
                var iw = -_x * x - _y * y - _z * z; // calculate result * inverse quat

                out.x = ix * _w + iw * -_x + iy * -_z - iz * -_y;
                out.y = iy * _w + iw * -_y + iz * -_x - ix * -_z;
                out.z = iz * _w + iw * -_z + ix * -_y - iy * -_x;
                out.w = a.w;
                return out;
              }
              /**
               * @en Converts the given vector to an array
               * @zh 向量转数组
               * @param ofs Array Start Offset
               */
              ;

              Vec4.toArray = function toArray(out, v, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out[ofs + 0] = v.x;
                out[ofs + 1] = v.y;
                out[ofs + 2] = v.z;
                out[ofs + 3] = v.w;
                return out;
              }
              /**
               * @en Converts the given array to a vector
               * @zh 数组转向量
               * @param ofs Array Start Offset
               */
              ;

              Vec4.fromArray = function fromArray(out, arr, ofs) {
                if (ofs === void 0) {
                  ofs = 0;
                }

                out.x = arr[ofs + 0];
                out.y = arr[ofs + 1];
                out.z = arr[ofs + 2];
                out.w = arr[ofs + 3];
                return out;
              }
              /**
               * @en Check the equality of the two given vectors
               * @zh 向量等价判断
               */
              ;

              Vec4.strictEquals = function strictEquals(a, b) {
                return a.x === b.x && a.y === b.y && a.z === b.z && a.w === b.w;
              }
              /**
               * @en Check whether the two given vectors are approximately equivalent
               * @zh 排除浮点数误差的向量近似等价判断
               */
              ;

              Vec4.equals = function equals(a, b, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(a.x - b.x) <= epsilon * Math.max(1.0, Math.abs(a.x), Math.abs(b.x)) && Math.abs(a.y - b.y) <= epsilon * Math.max(1.0, Math.abs(a.y), Math.abs(b.y)) && Math.abs(a.z - b.z) <= epsilon * Math.max(1.0, Math.abs(a.z), Math.abs(b.z)) && Math.abs(a.w - b.w) <= epsilon * Math.max(1.0, Math.abs(a.w), Math.abs(b.w));
              }
              /**
               * @en x component.
               * @zh x 分量。
               */
              ;

              function Vec4(x, y, z, w) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.x = x.x;
                  _this.y = x.y;
                  _this.z = x.z;
                  _this.w = x.w;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                  _this.z = z || 0;
                  _this.w = w || 0;
                }

                return _this;
              }
              /**
               * @en clone the current Vec4 value.
               * @zh 克隆当前向量。
               */


              var _proto = Vec4.prototype;

              _proto.clone = function clone() {
                return new Vec4(this.x, this.y, this.z, this.w);
              }
              /**
               * @en Set the current vector value with the given vector.
               * @zh 设置当前向量使其与指定向量相等。
               * @param other Specified vector
               * @returns `this`
               */
              ;

              _proto.set = function set(x, y, z, w) {
                if (x && typeof x === 'object') {
                  this.x = x.x;
                  this.y = x.y;
                  this.z = x.z;
                  this.w = x.w;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.z = z || 0;
                  this.w = w || 0;
                }

                return this;
              }
              /**
               * @en Check whether the vector approximately equals another one.
               * @zh 判断当前向量是否在误差范围内与指定向量相等。
               * @param other Specified vector
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.equals = function equals(other, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - other.x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(other.x)) && Math.abs(this.y - other.y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(other.y)) && Math.abs(this.z - other.z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(other.z)) && Math.abs(this.w - other.w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(other.w));
              }
              /**
               * @en Check whether the vector approximately equals another one.
               * @zh 判断当前向量是否在误差范围内与指定分量的向量相等。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               * @param w The w value of specified vector
               * @param epsilon The error allowed. It`s should be a non-negative number.
               * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.equals4f = function equals4f(x, y, z, w, epsilon) {
                if (epsilon === void 0) {
                  epsilon = EPSILON;
                }

                return Math.abs(this.x - x) <= epsilon * Math.max(1.0, Math.abs(this.x), Math.abs(x)) && Math.abs(this.y - y) <= epsilon * Math.max(1.0, Math.abs(this.y), Math.abs(y)) && Math.abs(this.z - z) <= epsilon * Math.max(1.0, Math.abs(this.z), Math.abs(z)) && Math.abs(this.w - w) <= epsilon * Math.max(1.0, Math.abs(this.w), Math.abs(w));
              }
              /**
               * @en Check whether the current vector strictly equals another Vec4.
               * @zh 判断当前向量是否与指定向量相等。
               * @param other specified vector
               * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.strictEquals = function strictEquals(other) {
                return this.x === other.x && this.y === other.y && this.z === other.z && this.w === other.w;
              }
              /**
               * @en Check whether the current vector strictly equals another Vec4.
               * @zh 判断当前向量是否与指定分量的向量相等。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               * @param w The w value of specified vector
               * @returns Returns `true` when the components of both vectors are equal within the specified range of error; otherwise it returns `false`.
               */
              ;

              _proto.strictEquals4f = function strictEquals4f(x, y, z, w) {
                return this.x === x && this.y === y && this.z === z && this.w === w;
              }
              /**
               * @en Calculate linear interpolation result between this vector and another one with given ratio.
               * @zh 根据指定的插值比率，从当前向量到目标向量之间做插值。
               * @param to Target vector
               * @param ratio The interpolation coefficient.The range is [0,1].
               */
              ;

              _proto.lerp = function lerp(to, ratio) {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                this.x = x + ratio * (to.x - x);
                this.y = y + ratio * (to.y - y);
                this.z = z + ratio * (to.z - z);
                this.w = w + ratio * (to.w - w);
                return this;
              }
              /**
               * @en Return the information of the vector in string
               * @zh 返回当前向量的字符串表示。
               * @returns The string with vector information
               */
              ;

              _proto.toString = function toString() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.z.toFixed(2) + ", " + this.w.toFixed(2) + ")";
              }
              /**
               * @en Clamp the vector between minInclusive and maxInclusive.
               * @zh 设置当前向量的值，使其各个分量都处于指定的范围内。
               * @param minInclusive Minimum value allowed
               * @param maxInclusive Maximum value allowed
               * @returns `this`
               */
              ;

              _proto.clampf = function clampf(minInclusive, maxInclusive) {
                this.x = clamp(this.x, minInclusive.x, maxInclusive.x);
                this.y = clamp(this.y, minInclusive.y, maxInclusive.y);
                this.z = clamp(this.z, minInclusive.z, maxInclusive.z);
                this.w = clamp(this.w, minInclusive.w, maxInclusive.w);
                return this;
              }
              /**
               * @en Adds the current vector with another one and return this
               * @zh 向量加法。将当前向量与指定向量的相加
               * @param other specified vector
               */
              ;

              _proto.add = function add(other) {
                this.x += other.x;
                this.y += other.y;
                this.z += other.z;
                this.w += other.w;
                return this;
              }
              /**
               * @en Adds the current vector with another one and return this
               * @zh 向量加法。将当前向量与指定分量的向量相加
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               * @param w The w value of specified vector
               */
              ;

              _proto.add4f = function add4f(x, y, z, w) {
                this.x += x;
                this.y += y;
                this.z += z;
                this.w += w;
                return this;
              }
              /**
               * @en Subtracts one vector from this, and returns this.
               * @zh 向量减法。将当前向量减去指定向量
               * @param other specified vector
               */
              ;

              _proto.subtract = function subtract(other) {
                this.x -= other.x;
                this.y -= other.y;
                this.z -= other.z;
                this.w -= other.w;
                return this;
              }
              /**
               * @en Subtracts one vector from this, and returns this.
               * @zh 向量减法。将当前向量减去指定分量的向量
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               * @param w The w value of specified vector
               */
              ;

              _proto.subtract4f = function subtract4f(x, y, z, w) {
                this.x -= x;
                this.y -= y;
                this.z -= z;
                this.w -= w;
                return this;
              }
              /**
               * @en Multiplies the current vector with a number, and returns this.
               * @zh 向量数乘。将当前向量数乘指定标量
               * @param scalar scalar number
               */
              ;

              _proto.multiplyScalar = function multiplyScalar(scalar) {
                if (typeof scalar === 'object') {
                  console.warn('should use Vec4.multiply for vector * vector operation');
                }

                this.x *= scalar;
                this.y *= scalar;
                this.z *= scalar;
                this.w *= scalar;
                return this;
              }
              /**
               * @en Multiplies the current vector with another one and return this
               * @zh 向量乘法。将当前向量乘以指定向量
               * @param other specified vector
               */
              ;

              _proto.multiply = function multiply(other) {
                if (typeof other !== 'object') {
                  console.warn('should use Vec4.scale for vector * scalar operation');
                }

                this.x *= other.x;
                this.y *= other.y;
                this.z *= other.z;
                this.w *= other.w;
                return this;
              }
              /**
               * @en Multiplies the current vector with another one and return this
               * @zh 向量乘法。将当前向量与指定分量的向量相乘的结果赋值给当前向量。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               * @param w The w value of specified vector
               */
              ;

              _proto.multiply4f = function multiply4f(x, y, z, w) {
                this.x *= x;
                this.y *= y;
                this.z *= z;
                this.w *= w;
                return this;
              }
              /**
               * @en Element-wisely divides this vector with another one, and return this.
               * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
               * @param other specified vector
               */
              ;

              _proto.divide = function divide(other) {
                this.x /= other.x;
                this.y /= other.y;
                this.z /= other.z;
                this.w /= other.w;
                return this;
              }
              /**
               * @en Element-wisely divides this vector with another one, and return this.
               * @zh 向量逐元素相除。将当前向量与指定分量的向量相除的结果赋值给当前向量。
               * @param x The x value of specified vector
               * @param y The y value of specified vector
               * @param z The z value of specified vector
               * @param w The w value of specified vector
               */
              ;

              _proto.divide4f = function divide4f(x, y, z, w) {
                this.x /= x;
                this.y /= y;
                this.z /= z;
                this.w /= w;
                return this;
              }
              /**
               * @en Sets each component of this vector with its negative value
               * @zh 将当前向量的各个分量取反
               */
              ;

              _proto.negative = function negative() {
                this.x = -this.x;
                this.y = -this.y;
                this.z = -this.z;
                this.w = -this.w;
                return this;
              }
              /**
               * @en Calculates the dot product with another vector
               * @zh 向量点乘。
               * @param other specified vector
               * @returns 当前向量与指定向量点乘的结果。
               */
              ;

              _proto.dot = function dot(vector) {
                return this.x * vector.x + this.y * vector.y + this.z * vector.z + this.w * vector.w;
              }
              /**
               * @en Calculates the cross product with another vector.
               * @zh 向量叉乘。视当前向量和指定向量为三维向量（舍弃 w 分量），将当前向量左叉乘指定向量
               * @param other specified vector
               */
              ;

              _proto.cross = function cross(vector) {
                var ax = this.x,
                    ay = this.y,
                    az = this.z;
                var bx = vector.x,
                    by = vector.y,
                    bz = vector.z;
                this.x = ay * bz - az * by;
                this.y = az * bx - ax * bz;
                this.z = ax * by - ay * bx;
                return this;
              }
              /**
               * @en Returns the length of this vector.
               * @zh 计算向量的长度（模）。
               * @returns Length of vector
               */
              ;

              _proto.length = function length() {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                return Math.sqrt(x * x + y * y + z * z + w * w);
              }
              /**
               * @en Returns the squared length of this vector.
               * @zh 计算向量长度（模）的平方。
               * @returns the squared length of this vector
               */
              ;

              _proto.lengthSqr = function lengthSqr() {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                return x * x + y * y + z * z + w * w;
              }
              /**
               * @en Normalize the current vector.
               * @zh 将当前向量归一化
               */
              ;

              _proto.normalize = function normalize() {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                var len = x * x + y * y + z * z + w * w;

                if (len > 0) {
                  len = 1 / Math.sqrt(len);
                  this.x = x * len;
                  this.y = y * len;
                  this.z = z * len;
                  this.w = w * len;
                }

                return this;
              }
              /**
               * @en Transforms the vec4 with a mat4
               * @zh 应用四维矩阵变换到当前矩阵
               * @param matrix matrix to transform with
               */
              ;

              _proto.transformMat4 = function transformMat4(matrix) {
                var x = this.x;
                var y = this.y;
                var z = this.z;
                var w = this.w;
                this.x = matrix.m00 * x + matrix.m04 * y + matrix.m08 * z + matrix.m12 * w;
                this.y = matrix.m01 * x + matrix.m05 * y + matrix.m09 * z + matrix.m13 * w;
                this.z = matrix.m02 * x + matrix.m06 * y + matrix.m10 * z + matrix.m14 * w;
                this.w = matrix.m03 * x + matrix.m07 * y + matrix.m11 * z + matrix.m15 * w;
                return this;
              };

              return Vec4;
            }(ValueType);
            Vec4.ZERO = Object.freeze(new Vec4(0, 0, 0, 0));
            Vec4.ONE = Object.freeze(new Vec4(1, 1, 1, 1));
            Vec4.NEG_ONE = Object.freeze(new Vec4(-1, -1, -1, -1));
            legacyCC.Vec4 = Vec4;
            function v4(x, y, z, w) {
              return new Vec4(x, y, z, w);
            }
            legacyCC.v4 = v4;

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
            replaceProperty(Vec2, 'Vec2', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec2,
              targetName: 'Vec2'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec2,
              targetName: 'Vec2'
            }]);
            replaceProperty(Vec2.prototype, 'Vec2', [{
              name: 'mag',
              newName: 'length',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec2.prototype,
              targetName: 'Vec2'
            }]);
            replaceProperty(Vec3, 'Vec3', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec3,
              targetName: 'Vec3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec3,
              targetName: 'Vec3'
            }]);
            replaceProperty(Vec3.prototype, 'Vec3', [{
              name: 'mag',
              newName: 'length',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec3.prototype,
              targetName: 'Vec3'
            }]);
            replaceProperty(Vec4, 'Vec4', [{
              name: 'sub',
              newName: 'subtract',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'div',
              newName: 'divide',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'dist',
              newName: 'distance',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'sqrDist',
              newName: 'squaredDistance',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'mag',
              newName: 'len',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec4,
              targetName: 'Vec4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec4,
              targetName: 'Vec4'
            }]);
            replaceProperty(Vec4.prototype, 'Vec4', [{
              name: 'mag',
              newName: 'length',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'magSqr',
              newName: 'lengthSqr',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Vec4.prototype,
              targetName: 'Vec4'
            }]);
            replaceProperty(Quat, 'Quat', [{
              name: 'mag',
              newName: 'len',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'sqrMag',
              newName: 'lengthSqr',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'scale',
              newName: 'multiplyScalar',
              target: Quat,
              targetName: 'Quat'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Quat,
              targetName: 'Quat'
            }]);
            replaceProperty(Quat.prototype, 'Quat', [{
              name: 'scale',
              newName: 'multiplyScalar',
              target: Quat.prototype,
              targetName: 'Quat'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Quat.prototype,
              targetName: 'Quat'
            }]);
            replaceProperty(Color, 'Color', [{
              name: 'sub',
              newName: 'subtract',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'div',
              newName: 'divide',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Color,
              targetName: 'Color'
            }, {
              name: 'fromHex',
              newName: 'fromHEX',
              customFunction: function customFunction() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                var arg1 = args[1].toString(16);
                return legacyCC.Color.fromHEX(args[0], arg1);
              }
            }]);
            replaceProperty(Mat3, 'Mat3', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat3,
              targetName: 'Mat3'
            }, {
              name: 'transfrom',
              newName: 'transform',
              target: Mat3,
              targetName: 'Mat3'
            }]);
            replaceProperty(Mat3.prototype, 'Mat3', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'mulScalar',
              newName: 'multiplyScalar',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat3.prototype,
              targetName: 'Mat3'
            }]);
            replaceProperty(Mat4, 'Mat4', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat4,
              targetName: 'Mat4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat4,
              targetName: 'Mat4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat4,
              targetName: 'Mat4'
            }]);
            replaceProperty(Mat4.prototype, 'Mat4', [{
              name: 'sub',
              newName: 'subtract',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'mul',
              newName: 'multiply',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'mulScalar',
              newName: 'multiplyScalar',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }, {
              name: 'exactEquals',
              newName: 'strictEquals',
              target: Mat4.prototype,
              targetName: 'Mat4'
            }]);

            /*
             Copyright (c) 2008-2010 Ricardo Quesada
             Copyright (c) 2011-2012 cocos2d-x.org
             Copyright (c) 2013-2016 Chukong Technologies Inc.
             Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

             http://www.cocos2d-x.org

             Permission is hereby granted, free of charge, to any person obtaining a copy
             of this software and associated documentation files (the "Software"), to deal
             in the Software without restriction, including without limitation the rights
             to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             copies of the Software, and to permit persons to whom the Software is
             furnished to do so, subject to the following conditions:

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
            /**
             * @en `AffineTransform` class represent an affine transform matrix. It's composed basically by translation, rotation, scale transformations.
             * @zh 二维仿射变换矩阵，描述了平移、缩放和缩放。
             */

            var AffineTransform = /*#__PURE__*/function () {
              /**
               * @en Create an identity transformation matrix.
               * @zh 创建单位二维仿射变换矩阵，它不进行任何变换。
               */
              AffineTransform.identity = function identity() {
                return new AffineTransform();
              }
              /**
               * @en Clone an `AffineTransform` object from the specified transform.
               * @zh 克隆指定的二维仿射变换矩阵。
               * @param affineTransform Specified `AffineTransform` objects
               */
              ;

              AffineTransform.clone = function clone(affineTransform) {
                return new AffineTransform(affineTransform.a, affineTransform.b, affineTransform.c, affineTransform.d, affineTransform.tx, affineTransform.ty);
              }
              /**
               * @en Concatenate a transform matrix to another. The results are reflected in the out `AffineTransform`.
               * @zh 将两个矩阵相乘的结果赋值给出口矩阵。
               * @param out Out object to store the concat result
               * @param t1 The first transform object.
               * @param t2 The transform object to concatenate.
               */
              ;

              AffineTransform.concat = function concat(out, t1, t2) {
                var a = t1.a;
                var b = t1.b;
                var c = t1.c;
                var d = t1.d;
                var tx = t1.tx;
                var ty = t1.ty;
                out.a = a * t2.a + b * t2.c;
                out.b = a * t2.b + b * t2.d;
                out.c = c * t2.a + d * t2.c;
                out.d = c * t2.b + d * t2.d;
                out.tx = tx * t2.a + ty * t2.c + t2.tx;
                out.ty = tx * t2.b + ty * t2.d + t2.ty;
              }
              /**
               * @en Get the invert transform of an `AffineTransform` object.
               * @zh 将矩阵求逆的结果赋值给出口矩阵。
               * @param out Out object to store the invert result
               * @param t the input `AffineTransform` object
               */
              ;

              AffineTransform.invert = function invert(out, t) {
                var determinant = 1 / (t.a * t.d - t.b * t.c);
                out.a = determinant * t.d;
                out.b = -determinant * t.b;
                out.c = -determinant * t.c;
                out.d = determinant * t.a;
                out.tx = determinant * (t.c * t.ty - t.d * t.tx);
                out.ty = determinant * (t.b * t.tx - t.a * t.ty);
              }
              /**
               * @en Get an `AffineTransform` object from a given matrix 4x4.
               * @zh 将四维矩阵转换为二维仿射变换矩阵并赋值给出口矩阵。
               * @param out The output matrix to store the result
               * @param mat transform matrix.
               */
              ;

              AffineTransform.fromMat4 = function fromMat4(out, mat) {
                out.a = mat.m00;
                out.b = mat.m01;
                out.c = mat.m04;
                out.d = mat.m05;
                out.tx = mat.m12;
                out.ty = mat.m13;
              }
              /**
               * @en Apply the `AffineTransform` on a 2D vector.
               * @zh 应用二维仿射变换矩阵到二维向量上，并将结果赋值给出口向量。
               * @param out The output vector to store the result
               * @param point Vector to apply transform.
               * @param t transform matrix.
               */
              ;

              AffineTransform.transformVec2 = function transformVec2(out, point, transOrY, t) {
                var x;
                var y;

                if (t === undefined) {
                  t = transOrY;
                  x = point.x;
                  y = point.y;
                } else {
                  x = point;
                  y = transOrY;
                }

                out.x = t.a * x + t.c * y + t.tx;
                out.y = t.b * x + t.d * y + t.ty;
              }
              /**
               * @en Apply the `AffineTransform` on a size.
               * @zh 应用二维仿射变换矩阵到二维尺寸上，并将结果赋值给出口尺寸。
               * @param out The output size to store the result
               * @param size The size to apply transform.
               * @param t transform matrix.
               */
              ;

              AffineTransform.transformSize = function transformSize(out, size, t) {
                out.width = t.a * size.width + t.c * size.height;
                out.height = t.b * size.width + t.d * size.height;
              }
              /**
               * @en Apply the `AffineTransform` on a rect.
               * @zh 应用二维仿射变换矩阵到矩形上，并将结果赋值给出口矩形。
               * @param out The output rect object to store the result
               * @param rect The rect object to apply transform.
               * @param t transform matrix.
               */
              ;

              AffineTransform.transformRect = function transformRect(out, rect, t) {
                var or = rect.x + rect.width;
                var ot = rect.y + rect.height;
                var lbx = t.a * rect.x + t.c * rect.y + t.tx;
                var lby = t.b * rect.x + t.d * rect.y + t.ty;
                var rbx = t.a * or + t.c * rect.y + t.tx;
                var rby = t.b * or + t.d * rect.y + t.ty;
                var ltx = t.a * rect.x + t.c * ot + t.tx;
                var lty = t.b * rect.x + t.d * ot + t.ty;
                var rtx = t.a * or + t.c * ot + t.tx;
                var rty = t.b * or + t.d * ot + t.ty;
                var minX = Math.min(lbx, rbx, ltx, rtx);
                var maxX = Math.max(lbx, rbx, ltx, rtx);
                var minY = Math.min(lby, rby, lty, rty);
                var maxY = Math.max(lby, rby, lty, rty);
                out.x = minX;
                out.y = minY;
                out.width = maxX - minX;
                out.height = maxY - minY;
              }
              /**
               * @en Apply the `AffineTransform` on a rect, and turns to an Oriented Bounding Box.
               * This function does not allocate any memory, you should create the output vectors by yourself and manage their memory.
               * @zh 应用二维仿射变换矩阵到矩形上, 并转换为有向包围盒。
               * 这个函数不创建任何内存，你需要先创建包围盒的四个 Vector 对象用来存储结果，并作为前四个参数传入函数。
               * @param out_bl Output vector for storing the bottom left corner coordinates of the Obb object
               * @param out_tl Output vector for storing the top left corner coordinates of the Obb object
               * @param out_tr Output vector for storing the top right corner coordinates of the Obb object
               * @param out_br Output vector for storing the bottom right corner coordinates of the Obb object
               * @param rect The rect object to apply transform.
               * @param anAffineTransform transform matrix.
               */
              ;

              AffineTransform.transformObb = function transformObb(out_bl, out_tl, out_tr, out_br, rect, anAffineTransform) {
                var tx = anAffineTransform.a * rect.x + anAffineTransform.c * rect.y + anAffineTransform.tx;
                var ty = anAffineTransform.b * rect.x + anAffineTransform.d * rect.y + anAffineTransform.ty;
                var xa = anAffineTransform.a * rect.width;
                var xb = anAffineTransform.b * rect.width;
                var yc = anAffineTransform.c * rect.height;
                var yd = anAffineTransform.d * rect.height;
                out_tl.x = tx;
                out_tl.y = ty;
                out_tr.x = xa + tx;
                out_tr.y = xb + ty;
                out_bl.x = yc + tx;
                out_bl.y = yd + ty;
                out_br.x = xa + yc + tx;
                out_br.y = xb + yd + ty;
              };

              /**
               * @en constructor an `AffineTransform` object.
               * @zh 构造二维放射变换矩阵。
               * @param a a
               * @param b b
               * @param c c
               * @param d d
               * @param tx tx
               * @param ty ty
               */
              function AffineTransform(a, b, c, d, tx, ty) {
                if (a === void 0) {
                  a = 1;
                }

                if (b === void 0) {
                  b = 0;
                }

                if (c === void 0) {
                  c = 0;
                }

                if (d === void 0) {
                  d = 1;
                }

                if (tx === void 0) {
                  tx = 0;
                }

                if (ty === void 0) {
                  ty = 0;
                }

                this.a = a;
                this.b = b;
                this.c = c;
                this.d = d;
                this.tx = tx;
                this.ty = ty;
              }

              return AffineTransform;
            }();
            legacyCC.AffineTransform = AffineTransform;

            /**
             * @en Two dimensional size type representing the width and height.
             * @zh 二维尺寸。
             */

            var Size = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Size, _ValueType);

              /**
               * @en Calculate the interpolation result between this size and another one with given ratio
               * @zh 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。
               * @param out Output Size.
               * @param from Original Size.
               * @param to Target Size.
               * @param ratio The interpolation coefficient.The range is [0,1].
               * @returns A vector consisting of linear interpolation of the width and height of the current size to the width and height of the target size at a specified interpolation ratio, respectively.
               */
              Size.lerp = function lerp(out, from, to, ratio) {
                out.width = from.width + (to.width - from.width) * ratio;
                out.height = from.height + (to.height - from.height) * ratio;
                return out;
              } // compatibility with vector interfaces
              ;

              _createClass(Size, [{
                key: "x",
                set: function set(val) {
                  this.width = val;
                },
                get: function get() {
                  return this.width;
                }
              }, {
                key: "y",
                set: function set(val) {
                  this.height = val;
                },
                get: function get() {
                  return this.height;
                }
              }]);

              function Size(width, height) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (width && typeof width === 'object') {
                  _this.width = width.width;
                  _this.height = width.height;
                } else {
                  _this.width = width || 0;
                  _this.height = height || 0;
                }

                return _this;
              }
              /**
               * @en clone the current `Size`.
               * @zh 克隆当前尺寸。
               */


              var _proto = Size.prototype;

              _proto.clone = function clone() {
                return new Size(this.width, this.height);
              }
              /**
               * @en Set values with another `Size`.
               * @zh 设置当前尺寸使其与指定的尺寸相等。
               * @param other Specified Size.
               * @returns `this`
               */
              ;

              _proto.set = function set(width, height) {
                if (width && typeof width === 'object') {
                  this.height = width.height;
                  this.width = width.width;
                } else {
                  this.width = width || 0;
                  this.height = height || 0;
                }

                return this;
              }
              /**
               * @en Check whether the current `Size` equals another one.
               * @zh 判断当前尺寸是否与指定尺寸的相等。
               * @param other Specified Size
               * @returns Returns `true' when both dimensions are equal in width and height; otherwise returns `false'.
               */
              ;

              _proto.equals = function equals(other) {
                return this.width === other.width && this.height === other.height;
              }
              /**
               * @en Calculate the interpolation result between this size and another one with given ratio
               * @zh 根据指定的插值比率，从当前尺寸到目标尺寸之间做插值。
               * @param to Target Size.
               * @param ratio The interpolation coefficient.The range is [0,1].
               */
              ;

              _proto.lerp = function lerp(to, ratio) {
                this.width += (to.width - this.width) * ratio;
                this.height += (to.height - this.height) * ratio;
                return this;
              }
              /**
               * @en Return the information of the current size in string
               * @zh 返回当前尺寸的字符串表示。
               * @returns The information of the current size in string
               */
              ;

              _proto.toString = function toString() {
                return "(" + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
              };

              return Size;
            }(ValueType);
            /**
             * @en Constructs a `Size` object.
             * @zh 等价于 `new Size(other)`。
             * @param other Specified Size.
             * @returns `new Size(other)`
             */

            Size.ZERO = Object.freeze(new Size(0, 0));
            Size.ONE = Object.freeze(new Size(1, 1));
            function size(width, height) {
              if (width === void 0) {
                width = 0;
              }

              if (height === void 0) {
                height = 0;
              }

              return new Size(width, height);
            }
            legacyCC.size = size;
            legacyCC.Size = Size;

            /**
             * @en
             * A 2D rectangle defined by x, y position and width, height.
             * @zh
             * 轴对齐矩形。
             * 矩形内的所有点都大于等于矩形的最小点 (xMin, yMin) 并且小于等于矩形的最大点 (xMax, yMax)。
             * 矩形的宽度定义为 xMax - xMin；高度定义为 yMax - yMin。
             */

            var Rect = /*#__PURE__*/function (_ValueType) {
              _inheritsLoose(Rect, _ValueType);

              /**
               * @en Creates a rectangle from two coordinate values.
               * @zh 由任意两个点创建一个矩形，目标矩形即是这两个点各向 x、y 轴作线所得到的矩形。
               * @param v1 Specified point 1.
               * @param v2 Specified point 2.
               * @returns Target rectangle.
               */
              Rect.fromMinMax = function fromMinMax(out, v1, v2) {
                var minX = Math.min(v1.x, v2.x);
                var minY = Math.min(v1.y, v2.y);
                var maxX = Math.max(v1.x, v2.x);
                var maxY = Math.max(v1.y, v2.y);
                out.x = minX;
                out.y = minY;
                out.width = maxX - minX;
                out.height = maxY - minY;
                return out;
              }
              /**
               * @en Calculate the interpolation result between this rect and another one with given ratio
               * @zh 根据指定的插值比率，从当前矩形到目标矩形之间做插值。
               * @param out Output rect.
               * @param from Original rect.
               * @param to Target rect.
               * @param ratio The interpolation coefficient.The range is [0,1].
               */
              ;

              Rect.lerp = function lerp(out, from, to, ratio) {
                var x = from.x;
                var y = from.y;
                var w = from.width;
                var h = from.height;
                out.x = x + (to.x - x) * ratio;
                out.y = y + (to.y - y) * ratio;
                out.width = w + (to.width - w) * ratio;
                out.height = h + (to.height - h) * ratio;
                return out;
              }
              /**
               * @en Returns the overlapping portion of 2 rectangles.
               * @zh 计算当前矩形与指定矩形重叠部分的矩形，将其赋值给出口矩形。
               * @param out Output Rect.
               * @param one One of the specify Rect.
               * @param other Another of the specify Rect.
               */
              ;

              Rect.intersection = function intersection(out, one, other) {
                var axMin = one.x;
                var ayMin = one.y;
                var axMax = one.x + one.width;
                var ayMax = one.y + one.height;
                var bxMin = other.x;
                var byMin = other.y;
                var bxMax = other.x + other.width;
                var byMax = other.y + other.height;
                out.x = Math.max(axMin, bxMin);
                out.y = Math.max(ayMin, byMin);
                out.width = Math.min(axMax, bxMax) - out.x;
                out.height = Math.min(ayMax, byMax) - out.y;
                return out;
              }
              /**
               * @en Returns the smallest rectangle that contains the current rect and the given rect.
               * @zh 创建同时包含当前矩形和指定矩形的最小矩形，将其赋值给出口矩形。
               * @param out Output Rect.
               * @param one One of the specify Rect.
               * @param other Another of the specify Rect.
               */
              ;

              Rect.union = function union(out, one, other) {
                var x = one.x;
                var y = one.y;
                var w = one.width;
                var h = one.height;
                var bx = other.x;
                var by = other.y;
                var bw = other.width;
                var bh = other.height;
                out.x = Math.min(x, bx);
                out.y = Math.min(y, by);
                out.width = Math.max(x + w, bx + bw) - out.x;
                out.height = Math.max(y + h, by + bh) - out.y;
                return out;
              }
              /**
               * @en The minimum x value.
               * @zh 获取或设置矩形在 x 轴上的最小值。
               */
              ;

              _createClass(Rect, [{
                key: "xMin",
                get: function get() {
                  return this.x;
                },
                set: function set(value) {
                  this.width += this.x - value;
                  this.x = value;
                }
                /**
                 * @en The minimum y value.
                 * @zh 获取或设置矩形在 y 轴上的最小值。
                 */

              }, {
                key: "yMin",
                get: function get() {
                  return this.y;
                },
                set: function set(value) {
                  this.height += this.y - value;
                  this.y = value;
                }
                /**
                 * @en The maximum x value.
                 * @zh 获取或设置矩形在 x 轴上的最大值。
                 */

              }, {
                key: "xMax",
                get: function get() {
                  return this.x + this.width;
                },
                set: function set(value) {
                  this.width = value - this.x;
                }
                /**
                 * @en The maximum y value.
                 * @zh 获取或设置矩形在 y 轴上的最大值。
                 */

              }, {
                key: "yMax",
                get: function get() {
                  return this.y + this.height;
                },
                set: function set(value) {
                  this.height = value - this.y;
                }
                /**
                 * @en The position of the center of the rectangle.
                 * @zh 获取或设置矩形中心点的坐标。
                 */

              }, {
                key: "center",
                get: function get() {
                  return new Vec2(this.x + this.width * 0.5, this.y + this.height * 0.5);
                },
                set: function set(value) {
                  this.x = value.x - this.width * 0.5;
                  this.y = value.y - this.height * 0.5;
                }
                /**
                 * @en Returns a new {{Vec2}} object representing the position of the rectangle
                 * @zh 获取或设置矩形的 x 和 y 坐标。
                 */

              }, {
                key: "origin",
                get: function get() {
                  return new Vec2(this.x, this.y);
                },
                set: function set(value) {
                  this.x = value.x;
                  this.y = value.y;
                }
                /**
                 * @en Returns a new {{Size}} object represents the width and height of the rectangle
                 * @zh 获取或设置矩形的尺寸。
                 */

              }, {
                key: "size",
                get: function get() {
                  return new Size(this.width, this.height);
                },
                set: function set(value) {
                  this.width = value.width;
                  this.height = value.height;
                } // compatibility with vector interfaces

              }, {
                key: "z",
                set: function set(val) {
                  this.width = val;
                },
                get: function get() {
                  return this.width;
                }
              }, {
                key: "w",
                set: function set(val) {
                  this.height = val;
                },
                get: function get() {
                  return this.height;
                }
                /**
                 * @en The minimum x value.
                 * @zh 矩形最小点的 x 坐标。
                 */

              }]);

              function Rect(x, y, width, height) {
                var _this;

                _this = _ValueType.call(this) || this;

                if (x && typeof x === 'object') {
                  _this.y = x.y;
                  _this.width = x.width;
                  _this.height = x.height;
                  _this.x = x.x;
                } else {
                  _this.x = x || 0;
                  _this.y = y || 0;
                  _this.width = width || 0;
                  _this.height = height || 0;
                }

                return _this;
              }
              /**
               * @en clone the current Rect.
               * @zh 克隆当前矩形。
               */


              var _proto = Rect.prototype;

              _proto.clone = function clone() {
                return new Rect(this.x, this.y, this.width, this.height);
              }
              /**
               * @en Set values with another Rect.
               * @zh 设置当前矩形使其与指定矩形相等。
               * @param other Specified Rect.
               * @returns `this`
               */
              ;

              _proto.set = function set(x, y, width, height) {
                if (x && typeof x === 'object') {
                  this.y = x.y;
                  this.width = x.width;
                  this.height = x.height;
                  this.x = x.x;
                } else {
                  this.x = x || 0;
                  this.y = y || 0;
                  this.width = width || 0;
                  this.height = height || 0;
                }

                return this;
              }
              /**
               * @en Check whether the current Rect equals another one.
               * @zh 判断当前矩形是否与指定矩形相等。
               * @param other Specified rectangles.
               * @returns Returns `true' when the minimum and maximum values of both rectangles are equal, respectively; otherwise, returns `false'.
               */
              ;

              _proto.equals = function equals(other) {
                return this.x === other.x && this.y === other.y && this.width === other.width && this.height === other.height;
              }
              /**
               * @en Calculate the interpolation result between this Rect and another one with given ratio.
               * @zh 根据指定的插值比率，从当前矩形到目标矩形之间做插值。
               * @param to Target Rect.
               * @param ratio The interpolation coefficient.The range is [0,1].
               */
              ;

              _proto.lerp = function lerp(to, ratio) {
                var x = this.x;
                var y = this.y;
                var w = this.width;
                var h = this.height;
                this.x = x + (to.x - x) * ratio;
                this.y = y + (to.y - y) * ratio;
                this.width = w + (to.width - w) * ratio;
                this.height = h + (to.height - h) * ratio;
                return this;
              }
              /**
               * @en Return the information of the current rect in string
               * @zh 返回当前矩形的字符串表示。
               * @returns The information of the current rect in string
               */
              ;

              _proto.toString = function toString() {
                return "(" + this.x.toFixed(2) + ", " + this.y.toFixed(2) + ", " + this.width.toFixed(2) + ", " + this.height.toFixed(2) + ")";
              }
              /**
               * @en Check whether the current rectangle intersects with the given one.
               * @zh 判断当前矩形是否与指定矩形相交。
               * @param other Specified rectangles.
               * @returns If intersected, return `true', otherwise return `false'.
               */
              ;

              _proto.intersects = function intersects(other) {
                var maxax = this.x + this.width;
                var maxay = this.y + this.height;
                var maxbx = other.x + other.width;
                var maxby = other.y + other.height;
                return !(maxax < other.x || maxbx < this.x || maxay < other.y || maxby < this.y);
              }
              /**
               * @en Check whether the current rect contains the given point.
               * @zh 判断当前矩形是否包含指定的点。
               * @param point Specified point.
               * @returns The specified point is included in the rectangle and returns `true', otherwise it returns `false'.
               */
              ;

              _proto.contains = function contains(point) {
                return this.x <= point.x && this.x + this.width >= point.x && this.y <= point.y && this.y + this.height >= point.y;
              }
              /**
               * @en Returns true if the other rect entirely inside this rectangle.
               * @zh 判断当前矩形是否包含指定矩形。
               * @param other Specified rectangles.
               * @returns Returns `true' if all the points of the specified rectangle are included in the current rectangle, `false' otherwise.
               */
              ;

              _proto.containsRect = function containsRect(other) {
                return this.x <= other.x && this.x + this.width >= other.x + other.width && this.y <= other.y && this.y + this.height >= other.y + other.height;
              }
              /**
               * @en Apply matrix4 to the rect.
               * @zh
               * 应用矩阵变换到当前矩形：
               * 应用矩阵变换到当前矩形的最小点得到新的最小点，
               * 将当前矩形的尺寸视为二维向量应用矩阵变换得到新的尺寸；
               * 并将如此构成的新矩形。
               * @param matrix The matrix4
               */
              ;

              _proto.transformMat4 = function transformMat4(mat) {
                var ol = this.x;
                var ob = this.y;
                var or = ol + this.width;
                var ot = ob + this.height;
                var lbx = mat.m00 * ol + mat.m04 * ob + mat.m12;
                var lby = mat.m01 * ol + mat.m05 * ob + mat.m13;
                var rbx = mat.m00 * or + mat.m04 * ob + mat.m12;
                var rby = mat.m01 * or + mat.m05 * ob + mat.m13;
                var ltx = mat.m00 * ol + mat.m04 * ot + mat.m12;
                var lty = mat.m01 * ol + mat.m05 * ot + mat.m13;
                var rtx = mat.m00 * or + mat.m04 * ot + mat.m12;
                var rty = mat.m01 * or + mat.m05 * ot + mat.m13;
                var minX = Math.min(lbx, rbx, ltx, rtx);
                var maxX = Math.max(lbx, rbx, ltx, rtx);
                var minY = Math.min(lby, rby, lty, rty);
                var maxY = Math.max(lby, rby, lty, rty);
                this.x = minX;
                this.y = minY;
                this.width = maxX - minX;
                this.height = maxY - minY;
                return this;
              }
              /**
               * 应用矩阵变换到当前矩形，并将结果输出到四个顶点上。
               */
              ;

              _proto.transformMat4ToPoints = function transformMat4ToPoints(mat, out_lb, out_lt, out_rt, out_rb) {
                var ol = this.x;
                var ob = this.y;
                var or = ol + this.width;
                var ot = ob + this.height;
                out_lb.x = mat.m00 * ol + mat.m04 * ob + mat.m12;
                out_lb.y = mat.m01 * ol + mat.m05 * ob + mat.m13;
                out_rb.x = mat.m00 * or + mat.m04 * ob + mat.m12;
                out_rb.y = mat.m01 * or + mat.m05 * ob + mat.m13;
                out_lt.x = mat.m00 * ol + mat.m04 * ot + mat.m12;
                out_lt.y = mat.m01 * ol + mat.m05 * ot + mat.m13;
                out_rt.x = mat.m00 * or + mat.m04 * ot + mat.m12;
                out_rt.y = mat.m01 * or + mat.m05 * ot + mat.m13;
              };

              return Rect;
            }(ValueType);
            legacyCC.Rect = Rect;
            /**
             * @en The convenient method to create a new Rect.
             * @zh 构造与指定矩形相等的矩形。等价于 `new Rect(rect)`。
             * @param rect Specified Rect.
             * @returns `new Rect(rect)`
             */

            function rect(x, y, width, height) {
              if (x === void 0) {
                x = 0;
              }

              if (y === void 0) {
                y = 0;
              }

              if (width === void 0) {
                width = 0;
              }

              if (height === void 0) {
                height = 0;
              }

              return new Rect(x, y, width, height);
            }
            legacyCC.rect = rect;

            var operationId = 0;

            function _tryCallingRecursively(target, opInfo) {
              var _opInfo$func;

              if (opInfo.invoking) {
                return;
              }

              opInfo.invoking = true;

              (_opInfo$func = opInfo.func).call.apply(_opInfo$func, [target].concat(opInfo.args)).then(function () {
                opInfo.invoking = false;

                target._operationQueue.shift();

                target._eventTarget.emit(opInfo.id.toString());

                var nextOpInfo = target._operationQueue[0];
                nextOpInfo && _tryCallingRecursively(target, nextOpInfo);
              })["catch"](function (e) {});
            }
            /**
             * This is a method decorator for media player class such as Audio or Video.
             * Most of the operations in media player are asynchronous.
             * When all these asynchronous operations are called concurrently, they need to be queued.
             *
             * Note: the decorated class need to implement the interface `OperationQueueable`
             * and the decorated method should be declared as `(...args: any[]): Promise<void>`.
             *
             * When you apply `enqueueOperation` on a method, remember to provide a pure operation implementation.
             * It means that, for example, you can't call stop in the implementation of play operation,
             * because that would cause the operation deadlock.
             */


            function enqueueOperation(target, propertyKey, descriptor) {
              var originalOperation = descriptor.value;

              descriptor.value = function () {
                var _this = this;

                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = arguments[_key];
                }

                return new Promise(function (resolve) {
                  var id = operationId++;
                  var instance = _this; // enqueue operation

                  instance._operationQueue.push({
                    id: id,
                    func: originalOperation,
                    args: args,
                    invoking: false
                  }); // call resolve when this operation id is finishied


                  instance._eventTarget.once(id.toString(), resolve);

                  var opInfo = instance._operationQueue[0];

                  _tryCallingRecursively(instance, opInfo);
                });
              };
            }

            var _class, _temp;

            function ensurePlaying(domAudio) {
              return new Promise(function (resolve) {
                var promise = domAudio.play();

                if (promise === undefined) {
                  // Chrome50/Firefox53 below
                  return resolve();
                }

                promise.then(resolve)["catch"](function () {
                  var onGesture = function onGesture() {
                    domAudio.play()["catch"](function (e) {});
                    resolve();
                  };

                  var canvas = document.getElementById('GameCanvas');
                  canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('touchend', onGesture, {
                    once: true
                  });
                  canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mousedown', onGesture, {
                    once: true
                  });
                });
                return null;
              });
            }

            var OneShotAudioDOM = /*#__PURE__*/function () {
              _createClass(OneShotAudioDOM, [{
                key: "onPlay",
                get: function get() {
                  return this._onPlayCb;
                },
                set: function set(cb) {
                  this._onPlayCb = cb;
                }
              }, {
                key: "onEnd",
                get: function get() {
                  return this._onEndCb;
                },
                set: function set(cb) {
                  if (this._onEndCb) {
                    this._domAudio.removeEventListener('ended', this._onEndCb);
                  }

                  this._onEndCb = cb;

                  if (cb) {
                    this._domAudio.addEventListener('ended', cb);
                  }
                }
              }]);

              function OneShotAudioDOM(nativeAudio, volume) {
                this._domAudio = void 0;
                this._onPlayCb = void 0;
                this._onEndCb = void 0;
                this._domAudio = nativeAudio;
                nativeAudio.volume = volume;
              }

              var _proto = OneShotAudioDOM.prototype;

              _proto.play = function play() {
                var _this = this;

                ensurePlaying(this._domAudio).then(function () {
                  var _this$onPlay;

                  (_this$onPlay = _this.onPlay) === null || _this$onPlay === void 0 ? void 0 : _this$onPlay.call(_this);
                })["catch"](function (e) {});
              };

              _proto.stop = function stop() {
                this._domAudio.pause();
              };

              return OneShotAudioDOM;
            }();
            var AudioPlayerDOM = (_class = (_temp = /*#__PURE__*/function () {
              /**
               * @legacyPublic
               */

              /**
               * @legacyPublic
               */
              function AudioPlayerDOM(nativeAudio) {
                var _this2 = this;

                this._domAudio = void 0;
                this._state = AudioState.INIT;
                this._onEnded = void 0;
                this._eventTarget = new EventTarget();
                this._operationQueue = [];
                this._domAudio = nativeAudio; // event

                systemInfo.on('hide', this._onHide, this);
                systemInfo.on('show', this._onShow, this);

                this._onEnded = function () {
                  _this2.seek(0)["catch"](function (e) {});

                  _this2._state = AudioState.INIT;

                  _this2._eventTarget.emit(AudioEvent.ENDED);
                };

                this._domAudio.addEventListener('ended', this._onEnded);
              }

              var _proto2 = AudioPlayerDOM.prototype;

              _proto2.destroy = function destroy() {
                systemInfo.off('hide', this._onHide, this);
                systemInfo.off('show', this._onShow, this);

                this._domAudio.removeEventListener('ended', this._onEnded); // @ts-expect-error need to release DOM Audio instance


                this._domAudio = null;
              };

              AudioPlayerDOM.load = function load(url) {
                return new Promise(function (resolve) {
                  AudioPlayerDOM.loadNative(url).then(function (domAudio) {
                    resolve(new AudioPlayerDOM(domAudio));
                  })["catch"](function (e) {});
                });
              };

              AudioPlayerDOM.loadNative = function loadNative(url) {
                return new Promise(function (resolve, reject) {
                  var domAudio = document.createElement('audio');
                  var loadedEvent = 'canplaythrough';

                  if (systemInfo.os === OS.IOS) {
                    // iOS no event that used to parse completed callback
                    // this time is not complete, can not play
                    loadedEvent = 'loadedmetadata';
                  } else if (systemInfo.browserType === BrowserType.FIREFOX) {
                    loadedEvent = 'canplay';
                  }

                  var timer = setTimeout(function () {
                    if (domAudio.readyState === 0) {
                      failure();
                    } else {
                      success();
                    }
                  }, 8000);

                  var clearEvent = function clearEvent() {
                    clearTimeout(timer);
                    domAudio.removeEventListener(loadedEvent, success, false);
                    domAudio.removeEventListener('error', failure, false);
                  };

                  var success = function success() {
                    clearEvent();
                    resolve(domAudio);
                  };

                  var failure = function failure() {
                    clearEvent();
                    var message = "load audio failure - " + url;
                    reject(message);
                  };

                  domAudio.addEventListener(loadedEvent, success, false);
                  domAudio.addEventListener('error', failure, false);
                  domAudio.src = url;
                });
              };

              AudioPlayerDOM.loadOneShotAudio = function loadOneShotAudio(url, volume) {
                return new Promise(function (resolve, reject) {
                  AudioPlayerDOM.loadNative(url).then(function (domAudio) {
                    // @ts-expect-error AudioPlayer should be a friend class in OneShotAudio
                    var oneShotAudio = new OneShotAudioDOM(domAudio, volume);
                    resolve(oneShotAudio);
                  })["catch"](reject);
                });
              };

              _proto2._onHide = function _onHide() {
                var _this3 = this;

                if (this._state === AudioState.PLAYING) {
                  this.pause().then(function () {
                    _this3._state = AudioState.INTERRUPTED;

                    _this3._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
                  })["catch"](function (e) {});
                }
              };

              _proto2._onShow = function _onShow() {
                var _this4 = this;

                if (this._state === AudioState.INTERRUPTED) {
                  this.play().then(function () {
                    _this4._eventTarget.emit(AudioEvent.INTERRUPTION_END);
                  })["catch"](function (e) {});
                }
              };

              _proto2.seek = function seek(time) {
                time = clamp(time, 0, this.duration);
                this._domAudio.currentTime = time;
                return Promise.resolve();
              };

              _proto2.play = function play() {
                var _this5 = this;

                return new Promise(function (resolve) {
                  ensurePlaying(_this5._domAudio).then(function () {
                    _this5._state = AudioState.PLAYING;
                    resolve();
                  })["catch"](function (e) {});
                });
              };

              _proto2.pause = function pause() {
                this._domAudio.pause();

                this._state = AudioState.PAUSED;
                return Promise.resolve();
              };

              _proto2.stop = function stop() {
                var _this6 = this;

                return new Promise(function (resolve) {
                  _this6._domAudio.pause();

                  _this6._domAudio.currentTime = 0;
                  _this6._state = AudioState.STOPPED;
                  resolve();
                });
              };

              _proto2.onInterruptionBegin = function onInterruptionBegin(cb) {
                this._eventTarget.on(AudioEvent.INTERRUPTION_BEGIN, cb);
              };

              _proto2.offInterruptionBegin = function offInterruptionBegin(cb) {
                this._eventTarget.off(AudioEvent.INTERRUPTION_BEGIN, cb);
              };

              _proto2.onInterruptionEnd = function onInterruptionEnd(cb) {
                this._eventTarget.on(AudioEvent.INTERRUPTION_END, cb);
              };

              _proto2.offInterruptionEnd = function offInterruptionEnd(cb) {
                this._eventTarget.off(AudioEvent.INTERRUPTION_END, cb);
              };

              _proto2.onEnded = function onEnded(cb) {
                this._eventTarget.on(AudioEvent.ENDED, cb);
              };

              _proto2.offEnded = function offEnded(cb) {
                this._eventTarget.off(AudioEvent.ENDED, cb);
              };

              _createClass(AudioPlayerDOM, [{
                key: "src",
                get: function get() {
                  return this._domAudio ? this._domAudio.src : '';
                }
              }, {
                key: "type",
                get: function get() {
                  return AudioType.DOM_AUDIO;
                }
              }, {
                key: "state",
                get: function get() {
                  return this._state;
                }
              }, {
                key: "loop",
                get: function get() {
                  return this._domAudio.loop;
                },
                set: function set(val) {
                  this._domAudio.loop = val;
                }
              }, {
                key: "volume",
                get: function get() {
                  return this._domAudio.volume;
                },
                set: function set(val) {
                  val = clamp01(val);
                  this._domAudio.volume = val;
                }
              }, {
                key: "duration",
                get: function get() {
                  return this._domAudio.duration;
                }
              }, {
                key: "currentTime",
                get: function get() {
                  return this._domAudio.currentTime;
                }
              }]);

              return AudioPlayerDOM;
            }(), _temp), (_applyDecoratedDescriptor(_class.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class.prototype, "seek"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class.prototype, "play"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class.prototype, "pause"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class.prototype, "stop"), _class.prototype)), _class);

            /**
             * Tool class to calculate audio current time.
             * For some platforms where audio.currentTime doesn't work well or isn't implemented.
             */

            var AudioTimer = /*#__PURE__*/function () {
              function AudioTimer(nativeAudio) {
                this._nativeAudio = void 0;
                this._startTime = 0;
                this._startOffset = 0;
                this._isPaused = true;
                this._nativeAudio = nativeAudio;
              }

              var _proto = AudioTimer.prototype;

              _proto.destroy = function destroy() {
                // @ts-expect-error Type 'undefined' is not assignable to type 'IDuration'
                this._nativeAudio = undefined;
              };

              _proto._now = function _now() {
                return performance.now() / 1000;
              };

              _proto._calculateCurrentTime = function _calculateCurrentTime() {
                var timePassed = this._now() - this._startTime;

                var currentTime = this._startOffset + timePassed;

                if (currentTime >= this.duration) {
                  // timer loop
                  this._startTime = this._now();
                  this._startOffset = 0;
                }

                return currentTime % this.duration;
              }
              /**
               * Start the audio timer.
               * Call this method when audio is played.
               */
              ;

              _proto.start = function start() {
                this._isPaused = false;
                this._startTime = this._now();
              }
              /**
               * Pause the audio timer.
               * Call this method when audio is paused or interrupted.
               */
              ;

              _proto.pause = function pause() {
                if (this._isPaused) {
                  return;
                }

                this._isPaused = true;
                this._startOffset = this._calculateCurrentTime();
              }
              /**
               * Stop the audio timer.
               * Call this method when audio playing ended or audio is stopped.
               */
              ;

              _proto.stop = function stop() {
                this._isPaused = true;
                this._startOffset = 0;
              }
              /**
               * Seek the audio timer.
               * Call this method when audio is seeked.
               */
              ;

              _proto.seek = function seek(time) {
                this._startTime = this._now();
                this._startOffset = clamp(time, 0, this.duration);
              };

              _createClass(AudioTimer, [{
                key: "duration",
                get: function get() {
                  return this._nativeAudio.duration;
                }
                /**
                 * Get the current time of audio timer.
                 */

              }, {
                key: "currentTime",
                get: function get() {
                  if (this._isPaused) {
                    return this._startOffset;
                  } else {
                    return this._calculateCurrentTime();
                  }
                }
              }]);

              return AudioTimer;
            }();

            /**
             * This is a manager to manage the cache of audio buffer for web audio.
             */
            var AudioBufferManager = /*#__PURE__*/function () {
              function AudioBufferManager() {
                this._audioBufferDataMap = {};
              }

              var _proto = AudioBufferManager.prototype;

              _proto.addCache = function addCache(url, audioBuffer) {
                var audioBufferData = this._audioBufferDataMap[url];

                if (audioBufferData) {
                  console.warn("Audio buffer " + url + " has been cached");
                  return;
                }

                this._audioBufferDataMap[url] = {
                  usedCount: 1,
                  audioBuffer: audioBuffer
                };
              };

              _proto.retainCache = function retainCache(url) {
                var audioBufferData = this._audioBufferDataMap[url];

                if (!audioBufferData) {
                  console.warn("Audio buffer cache " + url + " has not been added.");
                  return;
                }

                audioBufferData.usedCount++;
              };

              _proto.getCache = function getCache(url) {
                var audioBufferData = this._audioBufferDataMap[url];
                return audioBufferData === null || audioBufferData === void 0 ? void 0 : audioBufferData.audioBuffer;
              };

              _proto.tryReleasingCache = function tryReleasingCache(url) {
                var audioBufferData = this._audioBufferDataMap[url];

                if (!audioBufferData) {
                  console.warn("Audio buffer cache " + url + " has not been added.");
                  return;
                }

                if (--audioBufferData.usedCount <= 0) {
                  delete this._audioBufferDataMap[url];
                }
              };

              return AudioBufferManager;
            }();

            var audioBufferManager = new AudioBufferManager();

            var _class$1, _temp$1;

            var AudioContextClass = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
            var AudioContextAgent = /*#__PURE__*/function () {
              function AudioContextAgent() {
                this._context = void 0;
                this._context = new (window.AudioContext || window.webkitAudioContext || window.mozAudioContext)();
              }

              var _proto = AudioContextAgent.prototype;

              _proto.decodeAudioData = function decodeAudioData(audioData) {
                var _this = this;

                return new Promise(function (resolve) {
                  var promise = _this._context.decodeAudioData(audioData, function (audioBuffer) {
                    resolve(audioBuffer);
                  }, function (err) {
                    // TODO: need to reject the error.
                    console.error('failed to load Web Audio', err);
                  });

                  promise === null || promise === void 0 ? void 0 : promise["catch"](function (e) {}); // Safari doesn't support the promise based decodeAudioData
                });
              };

              _proto.runContext = function runContext() {
                var _this2 = this;

                return new Promise(function (resolve) {
                  var context = _this2._context;

                  if (!context.resume) {
                    resolve();
                    return;
                  }

                  if (context.state === 'running') {
                    resolve();
                    return;
                  } // Force running audio context if state is not 'running', may be 'suspended' or 'interrupted'.


                  var canvas = document.getElementById('GameCanvas');

                  var onGesture = function onGesture() {
                    context.resume().then(resolve)["catch"](function (e) {});
                  };

                  canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('touchend', onGesture, {
                    once: true,
                    capture: true
                  });
                  canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mouseup', onGesture, {
                    once: true,
                    capture: true
                  });
                });
              };

              _proto.createBufferSource = function createBufferSource(audioBuffer, loop) {
                var sourceBufferNode = this._context.createBufferSource();

                if (audioBuffer !== undefined) {
                  sourceBufferNode.buffer = audioBuffer;
                }

                if (loop !== undefined) {
                  sourceBufferNode.loop = loop;
                }

                return sourceBufferNode;
              };

              _proto.createGain = function createGain(volume) {
                if (volume === void 0) {
                  volume = 1;
                }

                var gainNode = this._context.createGain();

                this.setGainValue(gainNode, volume);
                return gainNode;
              };

              _proto.setGainValue = function setGainValue(gain, volume) {
                if (gain.gain.setTargetAtTime) {
                  try {
                    gain.gain.setTargetAtTime(volume, this._context.currentTime, 0);
                  } catch (e) {
                    // Some unknown browsers may crash if timeConstant is 0
                    gain.gain.setTargetAtTime(volume, this._context.currentTime, 0.01);
                  }
                } else {
                  gain.gain.value = volume;
                }
              };

              _proto.connectContext = function connectContext(audioNode) {
                if (!this._context) {
                  return;
                }

                audioNode.connect(this._context.destination);
              };

              _createClass(AudioContextAgent, [{
                key: "currentTime",
                get: function get() {
                  return this._context.currentTime;
                }
              }]);

              return AudioContextAgent;
            }();
            AudioContextAgent.support = !!AudioContextClass;
            var audioContextAgent;

            if (AudioContextAgent.support) {
              audioContextAgent = new AudioContextAgent();
            }

            var OneShotAudioWeb = /*#__PURE__*/function () {
              _createClass(OneShotAudioWeb, [{
                key: "onPlay",
                get: function get() {
                  return this._onPlayCb;
                },
                set: function set(cb) {
                  this._onPlayCb = cb;
                }
              }, {
                key: "onEnd",
                get: function get() {
                  return this._onEndCb;
                },
                set: function set(cb) {
                  this._onEndCb = cb;
                }
              }]);

              function OneShotAudioWeb(audioBuffer, volume, url) {
                this._duration = void 0;
                this._bufferSourceNode = void 0;
                this._onPlayCb = void 0;
                this._currentTimer = 0;
                this._url = void 0;
                this._onEndCb = void 0;
                this._duration = audioBuffer.duration;
                this._url = url;
                this._bufferSourceNode = audioContextAgent.createBufferSource(audioBuffer, false);
                var gainNode = audioContextAgent.createGain(volume);

                this._bufferSourceNode.connect(gainNode);

                audioContextAgent.connectContext(gainNode);
              }

              var _proto2 = OneShotAudioWeb.prototype;

              _proto2.play = function play() {
                var _this3 = this;

                if (EDITOR) {
                  return;
                }

                this._bufferSourceNode.start(); // audioContextAgent does exist


                audioContextAgent.runContext().then(function () {
                  var _this3$onPlay;

                  (_this3$onPlay = _this3.onPlay) === null || _this3$onPlay === void 0 ? void 0 : _this3$onPlay.call(_this3);
                  _this3._currentTimer = window.setTimeout(function () {
                    var _this3$onEnd;

                    audioBufferManager.tryReleasingCache(_this3._url);
                    (_this3$onEnd = _this3.onEnd) === null || _this3$onEnd === void 0 ? void 0 : _this3$onEnd.call(_this3);
                  }, _this3._duration * 1000);
                })["catch"](function (e) {});
              };

              _proto2.stop = function stop() {
                clearTimeout(this._currentTimer);
                audioBufferManager.tryReleasingCache(this._url);

                this._bufferSourceNode.stop();

                this._bufferSourceNode.buffer = null;
              };

              return OneShotAudioWeb;
            }();
            var AudioPlayerWeb = (_class$1 = (_temp$1 = /*#__PURE__*/function () {
              /**
               * @legacyPublic
               */

              /**
               * @legacyPublic
               */
              function AudioPlayerWeb(audioBuffer, url) {
                this._src = void 0;
                this._audioBuffer = void 0;
                this._sourceNode = void 0;
                this._gainNode = void 0;
                this._currentTimer = 0;
                this._volume = 1;
                this._loop = false;
                this._state = AudioState.INIT;
                this._audioTimer = void 0;
                this._eventTarget = new EventTarget();
                this._operationQueue = [];
                this._audioBuffer = audioBuffer;
                this._audioTimer = new AudioTimer(audioBuffer);
                this._gainNode = audioContextAgent.createGain();
                audioContextAgent.connectContext(this._gainNode);
                this._src = url; // event

                systemInfo.on('hide', this._onHide, this);
                systemInfo.on('show', this._onShow, this);
              }

              var _proto3 = AudioPlayerWeb.prototype;

              _proto3.destroy = function destroy() {
                this._audioTimer.destroy();

                if (this._audioBuffer) {
                  // @ts-expect-error need to release AudioBuffer instance
                  this._audioBuffer = null;
                }

                audioBufferManager.tryReleasingCache(this._src);
                systemInfo.off('hide', this._onHide, this);
                systemInfo.off('show', this._onShow, this);
              };

              AudioPlayerWeb.load = function load(url) {
                return new Promise(function (resolve) {
                  AudioPlayerWeb.loadNative(url).then(function (audioBuffer) {
                    resolve(new AudioPlayerWeb(audioBuffer, url));
                  })["catch"](function (e) {});
                });
              };

              AudioPlayerWeb.loadNative = function loadNative(url) {
                return new Promise(function (resolve, reject) {
                  var cachedAudioBuffer = audioBufferManager.getCache(url);

                  if (cachedAudioBuffer) {
                    audioBufferManager.retainCache(url);
                    resolve(cachedAudioBuffer);
                    return;
                  }

                  var xhr = new XMLHttpRequest();
                  var errInfo = "load audio failed: " + url + ", status: ";
                  xhr.open('GET', url, true);
                  xhr.responseType = 'arraybuffer';

                  xhr.onload = function () {
                    if (xhr.status === 200 || xhr.status === 0) {
                      audioContextAgent.decodeAudioData(xhr.response).then(function (decodedAudioBuffer) {
                        audioBufferManager.addCache(url, decodedAudioBuffer);
                        resolve(decodedAudioBuffer);
                      })["catch"](function (e) {});
                    } else {
                      reject(new Error("" + errInfo + xhr.status + "(no response)"));
                    }
                  };

                  xhr.onerror = function () {
                    reject(new Error("" + errInfo + xhr.status + "(error)"));
                  };

                  xhr.ontimeout = function () {
                    reject(new Error("" + errInfo + xhr.status + "(time out)"));
                  };

                  xhr.onabort = function () {
                    reject(new Error("" + errInfo + xhr.status + "(abort)"));
                  };

                  xhr.send(null);
                });
              };

              AudioPlayerWeb.loadOneShotAudio = function loadOneShotAudio(url, volume) {
                return new Promise(function (resolve, reject) {
                  AudioPlayerWeb.loadNative(url).then(function (audioBuffer) {
                    // @ts-expect-error AudioPlayer should be a friend class in OneShotAudio
                    var oneShotAudio = new OneShotAudioWeb(audioBuffer, volume, url);
                    resolve(oneShotAudio);
                  })["catch"](reject);
                });
              };

              _proto3._onHide = function _onHide() {
                var _this4 = this;

                if (this._state === AudioState.PLAYING) {
                  this.pause().then(function () {
                    _this4._state = AudioState.INTERRUPTED;

                    _this4._eventTarget.emit(AudioEvent.INTERRUPTION_BEGIN);
                  })["catch"](function (e) {});
                }
              };

              _proto3._onShow = function _onShow() {
                var _this5 = this;

                if (this._state === AudioState.INTERRUPTED) {
                  this.play().then(function () {
                    _this5._eventTarget.emit(AudioEvent.INTERRUPTION_END);
                  })["catch"](function (e) {});
                }
              };

              _proto3.seek = function seek(time) {
                var _this6 = this;

                return new Promise(function (resolve) {
                  _this6._audioTimer.seek(time);

                  if (_this6._state === AudioState.PLAYING) {
                    // one AudioBufferSourceNode can't start twice
                    // need to create a new one to start from the offset
                    _this6._doPlay().then(resolve)["catch"](function (e) {});
                  } else {
                    resolve();
                  }
                });
              };

              _proto3.play = function play() {
                if (EDITOR) {
                  return Promise.resolve();
                }

                return this._doPlay();
              } // The decorated play() method can't be call in seek()
              // so we define this method to ensure that the audio seeking works.
              ;

              _proto3._doPlay = function _doPlay() {
                var _this7 = this;

                return new Promise(function (resolve) {
                  // one AudioBufferSourceNode can't start twice
                  _this7._stopSourceNode();

                  _this7._sourceNode = audioContextAgent.createBufferSource(_this7._audioBuffer, _this7.loop);

                  _this7._sourceNode.connect(_this7._gainNode);

                  _this7._sourceNode.start(0, _this7._audioTimer.currentTime);

                  audioContextAgent.runContext().then(function () {
                    _this7._state = AudioState.PLAYING;

                    _this7._audioTimer.start();
                    /* still not supported by all platforms *
                    this._sourceNode.onended = this._onEnded;
                    /* doing it manually for now */


                    var checkEnded = function checkEnded() {
                      if (_this7.loop) {
                        _this7._currentTimer = window.setTimeout(checkEnded, _this7._audioBuffer.duration * 1000);
                      } else {
                        // do ended
                        _this7._audioTimer.stop();

                        _this7._eventTarget.emit(AudioEvent.ENDED);

                        _this7._state = AudioState.INIT;
                      }
                    };

                    window.clearTimeout(_this7._currentTimer);
                    _this7._currentTimer = window.setTimeout(checkEnded, (_this7._audioBuffer.duration - _this7._audioTimer.currentTime) * 1000);
                    resolve();
                  })["catch"](function (e) {});
                });
              };

              _proto3._stopSourceNode = function _stopSourceNode() {
                try {
                  if (this._sourceNode) {
                    this._sourceNode.stop();

                    this._sourceNode.buffer = null;
                  }
                } catch (e) {// sourceNode can't be stopped twice, especially on Safari.
                }
              };

              _proto3.pause = function pause() {
                if (this._state !== AudioState.PLAYING || !this._sourceNode) {
                  return Promise.resolve();
                }

                this._audioTimer.pause();

                this._state = AudioState.PAUSED;
                window.clearTimeout(this._currentTimer);

                this._stopSourceNode();

                return Promise.resolve();
              };

              _proto3.stop = function stop() {
                if (!this._sourceNode) {
                  return Promise.resolve();
                }

                this._audioTimer.stop();

                this._state = AudioState.STOPPED;
                window.clearTimeout(this._currentTimer);

                this._stopSourceNode();

                return Promise.resolve();
              };

              _proto3.onInterruptionBegin = function onInterruptionBegin(cb) {
                this._eventTarget.on(AudioEvent.INTERRUPTION_BEGIN, cb);
              };

              _proto3.offInterruptionBegin = function offInterruptionBegin(cb) {
                this._eventTarget.off(AudioEvent.INTERRUPTION_BEGIN, cb);
              };

              _proto3.onInterruptionEnd = function onInterruptionEnd(cb) {
                this._eventTarget.on(AudioEvent.INTERRUPTION_END, cb);
              };

              _proto3.offInterruptionEnd = function offInterruptionEnd(cb) {
                this._eventTarget.off(AudioEvent.INTERRUPTION_END, cb);
              };

              _proto3.onEnded = function onEnded(cb) {
                this._eventTarget.on(AudioEvent.ENDED, cb);
              };

              _proto3.offEnded = function offEnded(cb) {
                this._eventTarget.off(AudioEvent.ENDED, cb);
              };

              _createClass(AudioPlayerWeb, [{
                key: "src",
                get: function get() {
                  return this._src;
                }
              }, {
                key: "type",
                get: function get() {
                  return AudioType.WEB_AUDIO;
                }
              }, {
                key: "state",
                get: function get() {
                  return this._state;
                }
              }, {
                key: "loop",
                get: function get() {
                  return this._loop;
                },
                set: function set(val) {
                  this._loop = val;

                  if (this._sourceNode) {
                    this._sourceNode.loop = val;
                  }
                }
              }, {
                key: "volume",
                get: function get() {
                  return this._volume;
                },
                set: function set(val) {
                  val = clamp01(val);
                  this._volume = val;
                  audioContextAgent.setGainValue(this._gainNode, val);
                }
              }, {
                key: "duration",
                get: function get() {
                  return this._audioBuffer.duration;
                }
              }, {
                key: "currentTime",
                get: function get() {
                  return this._audioTimer.currentTime;
                }
              }]);

              return AudioPlayerWeb;
            }(), _temp$1), (_applyDecoratedDescriptor(_class$1.prototype, "seek", [enqueueOperation], Object.getOwnPropertyDescriptor(_class$1.prototype, "seek"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "play", [enqueueOperation], Object.getOwnPropertyDescriptor(_class$1.prototype, "play"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "pause", [enqueueOperation], Object.getOwnPropertyDescriptor(_class$1.prototype, "pause"), _class$1.prototype), _applyDecoratedDescriptor(_class$1.prototype, "stop", [enqueueOperation], Object.getOwnPropertyDescriptor(_class$1.prototype, "stop"), _class$1.prototype)), _class$1);

            var OneShotAudio = exports('OneShotAudio', /*#__PURE__*/function () {
              _createClass(OneShotAudio, [{
                key: "onPlay",
                get: function get() {
                  return this._audio.onPlay;
                },
                set: function set(v) {
                  this._audio.onPlay = v;
                }
              }, {
                key: "onEnd",
                get: function get() {
                  return this._audio.onEnd;
                },
                set: function set(v) {
                  this._audio.onEnd = v;
                }
              }]);

              function OneShotAudio(audio) {
                this._audio = void 0;
                this._audio = audio;
              }

              var _proto = OneShotAudio.prototype;

              _proto.play = function play() {
                this._audio.play();
              };

              _proto.stop = function stop() {
                this._audio.stop();
              };

              return OneShotAudio;
            }());
            var AudioPlayer = exports('AudioPlayer', /*#__PURE__*/function () {
              function AudioPlayer(player) {
                this._player = void 0;
                this._player = player;
              }

              AudioPlayer.load = function load(url, opts) {
                return new Promise(function (resolve) {
                  if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
                    if (!AudioContextAgent.support) {
                      warnID(5201);
                    }

                    AudioPlayerDOM.load(url).then(function (domPlayer) {
                      resolve(new AudioPlayer(domPlayer));
                    })["catch"](function (e) {});
                  } else {
                    AudioPlayerWeb.load(url).then(function (webPlayer) {
                      resolve(new AudioPlayer(webPlayer));
                    })["catch"](function (e) {});
                  }
                });
              };

              var _proto2 = AudioPlayer.prototype;

              _proto2.destroy = function destroy() {
                this._player.destroy();
              };

              AudioPlayer.loadNative = function loadNative(url, opts) {
                if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
                  if (!AudioContextAgent.support) {
                    warnID(5201);
                  }

                  return AudioPlayerDOM.loadNative(url);
                }

                return AudioPlayerWeb.loadNative(url);
              };

              AudioPlayer.loadOneShotAudio = function loadOneShotAudio(url, volume, opts) {
                return new Promise(function (resolve, reject) {
                  if ((opts === null || opts === void 0 ? void 0 : opts.audioLoadMode) === AudioType.DOM_AUDIO || !AudioContextAgent.support) {
                    if (!AudioContextAgent.support) {
                      warnID(5201);
                    }

                    AudioPlayerDOM.loadOneShotAudio(url, volume).then(function (oneShotAudioDOM) {
                      // @ts-expect-error AudioPlayer should be a friend class in OneShotAudio
                      resolve(new OneShotAudio(oneShotAudioDOM));
                    })["catch"](reject);
                  } else {
                    AudioPlayerWeb.loadOneShotAudio(url, volume).then(function (oneShotAudioWeb) {
                      // @ts-expect-error AudioPlayer should be a friend class in OneShotAudio
                      resolve(new OneShotAudio(oneShotAudioWeb));
                    })["catch"](reject);
                  }
                });
              };

              _proto2.seek = function seek(time) {
                return this._player.seek(time);
              };

              _proto2.play = function play() {
                return this._player.play();
              };

              _proto2.pause = function pause() {
                return this._player.pause();
              };

              _proto2.stop = function stop() {
                return this._player.stop();
              };

              _proto2.onInterruptionBegin = function onInterruptionBegin(cb) {
                this._player.onInterruptionBegin(cb);
              };

              _proto2.offInterruptionBegin = function offInterruptionBegin(cb) {
                this._player.offInterruptionBegin(cb);
              };

              _proto2.onInterruptionEnd = function onInterruptionEnd(cb) {
                this._player.onInterruptionEnd(cb);
              };

              _proto2.offInterruptionEnd = function offInterruptionEnd(cb) {
                this._player.offInterruptionEnd(cb);
              };

              _proto2.onEnded = function onEnded(cb) {
                this._player.onEnded(cb);
              };

              _proto2.offEnded = function offEnded(cb) {
                this._player.offEnded(cb);
              };

              _createClass(AudioPlayer, [{
                key: "src",
                get: function get() {
                  return this._player.src;
                }
              }, {
                key: "type",
                get: function get() {
                  return this._player.type;
                }
              }, {
                key: "state",
                get: function get() {
                  return this._player.state;
                }
              }, {
                key: "loop",
                get: function get() {
                  return this._player.loop;
                },
                set: function set(val) {
                  this._player.loop = val;
                }
              }, {
                key: "volume",
                get: function get() {
                  return this._player.volume;
                },
                set: function set(val) {
                  this._player.volume = val;
                }
              }, {
                key: "duration",
                get: function get() {
                  return this._player.duration;
                }
              }, {
                key: "currentTime",
                get: function get() {
                  return this._player.currentTime;
                }
              }]);

              return AudioPlayer;
            }());
            AudioPlayer.maxAudioChannel = 24;

            var _PORTRAIT = 1;

            var _PORTRAIT_UPSIDE_DOWN = _PORTRAIT << 1;

            var _LEFT = _PORTRAIT << 2;

            var _RIGHT = _PORTRAIT << 3;

            var _LANDSCAPE = _LEFT | _RIGHT;

            var _AUTO = _PORTRAIT | _LANDSCAPE;

            var Orientation;

            (function (Orientation) {
              Orientation[Orientation["PORTRAIT"] = _PORTRAIT] = "PORTRAIT";
              Orientation[Orientation["PORTRAIT_UPSIDE_DOWN"] = _PORTRAIT_UPSIDE_DOWN] = "PORTRAIT_UPSIDE_DOWN";
              Orientation[Orientation["LANDSCAPE_LEFT"] = _LEFT] = "LANDSCAPE_LEFT";
              Orientation[Orientation["LANDSCAPE_RIGHT"] = _RIGHT] = "LANDSCAPE_RIGHT";
              Orientation[Orientation["LANDSCAPE"] = _LANDSCAPE] = "LANDSCAPE";
              Orientation[Orientation["AUTO"] = _AUTO] = "AUTO";
            })(Orientation || (Orientation = exports('Orientation', {})));

            var EVENT_TIMEOUT = EDITOR ? 5 : 200;
            var orientationMap = {
              auto: Orientation.AUTO,
              landscape: Orientation.LANDSCAPE,
              portrait: Orientation.PORTRAIT
            };
            /**
             * On Web platform, the game window may points to different type of window.
             */

            var WindowType;

            (function (WindowType) {
              WindowType[WindowType["Unknown"] = 0] = "Unknown";
              WindowType[WindowType["SubFrame"] = 1] = "SubFrame";
              WindowType[WindowType["BrowserWindow"] = 2] = "BrowserWindow";
              WindowType[WindowType["Fullscreen"] = 3] = "Fullscreen";
            })(WindowType || (WindowType = {}));

            var ScreenAdapter = /*#__PURE__*/function (_EventTarget) {
              _inheritsLoose(ScreenAdapter, _EventTarget);

              _createClass(ScreenAdapter, [{
                key: "supportFullScreen",
                get: function get() {
                  return this._supportFullScreen;
                }
              }, {
                key: "isFullScreen",
                get: function get() {
                  if (!this._supportFullScreen) {
                    return false;
                  }

                  return !!document[this._fn.fullscreenElement];
                }
              }, {
                key: "devicePixelRatio",
                get: function get() {
                  var _window$devicePixelRa;

                  // TODO: remove the down sampling operation in DPR after supporting resolutionScale
                  return Math.min((_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1, 2);
                }
              }, {
                key: "windowSize",
                get: function get() {
                  var result = this._windowSizeInCssPixels;
                  var dpr = this.devicePixelRatio;
                  result.width *= dpr;
                  result.height *= dpr;
                  return result;
                },
                set: function set(size) {
                  if (this._windowType !== WindowType.SubFrame) {
                    warnID(9202);
                    return;
                  }

                  this._resizeFrame(this._convertToSizeInCssPixels(size));
                }
              }, {
                key: "resolution",
                get: function get() {
                  var windowSize = this.windowSize;
                  var resolutionScale = this.resolutionScale;
                  return new Size(windowSize.width * resolutionScale, windowSize.height * resolutionScale);
                }
              }, {
                key: "resolutionScale",
                get: function get() {
                  return this._resolutionScale;
                },
                set: function set(v) {
                  var _this$_cbToUpdateFram;

                  if (v === this._resolutionScale) {
                    return;
                  }

                  this._resolutionScale = v;
                  (_this$_cbToUpdateFram = this._cbToUpdateFrameBuffer) === null || _this$_cbToUpdateFram === void 0 ? void 0 : _this$_cbToUpdateFram.call(this);
                }
              }, {
                key: "orientation",
                get: function get() {
                  return this._orientation;
                },
                set: function set(value) {
                  if (this._orientation === value) {
                    return;
                  }

                  this._orientation = value;

                  this._updateFrameState();
                }
              }, {
                key: "safeAreaEdge",
                get: function get() {
                  return {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                  };
                }
              }, {
                key: "isProportionalToFrame",
                get: function get() {
                  return this._isProportionalToFrame;
                },
                set: function set(v) {
                  if (this._isProportionalToFrame === v) {
                    return;
                  }

                  this._isProportionalToFrame = v;

                  this._updateContainer();
                }
              }, {
                key: "_windowSizeInCssPixels",
                get: function get() {
                  if (TEST) {
                    return new Size(window.innerWidth, window.innerHeight);
                  }

                  if (this.isProportionalToFrame) {
                    if (!this._gameContainer) {
                      warnID(9201);
                      return new Size(0, 0);
                    }

                    return new Size(this._gameContainer.clientWidth, this._gameContainer.clientHeight);
                  }

                  var fullscreenTarget;
                  var width;
                  var height;

                  switch (this._windowType) {
                    case WindowType.SubFrame:
                      if (!this._gameFrame) {
                        warnID(9201);
                        return new Size(0, 0);
                      }

                      return new Size(this._gameFrame.clientWidth, this._gameFrame.clientHeight);

                    case WindowType.Fullscreen:
                      fullscreenTarget = this._getFullscreenTarget();
                      width = this.isFrameRotated ? fullscreenTarget.clientHeight : fullscreenTarget.clientWidth;
                      height = this.isFrameRotated ? fullscreenTarget.clientWidth : fullscreenTarget.clientHeight;
                      return new Size(width, height);

                    case WindowType.BrowserWindow:
                      width = this.isFrameRotated ? window.innerHeight : window.innerWidth;
                      height = this.isFrameRotated ? window.innerWidth : window.innerHeight;
                      return new Size(width, height);

                    case WindowType.Unknown:
                    default:
                      return new Size(0, 0);
                  }
                }
              }, {
                key: "_windowType",
                get: function get() {
                  if (this.isFullScreen) {
                    return WindowType.Fullscreen;
                  }

                  if (!this._gameFrame) {
                    warnID(9201);
                    return WindowType.Unknown;
                  }

                  if (this._exactFitScreen) {
                    // Note: It doesn't work well to determine whether the frame exact fits the screen.
                    // Need to specify the attribute from Editor.
                    return WindowType.BrowserWindow;
                  }

                  return WindowType.SubFrame;
                }
              }]);

              function ScreenAdapter() {
                var _this;

                _this = _EventTarget.call(this) || this; // TODO: need to access frame from 'pal/launcher' module

                _this.isFrameRotated = false;
                _this.handleResizeEvent = true;
                _this._gameFrame = void 0;
                _this._gameContainer = void 0;
                _this._gameCanvas = void 0;
                _this._isProportionalToFrame = false;
                _this._cachedFrameStyle = {
                  width: '0px',
                  height: '0px'
                };
                _this._cachedContainerStyle = {
                  width: '0px',
                  height: '0px'
                };
                _this._cbToUpdateFrameBuffer = void 0;
                _this._supportFullScreen = false;
                _this._touchEventName = void 0;
                _this._onFullscreenChange = void 0;
                _this._onFullscreenError = void 0;
                _this._orientationChangeTimeoutId = -1;
                _this._cachedFrameSize = new Size(0, 0);
                _this._exactFitScreen = false;
                _this._fn = {};
                _this._fnGroup = [['requestFullscreen', 'exitFullscreen', 'fullscreenchange', 'fullscreenEnabled', 'fullscreenElement', 'fullscreenerror'], ['requestFullScreen', 'exitFullScreen', 'fullScreenchange', 'fullScreenEnabled', 'fullScreenElement', 'fullscreenerror'], ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitIsFullScreen', 'webkitCurrentFullScreenElement', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozfullscreenchange', 'mozFullScreen', 'mozFullScreenElement', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'MSFullscreenChange', 'msFullscreenEnabled', 'msFullscreenElement', 'msfullscreenerror']];
                _this._resolutionScale = 1;
                _this._orientation = Orientation.AUTO;
                _this._gameFrame = document.getElementById('GameDiv');
                _this._gameContainer = document.getElementById('Cocos3dGameContainer');
                _this._gameCanvas = document.getElementById('GameCanvas'); // Compability with old preview or build template in Editor.

                if (!TEST && !EDITOR) {
                  if (!_this._gameFrame) {
                    var _this$_gameCanvas, _this$_gameCanvas$par;

                    _this._gameFrame = document.createElement('div');

                    _this._gameFrame.setAttribute('id', 'GameDiv');

                    (_this$_gameCanvas = _this._gameCanvas) === null || _this$_gameCanvas === void 0 ? void 0 : (_this$_gameCanvas$par = _this$_gameCanvas.parentNode) === null || _this$_gameCanvas$par === void 0 ? void 0 : _this$_gameCanvas$par.insertBefore(_this._gameFrame, _this._gameCanvas);

                    _this._gameFrame.appendChild(_this._gameCanvas);
                  }

                  if (!_this._gameContainer) {
                    var _this$_gameCanvas2, _this$_gameCanvas2$pa;

                    _this._gameContainer = document.createElement('div');

                    _this._gameContainer.setAttribute('id', 'Cocos3dGameContainer');

                    (_this$_gameCanvas2 = _this._gameCanvas) === null || _this$_gameCanvas2 === void 0 ? void 0 : (_this$_gameCanvas2$pa = _this$_gameCanvas2.parentNode) === null || _this$_gameCanvas2$pa === void 0 ? void 0 : _this$_gameCanvas2$pa.insertBefore(_this._gameContainer, _this._gameCanvas);

                    _this._gameContainer.appendChild(_this._gameCanvas);
                  }
                }

                var fnList;
                var fnGroup = _this._fnGroup;

                for (var i = 0; i < fnGroup.length; i++) {
                  fnList = fnGroup[i]; // detect event support

                  if (typeof document[fnList[1]] !== 'undefined') {
                    for (var _i = 0; _i < fnList.length; _i++) {
                      _this._fn[fnGroup[0][_i]] = fnList[_i];
                    }

                    break;
                  }
                }

                _this._supportFullScreen = _this._fn.requestFullscreen !== undefined;
                _this._touchEventName = 'ontouchstart' in window ? 'touchend' : 'mousedown';

                _this._registerEvent();

                return _this;
              }

              var _proto = ScreenAdapter.prototype;

              _proto.init = function init(options, cbToRebuildFrameBuffer) {
                this._cbToUpdateFrameBuffer = cbToRebuildFrameBuffer;
                this.orientation = orientationMap[options.configOrientation];
                this._exactFitScreen = options.exactFitScreen;

                this._resizeFrame();
              };

              _proto.requestFullScreen = function requestFullScreen() {
                var _this2 = this;

                return new Promise(function (resolve, reject) {
                  if (_this2.isFullScreen) {
                    resolve();
                    return;
                  }

                  _this2._cachedFrameSize = _this2.windowSize;

                  _this2._doRequestFullScreen().then(function () {
                    resolve();
                  })["catch"](function () {
                    var fullscreenTarget = _this2._getFullscreenTarget();

                    if (!fullscreenTarget) {
                      reject(new Error('Cannot access fullscreen target'));
                      return;
                    }

                    fullscreenTarget.addEventListener(_this2._touchEventName, function () {
                      _this2._doRequestFullScreen().then(function () {
                        resolve();
                      })["catch"](reject);
                    }, {
                      once: true,
                      capture: true
                    });
                  });
                });
              };

              _proto.exitFullScreen = function exitFullScreen() {
                var _this3 = this;

                return new Promise(function (resolve, reject) {
                  var requestPromise = document[_this3._fn.exitFullscreen]();

                  if (window.Promise && requestPromise instanceof Promise) {
                    requestPromise.then(function () {
                      _this3.windowSize = _this3._cachedFrameSize;
                      resolve();
                    })["catch"](reject);
                    return;
                  }

                  _this3.windowSize = _this3._cachedFrameSize;
                  resolve();
                });
              };

              _proto._registerEvent = function _registerEvent() {
                var _this4 = this;

                document.addEventListener(this._fn.fullscreenerror, function () {
                  var _this4$_onFullscreenE;

                  (_this4$_onFullscreenE = _this4._onFullscreenError) === null || _this4$_onFullscreenE === void 0 ? void 0 : _this4$_onFullscreenE.call(_this4);
                });
                window.addEventListener('resize', function () {
                  if (!_this4.handleResizeEvent) {
                    return;
                  }

                  _this4._resizeFrame();
                });

                if (typeof window.matchMedia === 'function') {
                  var updateDPRChangeListener = function updateDPRChangeListener() {
                    var _window$matchMedia, _window$matchMedia$ad;

                    var dpr = window.devicePixelRatio; // NOTE: some browsers especially on iPhone doesn't support MediaQueryList

                    (_window$matchMedia = window.matchMedia("(resolution: " + dpr + "dppx)")) === null || _window$matchMedia === void 0 ? void 0 : (_window$matchMedia$ad = _window$matchMedia.addEventListener) === null || _window$matchMedia$ad === void 0 ? void 0 : _window$matchMedia$ad.call(_window$matchMedia, 'change', function () {
                      _this4.emit('window-resize');

                      updateDPRChangeListener();
                    }, {
                      once: true
                    });
                  };

                  updateDPRChangeListener();
                }

                window.addEventListener('orientationchange', function () {
                  if (_this4._orientationChangeTimeoutId !== -1) {
                    clearTimeout(_this4._orientationChangeTimeoutId);
                  }

                  _this4._orientationChangeTimeoutId = setTimeout(function () {
                    if (!_this4.handleResizeEvent) {
                      return;
                    }

                    _this4._updateFrameState();

                    _this4._resizeFrame();

                    _this4.emit('orientation-change');

                    _this4._orientationChangeTimeoutId = -1;
                  }, EVENT_TIMEOUT);
                });
                document.addEventListener(this._fn.fullscreenchange, function () {
                  var _this4$_onFullscreenC;

                  (_this4$_onFullscreenC = _this4._onFullscreenChange) === null || _this4$_onFullscreenC === void 0 ? void 0 : _this4$_onFullscreenC.call(_this4);

                  _this4.emit('fullscreen-change');
                });
              };

              _proto._convertToSizeInCssPixels = function _convertToSizeInCssPixels(size) {
                var clonedSize = size.clone();
                var dpr = this.devicePixelRatio;
                clonedSize.width /= dpr;
                clonedSize.height /= dpr;
                return clonedSize;
              }
              /**
               * The frame size may be from screen size or an external editor options by setting screen.windowSize.
               * @param sizeInCssPixels you need to specify this size when the windowType is SubFrame.
               */
              ;

              _proto._resizeFrame = function _resizeFrame(sizeInCssPixels) {
                if (!this._gameFrame) {
                  return;
                } // Center align the canvas


                this._gameFrame.style.display = 'flex';
                this._gameFrame.style['justify-content'] = 'center';
                this._gameFrame.style['align-items'] = 'center';

                if (this._windowType === WindowType.SubFrame) {
                  if (!sizeInCssPixels) {
                    this._updateContainer();

                    return;
                  }

                  this._gameFrame.style.width = sizeInCssPixels.width + "px";
                  this._gameFrame.style.height = sizeInCssPixels.height + "px";
                } else {
                  var winWidth = window.innerWidth;
                  var winHeight = window.innerHeight;

                  if (this.isFrameRotated) {
                    this._gameFrame.style['-webkit-transform'] = 'rotate(90deg)';
                    this._gameFrame.style.transform = 'rotate(90deg)';
                    this._gameFrame.style['-webkit-transform-origin'] = '0px 0px 0px';
                    this._gameFrame.style.transformOrigin = '0px 0px 0px';
                    this._gameFrame.style.margin = "0 0 0 " + winWidth + "px";
                    this._gameFrame.style.width = winHeight + "px";
                    this._gameFrame.style.height = winWidth + "px";
                  } else {
                    this._gameFrame.style['-webkit-transform'] = 'rotate(0deg)';
                    this._gameFrame.style.transform = 'rotate(0deg)'; // TODO
                    // this._gameFrame.style['-webkit-transform-origin'] = '0px 0px 0px';
                    // this._gameFrame.style.transformOrigin = '0px 0px 0px';

                    this._gameFrame.style.margin = '0px auto';
                    this._gameFrame.style.width = winWidth + "px";
                    this._gameFrame.style.height = winHeight + "px";
                  }
                }

                this._updateContainer();
              };

              _proto._getFullscreenTarget = function _getFullscreenTarget() {
                var windowType = this._windowType;

                if (windowType === WindowType.Fullscreen) {
                  return document[this._fn.fullscreenElement];
                }

                if (windowType === WindowType.SubFrame) {
                  return this._gameFrame;
                } // On web mobile, the transform of game frame doesn't work when it's on fullscreen.
                // So we need to make the body fullscreen.


                return document.body;
              };

              _proto._doRequestFullScreen = function _doRequestFullScreen() {
                var _this5 = this;

                return new Promise(function (resolve, reject) {
                  if (!_this5._supportFullScreen) {
                    reject(new Error('fullscreen is not supported'));
                    return;
                  }

                  var fullscreenTarget = _this5._getFullscreenTarget();

                  if (!fullscreenTarget) {
                    reject(new Error('Cannot access fullscreen target'));
                    return;
                  }

                  _this5._onFullscreenChange = undefined;
                  _this5._onFullscreenError = undefined;

                  var requestPromise = fullscreenTarget[_this5._fn.requestFullscreen]();

                  if (window.Promise && requestPromise instanceof Promise) {
                    requestPromise.then(resolve)["catch"](reject);
                  } else {
                    _this5._onFullscreenChange = resolve;
                    _this5._onFullscreenError = reject;
                  }
                });
              };

              _proto._updateFrameState = function _updateFrameState() {
                var orientation = this.orientation;
                var width = window.innerWidth;
                var height = window.innerHeight;
                var isBrowserLandscape = width > height;
                this.isFrameRotated = systemInfo.isMobile && (isBrowserLandscape && orientation === Orientation.PORTRAIT || !isBrowserLandscape && orientation === Orientation.LANDSCAPE);
              };

              _proto._updateContainer = function _updateContainer() {
                if (!this._gameContainer) {
                  warnID(9201);
                  return;
                }

                if (this.isProportionalToFrame) {
                  if (!this._gameFrame) {
                    warnID(9201);
                    return;
                  } // TODO: access designedResolution from Launcher module.


                  var designedResolution = legacyCC.view.getDesignResolutionSize();
                  var frame = this._gameFrame;
                  var frameW = frame.clientWidth;
                  var frameH = frame.clientHeight;
                  var designW = designedResolution.width;
                  var designH = designedResolution.height;
                  var scaleX = frameW / designW;
                  var scaleY = frameH / designH;
                  var containerStyle = this._gameContainer.style;
                  var containerW;
                  var containerH;

                  if (scaleX < scaleY) {
                    containerW = frameW;
                    containerH = designH * scaleX;
                  } else {
                    containerW = designW * scaleY;
                    containerH = frameH;
                  } // Set window size on game container


                  containerStyle.width = containerW + "px";
                  containerStyle.height = containerH + "px";
                } else {
                  var _containerStyle = this._gameContainer.style; // game container exact fit game frame.

                  _containerStyle.width = '100%';
                  _containerStyle.height = '100%';
                } // Cache Test


                if (this._gameFrame && (this._cachedFrameStyle.width !== this._gameFrame.style.width || this._cachedFrameStyle.height !== this._gameFrame.style.height || this._cachedContainerStyle.width !== this._gameContainer.style.width || this._cachedContainerStyle.height !== this._gameContainer.style.height)) {
                  this.emit('window-resize'); // Update Cache

                  this._cachedFrameStyle.width = this._gameFrame.style.width;
                  this._cachedFrameStyle.height = this._gameFrame.style.height;
                  this._cachedContainerStyle.width = this._gameContainer.style.width;
                  this._cachedContainerStyle.height = this._gameContainer.style.height;
                }
              };

              return ScreenAdapter;
            }(EventTarget);

            var screenAdapter = exports('screenAdapter', new ScreenAdapter());

            /*
             Copyright (c) 2013-2016 Chukong Technologies Inc.
             Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

             http://www.cocos.com

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
             * @en
             * Base class of all kinds of events.
             *
             * @zh
             * 所有事件对象的基类，包含事件相关基本信息。
             */
            var Event = /*#__PURE__*/function () {
              // Event types

              /**
               * @en
               * Code for event without type.
               *
               * @zh
               * 没有类型的事件。
               */

              /**
               * @en
               * The type code of Touch event.
               *
               * @zh
               * 触摸事件类型。
               *
               * @deprecated since v3.3, please use SystemEvent.EventType.TOUCH_START, SystemEvent.EventType.TOUCH_MOVE, SystemEvent.EventType.TOUCH_END and SystemEvent.EventType.TOUCH_CANCEL instead
               */

              /**
               * @en
               * The type code of Mouse event.
               *
               * @zh
               * 鼠标事件类型。
               *
               * @deprecated since v3.3, please use SystemEvent.EventType.MOUSE_DOWN, SystemEvent.EventType.MOUSE_MOVE, SystemEvent.EventType.MOUSE_UP, SystemEvent.EventType.MOUSE_WHEEL, Node.EventType.MOUSE_ENTER and Node.EventType.MOUSE_LEAVE instead
               */

              /**
               * @en
               * The type code of Keyboard event.
               *
               * @zh
               * 键盘事件类型。
               *
               * @deprecated since v3.3, please use SystemEvent.EventType.KEY_DOWN and SystemEvent.EventType.KEY_UP instead
               */

              /**
               * @en
               * The type code of Acceleration event.
               *
               * @zh
               * 加速器事件类型。
               *
               * @deprecated since v3.3, please use SystemEvent.EventType.DEVICEMOTION instead
               */
              // Event phases

              /**
               * @en
               * Events not currently dispatched are in this phase.
               *
               * @zh
               * 尚未派发事件阶段。
               */

              /**
               * @en
               * The capturing phase comprises the journey from the root to the last node before the event target's node
               * [markdown](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
               *
               * @zh
               * 捕获阶段，包括事件目标节点之前从根节点到最后一个节点的过程。
               */

              /**
               * @en
               * The target phase comprises only the event target node
               * [markdown] (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
               *
               * @zh
               * 目标阶段仅包括事件目标节点。
               */

              /**
               * @en
               * The bubbling phase comprises any subsequent nodes encountered on the return trip to the root of the hierarchy
               * [markdown] (http://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
               *
               * @zh
               * 冒泡阶段， 包括回程遇到到层次根节点的任何后续节点。
               */

              /**
               * @en
               * The name of the event
               *
               * @zh
               * 事件类型。
               */

              /**
               * @en
               * Indicate whether the event bubbles up through the hierarchy or not.
               *
               * @zh
               * 表示该事件是否进行冒泡。
               */

              /**
               * @en
               * A reference to the target to which the event was originally dispatched.
               *
               * @zh
               * 最初事件触发的目标。
               */

              /**
               * @en
               * A reference to the currently registered target for the event.
               *
               * @zh
               * 当前目标。
               */

              /**
               * @en
               * Indicates which phase of the event flow is currently being evaluated.
               * Returns an integer value represented by 4 constants:
               *  - Event.NONE = 0
               *  - Event.CAPTURING_PHASE = 1
               *  - Event.AT_TARGET = 2
               *  - Event.BUBBLING_PHASE = 3
               * The phases are explained in the [section 3.1, Event dispatch and DOM event flow]
               * [markdown](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow), of the DOM Level 3 Events specification.
               *
               * @zh
               * 事件阶段。
               */

              /**
               * @en
               * Stops propagation for current event.
               *
               * @zh
               * 停止传递当前事件。
               */

              /**
               * @en
               * Stops propagation for current event immediately,
               * the event won't even be dispatched to the listeners attached in the current target.
               *
               * @zh
               * 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
               */

              /**
               * @param type - The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
               * @param bubbles - A boolean indicating whether the event bubbles up through the tree or not
               */
              function Event(type, bubbles) {
                this.type = void 0;
                this.bubbles = void 0;
                this.target = null;
                this.currentTarget = null;
                this.eventPhase = 0;
                this.propagationStopped = false;
                this.propagationImmediateStopped = false;
                this.type = type;
                this.bubbles = !!bubbles;
              }
              /**
               * @en
               * Reset the event for being stored in the object pool.
               *
               * @zh
               * 重置事件对象以便在对象池中存储。
               */


              var _proto = Event.prototype;

              _proto.unuse = function unuse() {
                this.type = Event.NO_TYPE;
                this.target = null;
                this.currentTarget = null;
                this.eventPhase = Event.NONE;
                this.propagationStopped = false;
                this.propagationImmediateStopped = false;
              }
              /**
               * @en
               * Reinitialize the event for being used again after retrieved from the object pool.
               * @zh
               * 重新初始化让对象池中取出的事件可再次使用。
               * @param type - The name of the event (case-sensitive), e.g. "click", "fire", or "submit"
               * @param bubbles - A boolean indicating whether the event bubbles up through the tree or not
               */
              ;

              _proto.reuse = function reuse(type, bubbles) {
                this.type = type;
                this.bubbles = bubbles || false;
              } // /**
              //  * @en Stops propagation for current event.
              //  * @zh 停止传递当前事件。
              //  */
              // public stopPropagation () {
              //     this.propagationStopped = true;
              // }
              // /**
              //  * @en Stops propagation for current event immediately,
              //  * the event won't even be dispatched to the listeners attached in the current target.
              //  * @zh 立即停止当前事件的传递，事件甚至不会被分派到所连接的当前目标。
              //  */
              // public stopPropagationImmediate () {
              //     this.propagationImmediateStopped = true;
              // }

              /**
               * @en
               * Checks whether the event has been stopped.
               *
               * @zh
               * 检查该事件是否已经停止传递。
               */
              ;

              _proto.isStopped = function isStopped() {
                return this.propagationStopped || this.propagationImmediateStopped;
              }
              /**
               * @en
               * Gets current target of the event                                                            <br/>
               * note: It only be available when the event listener is associated with node.                <br/>
               * It returns 0 when the listener is associated with fixed priority.
               * @zh
               * 获取当前目标节点
               * @returns - The target with which the event associates.
               */
              ;

              _proto.getCurrentTarget = function getCurrentTarget() {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-return
                return this.currentTarget;
              }
              /**
               * @en
               * Gets the event type.
               * @zh
               * 获取事件类型。
               */
              ;

              _proto.getType = function getType() {
                return this.type;
              };

              return Event;
            }();
            /* tslint:disable:no-string-literal */

            Event.NO_TYPE = 'no_type';
            Event.TOUCH = 'touch';
            Event.MOUSE = 'mouse';
            Event.KEYBOARD = 'keyboard';
            Event.ACCELERATION = 'acceleration';
            Event.NONE = 0;
            Event.CAPTURING_PHASE = 1;
            Event.AT_TARGET = 2;
            Event.BUBBLING_PHASE = 3;
            legacyCC.Event = Event;

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
             * @en The event type supported by SystemEvent and Node events
             * @zh SystemEvent 支持的事件类型以及节点事件类型
             *
             * @deprecated since v3.3, please use SystemEvent.EventType instead
             */
            var SystemEventType;
            /**
             * @en The input event type
             * @zh 输入事件类型
             */

            (function (SystemEventType) {
              SystemEventType["TOUCH_START"] = "touch-start";
              SystemEventType["TOUCH_MOVE"] = "touch-move";
              SystemEventType["TOUCH_END"] = "touch-end";
              SystemEventType["TOUCH_CANCEL"] = "touch-cancel";
              SystemEventType["MOUSE_DOWN"] = "mouse-down";
              SystemEventType["MOUSE_MOVE"] = "mouse-move";
              SystemEventType["MOUSE_UP"] = "mouse-up";
              SystemEventType["MOUSE_WHEEL"] = "mouse-wheel";
              SystemEventType["MOUSE_ENTER"] = "mouse-enter";
              SystemEventType["MOUSE_LEAVE"] = "mouse-leave";
              SystemEventType["KEY_DOWN"] = "keydown";
              SystemEventType["KEY_UP"] = "keyup";
              SystemEventType["DEVICEMOTION"] = "devicemotion";
              SystemEventType["TRANSFORM_CHANGED"] = "transform-changed";
              SystemEventType["SCENE_CHANGED_FOR_PERSISTS"] = "scene-changed-for-persists";
              SystemEventType["SIZE_CHANGED"] = "size-changed";
              SystemEventType["ANCHOR_CHANGED"] = "anchor-changed";
              SystemEventType["COLOR_CHANGED"] = "color-changed";
              SystemEventType["CHILD_ADDED"] = "child-added";
              SystemEventType["CHILD_REMOVED"] = "child-removed";
              SystemEventType["PARENT_CHANGED"] = "parent-changed";
              SystemEventType["NODE_DESTROYED"] = "node-destroyed";
              SystemEventType["LAYER_CHANGED"] = "layer-changed";
              SystemEventType["SIBLING_ORDER_CHANGED"] = "sibling-order-changed";
            })(SystemEventType || (SystemEventType = {}));

            var InputEventType;

            (function (InputEventType) {
              InputEventType["TOUCH_START"] = "touch-start";
              InputEventType["TOUCH_MOVE"] = "touch-move";
              InputEventType["TOUCH_END"] = "touch-end";
              InputEventType["TOUCH_CANCEL"] = "touch-cancel";
              InputEventType["MOUSE_DOWN"] = "mouse-down";
              InputEventType["MOUSE_MOVE"] = "mouse-move";
              InputEventType["MOUSE_UP"] = "mouse-up";
              InputEventType["MOUSE_WHEEL"] = "mouse-wheel";
              InputEventType["KEY_DOWN"] = "keydown";
              InputEventType["KEY_PRESSING"] = "key-pressing";
              InputEventType["KEY_UP"] = "keyup";
              InputEventType["DEVICEMOTION"] = "devicemotion";
            })(InputEventType || (InputEventType = {}));

            legacyCC.SystemEventType = SystemEventType;

            /**
             * @en
             * The acceleration event.
             * @zh
             * 加速计事件。
             */

            var EventAcceleration = /*#__PURE__*/function (_Event) {
              _inheritsLoose(EventAcceleration, _Event);

              /**
               * @en The acceleration object
               * @zh 加速度对象
               */

              /**
               * @param acc - The acceleration
               * @param bubbles - Indicate whether the event bubbles up through the hierarchy or not.
               */
              function EventAcceleration(acc, bubbles) {
                var _this;

                _this = _Event.call(this, SystemEventType.DEVICEMOTION, bubbles) || this;
                _this.acc = void 0;
                _this.acc = acc;
                return _this;
              }

              return EventAcceleration;
            }(Event); // @ts-expect-error TODO

            Event.EventAcceleration = EventAcceleration;

            /**
             * @en
             * The keyboard event.
             * @zh
             * 键盘事件。
             */
            var EventKeyboard = /*#__PURE__*/function (_Event) {
              _inheritsLoose(EventKeyboard, _Event);

              _createClass(EventKeyboard, [{
                key: "isPressed",

                /**
                 * @en The KeyCode enum value of current keyboard event.
                 * @zh 当前键盘事件的 KeyCode 枚举值
                 */

                /**
                 * @en Raw DOM KeyboardEvent.
                 * @zh 原始 DOM KeyboardEvent 事件对象
                 *
                 * @deprecated since v3.3, can't access rawEvent anymore
                 */

                /**
                 * @en Indicates whether the current key is being pressed
                 * @zh 表示当前按键是否正在被按下
                 */
                get: function get() {
                  return this._isPressed;
                }
                /**
                 * @param keyCode - The key code of the current key or the DOM KeyboardEvent
                 * @param isPressed - Indicates whether the current key is being pressed, this is the DEPRECATED parameter.
                 * @param bubbles - Indicates whether the event bubbles up through the hierarchy or not.
                 */

              }]);

              function EventKeyboard(keyCode, eventType, bubbles) {
                var _this;

                if (typeof eventType === 'boolean') {
                  var _isPressed = eventType;
                  eventType = _isPressed ? SystemEventType.KEY_DOWN : SystemEventType.KEY_UP;
                }

                _this = _Event.call(this, eventType, bubbles) || this;
                _this.keyCode = void 0;
                _this.rawEvent = void 0;
                _this._isPressed = void 0;
                _this._isPressed = eventType !== SystemEventType.KEY_UP;

                if (typeof keyCode === 'number') {
                  _this.keyCode = keyCode;
                } else {
                  _this.keyCode = keyCode.keyCode;
                  _this.rawEvent = keyCode;
                }

                return _this;
              }

              return EventKeyboard;
            }(Event); // @ts-expect-error TODO

            Event.EventKeyboard = EventKeyboard;

            /**
             * @en The mouse event
             * @zh 鼠标事件类型
             */
            var EventMouse = /*#__PURE__*/function (_Event) {
              _inheritsLoose(EventMouse, _Event);

              _createClass(EventMouse, [{
                key: "eventType",

                /**
                 * @en The default tag when no button is pressed
                 * @zh 按键默认的缺省状态
                 */

                /**
                 * @en The tag of mouse's left button.
                 * @zh 鼠标左键的标签。
                 */

                /**
                 * @en The tag of mouse's right button  (The right button number is 2 on browser).
                 * @zh 鼠标右键的标签。
                 */

                /**
                 * @en The tag of mouse's middle button.
                 * @zh 鼠标中键的标签。
                 */

                /**
                 * @en The tag of mouse's button 4.
                 * @zh 鼠标按键 4 的标签。
                 */

                /**
                 * @en The tag of mouse's button 5.
                 * @zh 鼠标按键 5 的标签。
                 */

                /**
                 * @en The tag of mouse's button 6.
                 * @zh 鼠标按键 6 的标签。
                 */

                /**
                 * @en The tag of mouse's button 7.
                 * @zh 鼠标按键 7 的标签。
                 */

                /**
                 * @en The tag of mouse's button 8.
                 * @zh 鼠标按键 8 的标签。
                 */

                /**
                 * @en Mouse movement on x axis of the UI coordinate system.
                 * @zh 鼠标在 UI 坐标系下 X 轴上的移动距离
                 */

                /**
                 * @en Mouse movement on y axis of the UI coordinate system.
                 * @zh 鼠标在 UI 坐标系下 Y 轴上的移动距离
                 */

                /**
                 * @en Set whether to prevent events from being swallowed by nodes, which is false by default.
                 * If set to true, the event is allowed to be dispatched to nodes at the bottom layer.
                 * NOTE: Setting to true will reduce the efficiency of event dispatching.
                 *
                 * @zh 设置是否阻止事件被节点吞噬, 默认为 false 。
                 * 如果设置为 true，则事件允许派发给渲染在下一层级的节点。
                 * 注意：设置为 true 会降低事件派发的效率。
                 *
                 * @experimental May be optimized in the future.
                 */

                /**
                 * @en The type of the event
                 * @zh 鼠标事件类型
                 *
                 * @deprecated since v3.3, please use EventMouse.prototype.type instead.
                 */
                get: function get() {
                  return this._eventType;
                }
              }]);

              /**
               * @param eventType - The type of the event
               * @param bubbles - Indicate whether the event bubbles up through the hierarchy or not.
               */
              function EventMouse(eventType, bubbles, prevLoc) {
                var _this;

                _this = _Event.call(this, eventType, bubbles) || this;
                _this.movementX = 0;
                _this.movementY = 0;
                _this.preventSwallow = false;
                _this._eventType = void 0;
                _this._button = EventMouse.BUTTON_MISSING;
                _this._x = 0;
                _this._y = 0;
                _this._prevX = 0;
                _this._prevY = 0;
                _this._scrollX = 0;
                _this._scrollY = 0;
                _this._eventType = eventType;

                if (prevLoc) {
                  _this._prevX = prevLoc.x;
                  _this._prevY = prevLoc.y;
                }

                return _this;
              }
              /**
               * @en Sets scroll data of the mouse.
               * @zh 设置鼠标滚轮的滚动数据。
               * @param scrollX - The scroll value on x axis
               * @param scrollY - The scroll value on y axis
               */


              var _proto = EventMouse.prototype;

              _proto.setScrollData = function setScrollData(scrollX, scrollY) {
                this._scrollX = scrollX;
                this._scrollY = scrollY;
              }
              /**
               * @en Returns the scroll value on x axis.
               * @zh 获取鼠标滚动的 X 轴距离，只有滚动时才有效。
               */
              ;

              _proto.getScrollX = function getScrollX() {
                return this._scrollX;
              }
              /**
               * @en Returns the scroll value on y axis.
               * @zh 获取滚轮滚动的 Y 轴距离，只有滚动时才有效。
               */
              ;

              _proto.getScrollY = function getScrollY() {
                return this._scrollY;
              }
              /**
               * @en Sets cursor location.
               * @zh 设置当前鼠标位置。
               * @param x - The location on x axis
               * @param y - The location on y axis
               */
              ;

              _proto.setLocation = function setLocation(x, y) {
                this._x = x;
                this._y = y;
              }
              /**
               * @en Returns cursor location.
               * @zh 获取鼠标相对于左下角位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getLocation = function getLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._x, this._y);
                return out;
              }
              /**
               * @en Returns the current cursor location in game view coordinates.
               * @zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getLocationInView = function getLocationInView(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._x, legacyCC.view._designResolutionSize.height - this._y);
                return out;
              }
              /**
               * @en Returns the current cursor location in ui coordinates.
               * @zh 获取当前事件在 UI 窗口内的坐标位置，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUILocation = function getUILocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._x, this._y);

                legacyCC.view._convertToUISpace(out);

                return out;
              }
              /**
               * @en Returns the previous touch location.
               * @zh 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getPreviousLocation = function getPreviousLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._prevX, this._prevY);
                return out;
              }
              /**
               * @en Returns the previous touch location.
               * @zh 获取鼠标点击在上一次事件时的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUIPreviousLocation = function getUIPreviousLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._prevX, this._prevY);

                legacyCC.view._convertToUISpace(out);

                return out;
              }
              /**
               * @en Returns the delta distance from the previous location to current location.
               * @zh 获取鼠标距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getDelta = function getDelta(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, this._x - this._prevX, this._y - this._prevY);
                return out;
              }
              /**
               * @en Returns the X axis delta distance from the previous location to current location.
               * @zh 获取鼠标距离上一次事件移动的 X 轴距离。
               */
              ;

              _proto.getDeltaX = function getDeltaX() {
                return this._x - this._prevX;
              }
              /**
               * @en Returns the Y axis delta distance from the previous location to current location.
               * @zh 获取鼠标距离上一次事件移动的 Y 轴距离。
               */
              ;

              _proto.getDeltaY = function getDeltaY() {
                return this._y - this._prevY;
              }
              /**
               * @en Returns the delta distance from the previous location to current location in the UI coordinates.
               * @zh 获取鼠标距离上一次事件移动在 UI 坐标系下的距离对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUIDelta = function getUIDelta(out) {
                if (!out) {
                  out = new Vec2();
                }

                Vec2.set(out, (this._x - this._prevX) / legacyCC.view.getScaleX(), (this._y - this._prevY) / legacyCC.view.getScaleY());
                return out;
              }
              /**
               * @en Returns the X axis delta distance from the previous location to current location in the UI coordinates.
               * @zh 获取鼠标距离上一次事件移动在 UI 坐标系下的 X 轴距离。
               */
              ;

              _proto.getUIDeltaX = function getUIDeltaX() {
                return (this._x - this._prevX) / legacyCC.view.getScaleX();
              }
              /**
               * @en Returns the Y axis delta distance from the previous location to current location in the UI coordinates.
               * @zh 获取鼠标距离上一次事件移动在 UI 坐标系下的 Y 轴距离。
               */
              ;

              _proto.getUIDeltaY = function getUIDeltaY() {
                return (this._y - this._prevY) / legacyCC.view.getScaleY();
              }
              /**
               * @en Sets mouse button code.
               * @zh 设置鼠标按键。
               * @param button - The button code
               */
              ;

              _proto.setButton = function setButton(button) {
                this._button = button;
              }
              /**
               * @en Returns mouse button code.
               * @zh 获取鼠标按键。
               */
              ;

              _proto.getButton = function getButton() {
                return this._button;
              }
              /**
               * @en Returns location data on X axis.
               * @zh 获取鼠标当前 X 轴位置。
               */
              ;

              _proto.getLocationX = function getLocationX() {
                return this._x;
              }
              /**
               * @en Returns location data on Y axis.
               * @zh 获取鼠标当前 Y 轴位置。
               */
              ;

              _proto.getLocationY = function getLocationY() {
                return this._y;
              }
              /**
               * @en Returns location data on X axis.
               * @zh 获取鼠标当前 X 轴位置。
               */
              ;

              _proto.getUILocationX = function getUILocationX() {
                var viewport = legacyCC.view.getViewportRect();
                return (this._x - viewport.x) / legacyCC.view.getScaleX();
              }
              /**
               * @en Returns location data on Y axis.
               * @zh 获取鼠标当前 Y 轴位置。
               */
              ;

              _proto.getUILocationY = function getUILocationY() {
                var viewport = legacyCC.view.getViewportRect();
                return (this._y - viewport.y) / legacyCC.view.getScaleY();
              };

              return EventMouse;
            }(Event); // @ts-expect-error TODO

            EventMouse.BUTTON_MISSING = -1;
            EventMouse.BUTTON_LEFT = 0;
            EventMouse.BUTTON_RIGHT = 2;
            EventMouse.BUTTON_MIDDLE = 1;
            EventMouse.BUTTON_4 = 3;
            EventMouse.BUTTON_5 = 4;
            EventMouse.BUTTON_6 = 5;
            EventMouse.BUTTON_7 = 6;
            EventMouse.BUTTON_8 = 7;
            Event.EventMouse = EventMouse;

            var _vec2 = new Vec2();
            /**
             * @en
             * The touch event.
             *
             * @zh
             * 触摸事件。
             */


            var EventTouch = /*#__PURE__*/function (_Event) {
              _inheritsLoose(EventTouch, _Event);

              /**
               * @en The maximum touch point numbers simultaneously
               * @zh 同时存在的最大触点数量。
               */

              /**
               * @en The current touch object
               * @zh 当前触点对象
               */

              /**
               * @en Indicate whether the touch event is simulated or real
               * @zh 表示触摸事件是真实触点触发的还是模拟的
               */

              /**
               * @en Set whether to prevent events from being swallowed by nodes, which is false by default.
               * If set to true, the event is allowed to be dispatched to nodes at the bottom layer.
               * NOTE: Setting to true will reduce the efficiency of event dispatching.
               *
               * @zh 设置是否阻止事件被节点吞噬, 默认为 false 。
               * 如果设置为 true，则事件允许派发给渲染在下一层级的节点。
               * 注意：设置为 true 会降低事件派发的效率。
               *
               * @experimental May be optimized in the future.
               */
              // deprecated since v3.3

              /**
               * @param touches - An array of current touches
               * @param bubbles - Indicate whether the event bubbles up through the hierarchy or not.
               * @param eventType - The type of the event
               */
              function EventTouch(changedTouches, bubbles, eventType, touches) {
                var _this;

                if (touches === void 0) {
                  touches = [];
                }

                _this = _Event.call(this, eventType, bubbles) || this;
                _this.touch = null;
                _this.simulate = false;
                _this.preventSwallow = false;
                _this._eventCode = void 0;
                _this._touches = void 0;
                _this._allTouches = void 0;
                _this._eventCode = eventType;
                _this._touches = changedTouches || [];
                _this._allTouches = touches;
                return _this;
              }
              /**
               * @en Returns event type code.
               * @zh 获取触摸事件类型。
               *
               * @deprecated since v3.3, please use EventTouch.prototype.type instead.
               */


              var _proto = EventTouch.prototype;

              _proto.getEventCode = function getEventCode() {
                return this._eventCode;
              }
              /**
               * @en Returns touches of event.
               * @zh 获取有变动的触摸点的列表。
               * 注意：第一根手指按下不动，接着按第二根手指，这时候触点信息就只有变动的这根手指（第二根手指）的信息。
               * 如果需要获取全部手指的信息，请使用 `getAllTouches`。
               */
              ;

              _proto.getTouches = function getTouches() {
                return this._touches;
              }
              /**
               * @en Returns touches of event.
               * @zh 获取所有触摸点的列表。
               * 注意：如果手指行为是 touch end，这个时候列表是没有该手指信息的。如需知道该手指信息，可通过 `getTouches` 获取识别。
               */
              ;

              _proto.getAllTouches = function getAllTouches() {
                return this._allTouches;
              }
              /**
               * @en Sets touch location.
               * @zh 设置当前触点位置
               * @param x - The current touch location on the x axis
               * @param y - The current touch location on the y axis
               */
              ;

              _proto.setLocation = function setLocation(x, y) {
                if (this.touch) {
                  this.touch.setTouchInfo(this.touch.getID(), x, y);
                }
              }
              /**
               * @en Returns the current touch location.
               * @zh 获取触点位置。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getLocation = function getLocation(out) {
                return this.touch ? this.touch.getLocation(out) : new Vec2();
              }
              /**
               * @en Returns the current touch location in UI coordinates.
               * @zh 获取 UI 坐标系下的触点位置。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUILocation = function getUILocation(out) {
                return this.touch ? this.touch.getUILocation(out) : new Vec2();
              }
              /**
               * @en Returns the current touch location in game screen coordinates.
               * @zh 获取当前触点在游戏窗口中的位置。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getLocationInView = function getLocationInView(out) {
                return this.touch ? this.touch.getLocationInView(out) : new Vec2();
              }
              /**
               * @en Returns the previous touch location.
               * @zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getPreviousLocation = function getPreviousLocation(out) {
                return this.touch ? this.touch.getPreviousLocation(out) : new Vec2();
              }
              /**
               * @en Returns the start touch location.
               * @zh 获取触点落下时的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getStartLocation = function getStartLocation(out) {
                return this.touch ? this.touch.getStartLocation(out) : new Vec2();
              }
              /**
               * @en Returns the start touch location in UI coordinates.
               * @zh 获取触点落下时的 UI 世界下位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUIStartLocation = function getUIStartLocation(out) {
                return this.touch ? this.touch.getUIStartLocation(out) : new Vec2();
              }
              /**
               * @en Returns the id of the current touch point.
               * @zh 获取触点的标识 ID，可以用来在多点触摸中跟踪触点。
               */
              ;

              _proto.getID = function getID() {
                return this.touch ? this.touch.getID() : null;
              }
              /**
               * @en Returns the delta distance from the previous location to current location.
               * @zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getDelta = function getDelta(out) {
                return this.touch ? this.touch.getDelta(out) : new Vec2();
              }
              /**
               * @en Returns the delta distance from the previous location to current location.
               * @zh 获取触点距离上一次事件 UI 世界下移动的距离对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
              */
              ;

              _proto.getUIDelta = function getUIDelta(out) {
                return this.touch ? this.touch.getUIDelta(out) : new Vec2();
              }
              /**
               * @en Returns the X axis delta distance from the previous location to current location.
               * @zh 获取触点距离上一次事件移动的 x 轴距离。
               */
              ;

              _proto.getDeltaX = function getDeltaX() {
                return this.touch ? this.touch.getDelta(_vec2).x : 0;
              }
              /**
               * @en Returns the Y axis delta distance from the previous location to current location.
               * @zh 获取触点距离上一次事件移动的 y 轴距离。
               */
              ;

              _proto.getDeltaY = function getDeltaY() {
                return this.touch ? this.touch.getDelta(_vec2).y : 0;
              }
              /**
               * @en Returns location X axis data.
               * @zh 获取当前触点 X 轴位置。
               */
              ;

              _proto.getLocationX = function getLocationX() {
                return this.touch ? this.touch.getLocationX() : 0;
              }
              /**
               * @en Returns location Y axis data.
               * @zh 获取当前触点 Y 轴位置。
               */
              ;

              _proto.getLocationY = function getLocationY() {
                return this.touch ? this.touch.getLocationY() : 0;
              };

              return EventTouch;
            }(Event); // @ts-expect-error TODO

            EventTouch.MAX_TOUCHES = 5;
            Event.EventTouch = EventTouch;

            /**
             * @en the device accelerometer reports values for each axis in units of g-force.
             * @zh 设备重力传感器传递的各个轴的数据。
             */
            var Acceleration = function Acceleration(x, y, z, timestamp) {
              if (x === void 0) {
                x = 0;
              }

              if (y === void 0) {
                y = 0;
              }

              if (z === void 0) {
                z = 0;
              }

              if (timestamp === void 0) {
                timestamp = 0;
              }

              this.x = void 0;
              this.y = void 0;
              this.z = void 0;
              this.timestamp = void 0;
              this.x = x;
              this.y = y;
              this.z = z;
              this.timestamp = timestamp;
            };

            /**
             * @en Enum type of keyCode for key event
             * @zh 按键事件的按键码
             */
            var KeyCode;

            (function (KeyCode) {
              KeyCode[KeyCode["NONE"] = 0] = "NONE";
              KeyCode[KeyCode["MOBILE_BACK"] = 6] = "MOBILE_BACK";
              KeyCode[KeyCode["BACKSPACE"] = 8] = "BACKSPACE";
              KeyCode[KeyCode["TAB"] = 9] = "TAB";
              KeyCode[KeyCode["ENTER"] = 13] = "ENTER";
              KeyCode[KeyCode["SHIFT_LEFT"] = 16] = "SHIFT_LEFT";
              KeyCode[KeyCode["CTRL_LEFT"] = 17] = "CTRL_LEFT";
              KeyCode[KeyCode["ALT_LEFT"] = 18] = "ALT_LEFT";
              KeyCode[KeyCode["PAUSE"] = 19] = "PAUSE";
              KeyCode[KeyCode["CAPS_LOCK"] = 20] = "CAPS_LOCK";
              KeyCode[KeyCode["ESCAPE"] = 27] = "ESCAPE";
              KeyCode[KeyCode["SPACE"] = 32] = "SPACE";
              KeyCode[KeyCode["PAGE_UP"] = 33] = "PAGE_UP";
              KeyCode[KeyCode["PAGE_DOWN"] = 34] = "PAGE_DOWN";
              KeyCode[KeyCode["END"] = 35] = "END";
              KeyCode[KeyCode["HOME"] = 36] = "HOME";
              KeyCode[KeyCode["ARROW_LEFT"] = 37] = "ARROW_LEFT";
              KeyCode[KeyCode["ARROW_UP"] = 38] = "ARROW_UP";
              KeyCode[KeyCode["ARROW_RIGHT"] = 39] = "ARROW_RIGHT";
              KeyCode[KeyCode["ARROW_DOWN"] = 40] = "ARROW_DOWN";
              KeyCode[KeyCode["INSERT"] = 45] = "INSERT";
              KeyCode[KeyCode["DELETE"] = 46] = "DELETE";
              KeyCode[KeyCode["DIGIT_0"] = 48] = "DIGIT_0";
              KeyCode[KeyCode["DIGIT_1"] = 49] = "DIGIT_1";
              KeyCode[KeyCode["DIGIT_2"] = 50] = "DIGIT_2";
              KeyCode[KeyCode["DIGIT_3"] = 51] = "DIGIT_3";
              KeyCode[KeyCode["DIGIT_4"] = 52] = "DIGIT_4";
              KeyCode[KeyCode["DIGIT_5"] = 53] = "DIGIT_5";
              KeyCode[KeyCode["DIGIT_6"] = 54] = "DIGIT_6";
              KeyCode[KeyCode["DIGIT_7"] = 55] = "DIGIT_7";
              KeyCode[KeyCode["DIGIT_8"] = 56] = "DIGIT_8";
              KeyCode[KeyCode["DIGIT_9"] = 57] = "DIGIT_9";
              KeyCode[KeyCode["KEY_A"] = 65] = "KEY_A";
              KeyCode[KeyCode["KEY_B"] = 66] = "KEY_B";
              KeyCode[KeyCode["KEY_C"] = 67] = "KEY_C";
              KeyCode[KeyCode["KEY_D"] = 68] = "KEY_D";
              KeyCode[KeyCode["KEY_E"] = 69] = "KEY_E";
              KeyCode[KeyCode["KEY_F"] = 70] = "KEY_F";
              KeyCode[KeyCode["KEY_G"] = 71] = "KEY_G";
              KeyCode[KeyCode["KEY_H"] = 72] = "KEY_H";
              KeyCode[KeyCode["KEY_I"] = 73] = "KEY_I";
              KeyCode[KeyCode["KEY_J"] = 74] = "KEY_J";
              KeyCode[KeyCode["KEY_K"] = 75] = "KEY_K";
              KeyCode[KeyCode["KEY_L"] = 76] = "KEY_L";
              KeyCode[KeyCode["KEY_M"] = 77] = "KEY_M";
              KeyCode[KeyCode["KEY_N"] = 78] = "KEY_N";
              KeyCode[KeyCode["KEY_O"] = 79] = "KEY_O";
              KeyCode[KeyCode["KEY_P"] = 80] = "KEY_P";
              KeyCode[KeyCode["KEY_Q"] = 81] = "KEY_Q";
              KeyCode[KeyCode["KEY_R"] = 82] = "KEY_R";
              KeyCode[KeyCode["KEY_S"] = 83] = "KEY_S";
              KeyCode[KeyCode["KEY_T"] = 84] = "KEY_T";
              KeyCode[KeyCode["KEY_U"] = 85] = "KEY_U";
              KeyCode[KeyCode["KEY_V"] = 86] = "KEY_V";
              KeyCode[KeyCode["KEY_W"] = 87] = "KEY_W";
              KeyCode[KeyCode["KEY_X"] = 88] = "KEY_X";
              KeyCode[KeyCode["KEY_Y"] = 89] = "KEY_Y";
              KeyCode[KeyCode["KEY_Z"] = 90] = "KEY_Z";
              KeyCode[KeyCode["NUM_0"] = 96] = "NUM_0";
              KeyCode[KeyCode["NUM_1"] = 97] = "NUM_1";
              KeyCode[KeyCode["NUM_2"] = 98] = "NUM_2";
              KeyCode[KeyCode["NUM_3"] = 99] = "NUM_3";
              KeyCode[KeyCode["NUM_4"] = 100] = "NUM_4";
              KeyCode[KeyCode["NUM_5"] = 101] = "NUM_5";
              KeyCode[KeyCode["NUM_6"] = 102] = "NUM_6";
              KeyCode[KeyCode["NUM_7"] = 103] = "NUM_7";
              KeyCode[KeyCode["NUM_8"] = 104] = "NUM_8";
              KeyCode[KeyCode["NUM_9"] = 105] = "NUM_9";
              KeyCode[KeyCode["NUM_MULTIPLY"] = 106] = "NUM_MULTIPLY";
              KeyCode[KeyCode["NUM_PLUS"] = 107] = "NUM_PLUS";
              KeyCode[KeyCode["NUM_SUBTRACT"] = 109] = "NUM_SUBTRACT";
              KeyCode[KeyCode["NUM_DECIMAL"] = 110] = "NUM_DECIMAL";
              KeyCode[KeyCode["NUM_DIVIDE"] = 111] = "NUM_DIVIDE";
              KeyCode[KeyCode["F1"] = 112] = "F1";
              KeyCode[KeyCode["F2"] = 113] = "F2";
              KeyCode[KeyCode["F3"] = 114] = "F3";
              KeyCode[KeyCode["F4"] = 115] = "F4";
              KeyCode[KeyCode["F5"] = 116] = "F5";
              KeyCode[KeyCode["F6"] = 117] = "F6";
              KeyCode[KeyCode["F7"] = 118] = "F7";
              KeyCode[KeyCode["F8"] = 119] = "F8";
              KeyCode[KeyCode["F9"] = 120] = "F9";
              KeyCode[KeyCode["F10"] = 121] = "F10";
              KeyCode[KeyCode["F11"] = 122] = "F11";
              KeyCode[KeyCode["F12"] = 123] = "F12";
              KeyCode[KeyCode["NUM_LOCK"] = 144] = "NUM_LOCK";
              KeyCode[KeyCode["SCROLL_LOCK"] = 145] = "SCROLL_LOCK";
              KeyCode[KeyCode["SEMICOLON"] = 186] = "SEMICOLON";
              KeyCode[KeyCode["EQUAL"] = 187] = "EQUAL";
              KeyCode[KeyCode["COMMA"] = 188] = "COMMA";
              KeyCode[KeyCode["DASH"] = 189] = "DASH";
              KeyCode[KeyCode["PERIOD"] = 190] = "PERIOD";
              KeyCode[KeyCode["SLASH"] = 191] = "SLASH";
              KeyCode[KeyCode["BACK_QUOTE"] = 192] = "BACK_QUOTE";
              KeyCode[KeyCode["BRACKET_LEFT"] = 219] = "BRACKET_LEFT";
              KeyCode[KeyCode["BACKSLASH"] = 220] = "BACKSLASH";
              KeyCode[KeyCode["BRACKET_RIGHT"] = 221] = "BRACKET_RIGHT";
              KeyCode[KeyCode["QUOTE"] = 222] = "QUOTE";
              KeyCode[KeyCode["SHIFT_RIGHT"] = 2000] = "SHIFT_RIGHT";
              KeyCode[KeyCode["CTRL_RIGHT"] = 2001] = "CTRL_RIGHT";
              KeyCode[KeyCode["ALT_RIGHT"] = 2002] = "ALT_RIGHT";
              KeyCode[KeyCode["NUM_ENTER"] = 2003] = "NUM_ENTER";
            })(KeyCode || (KeyCode = {}));

            var _vec2$1 = new Vec2();
            /**
             * @en The touch point class
             * @zh 封装了触点相关的信息。
             */


            var Touch = /*#__PURE__*/function () {
              _createClass(Touch, [{
                key: "lastModified",
                get: function get() {
                  return this._lastModified;
                }
                /**
                 * @param x - x position of the touch point
                 * @param y - y position of the touch point
                 * @param id - The id of the touch point
                 */

              }]);

              function Touch(x, y, id) {
                if (id === void 0) {
                  id = 0;
                }

                this._point = new Vec2();
                this._prevPoint = new Vec2();
                this._lastModified = 0;
                this._id = 0;
                this._startPoint = new Vec2();
                this._startPointCaptured = false;
                this.setTouchInfo(id, x, y);
              }
              /**
               * @en Returns the current touch location in OpenGL coordinates.、
               * @zh 获取当前触点位置。
               * @param out - Pass the out object to avoid object creation, very good practice
               */


              var _proto = Touch.prototype;

              _proto.getLocation = function getLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._point.x, this._point.y);
                return out;
              }
              /**
               * @en Returns X axis location value.
               * @zh 获取当前触点 X 轴位置。
               */
              ;

              _proto.getLocationX = function getLocationX() {
                return this._point.x;
              }
              /**
               * @en Returns Y axis location value.
               * @zh 获取当前触点 Y 轴位置。
               */
              ;

              _proto.getLocationY = function getLocationY() {
                return this._point.y;
              }
              /**
               * @en Returns the current touch location in UI coordinates.、
               * @zh 获取当前触点在 UI 坐标系中的位置。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUILocation = function getUILocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._point.x, this._point.y);

                legacyCC.view._convertToUISpace(out);

                return out;
              }
              /**
               * @en Returns X axis location value in UI coordinates.
               * @zh 获取当前触点在 UI 坐标系中 X 轴位置。
               */
              ;

              _proto.getUILocationX = function getUILocationX() {
                var viewport = legacyCC.view.getViewportRect();
                return (this._point.x - viewport.x) / legacyCC.view.getScaleX();
              }
              /**
               * @en Returns Y axis location value in UI coordinates.
               * @zh 获取当前触点在 UI 坐标系中 Y 轴位置。
               */
              ;

              _proto.getUILocationY = function getUILocationY() {
                var viewport = legacyCC.view.getViewportRect();
                return (this._point.y - viewport.y) / legacyCC.view.getScaleY();
              }
              /**
               * @en Returns the previous touch location.
               * @zh 获取触点在上一次事件时的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getPreviousLocation = function getPreviousLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._prevPoint.x, this._prevPoint.y);
                return out;
              }
              /**
               * @en Returns the previous touch location in UI coordinates.
               * @zh 获取触点在上一次事件时在 UI 坐标系中的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUIPreviousLocation = function getUIPreviousLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._prevPoint.x, this._prevPoint.y);

                legacyCC.view._convertToUISpace(out);

                return out;
              }
              /**
               * @en Returns the start touch location.
               * @zh 获取触点落下时的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getStartLocation = function getStartLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._startPoint.x, this._startPoint.y);
                return out;
              }
              /**
               * @en Returns the start touch location in UI coordinates.
               * @zh 获取触点落下时在 UI 坐标系中的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUIStartLocation = function getUIStartLocation(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._startPoint.x, this._startPoint.y);

                legacyCC.view._convertToUISpace(out);

                return out;
              }
              /**
               * @en Returns the delta distance from the previous touche to the current one.
               * @zh 获取触点距离上一次事件移动的距离对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getDelta = function getDelta(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._point);
                out.subtract(this._prevPoint);
                return out;
              }
              /**
               * @en Returns the delta distance from the previous touche to the current one in UI coordinates.
               * @zh 获取触点距离上一次事件移动在 UI 坐标系中的距离对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getUIDelta = function getUIDelta(out) {
                if (!out) {
                  out = new Vec2();
                }

                _vec2$1.set(this._point);

                _vec2$1.subtract(this._prevPoint);

                out.set(legacyCC.view.getScaleX(), legacyCC.view.getScaleY());
                Vec2.divide(out, _vec2$1, out);
                return out;
              }
              /**
               * @en Returns the current touch location in screen coordinates.
               * @zh 获取当前事件在游戏窗口内的坐标位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getLocationInView = function getLocationInView(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._point.x, legacyCC.view._designResolutionSize.height - this._point.y);
                return out;
              }
              /**
               * @en Returns the previous touch location in screen coordinates.
               * @zh 获取触点在上一次事件时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getPreviousLocationInView = function getPreviousLocationInView(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._prevPoint.x, legacyCC.view._designResolutionSize.height - this._prevPoint.y);
                return out;
              }
              /**
               * @en Returns the start touch location in screen coordinates.
               * @zh 获取触点落下时在游戏窗口中的位置对象，对象包含 x 和 y 属性。
               * @param out - Pass the out object to avoid object creation, very good practice
               */
              ;

              _proto.getStartLocationInView = function getStartLocationInView(out) {
                if (!out) {
                  out = new Vec2();
                }

                out.set(this._startPoint.x, legacyCC.view._designResolutionSize.height - this._startPoint.y);
                return out;
              }
              /**
               * @en Returns the id of the touch point.
               * @zh 触点的标识 ID，可以用来在多点触摸中跟踪触点。
               */
              ;

              _proto.getID = function getID() {
                return this._id;
              }
              /**
               * @en Resets touch point information.
               * @zh 重置触点相关的信息。
               * @param id - The id of the touch point
               * @param x - x position of the touch point
               * @param y - y position of the touch point
               */
              ;

              _proto.setTouchInfo = function setTouchInfo(id, x, y) {
                if (id === void 0) {
                  id = 0;
                }

                this._prevPoint = this._point;
                this._point = new Vec2(x || 0, y || 0);
                this._id = id;

                if (!this._startPointCaptured) {
                  this._startPoint = new Vec2(this._point); // cc.view._convertToUISpace(this._startPoint);

                  this._startPointCaptured = true;
                }
              }
              /**
               * @en Sets touch point location.
               * @zh 设置触点位置。
               * @param point - The location
               */
              ;

              _proto.setPoint = function setPoint(x, y) {
                if (typeof x === 'object') {
                  this._point.x = x.x;
                  this._point.y = x.y;
                } else {
                  this._point.x = x || 0;
                  this._point.y = y || 0;
                }

                this._lastModified = legacyCC.game.frameStartTime;
              }
              /**
               * @en Sets the location previously registered for the current touch.
               * @zh 设置触点在前一次触发时收集的位置。
               * @param point - The location
               */
              ;

              _proto.setPrevPoint = function setPrevPoint(x, y) {
                if (typeof x === 'object') {
                  this._prevPoint = new Vec2(x.x, x.y);
                } else {
                  this._prevPoint = new Vec2(x || 0, y || 0);
                }

                this._lastModified = legacyCC.game.frameStartTime;
              };

              return Touch;
            }();
            legacyCC.Touch = Touch;

            var AccelerometerInputSource = exports('AccelerometerInputSource', /*#__PURE__*/function () {
              function AccelerometerInputSource() {
                this._intervalInMileSeconds = 200;
                this._accelTimer = 0;
                this._eventTarget = new EventTarget();
                this._deviceEventName = void 0;
                this._globalEventClass = void 0;
                this._didAccelerateFunc = void 0;
                // init event name
                this._globalEventClass = window.DeviceMotionEvent || window.DeviceOrientationEvent; // TODO fix DeviceMotionEvent bug on QQ Browser version 4.1 and below.

                if (systemInfo.browserType === BrowserType.MOBILE_QQ) {
                  this._globalEventClass = window.DeviceOrientationEvent;
                }

                this._deviceEventName = this._globalEventClass === window.DeviceMotionEvent ? 'devicemotion' : 'deviceorientation';
                this._didAccelerateFunc = this._didAccelerate.bind(this);
              }

              var _proto = AccelerometerInputSource.prototype;

              _proto._registerEvent = function _registerEvent() {
                this._accelTimer = performance.now();
                window.addEventListener(this._deviceEventName, this._didAccelerateFunc, false);
              };

              _proto._unregisterEvent = function _unregisterEvent() {
                this._accelTimer = 0;
                window.removeEventListener(this._deviceEventName, this._didAccelerateFunc, false);
              };

              _proto._didAccelerate = function _didAccelerate(event) {
                var now = performance.now();

                if (now - this._accelTimer < this._intervalInMileSeconds) {
                  return;
                }

                this._accelTimer = now;
                var x = 0;
                var y = 0;
                var z = 0;

                if (this._globalEventClass === window.DeviceMotionEvent) {
                  var deviceMotionEvent = event;
                  var _eventAcceleration = deviceMotionEvent.accelerationIncludingGravity;
                  x = ((_eventAcceleration === null || _eventAcceleration === void 0 ? void 0 : _eventAcceleration.x) || 0) * 0.1;
                  y = ((_eventAcceleration === null || _eventAcceleration === void 0 ? void 0 : _eventAcceleration.y) || 0) * 0.1;
                  z = ((_eventAcceleration === null || _eventAcceleration === void 0 ? void 0 : _eventAcceleration.z) || 0) * 0.1;
                } else {
                  var deviceOrientationEvent = event;
                  x = (deviceOrientationEvent.gamma || 0) / 90 * 0.981;
                  y = -((deviceOrientationEvent.beta || 0) / 90) * 0.981;
                  z = (deviceOrientationEvent.alpha || 0) / 90 * 0.981;
                }

                if (screenAdapter.isFrameRotated) {
                  var tmp = x;
                  x = -y;
                  y = tmp;
                } // TODO: window.orientation is deprecated: https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation
                var LANDSCAPE_LEFT = -90;
                var PORTRAIT_UPSIDE_DOWN = 180;
                var LANDSCAPE_RIGHT = 90;
                var tmpX = x;

                if (window.orientation === LANDSCAPE_RIGHT) {
                  x = -y;
                  y = tmpX;
                } else if (window.orientation === LANDSCAPE_LEFT) {
                  x = y;
                  y = -tmpX;
                } else if (window.orientation === PORTRAIT_UPSIDE_DOWN) {
                  x = -x;
                  y = -y;
                } // fix android acc values are opposite


                if (systemInfo.os === OS.ANDROID && systemInfo.browserType !== BrowserType.MOBILE_QQ) {
                  x = -x;
                  y = -y;
                }

                var timestamp = performance.now();
                var acceleration = new Acceleration(x, y, z, timestamp);
                var eventAcceleration = new EventAcceleration(acceleration);

                this._eventTarget.emit(InputEventType.DEVICEMOTION, eventAcceleration);
              };

              _proto.start = function start() {
                var _this = this;

                // for iOS 13+, safari
                if (window.DeviceMotionEvent && typeof DeviceMotionEvent.requestPermission === 'function') {
                  DeviceMotionEvent.requestPermission().then(function (response) {
                    if (response === 'granted') {
                      _this._registerEvent();
                    }
                  })["catch"](function (e) {});
                } else {
                  this._registerEvent();
                }
              };

              _proto.stop = function stop() {
                this._unregisterEvent();
              };

              _proto.setInterval = function setInterval(intervalInMileSeconds) {
                this._intervalInMileSeconds = intervalInMileSeconds;
              };

              _proto.on = function on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              };

              return AccelerometerInputSource;
            }());

            var GamepadInputSource = exports('GamepadInputSource', function GamepadInputSource() {
              this.support = void 0;
              this.support = false;
            });

            var code2KeyCode = {
              Backspace: KeyCode.BACKSPACE,
              Tab: KeyCode.TAB,
              Enter: KeyCode.ENTER,
              ShiftLeft: KeyCode.SHIFT_LEFT,
              ControlLeft: KeyCode.CTRL_LEFT,
              AltLeft: KeyCode.ALT_LEFT,
              ShiftRight: KeyCode.SHIFT_RIGHT,
              ControlRight: KeyCode.CTRL_RIGHT,
              AltRight: KeyCode.ALT_RIGHT,
              Pause: KeyCode.PAUSE,
              CapsLock: KeyCode.CAPS_LOCK,
              Escape: KeyCode.ESCAPE,
              Space: KeyCode.SPACE,
              PageUp: KeyCode.PAGE_UP,
              PageDown: KeyCode.PAGE_DOWN,
              End: KeyCode.END,
              Home: KeyCode.HOME,
              ArrowLeft: KeyCode.ARROW_LEFT,
              ArrowUp: KeyCode.ARROW_UP,
              ArrowRight: KeyCode.ARROW_RIGHT,
              ArrowDown: KeyCode.ARROW_DOWN,
              Insert: KeyCode.INSERT,
              Delete: KeyCode.DELETE,
              Digit0: KeyCode.DIGIT_0,
              Digit1: KeyCode.DIGIT_1,
              Digit2: KeyCode.DIGIT_2,
              Digit3: KeyCode.DIGIT_3,
              Digit4: KeyCode.DIGIT_4,
              Digit5: KeyCode.DIGIT_5,
              Digit6: KeyCode.DIGIT_6,
              Digit7: KeyCode.DIGIT_7,
              Digit8: KeyCode.DIGIT_8,
              Digit9: KeyCode.DIGIT_9,
              KeyA: KeyCode.KEY_A,
              KeyB: KeyCode.KEY_B,
              KeyC: KeyCode.KEY_C,
              KeyD: KeyCode.KEY_D,
              KeyE: KeyCode.KEY_E,
              KeyF: KeyCode.KEY_F,
              KeyG: KeyCode.KEY_G,
              KeyH: KeyCode.KEY_H,
              KeyI: KeyCode.KEY_I,
              KeyJ: KeyCode.KEY_J,
              KeyK: KeyCode.KEY_K,
              KeyL: KeyCode.KEY_L,
              KeyM: KeyCode.KEY_M,
              KeyN: KeyCode.KEY_N,
              KeyO: KeyCode.KEY_O,
              KeyP: KeyCode.KEY_P,
              KeyQ: KeyCode.KEY_Q,
              KeyR: KeyCode.KEY_R,
              KeyS: KeyCode.KEY_S,
              KeyT: KeyCode.KEY_T,
              KeyU: KeyCode.KEY_U,
              KeyV: KeyCode.KEY_V,
              KeyW: KeyCode.KEY_W,
              KeyX: KeyCode.KEY_X,
              KeyY: KeyCode.KEY_Y,
              KeyZ: KeyCode.KEY_Z,
              Numpad0: KeyCode.NUM_0,
              Numpad1: KeyCode.NUM_1,
              Numpad2: KeyCode.NUM_2,
              Numpad3: KeyCode.NUM_3,
              Numpad4: KeyCode.NUM_4,
              Numpad5: KeyCode.NUM_5,
              Numpad6: KeyCode.NUM_6,
              Numpad7: KeyCode.NUM_7,
              Numpad8: KeyCode.NUM_8,
              Numpad9: KeyCode.NUM_9,
              NumpadMultiply: KeyCode.NUM_MULTIPLY,
              NumpadAdd: KeyCode.NUM_PLUS,
              NumpadSubtract: KeyCode.NUM_SUBTRACT,
              NumpadDecimal: KeyCode.NUM_DECIMAL,
              NumpadDivide: KeyCode.NUM_DIVIDE,
              NumpadEnter: KeyCode.NUM_ENTER,
              F1: KeyCode.F1,
              F2: KeyCode.F2,
              F3: KeyCode.F3,
              F4: KeyCode.F4,
              F5: KeyCode.F5,
              F6: KeyCode.F6,
              F7: KeyCode.F7,
              F8: KeyCode.F8,
              F9: KeyCode.F9,
              F10: KeyCode.F10,
              F11: KeyCode.F11,
              F12: KeyCode.F12,
              NumLock: KeyCode.NUM_LOCK,
              ScrollLock: KeyCode.SCROLL_LOCK,
              Semicolon: KeyCode.SEMICOLON,
              Equal: KeyCode.EQUAL,
              Comma: KeyCode.COMMA,
              Minus: KeyCode.DASH,
              Period: KeyCode.PERIOD,
              Slash: KeyCode.SLASH,
              Backquote: KeyCode.BACK_QUOTE,
              BracketLeft: KeyCode.BRACKET_LEFT,
              Backslash: KeyCode.BACKSLASH,
              BracketRight: KeyCode.BRACKET_RIGHT,
              Quote: KeyCode.QUOTE
            };

            function getKeyCode(code) {
              return code2KeyCode[code] || KeyCode.NONE;
            }

            var KeyboardInputSource = exports('KeyboardInputSource', /*#__PURE__*/function () {
              function KeyboardInputSource() {
                this._eventTarget = new EventTarget();

                this._registerEvent();
              }

              var _proto = KeyboardInputSource.prototype;

              _proto._registerEvent = function _registerEvent() {
                var _this = this;

                var canvas = document.getElementById('GameCanvas');
                canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('keydown', function (event) {
                  event.stopPropagation();
                  event.preventDefault();

                  if (!event.repeat) {
                    var keyDownInputEvent = _this._getInputEvent(event, InputEventType.KEY_DOWN);

                    _this._eventTarget.emit(InputEventType.KEY_DOWN, keyDownInputEvent);
                  } else {
                    var keyPressingInputEvent = _this._getInputEvent(event, InputEventType.KEY_PRESSING);

                    _this._eventTarget.emit(InputEventType.KEY_PRESSING, keyPressingInputEvent);
                  }
                });
                canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('keyup', function (event) {
                  var inputEvent = _this._getInputEvent(event, InputEventType.KEY_UP);

                  event.stopPropagation();
                  event.preventDefault();

                  _this._eventTarget.emit(InputEventType.KEY_UP, inputEvent);
                });
              };

              _proto._getInputEvent = function _getInputEvent(event, eventType) {
                var keyCode = getKeyCode(event.code);
                var eventKeyboard = new EventKeyboard(keyCode, eventType);
                return eventKeyboard;
              };

              _proto.on = function on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              };

              return KeyboardInputSource;
            }());

            var MouseInputSource = exports('MouseInputSource', /*#__PURE__*/function () {
              function MouseInputSource() {
                this._canvas = void 0;
                this._eventTarget = new EventTarget();
                this._pointLocked = false;
                this._isPressed = false;
                this._preMousePos = new Vec2();

                if (systemInfo.hasFeature(Feature.EVENT_MOUSE)) {
                  this._canvas = document.getElementById('GameCanvas');

                  if (!this._canvas && !TEST) {
                    console.warn('failed to access canvas');
                  }

                  this._registerEvent();
                }
              }

              var _proto = MouseInputSource.prototype;

              _proto._getCanvasRect = function _getCanvasRect() {
                var canvas = this._canvas;
                var box = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();

                if (box) {
                  return new Rect(box.x, box.y, box.width, box.height);
                }

                return new Rect(0, 0, 0, 0);
              };

              _proto._getLocation = function _getLocation(mouseEvent) {
                var canvasRect = this._getCanvasRect();

                var dpr = screenAdapter.devicePixelRatio;
                var x = this._pointLocked ? this._preMousePos.x / dpr + mouseEvent.movementX : mouseEvent.clientX - canvasRect.x;
                var y = this._pointLocked ? this._preMousePos.y / dpr - mouseEvent.movementY : canvasRect.y + canvasRect.height - mouseEvent.clientY;
                x *= dpr;
                y *= dpr;
                return new Vec2(x, y);
              };

              _proto._registerEvent = function _registerEvent() {
                var _this = this,
                    _this$_canvas,
                    _this$_canvas2,
                    _this$_canvas3,
                    _this$_canvas4;

                // register mouse down event
                window.addEventListener('mousedown', function () {
                  _this._isPressed = true;
                });
                (_this$_canvas = this._canvas) === null || _this$_canvas === void 0 ? void 0 : _this$_canvas.addEventListener('mousedown', this._createCallback(InputEventType.MOUSE_DOWN)); // register mouse move event

                (_this$_canvas2 = this._canvas) === null || _this$_canvas2 === void 0 ? void 0 : _this$_canvas2.addEventListener('mousemove', this._createCallback(InputEventType.MOUSE_MOVE)); // register mouse up event

                var handleMouseUp = this._createCallback(InputEventType.MOUSE_UP);

                window.addEventListener('mouseup', handleMouseUp);
                (_this$_canvas3 = this._canvas) === null || _this$_canvas3 === void 0 ? void 0 : _this$_canvas3.addEventListener('mouseup', handleMouseUp); // register wheel event

                (_this$_canvas4 = this._canvas) === null || _this$_canvas4 === void 0 ? void 0 : _this$_canvas4.addEventListener('wheel', this._handleMouseWheel.bind(this));

                this._registerPointerLockEvent();
              } // To be removed in the future.
              ;

              _proto._registerPointerLockEvent = function _registerPointerLockEvent() {
                var _this2 = this;

                var lockChangeAlert = function lockChangeAlert() {
                  var canvas = _this2._canvas; // @ts-expect-error undefined mozPointerLockElement

                  if (document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
                    _this2._pointLocked = true;
                  } else {
                    _this2._pointLocked = false;
                  }
                };

                if ('onpointerlockchange' in document) {
                  document.addEventListener('pointerlockchange', lockChangeAlert, false);
                } else if ('onmozpointerlockchange' in document) {
                  document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
                }
              };

              _proto._createCallback = function _createCallback(eventType) {
                var _this3 = this;

                return function (mouseEvent) {
                  var _this3$_canvas;

                  var location = _this3._getLocation(mouseEvent);

                  var button = mouseEvent.button;

                  switch (eventType) {
                    case InputEventType.MOUSE_DOWN:
                      (_this3$_canvas = _this3._canvas) === null || _this3$_canvas === void 0 ? void 0 : _this3$_canvas.focus();
                      _this3._isPressed = true;
                      break;

                    case InputEventType.MOUSE_UP:
                      _this3._isPressed = false;
                      break;

                    case InputEventType.MOUSE_MOVE:
                      if (!_this3._isPressed) {
                        button = EventMouse.BUTTON_MISSING;
                      }

                      break;
                  }

                  var eventMouse = new EventMouse(eventType, false, _this3._preMousePos);
                  eventMouse.setLocation(location.x, location.y);
                  eventMouse.setButton(button);
                  eventMouse.movementX = mouseEvent.movementX;
                  eventMouse.movementY = mouseEvent.movementY; // update previous mouse position.

                  _this3._preMousePos.set(location.x, location.y);

                  mouseEvent.stopPropagation();

                  if (mouseEvent.target === _this3._canvas) {
                    mouseEvent.preventDefault();
                  }

                  _this3._eventTarget.emit(eventType, eventMouse);
                };
              };

              _proto._handleMouseWheel = function _handleMouseWheel(mouseEvent) {
                var eventType = InputEventType.MOUSE_WHEEL;

                var location = this._getLocation(mouseEvent);

                var button = mouseEvent.button;
                var eventMouse = new EventMouse(eventType, false, this._preMousePos);
                eventMouse.setLocation(location.x, location.y);
                eventMouse.setButton(button);
                eventMouse.movementX = mouseEvent.movementX;
                eventMouse.movementY = mouseEvent.movementY;
                var wheelSensitivityFactor = 5;
                eventMouse.setScrollData(mouseEvent.deltaX * wheelSensitivityFactor, -mouseEvent.deltaY * wheelSensitivityFactor); // update previous mouse position.

                this._preMousePos.set(location.x, location.y);

                mouseEvent.stopPropagation();

                if (mouseEvent.target === this._canvas) {
                  mouseEvent.preventDefault();
                }

                this._eventTarget.emit(eventType, eventMouse);
              };

              _proto.on = function on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              };

              return MouseInputSource;
            }());

            /*
             Copyright (c) 2008-2010 Ricardo Quesada
             Copyright (c) 2011-2012 cocos2d-x.org
             Copyright (c) 2013-2016 Chukong Technologies Inc.
             Copyright (c) 2017-2020 Xiamen Yaji Software Co., Ltd.

             http://www.cocos2d-x.org

             Permission is hereby granted, free of charge, to any person obtaining a copy
             of this software and associated documentation files (the "Software"), to deal
             in the Software without restriction, including without limitation the rights
             to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
             copies of the Software, and to permit persons to whom the Software is
             furnished to do so, subject to the following conditions:

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
            var SUPPORT_TEXTURE_FORMATS = ['.astc', '.pkm', '.pvr', '.webp', '.jpg', '.jpeg', '.bmp', '.png'];
            var KEY = {
              /**
               * @en None
               * @zh 没有分配
               * @readonly
               */
              none: 0,
              // android

              /**
               * @en The back key on mobile phone
               * @zh 移动端返回键
               * @readonly
               * @deprecated since v3.3, please use KeyCode.MOBILE_BACK instead.
               */
              back: 6,

              /**
               * @en The menu key on mobile phone
               * @zh 移动端菜单键
               * @readonly
               * @deprecated since v3.3
               */
              menu: 18,

              /**
               * @en The backspace key
               * @zh 退格键
               * @readonly
               */
              backspace: 8,

              /**
               * @en The tab key
               * @zh Tab 键
               * @readonly
               */
              tab: 9,

              /**
               * @en The enter key
               * @zh 回车键
               * @readonly
               */
              enter: 13,

              /**
               * @en The shift key
               * @zh Shift 键
               * @readonly
               * @deprecated since v3.3, please use KeyCode.SHIFT_LEFT instead.
               */
              shift: 16,
              // should use shiftkey instead

              /**
               * @en The ctrl key
               * @zh Ctrl 键
               * @readonly
               * @deprecated since v3.3, please use KeyCode.CTRL_LEFT instead.
               */
              ctrl: 17,
              // should use ctrlkey

              /**
               * @en The alt key
               * @zh Alt 键
               * @readonly
               * @deprecated since v3.3, please use KeyCode.ALT_LEFT instead.
               */
              alt: 18,
              // should use altkey

              /**
               * @en The pause key
               * @zh 暂停键
               * @readonly
               */
              pause: 19,

              /**
               * @en The caps lock key
               * @zh 大写锁定键
               * @readonly
               */
              capslock: 20,

              /**
               * @en The esc key
               * @zh ESC 键
               * @readonly
               */
              escape: 27,

              /**
               * @en The space key
               * @zh 空格键
               * @readonly
               */
              space: 32,

              /**
               * @en The page up key
               * @zh 向上翻页键
               * @readonly
               */
              pageup: 33,

              /**
               * @en The page down key
               * @zh 向下翻页键
               * @readonly
               */
              pagedown: 34,

              /**
               * @en The end key
               * @zh 结束键
               * @readonly
               */
              end: 35,

              /**
               * @en The home key
               * @zh 主菜单键
               * @readonly
               */
              home: 36,

              /**
               * @en The left key
               * @zh 向左箭头键
               * @readonly
               */
              left: 37,

              /**
               * @en The up key
               * @zh 向上箭头键
               * @readonly
               */
              up: 38,

              /**
               * @en The right key
               * @zh 向右箭头键
               * @readonly
               */
              right: 39,

              /**
               * @en The down key
               * @zh 向下箭头键
               * @readonly
               */
              down: 40,

              /**
               * @en The select key
               * @zh Select 键
               * @readonly
               * @deprecated since v3.3
               */
              select: 41,

              /**
               * @en The insert key
               * @zh 插入键
               * @readonly
               */
              insert: 45,

              /**
               * @en The Delete key
               * @zh 删除键
               * @readonly
               */
              Delete: 46,

              /**
               * @en The '0' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 0 键
               * @readonly
               * @deprecated since v3.3
               */
              0: 48,

              /**
               * @en The '1' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 1 键
               * @readonly
               * @deprecated since v3.3
               */
              1: 49,

              /**
               * @en The '2' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 2 键
               * @readonly
               * @deprecated since v3.3
               */
              2: 50,

              /**
               * @en The '3' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 3 键
               * @readonly
               * @deprecated since v3.3
               */
              3: 51,

              /**
               * @en The '4' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 4 键
               * @readonly
               * @deprecated since v3.3
               */
              4: 52,

              /**
               * @en The '5' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 5 键
               * @readonly
               * @deprecated since v3.3
               */
              5: 53,

              /**
               * @en The '6' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 6 键
               * @readonly
               * @deprecated since v3.3
               */
              6: 54,

              /**
               * @en The '7' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 7 键
               * @readonly
               * @deprecated since v3.3
               */
              7: 55,

              /**
               * @en The '8' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 8 键
               * @readonly
               * @deprecated since v3.3
               */
              8: 56,

              /**
               * @en The '9' key on the top of the alphanumeric keyboard.
               * @zh 字母键盘上的 9 键
               * @readonly
               * @deprecated since v3.3
               */
              9: 57,

              /**
               * @en The a key
               * @zh A 键
               * @readonly
               */
              a: 65,

              /**
               * @en The b key
               * @zh B 键
               * @readonly
               */
              b: 66,

              /**
               * @en The c key
               * @zh C 键
               * @readonly
               */
              c: 67,

              /**
               * @en The d key
               * @zh D 键
               * @readonly
               */
              d: 68,

              /**
               * @en The e key
               * @zh E 键
               * @readonly
               */
              e: 69,

              /**
               * @en The f key
               * @zh F 键
               * @readonly
               */
              f: 70,

              /**
               * @en The g key
               * @zh G 键
               * @readonly
               */
              g: 71,

              /**
               * @en The h key
               * @zh H 键
               * @readonly
               */
              h: 72,

              /**
               * @en The i key
               * @zh I 键
               * @readonly
               */
              i: 73,

              /**
               * @en The j key
               * @zh J 键
               * @readonly
               */
              j: 74,

              /**
               * @en The k key
               * @zh K 键
               * @readonly
               */
              k: 75,

              /**
               * @en The l key
               * @zh L 键
               * @readonly
               */
              l: 76,

              /**
               * @en The m key
               * @zh M 键
               * @readonly
               */
              m: 77,

              /**
               * @en The n key
               * @zh N 键
               * @readonly
               */
              n: 78,

              /**
               * @en The o key
               * @zh O 键
               * @readonly
               */
              o: 79,

              /**
               * @en The p key
               * @zh P 键
               * @readonly
               */
              p: 80,

              /**
               * @en The q key
               * @zh Q 键
               * @readonly
               */
              q: 81,

              /**
               * @en The r key
               * @zh R 键
               * @readonly
               */
              r: 82,

              /**
               * @en The s key
               * @zh S 键
               * @readonly
               */
              s: 83,

              /**
               * @en The t key
               * @zh T 键
               * @readonly
               */
              t: 84,

              /**
               * @en The u key
               * @zh U 键
               * @readonly
               */
              u: 85,

              /**
               * @en The v key
               * @zh V 键
               * @readonly
               */
              v: 86,

              /**
               * @en The w key
               * @zh W 键
               * @readonly
               */
              w: 87,

              /**
               * @en The x key
               * @zh X 键
               * @readonly
               */
              x: 88,

              /**
               * @en The y key
               * @zh Y 键
               * @readonly
               */
              y: 89,

              /**
               * @en The z key
               * @zh Z 键
               * @readonly
               */
              z: 90,

              /**
               * @en The numeric keypad 0
               * @zh 数字键盘 0
               * @readonly
               */
              num0: 96,

              /**
               * @en The numeric keypad 1
               * @zh 数字键盘 1
               * @readonly
               */
              num1: 97,

              /**
               * @en The numeric keypad 2
               * @zh 数字键盘 2
               * @readonly
               */
              num2: 98,

              /**
               * @en The numeric keypad 3
               * @zh 数字键盘 3
               * @readonly
               */
              num3: 99,

              /**
               * @en The numeric keypad 4
               * @zh 数字键盘 4
               * @readonly
               */
              num4: 100,

              /**
               * @en The numeric keypad 5
               * @zh 数字键盘 5
               * @readonly
               */
              num5: 101,

              /**
               * @en The numeric keypad 6
               * @zh 数字键盘 6
               * @readonly
               */
              num6: 102,

              /**
               * @en The numeric keypad 7
               * @zh 数字键盘 7
               * @readonly
               */
              num7: 103,

              /**
               * @en The numeric keypad 8
               * @zh 数字键盘 8
               * @readonly
               */
              num8: 104,

              /**
               * @en The numeric keypad 9
               * @zh 数字键盘 9
               * @readonly
               */
              num9: 105,

              /**
               * @en The numeric keypad '*'
               * @zh 数字键盘 *
               * @readonly
               * @deprecated since v3.3
               */
              '*': 106,

              /**
               * @en The numeric keypad '+'
               * @zh 数字键盘 +
               * @readonly
               * @deprecated since v3.3
               */
              '+': 107,

              /**
               * @en The numeric keypad '-'
               * @zh 数字键盘 -
               * @readonly
               * @deprecated since v3.3
               */
              '-': 109,

              /**
               * @en The numeric keypad 'delete'
               * @zh 数字键盘删除键
               * @readonly
               */
              numdel: 110,

              /**
               * @en The numeric keypad '/'
               * @zh 数字键盘 /
               * @readonly
               * @deprecated since v3.3
               */
              '/': 111,

              /**
               * @en The F1 function key
               * @zh F1 功能键
               * @readonly
               */
              f1: 112,
              // f1-f12 dont work on ie

              /**
               * @en The F2 function key
               * @zh F2 功能键
               * @readonly
               */
              f2: 113,

              /**
               * @en The F3 function key
               * @zh F3 功能键
               * @readonly
               */
              f3: 114,

              /**
               * @en The F4 function key
               * @zh F4 功能键
               * @readonly
               */
              f4: 115,

              /**
               * @en The F5 function key
               * @zh F5 功能键
               * @readonly
               */
              f5: 116,

              /**
               * @en The F6 function key
               * @zh F6 功能键
               * @readonly
               */
              f6: 117,

              /**
               * @en The F7 function key
               * @zh F7 功能键
               * @readonly
               */
              f7: 118,

              /**
               * @en The F8 function key
               * @zh F8 功能键
               * @readonly
               */
              f8: 119,

              /**
               * @en The F9 function key
               * @zh F9 功能键
               * @readonly
               */
              f9: 120,

              /**
               * @en The F10 function key
               * @zh F10 功能键
               * @readonly
               */
              f10: 121,

              /**
               * @en The F11 function key
               * @zh F11 功能键
               * @readonly
               */
              f11: 122,

              /**
               * @en The F12 function key
               * @zh F12 功能键
               * @readonly
               */
              f12: 123,

              /**
               * @en The numlock key
               * @zh 数字锁定键
               * @readonly
               */
              numlock: 144,

              /**
               * @en The scroll lock key
               * @zh 滚动锁定键
               * @readonly
               */
              scrolllock: 145,

              /**
               * @en The ';' key.
               * @zh 分号键
               * @readonly
               * @deprecated since v3.3
               */
              ';': 186,

              /**
               * @en The ';' key.
               * @zh 分号键
               * @readonly
               */
              semicolon: 186,

              /**
               * @en The '=' key.
               * @zh 等于号键
               * @readonly
               */
              equal: 187,

              /**
               * @en The '=' key.
               * @zh 等于号键
               * @readonly
               * @deprecated since v3.3
               */
              '=': 187,

              /**
               * @en The ',' key.
               * @zh 逗号键
               * @readonly
               * @deprecated since v3.3
               */
              ',': 188,

              /**
               * @en The ',' key.
               * @zh 逗号键
               * @readonly
               */
              comma: 188,

              /**
               * @en The dash '-' key.
               * @zh 中划线键
               * @readonly
               */
              dash: 189,

              /**
               * @en The '.' key.
               * @zh 句号键
               * @readonly
               * @deprecated since v3.3
               */
              '.': 190,

              /**
               * @en The '.' key
               * @zh 句号键
               * @readonly
               */
              period: 190,

              /**
               * @en The forward slash key
               * @zh 正斜杠键
               * @readonly
               */
              forwardslash: 191,

              /**
               * @en The grave key
               * @zh 按键 `
               * @readonly
               */
              grave: 192,

              /**
               * @en The '[' key
               * @zh 按键 [
               * @readonly
               * @deprecated since v3.3
               */
              '[': 219,

              /**
               * @en The '[' key
               * @zh 按键 [
               * @readonly
               */
              openbracket: 219,

              /**
               * @en The '\' key
               * @zh 反斜杠键
               * @readonly
               */
              backslash: 220,

              /**
               * @en The ']' key
               * @zh 按键 ]
               * @readonly
               * @deprecated since v3.3
               */
              ']': 221,

              /**
               * @en The ']' key
               * @zh 按键 ]
               * @readonly
               */
              closebracket: 221,

              /**
               * @en The quote key
               * @zh 单引号键
               * @readonly
               */
              quote: 222,
              // gamepad controll

              /**
               * @en The dpad left key
               * @zh 导航键 向左
               * @readonly
               * @deprecated since v3.3
               */
              dpadLeft: 1000,

              /**
               * @en The dpad right key
               * @zh 导航键 向右
               * @readonly
               * @deprecated since v3.3
               */
              dpadRight: 1001,

              /**
               * @en The dpad up key
               * @zh 导航键 向上
               * @readonly
               * @deprecated since v3.3
               */
              dpadUp: 1003,

              /**
               * @en The dpad down key
               * @zh 导航键 向下
               * @readonly
               * @deprecated since v3.3
               */
              dpadDown: 1004,

              /**
               * @en The dpad center key
               * @zh 导航键 确定键
               * @readonly
               * @deprecated since v3.3
               */
              dpadCenter: 1005
            };
            /**
             * @en
             * Predefined constants
             * @zh
             * 预定义常量。
             */

            var macro = {
              /**
               * @en
               * The image format supported by the engine defaults, and the supported formats may differ in different build platforms and device types.
               * Currently all platform and device support ['.webp', '.jpg', '.jpeg', '.bmp', '.png'], ios mobile platform
               * @zh
               * 引擎默认支持的图片格式，支持的格式可能在不同的构建平台和设备类型上有所差别。
               * 目前所有平台和设备支持的格式有 ['.webp', '.jpg', '.jpeg', '.bmp', '.png']. The iOS mobile platform also supports the PVR format。
               */
              SUPPORT_TEXTURE_FORMATS: SUPPORT_TEXTURE_FORMATS,

              /**
               * @en Key map for keyboard event
               * @zh 键盘事件的按键值。
               * @example {@link cocos/core/platform/CCCommon/KEY.js}
               * @deprecated since v3.3 please use KeyCode instead
               */
              KEY: KEY,

              /**
               * PI / 180
               */
              RAD: Math.PI / 180,

              /**
               * One degree
               */
              DEG: 180 / Math.PI,

              /**
               * A maximum value of number
               */
              REPEAT_FOREVER: Number.MAX_VALUE - 1,

              /**
               * A minimal float value
               */
              FLT_EPSILON: 0.0000001192092896,
              // Possible device orientations

              /**
               * @en Oriented vertically
               * @zh 竖屏朝向
               */
              ORIENTATION_PORTRAIT: 1,

              /**
               * @en Oriented horizontally
               * @zh 横屏朝向
               */
              ORIENTATION_LANDSCAPE: 2,

              /**
               * @en Oriented automatically
               * @zh 自动适配朝向
               */
              ORIENTATION_AUTO: 3,

              /**
               * <p>
               *   If enabled, the texture coordinates will be calculated by using this formula: <br/>
               *      - texCoord.left = (rect.x*2+1) / (texture.wide*2);                  <br/>
               *      - texCoord.right = texCoord.left + (rect.width*2-2)/(texture.wide*2); <br/>
               *                                                                                 <br/>
               *  The same for bottom and top.                                                   <br/>
               *                                                                                 <br/>
               *  This formula prevents artifacts by using 99% of the texture.                   <br/>
               *  The "correct" way to prevent artifacts is by expand the texture's border with the same color by 1 pixel<br/>
               *                                                                                  <br/>
               *  Affected component:                                                                 <br/>
               *      - TMXLayer                                                       <br/>
               *                                                                                  <br/>
               *  Enabled by default. To disabled set it to 0. <br/>
               *  To modify it, in Web engine please refer to CCMacro.js, in JSB please refer to CCConfig.h
               * </p>
               * Currently not useful in 3D engine
               */
              // FIX_ARTIFACTS_BY_STRECHING_TEXEL_TMX: true,

              /**
               * @en
               * Whether or not enabled tiled map auto culling. If you set the TiledMap skew or rotation,
               * then need to manually disable this, otherwise, the rendering will be wrong.
               * Currently not useful in 3D engine
               * @zh
               * 是否开启瓦片地图的自动裁减功能。瓦片地图如果设置了 skew, rotation 的话，需要手动关闭，否则渲染会出错。
               * 在 3D 引擎中暂时无效。
               * @default true
               */
              ENABLE_TILEDMAP_CULLING: true,

              /**
               * @en
               * The timeout to determine whether a touch is no longer active and should be removed.
               * The reason to add this timeout is due to an issue in X5 browser core,
               * when X5 is presented in wechat on Android, if a touch is glissed from the bottom up, and leave the page area,
               * no touch cancel event is triggered, and the touch will be considered active forever.
               * After multiple times of this action, our maximum touches number will be reached and all new touches will be ignored.
               * So this new mechanism can remove the touch that should be inactive if it's not updated during the last 5000 milliseconds.
               * Though it might remove a real touch if it's just not moving for the last 5 seconds which is not easy with the sensibility of mobile touch screen.
               * You can modify this value to have a better behavior if you find it's not enough.
               * @zh
               * 用于甄别一个触点对象是否已经失效并且可以被移除的延时时长
               * 添加这个时长的原因是 X5 内核在微信浏览器中出现的一个 bug。
               * 在这个环境下，如果用户将一个触点从底向上移出页面区域，将不会触发任何 touch cancel 或 touch end 事件，而这个触点会被永远当作停留在页面上的有效触点。
               * 重复这样操作几次之后，屏幕上的触点数量将达到我们的事件系统所支持的最高触点数量，之后所有的触摸事件都将被忽略。
               * 所以这个新的机制可以在触点在一定时间内没有任何更新的情况下视为失效触点并从事件系统中移除。
               * 当然，这也可能移除一个真实的触点，如果用户的触点真的在一定时间段内完全没有移动（这在当前手机屏幕的灵敏度下会很难）。
               * 你可以修改这个值来获得你需要的效果，默认值是 5000 毫秒。
               * @default 5000
               */
              TOUCH_TIMEOUT: 5000,

              /**
               * @en
               * Boolean that indicates if the canvas contains an alpha channel, default sets to false for better performance.
               * Though if you want to make your canvas background transparent and show other dom elements at the background,
               * you can set it to true before {{game.init}}.
               * Web only.
               * @zh
               * 用于设置 Canvas 背景是否支持 alpha 通道，默认为 false，这样可以有更高的性能表现。
               * 如果你希望 Canvas 背景是透明的，并显示背后的其他 DOM 元素，你可以在 {{game.init}} 之前将这个值设为 true。
               * 仅支持 Web
               * @default false
               */
              ENABLE_TRANSPARENT_CANVAS: false,

              /**
               * @en
               * Boolean that indicates if the GL context is created with `antialias` option turned on, default value is false.
               * Set it to true could make your game graphics slightly smoother, like texture hard edges when rotated.
               * Whether to use this really depend on your game design and targeted platform,
               * device with retina display usually have good detail on graphics with or without this option,
               * you probably don't want antialias if your game style is pixel art based.
               * Also, it could have great performance impact with some browser / device using software MSAA.
               * You can set it to true before {{game.init}}.
               * Only affect OpenGL ES and WebGL backend
               * @zh
               * 用于设置在创建 GL Context 时是否开启抗锯齿选项，默认值是 false。
               * 将这个选项设置为 true 会让你的游戏画面稍稍平滑一些，比如旋转硬边贴图时的锯齿。是否开启这个选项很大程度上取决于你的游戏和面向的平台。
               * 在大多数拥有 retina 级别屏幕的设备上用户往往无法区分这个选项带来的变化；如果你的游戏选择像素艺术风格，你也多半不会想开启这个选项。
               * 同时，在少部分使用软件级别抗锯齿算法的设备或浏览器上，这个选项会对性能产生比较大的影响。
               * 你可以在 {{game.init}} 之前设置这个值，否则它不会生效。
               * 仅影响 WebGL 后端
               * @default true
               */
              ENABLE_WEBGL_ANTIALIAS: true,

              /**
               * @en
               * Used to set fxaa post-processing anti-aliasing, the default value is false.
               * @zh
               * 用于开启fxaa后处理抗锯齿, 默认值为false。
               * @default false
               */
              ENABLE_ANTIALIAS_FXAA: false,

              /**
               * @en
               * Used to set bloom, the default value is false.
               * @zh
               * 用于开启 bloom, 默认值为false。
               * @default false
               */
              ENABLE_BLOOM: false,

              /**
               * @en
               * Whether to clear the original image cache after uploaded a texture to GPU.
               * If cleared, [Dynamic Atlas](https://docs.cocos.com/creator/manual/en/advanced-topics/dynamic-atlas.html) will not be supported.
               * Normally you don't need to enable this option on the web platform, because Image object doesn't consume too much memory.
               * But on Wechat Game platform, the current version cache decoded data in Image object, which has high memory usage.
               * So we enabled this option by default on Wechat, so that we can release Image cache immediately after uploaded to GPU.
               * Currently not useful in 3D engine
               * @zh
               * 是否在将贴图上传至 GPU 之后删除原始图片缓存，删除之后图片将无法进行 [动态合图](https://docs.cocos.com/creator/manual/zh/advanced-topics/dynamic-atlas.html)。
               * 在 Web 平台，你通常不需要开启这个选项，因为在 Web 平台 Image 对象所占用的内存很小。
               * 但是在微信小游戏平台的当前版本，Image 对象会缓存解码后的图片数据，它所占用的内存空间很大。
               * 所以我们在微信平台默认开启了这个选项，这样我们就可以在上传 GL 贴图之后立即释放 Image 对象的内存，避免过高的内存占用。
               * 在 3D 引擎中暂时无效。
               * @default false
               */
              CLEANUP_IMAGE_CACHE: false,

              /**
                * @en
                * Whether to enable multi-touch.
                * @zh
                * 是否开启多点触摸
                * @default true
                */
              ENABLE_MULTI_TOUCH: true,

              /**
               * @en
               * The maximum size of the canvas pool used by Label, please adjust according to the number of label component in the same scene of the project
               * @zh
               * Label 使用的 canvas pool 的最大大小，请根据项目同场景的 label 数量进行调整
               * @default 20
               */
              MAX_LABEL_CANVAS_POOL_SIZE: 20,

              /**
               * @en
               * Boolean that indicates if enable highp precision data in structure with fragment shader.
               * Enable this option will make the variables defined by the HIGHP_VALUE_STRUCT_DEFINE macro in the shader more accurate, such as position.
               * Enable this option can avoid some distorted lighting effects. That depends on whether your game has abnormal lighting effects on this platform.
               * There will be a slight performance loss if enable this option, but the impact is not significant.
               * Only affect WebGL backend
               * @zh
               * 用于设置是否在片元着色器中使用结构体的时候，允许其中的数据使用highp精度
               * 将这个选项设置为 true 会让shader中使用HIGHP_VALUE_STRUCT_DEFINE宏定义的变量精度更高，比如位置信息等，避免出现一些失真的光照效果。是否开启这个选项很大程度上取决于你的游戏在此平台上是否出现了异常的表现。
               * 开启后会有轻微的性能损失，但影响不大。
               * 仅影响 WebGL 后端
               * @default false
               */
              ENABLE_WEBGL_HIGHP_STRUCT_VALUES: false,

              /**
               * @zh Batcher2D 中内存增量的大小（KB）
               * 这个值决定了当场景中存在的 2d 渲染组件的顶点数量超过当前 batcher2D 中可容纳的顶点数量时，内存扩充的增加量
               * 这个值越大，共用同一个 meshBuffer 的 2d 渲染组件数量会更多，但每次扩充所占用的内存也会更大
               * 默认值在标准格式（[[vfmtPosUvColor]]）下可容纳 4096 个顶点（4096*9*4/1024），你可以增加容量来提升每个批次可容纳的元素数量
               * @en The MeshBuffer chunk size in Batcher2D (KB)
               * This value determines the increase in memory expansion,
               * when the number of vertices of 2d rendering components present in the scene exceeds the number of vertices,
               * that can be accommodated in the current batcher2D.
               * The larger this value is, the more 2d rendering components will share the same meshBuffer, but the more memory will be used for each expansion
               * The default size can contain 4096 standard vertex ([[vfmtPosUvColor]]) in one buffer,
               * you can user larger buffer size to increase the elements count per 2d draw batch.
               * @default 144 KB
               */
              BATCHER2D_MEM_INCREMENT: 144
            };
            legacyCC.macro = macro;

            var tempVec2 = new Vec2();

            var TouchManager = /*#__PURE__*/function () {
              /**
               * A map from touch ID to touch object.
               */
              function TouchManager() {
                this._touchMap = void 0;
                this._maxTouches = 8;
                this._touchMap = new Map();
              }
              /**
               * The original touch object can't be modified, so we need to return the cloned touch object.
               * @param touch
               * @returns
               */


              var _proto = TouchManager.prototype;

              _proto._cloneTouch = function _cloneTouch(touch) {
                var touchID = touch.getID();
                touch.getStartLocation(tempVec2);
                var clonedTouch = new Touch(tempVec2.x, tempVec2.y, touchID);
                touch.getLocation(tempVec2);
                clonedTouch.setPoint(tempVec2.x, tempVec2.y);
                touch.getPreviousLocation(tempVec2);
                clonedTouch.setPrevPoint(tempVec2);
                return clonedTouch;
              }
              /**
               * Create the touch object at the touch start event callback.
               * we have some policy to create the touch object:
               * - If the number of touches doesn't exceed the max count, we create a touch object.
               * - If the number of touches exceeds the max count, we discard the timeout touch to create a new one.
               * - If the number of touches exceeds the max count and there is no timeout touch, we can't create any touch object.
               * @param touchID
               * @param x
               * @param y
               * @returns
               */
              ;

              _proto._createTouch = function _createTouch(touchID, x, y) {
                if (this._touchMap.has(touchID)) {
                  console.log('Cannot create the same touch object.');
                  return undefined;
                }

                var checkResult = this._checkTouchMapSizeMoreThanMax(touchID);

                if (checkResult) {
                  console.log('The touches is more than MAX_TOUCHES.'); // TODO: logID 2300

                  return undefined;
                }

                var touch = new Touch(x, y, touchID);

                this._touchMap.set(touchID, touch);

                this._updateTouch(touch, x, y);

                return this._cloneTouch(touch);
              }
              /**
               * Release the touch object at the touch end or touch cancel event callback.
               * @param touchID
               * @returns
               */
              ;

              _proto.releaseTouch = function releaseTouch(touchID) {
                if (!this._touchMap.has(touchID)) {
                  return;
                }

                this._touchMap["delete"](touchID);
              }
              /**
               * Get touch object by touch ID.
               * @param touchID
               * @returns
               */
              ;

              _proto.getTouch = function getTouch(touchID, x, y) {
                var touch = this._touchMap.get(touchID);

                if (!touch) {
                  touch = this._createTouch(touchID, x, y);
                } else {
                  this._updateTouch(touch, x, y);
                }

                return touch ? this._cloneTouch(touch) : undefined;
              }
              /**
               * Get all the current touches objects.
               * @returns
               */
              ;

              _proto.getAllTouches = function getAllTouches() {
                var _this = this;

                var touches = [];

                this._touchMap.forEach(function (touch) {
                  if (touch) {
                    var clonedTouch = _this._cloneTouch(touch);

                    touches.push(clonedTouch);
                  }
                });

                return touches;
              }
              /**
               * Update the location and previous location of current touch ID.
               * @param touchID
               * @param x The current location X
               * @param y The current location Y
               */
              ;

              _proto._updateTouch = function _updateTouch(touch, x, y) {
                touch.getLocation(tempVec2);
                touch.setPrevPoint(tempVec2);
                touch.setPoint(x, y);
              };

              _proto._checkTouchMapSizeMoreThanMax = function _checkTouchMapSizeMoreThanMax(touchID) {
                var _this2 = this;

                if (this._touchMap.has(touchID)) {
                  return false;
                }

                var maxSize = macro.ENABLE_MULTI_TOUCH ? this._maxTouches : 1;

                if (this._touchMap.size < maxSize) {
                  return false;
                } // Handle when exceed the max number of touches


                var now = performance.now();

                this._touchMap.forEach(function (touch) {
                  if (now - touch.lastModified > macro.TOUCH_TIMEOUT) {
                    console.log("The touches is more than MAX_TOUCHES, release touch id " + touch.getID() + "."); // TODO: need to handle touch cancel event when exceed the max number of touches ?

                    _this2.releaseTouch(touch.getID());
                  }
                });

                return maxSize >= this._touchMap.size;
              };

              return TouchManager;
            }();

            var touchManager = exports('touchManager', new TouchManager());

            var TouchInputSource = exports('TouchInputSource', /*#__PURE__*/function () {
              function TouchInputSource() {
                this._canvas = void 0;
                this._eventTarget = new EventTarget();

                if (systemInfo.hasFeature(Feature.INPUT_TOUCH)) {
                  this._canvas = document.getElementById('GameCanvas');

                  if (!this._canvas && !TEST) {
                    console.warn('failed to access canvas');
                  }

                  this._registerEvent();
                }
              }

              var _proto = TouchInputSource.prototype;

              _proto._registerEvent = function _registerEvent() {
                var _this$_canvas, _this$_canvas2, _this$_canvas3, _this$_canvas4;

                // IDEA: need to register on window ?
                (_this$_canvas = this._canvas) === null || _this$_canvas === void 0 ? void 0 : _this$_canvas.addEventListener('touchstart', this._createCallback(InputEventType.TOUCH_START));
                (_this$_canvas2 = this._canvas) === null || _this$_canvas2 === void 0 ? void 0 : _this$_canvas2.addEventListener('touchmove', this._createCallback(InputEventType.TOUCH_MOVE));
                (_this$_canvas3 = this._canvas) === null || _this$_canvas3 === void 0 ? void 0 : _this$_canvas3.addEventListener('touchend', this._createCallback(InputEventType.TOUCH_END));
                (_this$_canvas4 = this._canvas) === null || _this$_canvas4 === void 0 ? void 0 : _this$_canvas4.addEventListener('touchcancel', this._createCallback(InputEventType.TOUCH_CANCEL));
              };

              _proto._createCallback = function _createCallback(eventType) {
                var _this = this;

                return function (event) {
                  var canvasRect = _this._getCanvasRect();

                  var handleTouches = [];
                  var length = event.changedTouches.length;

                  for (var i = 0; i < length; ++i) {
                    var changedTouch = event.changedTouches[i];
                    var touchID = changedTouch.identifier;

                    if (touchID === null) {
                      continue;
                    }

                    var location = _this._getLocation(changedTouch, canvasRect);

                    var touch = touchManager.getTouch(touchID, location.x, location.y);

                    if (!touch) {
                      continue;
                    }

                    if (eventType === InputEventType.TOUCH_END || eventType === InputEventType.TOUCH_CANCEL) {
                      touchManager.releaseTouch(touchID);
                    }

                    handleTouches.push(touch);
                  }

                  event.stopPropagation();

                  if (event.target === _this._canvas) {
                    event.preventDefault();
                  }

                  if (eventType === InputEventType.TOUCH_START) {
                    var _this$_canvas5;

                    (_this$_canvas5 = _this._canvas) === null || _this$_canvas5 === void 0 ? void 0 : _this$_canvas5.focus();
                  }

                  if (handleTouches.length > 0) {
                    var eventTouch = new EventTouch(handleTouches, false, eventType, macro.ENABLE_MULTI_TOUCH ? touchManager.getAllTouches() : handleTouches);

                    _this._eventTarget.emit(eventType, eventTouch);
                  }
                };
              };

              _proto._getCanvasRect = function _getCanvasRect() {
                var canvas = this._canvas;
                var box = canvas === null || canvas === void 0 ? void 0 : canvas.getBoundingClientRect();

                if (box) {
                  return new Rect(box.x, box.y, box.width, box.height);
                }

                return new Rect(0, 0, 0, 0);
              };

              _proto._getLocation = function _getLocation(touch, canvasRect) {
                var x = touch.clientX - canvasRect.x;
                var y = canvasRect.y + canvasRect.height - touch.clientY;

                if (screenAdapter.isFrameRotated) {
                  var tmp = x;
                  x = canvasRect.height - y;
                  y = tmp;
                }

                var dpr = screenAdapter.devicePixelRatio;
                x *= dpr;
                y *= dpr;
                return new Vec2(x, y);
              };

              _proto.on = function on(eventType, callback, target) {
                this._eventTarget.on(eventType, callback, target);
              };

              return TouchInputSource;
            }());

        }
    };
});
