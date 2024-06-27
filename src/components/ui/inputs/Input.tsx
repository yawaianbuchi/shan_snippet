'use client';
import { cn } from '@/utils/cn';
import { HTMLInputTypeAttribute, ReactNode, useState } from 'react';
import React from 'react';
import Button from '../button';
import { Icons } from '../images/Icons';
import TextField from './TextField';
import { TextFieldProps } from './TextField';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  name: string;
  containerClass?: string;
  className?: string;
  id?: string;
  flexRowReverse?: boolean;
  icon?: ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  readOnly?: boolean;
  sx?: TextFieldProps['sx'];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      placeholder,
      name,
      id,
      className,
      containerClass,
      defaultValue,
      flexRowReverse = false,
      icon,
      readOnly = false,
      sx,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(true);

    const handlePassword = () => setShowPassword((prev) => !prev);
    return (
      <div
        className={cn(
          'flex items-center rounded border px-2',
          flexRowReverse && 'flex-row-reverse',
          containerClass
        )}
      >
        <TextField
          ref={ref}
          type={type === 'password' ? (!showPassword ? 'text' : 'password') : type ?? 'text'}
          name={name}
          id={id}
          label={placeholder}
          value={defaultValue}
          sx={{
            '& .MuiFilledInput-root': {
              border: 'none',
            },
            ...sx,
          }}
          {...props}
        />
        {icon}
        {type === 'password' && (
          <Button
            variant="text"
            onClick={handlePassword}
            className="border-none rounded-full text-lg p-1 w-8 h-8 flex justify-center items-center text-green"
          >
            {showPassword ? <Icons.eyeClose /> : <Icons.eyeOpen />}
          </Button>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
