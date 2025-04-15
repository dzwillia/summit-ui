import { cn } from '@/lib/utils';
import { styles } from '@/lib/styles';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { DialogTitleProps } from '../types';

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  DialogTitleProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(styles.text.title, 'leading-none tracking-tight', className)}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

export { DialogTitle };
