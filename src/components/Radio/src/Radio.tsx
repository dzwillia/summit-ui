import { Label } from '@/components/Label';
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
            'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}>
          <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
            <Circle className="h-2.5 w-2.5 fill-current text-current" />
          </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
        {label && (typeof label === 'string' ? <Label htmlFor={id}>{label}</Label> : label)}
      </div>
    );
  }
);
Radio.displayName = 'Radio';

export { Radio };
