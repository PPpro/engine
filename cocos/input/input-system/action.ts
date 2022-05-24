import { v2, Vec2, Vec3 } from '../../core';
import { InputBinding } from './binding';

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

export class InputActionAxis extends InputAction<number> {
    readValue<T> (): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBinding: InputBinding<number>[]) {
        super(inputBinding);
    }
}

export class InputActionVec2 extends InputAction<Vec2> {
    readValue<T> (): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBinding: InputBinding<Vec2>[]) {
        super(inputBinding);
    }
}

export class InputActionVec3 extends InputAction<Vec3> {
    readValue<T> (): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBinding: InputBinding<Vec3>[]) {
        super(inputBinding);
    }
}
