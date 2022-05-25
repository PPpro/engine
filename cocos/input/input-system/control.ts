import { Vec2 } from '../../core/math/vec2';
import { Vec3 } from '../../core/math/vec3';

// Action = [ActionBinding]
// ActionBinding(Trigger) = control(TriggerCondition) + interaction/trigger(TriggerCondition) + processor/modifier
// ActionMap/ActionContext

export abstract class InputControl<T=unknown> {
    abstract readValue(): T;
}

export class AxisControl extends InputControl<number> {
    readValue (): number {
        throw new Error('Method not implemented.');
    }
}

export class Vec2Control extends InputControl<Vec2> {
    readValue (): Vec2 {
        throw new Error('Method not implemented.');
    }
}

export class Vec3Control extends InputControl<Vec3> {
    readValue (): Vec3 {
        throw new Error('Method not implemented.');
    }
}

export class CompositeControlAxis1D extends InputControl<number> {
    public positive!: AxisControl;
    public negative!: AxisControl;
    constructor (options: {
        positive: AxisControl,
        negative: AxisControl
    }) {
        super();
    }

    readValue (): number {
        throw new Error('Method not implemented.');
    }
}

export class CompositeControlAxis2D extends InputControl<Vec2> {
    constructor (options: {
        up: AxisControl,
        down: AxisControl,
        left: AxisControl,
        right: AxisControl,
    }) {
        super();
    }
    readValue (): Vec2 {
        throw new Error('Method not implemented.');
    }
}

export class CompositeControlAxis3D extends InputControl<Vec3> {
    constructor (options: {
        up: AxisControl,
        down: AxisControl,
        left: AxisControl,
        right: AxisControl,
        forward: AxisControl,
        backward: AxisControl,
    }) {
        super();
    }

    readValue (): Vec3 {
        throw new Error('Method not implemented.');
    }
}

export class ButtonControl extends AxisControl {

}

export class KeyControl extends AxisControl {

}

export class StickControl extends CompositeControlAxis2D {
    public xAxis!: CompositeControlAxis1D;
    public yAxis!: CompositeControlAxis1D;

    public left!: ButtonControl;
    public right!: ButtonControl;
    public up!: ButtonControl;
    public down!: ButtonControl;
}

export class DpadControl extends Vec2Control {
    public left!: ButtonControl;
    public right!: ButtonControl;
    public up!: ButtonControl;
    public down!: ButtonControl;
}
