import { DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { ComponentPropsWithoutRef, HTMLAttributes } from 'react';

export type CommandProps = ComponentPropsWithoutRef<typeof CommandPrimitive>;
export type CommandDialogProps = DialogProps;
export type CommandInputProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Input>;
export type CommandListProps = ComponentPropsWithoutRef<typeof CommandPrimitive.List>;
export type CommandEmptyProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>;
export type CommandGroupProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Group>;
export type CommandSeparatorProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>;
export type CommandItemProps = ComponentPropsWithoutRef<typeof CommandPrimitive.Item>;
export type CommandShortcutProps = HTMLAttributes<HTMLSpanElement>;
