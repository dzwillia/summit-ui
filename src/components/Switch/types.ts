import * as SwitchPrimitives from "@radix-ui/react-switch"
import { ComponentPropsWithoutRef, ReactNode } from "react"

export interface SwitchProps extends ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  label?: ReactNode
}