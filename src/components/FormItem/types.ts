import { ReactNode } from "react"

export interface FormItemProps {
  label?: ReactNode
  hintText?: ReactNode
  errorText?: ReactNode
  className?: string
  children: ReactNode
}