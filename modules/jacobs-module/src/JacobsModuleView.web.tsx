import * as React from 'react';

import { JacobsModuleViewProps } from './JacobsModule.types';

export default function JacobsModuleView(props: JacobsModuleViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
