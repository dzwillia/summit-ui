import { HTMLAttributes, ReactNode } from 'react';

type AlertVariant = 'success' | 'warning' | 'danger' | 'info';
type AlertSize = 'sm' | 'default';

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  variant: AlertVariant;
  size?: AlertSize;
  heading?: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  hasIcon?: boolean;
  children: ReactNode;
}
