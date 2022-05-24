import { InputActionAxis, AxisControl, GamepadCode, Input, input, InputAction, InputActionContext, InteractionHold, TransformerScaleVec2, TransformerScaleAxis, TransformerInvert, TransformerInvertAxis, KeyControl, KeyCode } from 'cc';

let iac = new InputActionContext();
let ia = new InputActionAxis([
    {
        control: new AxisControl(),  // Gamepad.buttonA
        interactions: [new InteractionHold(10, 10)],  // interactionHold, {pressPoint: 10, holdTime: 10}
        transformers: [new TransformerScaleAxis(), new TransformerInvertAxis()],  // [transformerScaleAxis, { scale: 2 }], [transformInvertAxis]
    }
]);

iac.addAction(ia);
iac.enable();

// rebinding
let iac2 = InputActionContext.fromJson('test');
let ia2 = iac2.getAction('jump') as InputActionAxis;
ia2.addBinding({
    control: new AxisControl(),
});
iac2.toJson();

// 兼容方案
input.on(Input.EventType.MOUSE_DOWN, e => {
    e.getDelta();
    e.getLocation();  // Mouse.location.readValue()
    e.getUILocation();  // Mouse.location.readValue() + camera.screenToWorld
    e.getPreviousLocation();
    e.getScrollX();  // Mouse.scroll.readValue().x
});

input.on(Input.EventType.KEY_DOWN, e => {
    if (e.keyCode === KeyCode.KEY_A) {  // Keyboard.keyA.readValue() Keyboard.keyA.isPressedThisFrame

    }
});

input.on(Input.EventType.DEVICEMOTION, e => {
    e.acc  // Accelerometer.acc.readValue()
})

input.on(Input.EventType.GAMEPAD_INPUT, e => {
    let gp = e.gamepads[0];
    gp.connected;
    gp.id;
    gp.getValue(GamepadCode.AXIS_LEFT_STICK_X);  // 改成 gp.leftStickX.readValue();
});

