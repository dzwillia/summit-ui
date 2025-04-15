import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import * as React from 'react';
import { Button } from '../../Button';
import { Calendar } from '../../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../../Popover';
import { DateRangePickerProps } from '../types';

const DateRangePicker = React.forwardRef<HTMLButtonElement, DateRangePickerProps>(
  (
    {
      value,
      onChange,
      placeholder = {
        from: 'Pick start date',
        to: 'Pick end date',
      },
      className,
    },
    ref,
  ) => {
    const selectedValue = value.from ? { from: value.from, to: value.to ?? undefined } : undefined;

    return (
      <div className={cn('grid gap-2', className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              id="date"
              variant={'outline'}
              className={cn(
                'w-full justify-start text-left font-normal',
                !value.from && !value.to && 'text-muted-foreground',
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {(() => {
                if (value.from) {
                  if (value.to) {
                    return (
                      <>
                        {format(value.from, 'LLLL dd, y')} - {format(value.to, 'LLLL dd, y')}
                      </>
                    );
                  }
                  return format(value.from, 'LLLL dd, y');
                }
                return <span>{placeholder.from}</span>;
              })()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={value.from}
              selected={selectedValue}
              onSelect={range => {
                if (!range) return;
                onChange({ from: range.from, to: range?.to });
              }}
              numberOfMonths={2}
              modifiers={{
                today: () => false, // Disable the "today" modifier by returning false
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    );
  },
);
DateRangePicker.displayName = 'DateRangePicker';

export { DateRangePicker };
