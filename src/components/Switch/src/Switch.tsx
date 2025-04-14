import { Label } from '@/components/Label';
import { cn } from '@/lib/utils';
import * as SwitchPrimitives from '@radix-ui/react-switch';
import * as React from 'react';
import { SwitchProps } from '../types';

const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitives.Root>, SwitchProps>(
  ({ className, label, id, 'aria-label': ariaLabel, ...props }, ref) => {
    if (!label && !ariaLabel) {
      throw new Error('Switch must have either a label prop or an aria-label attribute');
    }

    return (
      <div className="flex items-center space-x-2">
        <SwitchPrimitives.Root
          className={cn(
            'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
            className
          )}
          {...props}
          ref={ref}
          id={id}>
          <SwitchPrimitives.Thumb
            className={cn(
              'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
            )}
          />
        </SwitchPrimitives.Root>
        {label && (typeof label === 'string' ? <Label htmlFor={id}>{label}</Label> : label)}
      </div>
    );
  }
);
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
