import { cn } from '@/lib/utils';
import * as React from 'react';
import { Switch } from '../../Switch';
import { SwitchGroupProps } from '../types';

const SwitchGroup = React.forwardRef<HTMLDivElement, SwitchGroupProps>(
  ({ options, value, onChange, className, columns = 2 }, ref) => {
    const handleSwitchChange = React.useCallback(
      (id: string, checked: boolean) => {
        if (checked) {
          onChange([...value, id]);
        } else {
          onChange(value.filter(v => v !== id));
        }
      },
      [onChange, value],
    );

    return (
      <div ref={ref} className={cn('', className)}>
        <div
          className={cn(
            'grid gap-3',
            columns === 1 && 'grid-cols-1',
            columns === 2 && 'grid-cols-2',
            columns === 3 && 'grid-cols-3',
            columns === 4 && 'grid-cols-4',
          )}
        >
          {options.map(option => (
            <Switch
              key={option.id}
              id={option.id}
              label={option.label}
              checked={value.includes(option.id)}
              onCheckedChange={checked => handleSwitchChange(option.id, checked)}
            />
          ))}
        </div>
      </div>
    );
  },
);
SwitchGroup.displayName = 'SwitchGroup';

export { SwitchGroup };
