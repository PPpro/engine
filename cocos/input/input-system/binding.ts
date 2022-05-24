import { Interaction } from './interaction';
import { InputControl } from './control';
import { Transformer } from './transformer';

export interface InputBinding<T=unknown> {
    control: InputControl<T>,
    interactions?: Interaction[],
    transformers?: Transformer<T>[],
}
