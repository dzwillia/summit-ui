import { cn } from '@/lib/utils';
import { styles } from '@/lib/styles';
import * as React from 'react';
import { InputProps } from '../types';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(styles.input, className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };