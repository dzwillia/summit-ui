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
      // If no start date is selected or clicking before current start date,
      // or if a complete range exists, start a new range
      if (!value.from || day < value.from || (value.from && value.to)) {
        onChange({ from: day, to: undefined });
        return;
      }

      // If start date is selected and clicking after it, complete the range
      if (value.from && day > value.from) {
        onChange({ from: value.from, to: day });
        return;
      }

      // If clicking the start date, clear the range
      if (value.from && day.getTime() === value.from.getTime()) {
        onChange({ from: undefined, to: undefined });
      }
    };

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
