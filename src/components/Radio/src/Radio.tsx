import { Label } from '@/components/Label';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { RadioProps } from '../types';

const Radio = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioProps>(
  (
    {
      className,
      label,
      description,
      id,
      'aria-label': ariaLabel,
      isChecked = false,
      isDisabled = false,
      variant = 'default',
      ...props
    },
    ref,
  ) => {
    if (!label && !ariaLabel) {
      throw new Error('Radio must have either a label prop or an aria-label attribute');
    }
    if (label && ariaLabel) {
      throw new Error(
        'Radio must have either a label prop or an aria-label attribute, but not both',
      );
    }

    const radioCircle =
      'aspect-square h-5 w-5 rounded-full border-2 border-gray-500 text-primary-400 ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary-400 ';

    if (variant === 'tile') {
      return (
        <div
          className={cn(
            'relative rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground',
            isChecked && 'border-primary-400',
            isDisabled && 'cursor-not-allowed opacity-50',
            className,
          )}
        >
          <div className="flex items-start gap-3">
            <RadioGroupPrimitive.Item
              ref={ref}
              id={id}
              className={cn(
                styles.focusRingVisible,
                styles.focusRingVisibleSm,
                radioCircle,
                'mt-1',
              )}
              checked={isChecked}
              disabled={isDisabled}
              aria-label={ariaLabel}
              {...props}
            >
              <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <Circle className="h-3 w-3 fill-current text-current" />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <div className="space-y-1">
              {label ? (
                <Label htmlFor={id} className="font-medium">
                  {label}
                </Label>
              ) : null}
              {description ? <p className="text-sm text-muted-foreground">{description}</p> : null}
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="flex items-center gap-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          id={id}
          className={cn(styles.focusRingVisible, styles.focusRingVisibleSm, radioCircle, className)}
          checked={isChecked}
          disabled={isDisabled}
          aria-label={ariaLabel}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle className="h-3 w-3 fill-current text-current" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label ? typeof label === 'string' ? <Label htmlFor={id}>{label}</Label> : label : null}
      </div>
    );
  },
);
Radio.displayName = 'Radio';

export { Radio };
