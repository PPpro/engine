import { Color, Mat3, Quat, Rect, Size, Vec2, Vec3, Vec4 } from '@cc/core/math';
import { CCClass } from './data/class'

CCClass.fastDefine('cc.Color', Color, { r: 0, g: 0, b: 0, a: 255 });
CCClass.fastDefine('cc.Quat', Quat, { x: 0, y: 0, z: 0, w: 1 });
CCClass.fastDefine('cc.Rect', Rect, { x: 0, y: 0, width: 0, height: 0 });
CCClass.fastDefine('cc.Size', Size, { width: 0, height: 0 });
CCClass.fastDefine('cc.Vec2', Vec2, { x: 0, y: 0 });
CCClass.fastDefine('cc.Vec3', Vec3, { x: 0, y: 0, z: 0 });
CCClass.fastDefine('cc.Vec4', Vec4, { x: 0, y: 0, z: 0, w: 0 });
CCClass.fastDefine('cc.Mat3', Mat3, {
    m00: 1,
    m01: 0,
    m02: 0,
    m03: 0,
    m04: 1,
    m05: 0,
    m06: 0,
    m07: 0,
    m08: 1,
});