import { v2, Vec2 } from '../core';
import { InputControl } from './control';
import { KeyCode } from './types';

export class InputActionContext {
    public enable () { }
    public disable () { }
    public addAction (action: InputAction): InputAction { throw new Error(); }
}

export enum InputActionType {
    BUTTON = 'BUTTON',
    VALUE = 'VALUE',
    // PASS_THROUGH,
}

export interface InputActionTypeValueMap {
    [InputActionType.BUTTON]: boolean;
    [InputActionType.VALUE]: Vec2;
}

export class InputAction {
    constructor (name: string, type: InputActionType, inputBindingList?: InputBinding[]) {}
    enable () {}
    disable () {}

    addBinding (binding: InputBinding) {}

    readValue<K> (): K;
    readValue () {
        return 1;
    }

    onStarted (cb: () => void) {}
    offStarted (cb: () => void) {}

    onPerformed (cb: () => void) {}
    offPerformed (cb: () => void) {}

    onCanceled (cb: () => void) {}
    offCanceled (cb: () => void) {}
}

export enum BindingPath {
    PS4_TRIANGLE,
    PS4_RECT,
    PS4_CIRCLE,
    PS4_X,
    pS4_DPAD_UP,
    pS4_DPAD_DOWN,
    PS4_DPAD_LEFT,
    PS4_DPAD_RIGHT,
    PS4_LEFT_JOY_STICK,
    PS4_RIGHT_JOY_STICK,
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

interface BindingData {
    path: KeyCode | BindingPath,
    interactions: Interaction[],
}

export class InputBinding {
    constructor (control: InputControl) {}
}
