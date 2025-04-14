import * as RadioGroupPrimitive from "@radix-ui/react-radio-group"
import { ComponentPropsWithoutRef, ReactNode } from "react"

export interface RadioProps extends ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  label?: ReactNode
}