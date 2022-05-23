import { v2, Vec2, Vec3 } from '../core';
import { AxisControl, InputControl, Vec2Control } from './control';
import { KeyCode } from './types';

export class InputActionContext {
    public enable () { }
    public disable () { }
    public addAction (action: InputAction<unknown>): void { throw new Error(); }
}

export abstract class InputAction<T> {
    constructor (inputBinding: InputBinding<T>[]) {
    }

    abstract readValue<T> (): T;
}

export class AxisAction extends InputAction<number> {
    readValue<T> (): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBinding: InputBinding<number>[]) {
        super(inputBinding);
    }
}

export class Vec2Action extends InputAction<Vec2> {
    readValue<T>(): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBinding: InputBinding<Vec2>[]) {
        super(inputBinding);
    }
}

export class Vec3Action extends InputAction<Vec3> {
    readValue<T>(): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBinding: InputBinding<Vec3>[]) {
        super(inputBinding);
    }
}

export abstract class Interaction {

}

export class InteractionTap extends Interaction {
    constructor (pressPoint: number, maxTapTime: number) { super(); }
}

export class InteractionMultiTap extends Interaction {
    constructor (pressPoint: number, tapCount: number, maxTapTime: number, timeSpacing: number) { super(); }
}

export class InteractionSlowTap extends Interaction {
    constructor (pressPoint: number, minTime: number) { super(); }
}

export class InteractionHold extends Interaction {
    constructor (pressPoint: number, holdTime: number) { super(); }
}

export class InteractionPress extends Interaction {
    constructor (pressPoint: number, pressType: 'press' | 'release' | 'press and release') { super(); }
}

export interface InputBinding<T=unknown> {
    control: InputControl<T>,
    interactions: Interaction[],
}
