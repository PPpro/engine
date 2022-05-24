import { Vec2 } from "../../core/math";

export abstract class Transformer<T> {
    abstract transform (v: T): T;
}

export abstract class TransformerScale<T> extends Transformer<T> {
}

export abstract class TransformerInvert<T> extends Transformer<T> {
}

export abstract class TransformerDeadzone<T> extends Transformer<T> {
}

export abstract class TransformerNormalize<T> extends Transformer<T> {
}

// Axis
export class TransformerScaleAxis extends TransformerScale<number> {
    transform(v: number): number {
        throw new Error("Method not implemented.");
    }
}

export class TransformerInvertAxis extends TransformerInvert<number> {
    transform(v: number): number {
        throw new Error("Method not implemented.");
    }
}

export class TransformerDeadzoneAxis extends TransformerDeadzone<number> {
    transform(v: number): number {
        throw new Error("Method not implemented.");
    }
}

// Vec2
export class TransformerScaleVec2 extends TransformerScale<Vec2> {
    transform(v: Vec2): Vec2 {
        throw new Error("Method not implemented.");
    }
}

export class TransformerInvertVec2 extends TransformerInvert<Vec2> {
    transform(v: Vec2): Vec2 {
        throw new Error("Method not implemented.");
    }
}

export class TransformerDeadzoneVec2 extends TransformerDeadzone<Vec2> {
    transform(v: Vec2): Vec2 {
        throw new Error("Method not implemented.");
    }
}

export class TransformerNormalizeVec2 extends TransformerNormalize<Vec2> {
    transform(v: Vec2): Vec2 {
        throw new Error("Method not implemented.");
    }
}
