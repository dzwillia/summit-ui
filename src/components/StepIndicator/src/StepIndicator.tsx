import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import * as React from 'react';
import { StepIndicatorProps } from '../types';

const StepIndicator = React.forwardRef<HTMLDivElement, StepIndicatorProps>(
  ({ steps, currentStep, orientation = 'horizontal', size = 'default', className }, ref) => {
    const sizeStyles = {
      sm: {
        container: 'gap-4',
        circle: 'h-6 w-6 text-xs',
        connector: {
          horizontal: 'h-[2px] w-[calc(100%_-_1.5rem)] left-[calc(50%_+_1.25rem)] top-3',
          vertical: 'h-full w-0.5 left-[0.6875rem] top-[1.25rem]',
        },
        text: 'text-sm',
      },
      default: {
        container: 'gap-6',
        circle: 'h-8 w-8 text-sm',
        connector: {
          horizontal:
            'h-[3px] w-[calc(100%_-_1.5rem)] left-[calc(50%_+_1.5rem)] top-[calc(1rem_-_1px)]',
          vertical: 'h-full w-[3px] left-[0.9375rem] top-[1.75rem]',
        },
        text: 'text-base',
      },
      lg: {
        container: 'gap-8',
        circle: 'h-10 w-10 text-base',
        connector: {
          horizontal:
            'h-[4px] w-[calc(100%_-_1.5rem)] left-[calc(50%_+_1.75rem)] top-[calc(1.25rem_-_1px)]',
          vertical: 'h-full w-[4px] left-[1.125rem] top-[2.25rem]',
        },
        text: 'text-lg',
      },
    };

    return (
      <div
        ref={ref}
        className={cn(
          'flex',
          orientation === 'vertical' ? 'flex-col' : 'flex-row',
          sizeStyles[size].container,
          className,
        )}
      >
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <div
              key={step.id}
              className={cn(
                'relative flex',
                orientation === 'vertical' ? 'items-start' : 'flex-1 items-center justify-center',
              )}
            >
              <div
                className={cn(
                  'relative flex',
                  orientation === 'vertical' ? 'flex-row items-start' : 'flex-col items-center',
                )}
              >
                {/* Step circle */}
                <div
                  className={cn(
                    'relative z-10 flex items-center justify-center rounded-full border-[3px] bg-white font-bold',
                    sizeStyles[size].circle,
                    isCompleted
                      ? 'border-primary-400 bg-primary-400 text-white'
                      : isCurrent
                        ? 'border-primary-400 text-primary-400'
                        : 'border-muted text-muted-foreground',
                  )}
                >
                  {isCompleted ? (
                    <Check className="h-4 w-4" strokeWidth={3} />
                  ) : (
                    <span>{(index + 1).toString()}</span>
                  )}
                </div>

                {/* Step text */}
                <div
                  className={cn(
                    'flex flex-col',
                    orientation === 'vertical' ? 'ml-4' : 'mt-2 text-center',
                  )}
                >
                  <span
                    className={cn(
                      sizeStyles[size].text,
                      'font-medium',
                      isCurrent || isCompleted ? 'text-foreground' : 'text-muted-foreground',
                    )}
                  >
                    {step.label}
                  </span>
                  {step.description ? (
                    <span
                      className={cn(
                        'text-sm text-muted-foreground',
                        orientation === 'horizontal' && 'text-center',
                      )}
                    >
                      {step.description}
                    </span>
                  ) : null}
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 ? (
                <div
                  className={cn(
                    'bg-border absolute',
                    orientation === 'vertical'
                      ? sizeStyles[size].connector.vertical
                      : sizeStyles[size].connector.horizontal,
                    isCompleted && 'bg-primary-400',
                  )}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    );
  },
);
StepIndicator.displayName = 'StepIndicator';

export { StepIndicator };
