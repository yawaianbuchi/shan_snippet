'use client';
import { cn } from '@/util';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  OutlinedTextFieldProps,
  TextField as MTextField,
  styled,
  TextFieldVariants,
  InputAdornment,
  IconButton,
  FormControl,
  OutlinedInput,
  InputLabel,
} from '@mui/material';
import React, { forwardRef } from 'react';

interface TextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label?: string;
  variant?: TextFieldVariants;
  password?: boolean;
}

const TextFieldStyled = styled(MTextField)<TextFieldProps>(({ theme }) => ({
  backgroundColor: 'transparent',
}));

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { ...rest },
  ref
) {
  const { label, value, password, variant = 'outlined' } = rest;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return password ? (
    <TextFieldStyled
      ref={ref}
      className={cn('', rest.className)}
      label={label}
      variant={variant}
      value={value}
      fullWidth
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleClickShowPassword} edge="end">
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...rest}
    />
  ) : (
    <TextFieldStyled
      ref={ref}
      className={cn('bg-transparent border', rest.className)}
      label={label}
      variant={variant}
      value={value}
      fullWidth
      {...rest}
    />
  );
});

export type { TextFieldProps };
export default TextField;
