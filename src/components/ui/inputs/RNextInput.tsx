'use client';
import React, { useState } from 'react';
import { cn } from '@/utils/cn';
import { useFormContext, RegisterOptions } from 'react-hook-form';
import { Input } from '@nextui-org/input';

interface TypeTextFieldI {
  label?: string;
  className?: string;
  placeholder?: string;
  type: string;
  isMandatory?: boolean;
  name: string;
  required?: string;
  validate?: any;
  maxLength?: number;
  disabled?: boolean;
  registerOptions?: RegisterOptions;
}

const RNextInput: React.FC<TypeTextFieldI> = ({
  label,
  placeholder,
  className,
  type,
  isMandatory = true,
  name,
  required,
  validate,
  maxLength,
  registerOptions,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name]?.message;
  const [value, setValue] = useState('');

  return (
    <div className={cn(className)}>
      {/* <input
          type={type}
          {...register(name, { required: required, validate: validate, ...registerOptions })}
          {...rest}
          placeholder={placeholder}
          className=" outline-none  border-none text-sm w-full  font-normal mt-1"
          maxLength={maxLength}
        /> */}

      <Input type="email" variant="bordered" label="Email" />

      {/* {error && <Text className="text-xs text-red mt-2">{(error as string) || ''}</Text>} */}
    </div>
  );
};

export default RNextInput;
