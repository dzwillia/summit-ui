import { Label } from '@/components/Label';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import * as React from 'react';
import { CheckboxProps } from '../types';

const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  (
    {
      className,
      label,
      id,
      'aria-label': ariaLabel,
      isChecked = false,
      isDisabled = false,
      ...props
    },
    ref,
  ) => {
    if (!label && !ariaLabel) {
      throw new Error('Checkbox must have either a label prop or an aria-label attribute');
    }
    if (label && ariaLabel) {
      throw new Error(
        'Checkbox must have either a label prop or an aria-label attribute, but not both',
      );
    }

    return (
      <div className="flex items-center space-x-2">
        <CheckboxPrimitive.Root
          ref={ref}
          id={id}
          className={cn(
            styles.focusRingVisible,
            styles.focusRingVisibleSm,
            'peer h-5 w-5 shrink-0 rounded-sm border-2 border-gray-500 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
            className,
          )}
          checked={isChecked}
          disabled={isDisabled}
          aria-label={ariaLabel}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            className={cn('flex items-center justify-center text-current')}
          >
            <Check className="h-4 w-4" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (typeof label === 'string' ? <Label htmlFor={id}>{label}</Label> : label)}
      </div>
    );
  },
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
