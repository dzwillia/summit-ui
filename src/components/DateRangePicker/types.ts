export interface DateRange {
  from?: Date
  to?: Date
}

export interface DateRangePickerProps {
  value: DateRange
  onChange: (range: DateRange) => void
  placeholder?: {
    from?: string
    to?: string
  }
  className?: string
}