import { cn } from '@/lib/utils';
import * as React from 'react';
import { SingleSelectProps } from '../types';
import { Select, SelectValue } from './Select';
import { SelectContent } from './SelectContent';
import { SelectItem } from './SelectItem';
import { SelectTrigger } from './SelectTrigger';

const SingleSelect = React.forwardRef<HTMLButtonElement, SingleSelectProps>(
  ({ options, value, onChange, placeholder = 'Select an option', className }, ref) => {
    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          ref={ref}
          className={cn('w-full justify-between', !value && 'text-muted-foreground', className)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map(option => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
);
SingleSelect.displayName = 'SingleSelect';

export { SingleSelect };
