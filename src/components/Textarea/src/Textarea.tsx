import { styles } from '@/lib/styles';
import { cn } from '@/lib/utils';
import * as React from 'react';
import { TextareaProps } from '../types';

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea className={cn(styles.input, 'min-h-[5rem]', className)} ref={ref} {...props} />
    );
  },
);
Textarea.displayName = 'Textarea';

export { Textarea };
