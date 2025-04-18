import { InputHTMLAttributes } from 'react';

export type TextTransform = 'uppercase' | 'lowercase' | 'trim' | 'none';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  transform?: TextTransform | TextTransform[];
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
