export class InputActionContext {
    public enable () { }
    public disable () { }
    public addAction (action: InputAction): InputAction { return new InputAction('sss'); }
}


export class InputAction {
    constructor(name: string, inputBindingList?: InputBinding[]) {}
}

export class InputBinding {

}