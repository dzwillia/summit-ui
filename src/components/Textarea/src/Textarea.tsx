import { cn } from '@/lib/utils';
import { styles } from '@/lib/styles';
import * as React from 'react';
import { TextareaProps } from '../types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          styles.input,
          'min-h-[80px]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };