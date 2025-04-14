export interface CheckboxOption {
  id: string
  label: string
}

export interface CheckboxGroupProps {
  options: CheckboxOption[]
  value: string[]
  onChange: (value: string[]) => void
  className?: string
  columns?: 1 | 2 | 3 | 4
}