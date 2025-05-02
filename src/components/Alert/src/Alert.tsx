import { cn } from '@/lib/utils';
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import * as React from 'react';
import { alertHeadingVariants, alertVariants } from '../constants';
import { AlertProps } from '../types';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { className, variant, size = 'default', heading, headingLevel = 'h2', children, ...props },
    ref,
  ) => {
    const HeadingTag = headingLevel;
    const icons = {
      success: <CheckCircle2 />,
      warning: <AlertTriangle />,
      danger: <AlertCircle />,
      info: <Info />,
    };

    return (
      <div ref={ref} className={cn(alertVariants({ variant, size }), className)} {...props}>
        {icons[variant]}
        <div className="flex-1">
          {heading && (
            <HeadingTag className={cn(alertHeadingVariants({ variant, size }))}>
              {heading}
            </HeadingTag>
          )}
          {children}
        </div>
      </div>
    );
  },
);
Alert.displayName = 'Alert';

export { Alert };
