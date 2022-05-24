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
