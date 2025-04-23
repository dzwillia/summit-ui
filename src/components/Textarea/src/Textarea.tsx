import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { TextareaProps } from '../types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, isDisabled = false, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={isDisabled}
        className={cn(styles.input, 'min-h-[5rem]', className)}
        {...props}
      />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
