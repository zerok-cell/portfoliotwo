import { ChangeEvent } from 'react';

interface FieldProps {
  label?: string;
  desc?: string;
  placeholder?: string;
  secondary?: boolean;
  id?: string;
  value?: string;
  onBlur?: () => void;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
}

export default FieldProps;
