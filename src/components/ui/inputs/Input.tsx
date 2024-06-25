'use client';
import { cn } from '@/utils/cn';
import { HTMLInputTypeAttribute, ReactNode, RefAttributes, useState } from 'react';
import React from 'react';
import Button from '../button';
import { Icons } from '../images/Icons';

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
        <input
          ref={ref}
          type={type === 'password' ? (!showPassword ? 'text' : 'password') : type ?? 'text'}
          name={name}
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          readOnly={readOnly}
          className={cn(
            'flex-1 py-1.5 outline-none ps-2 placeholder:capitalize placeholder:text-gray_500 text-md',
            className
          )}
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
