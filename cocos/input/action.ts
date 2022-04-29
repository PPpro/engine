export class InputActionContext {
    public enable () { }
    public disable () { }
    public addAction (action: InputAction): InputAction { return new InputAction('move'); }
}


export class InputAction {
    constructor(name: string, inputBindingList?: InputBinding[]) {}
    enable () {}
    disable () {}

    onStarted (cb: () => void) {}
    offStarted (cb: () => void) {}

    onPerformed (cb: () => void) {}
    offPerformed (cb: () => void) {}

    onCanceled (cb: () => void) {}
    offCanceled (cb: () => void) {}
}

enum BindingPath {
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

interface BindingData {
    path: BindingPath,
}

export class InputBinding {
    constructor (data: BindingData) {}
}