'use client';
import { cn } from '@/utils/cn';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  OutlinedTextFieldProps,
  TextField as MTextField,
  styled,
  TextFieldVariants,
  InputAdornment,
  IconButton,
} from '@mui/material';
import React, { forwardRef } from 'react';

interface TextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label?: string;
  variant?: TextFieldVariants;
  password?: boolean;
}

const TextFieldStyled = styled(MTextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    backgroundColor: 'transparent',
    border: '1px solid #e7e7e7',
    borderRadius: '10px',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
    },
    '&:before': {
      borderBottom: 'none',
    },
    '&:after': {
      borderBottom: 'none',
    },
  },
  '& .MuiFilledInput-underline:before': {
    borderBottom: 'none',
  },
  '& .MuiFilledInput-underline:after': {
    borderBottom: 'none',
  },
  '& .MuiInputLabel-filled': {
    color: theme.palette.text.primary,
    '&.Mui-focused': {
      color: theme.palette.primary.main,
    },
  },
  '& .css-yfozom-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before':
    {
      borderBottom: 'none',
    },
}));

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(function TextField(
  { ...rest },
  ref
) {
  const { label, value, password, variant = 'outlined' } = rest;
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  // const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();
  // };
  return password ? (
    <TextFieldStyled
    autoComplete='off'
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
