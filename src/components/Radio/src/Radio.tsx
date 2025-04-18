import { Label } from '@/components/Label';
import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import * as React from 'react';
import { RadioProps } from '../types';

const Radio = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioProps>(
  ({ className, label, id, 'aria-label': ariaLabel, ...props }, ref) => {
    if (!label && !ariaLabel) {
      throw new Error('Radio must have either a label prop or an aria-label attribute');
    }

    return (
      <div className="flex items-center space-x-2">
        <RadioGroupPrimitive.Item
          ref={ref}
          id={id}
          className={cn(
            styles.focusRingVisible,
            styles.focusRingVisibleSm,
            'aspect-square h-5 w-5 rounded-full border-2 border-gray-500 text-primary ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary ',
            className,
          )}
          {...props}
        >
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle className="h-3 w-3 fill-current text-current" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (typeof label === 'string' ? <Label htmlFor={id}>{label}</Label> : label)}
      </div>
    );
  },
);
Radio.displayName = 'Radio';

export { Radio };
