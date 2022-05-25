import { AxisControl, ButtonControl, DpadControl, StickControl, Vec2Control } from '../control';

export class Gamepad1 {
    public static p1: Gamepad1;
    public static p2: Gamepad1;
    public static p3: Gamepad1;
    public static p4: Gamepad1;

    public buttonA!: ButtonControl;
    public buttonB!: ButtonControl;
    public buttonX!: ButtonControl;
    public buttonY!: ButtonControl;

    public leftStick!: StickControl;
    public rightStick!: StickControl;
    public dpad!: DpadControl;
}
