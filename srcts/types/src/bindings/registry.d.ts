import { Callbacks } from "../utils/callbacks";
interface BindingBase {
  name: string;
}
interface BindingObj<Binding> {
  binding: Binding;
  priority: number;
  name?: string;
}
declare class BindingRegistry<Binding extends BindingBase> {
  name: string;
  bindings: Array<BindingObj<Binding>>;
  bindingNames: {
    [key: string]: BindingObj<Binding>;
  };
  registerCallbacks: Callbacks;
  register(binding: Binding, bindingName: string, priority?: number): void;
  onRegister(fn: () => void, once?: boolean): void;
  setPriority(bindingName: string, priority: number): void;
  getPriority(bindingName: string): number | false;
  getBindings(): Array<BindingObj<Binding>>;
}
export { BindingRegistry };
