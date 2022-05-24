import { AxisControl, Vec2Control } from '../control';

export class Gamepad1 {
    public static current: Gamepad1;
    public static all: Gamepad1[];

    public buttonA!: AxisControl;
    public buttonB!: AxisControl;
    public buttonX!: AxisControl;
    public buttonY!: AxisControl;

    public leftStick!: Vec2Control;
    public rightStick!: Vec2Control;
    public dpadUp!: AxisControl;
    public dpadRight!: AxisControl;
    public dpadLeft!: AxisControl;
    public dpadDonw!: AxisControl;
}
