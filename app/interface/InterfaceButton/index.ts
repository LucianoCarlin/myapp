import { TextFieldVariants } from '@mui/material';
import { FieldError } from 'react-hook-form';

export interface WInputProps<
  Variant extends TextFieldVariants = TextFieldVariants
> {
  variant?: Variant;
  label: string;
  name: string;
  error?: FieldError;
  size?: 'small' | 'medium';
}
