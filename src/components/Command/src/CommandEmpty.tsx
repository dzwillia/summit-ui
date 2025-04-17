import { Primitive } from '@radix-ui/react-primitive';
import { Command as CommandPrimitive } from 'cmdk';
import * as React from 'react';
import { CommandEmptyProps } from '../types';

const PrimitiveDiv = Primitive.div;
const emptyClassName = 'p-3 py-2.5 text-sm';

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  CommandEmptyProps
>((props, ref) => <CommandPrimitive.Empty ref={ref} className={emptyClassName} {...props} />);
CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

/**
 * Same as above but without special show/hide logic based on filtered count
 * ref: https://github.com/pacocoursey/cmdk/blob/main/cmdk/src/index.tsx#L896-L904
 */
const CommandForceEmpty = React.forwardRef<HTMLDivElement, CommandEmptyProps>(
  (props, forwardedRef) => {
    return (
      <PrimitiveDiv
        ref={forwardedRef}
        className={emptyClassName}
        {...props}
        cmdk-empty=""
        role="presentation"
      />
    );
  },
);
CommandForceEmpty.displayName = 'CommandForceEmpty';

export { CommandEmpty, CommandForceEmpty };
