import { cn } from '@/lib/utils';
import React, { useCallback } from 'react';
import { Switch } from '../../Switch';
import { SwitchGroupProps } from '../types';

const SwitchGroup = React.forwardRef<HTMLDivElement, SwitchGroupProps>(
  ({ options, value, onChange, className, columns = 1 }, ref) => {
    const handleSwitchChange = useCallback(
      (id: string, isChecked: boolean) => {
        const addId = (id: string) => onChange([...value, id]);
        const removeId = (id: string) => onChange(value.filter(v => v !== id));

        if (isChecked) {
          addId(id);
        } else {
          removeId(id);
        }
      },
      [onChange, value],
    );

    return (
      <div ref={ref} className={cn('', className)}>
        <div className={cn('grid gap-3', `grid-cols-${columns}`)}>
          {options.map(option => (
            <Switch
              key={option.id}
              id={option.id}
              label={option.label}
              isChecked={value.includes(option.id)}
              isDisabled={option.isDisabled}
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
