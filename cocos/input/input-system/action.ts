import { v2, Vec2, Vec3 } from '../../core';
import { InputBinding } from './binding';

export class InputActionContext {
    public enable () { }
    public disable () { }

    static fromJson (json: string): InputActionContext { throw new Error(); }
    public toJson (): string { throw new Error(); }

    public addAction (action: InputAction<unknown>): void { throw new Error(); }
    public getAction (name: string): InputAction<unknown> { throw new Error(); }
    public removeAction (name: string): void { throw new Error(); }
}

export abstract class InputAction<T> {
    constructor (name: string, inputBindingList: InputBinding<T>[]) {
    }

    readValue<T> (): T { throw new Error(); }
    addBinding(inputBindingList: InputBinding<T>[]): void;
    addBinding(inputBinding: InputBinding<T>): void;
    addBinding (inputBindingList: InputBinding<T> | InputBinding<T>[]): void {

    }
}

export class InputActionAxis1D extends InputAction<number> {
}

export class InputActionAxis2D extends InputAction<Vec2> {
}

export class InputActionAxis3D extends InputAction<Vec3> {
}
