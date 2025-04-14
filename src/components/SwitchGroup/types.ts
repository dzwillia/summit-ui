export interface SwitchOption {
  id: string
  label: string
}

export interface SwitchGroupProps {
  options: SwitchOption[]
  value: string[]
  onChange: (value: string[]) => void
  className?: string
  columns?: 1 | 2 | 3 | 4
}