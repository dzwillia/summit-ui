import * as React from "react"
import { cn } from "@/lib/utils"
import { Switch } from "../../Switch"
import { SwitchGroupProps } from "../types"

const SwitchGroup = React.forwardRef<HTMLDivElement, SwitchGroupProps>(
  ({ 
    options,
    value,
    onChange,
    className,
    columns = 2
  }, ref) => {
    return (
      <div ref={ref} className={cn("", className)}>
        <div className={cn(
          "grid gap-4",
          columns === 1 && "grid-cols-1",
          columns === 2 && "grid-cols-2",
          columns === 3 && "grid-cols-3",
          columns === 4 && "grid-cols-4"
        )}>
          {options.map((option) => (
            <div key={option.id}>
              <Switch
                id={option.id}
                label={option.label}
                checked={value.includes(option.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    onChange([...value, option.id])
                  } else {
                    onChange(value.filter(id => id !== option.id))
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
)
SwitchGroup.displayName = "SwitchGroup"

export { SwitchGroup }