import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { InputProps } from '../types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, transform = 'none', onChange, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!onChange) return;

      let value = event.target.value;
      const transforms = Array.isArray(transform) ? transform : [transform];

      transforms.forEach(t => {
        switch (t) {
          case 'uppercase':
            value = value.toUpperCase();
            break;
          case 'lowercase':
            value = value.toLowerCase();
            break;
          case 'trim':
            value = value.trim();
            break;
          default:
            break;
        }
      });

      // Update the input value directly for immediate feedback
      event.target.value = value;
      onChange(event);
    };

    return (
      <input
        type={type}
        className={cn(styles.input, className)}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };
