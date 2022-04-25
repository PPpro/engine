import { Event } from './event';

export class Button {
    get value () {
        return 0;
    }

    get keyCode () {
        return 1;
    }
}

export class EventButton extends Event {
    public deviceId = 0;
    public button: Button = new Button();
}
