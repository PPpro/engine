import { Vec2 } from '../core/math/vec2'
import { Vec3 } from '../core/math/vec3';

export abstract class InputControl<T> {
    abstract readValue(): T;
}

export class AxisControl extends InputControl<number> {
    readValue(): number {
        throw new Error("Method not implemented.");
    }
}

export class Vec2Control extends InputControl<Vec2> {
    readValue(): Vec2 {
        throw new Error('Method not implemented.');
    }

}

export class Vec3Control extends InputControl<Vec3> {
    readValue(): Vec3 {
        throw new Error('Method not implemented.');
    }

}

export class ButtonControl extends AxisControl {

}

export class KeyControl extends AxisControl {

}

