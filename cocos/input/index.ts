import { InputEventType, SystemEventType } from '@cc/pal/input';
import { NodeEventType } from '../core/scene-graph/node-event';
import './deprecated';

export { input, Input } from './input';
export { systemEvent, SystemEvent } from './system-event';

export type SystemEventTypeUnion = SystemEventType | NodeEventType | InputEventType | string;
