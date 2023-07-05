import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to JacobsModule.web.ts
// and on native platforms to JacobsModule.ts
import JacobsModule from './src/JacobsModule';
import JacobsModuleView from './src/JacobsModuleView';
import { ChangeEventPayload, JacobsModuleViewProps } from './src/JacobsModule.types';

// Get the native constant value.
export const PI = JacobsModule.PI;

export function hello(): string {
  return JacobsModule.hello();
}

export async function setValueAsync(value: string) {
  return await JacobsModule.setValueAsync(value);
}

const emitter = new EventEmitter(JacobsModule ?? NativeModulesProxy.JacobsModule);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { JacobsModuleView, JacobsModuleViewProps, ChangeEventPayload };
