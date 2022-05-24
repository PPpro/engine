import { v2, Vec2, Vec3 } from '../../core';
import { InputBinding } from './binding';

export class InputActionContext {
    static fromJson (json: string): InputActionContext { throw new Error(); }
    public toJson (): string { throw new Error(); }
    public enable () { }
    public disable () { }

    public addAction (action: InputAction<unknown>): void { throw new Error(); }
    public getAction (name: string): InputAction<unknown> { throw new Error(); }
    public removeAction (name: string): void { throw new Error(); }
}

export abstract class InputAction<T> {
    constructor (inputBindingList: InputBinding<T>[]) {
    }

    abstract readValue<T> (): T;
    abstract addBinding(inputBindingList: InputBinding<T>[]): void;
    abstract addBinding(inputBinding: InputBinding<T>): void;
}

export class InputActionAxis extends InputAction<number> {
    addBinding(inputBindingList: InputBinding<number>[]): void;
    addBinding(inputBinding: InputBinding<number>): void;
    addBinding(inputBindingList: InputBinding<number>[] | InputBinding<number>): void {
        if (!(inputBindingList instanceof Array)) {
            inputBindingList = [inputBindingList];
        }
        throw new Error();
    }
    readValue<T> (): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBindingList: InputBinding<number>[]) {
        super(inputBindingList);
    }
}

export class InputActionVec2 extends InputAction<Vec2> {
    addBinding(inputBindingList: InputBinding<Vec2>[]): void;
    addBinding(inputBinding: InputBinding<Vec2>): void;
    addBinding(inputBindingList: any): void {
        throw new Error('Method not implemented.');
    }
    readValue<T> (): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBindingList: InputBinding<Vec2>[]) {
        super(inputBindingList);
    }
}

export class InputActionVec3 extends InputAction<Vec3> {
    addBinding(inputBindingList: InputBinding<Vec3>[]): void;
    addBinding(inputBinding: InputBinding<Vec3>): void;
    addBinding(inputBindingList: any): void {
        throw new Error('Method not implemented.');
    }
    readValue<T> (): T {
        throw new Error('Method not implemented.');
    }
    constructor (inputBindingList: InputBinding<Vec3>[]) {
        super(inputBindingList);
    }
}
