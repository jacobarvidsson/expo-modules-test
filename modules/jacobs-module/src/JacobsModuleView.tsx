import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { JacobsModuleViewProps } from './JacobsModule.types';

const NativeView: React.ComponentType<JacobsModuleViewProps> =
  requireNativeViewManager('JacobsModule');

export default function JacobsModuleView(props: JacobsModuleViewProps) {
  return <NativeView {...props} />;
}
