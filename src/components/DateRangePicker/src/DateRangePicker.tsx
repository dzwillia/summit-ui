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
    const handleDayClick = (day: Date) => {
      const { from, to } = value;

      // If no start date is selected, start a new date range
      if (!from) return onChange({ from: day, to: undefined });

      // If selecting a day before the current start date, start a new date range
      if (day < from) return onChange({ from: day, to: undefined });

      // If a complete date range exists, start a new date range
      if (from && to) return onChange({ from: day, to: undefined });

      // If start date is selected and selecting a day after it, complete the date range
      if (day > from) return onChange({ from, to: day });

      // If selecting the start date, clear the date range
      if (day.getTime() === from.getTime()) return onChange({ from: undefined, to: undefined });
    };

    return (
      <div className={cn('grid gap-2', className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              ref={ref}
              id="date"
              variant="input"
              className={cn(
                'w-full justify-start text-left font-normal',
                !value.from && !value.to && 'text-muted-foreground',
              )}
              data-component="date-range-picker"
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
              selected={{
                from: value.from,
                to: value.to,
              }}
              onDayClick={handleDayClick}
              numberOfMonths={2}
              modifiers={{
                today: () => false, // Disable the "today" modifier
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
