import { cn } from '@/lib/utils';
import { styles } from '@/lib/styles';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as React from 'react';
import { DialogDescriptionProps } from '../types';

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  DialogDescriptionProps
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description ref={ref} className={cn(styles.text.hint, className)} {...props} />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export { DialogDescription };
