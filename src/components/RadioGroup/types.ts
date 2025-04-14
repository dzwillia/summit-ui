export interface RadioOption {
  value: string
  label: string
}

export interface RadioGroupProps {
  options: RadioOption[]
  value: string
  onChange: (value: string) => void
  className?: string
  orientation?: "horizontal" | "vertical"
}