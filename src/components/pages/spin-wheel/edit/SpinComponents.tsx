import React from 'react';
import Text from '@/components/ui/typo';
import { Stack } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface SpinInputBoxI {
  children: React.ReactNode;
  label: string;
}

export function SpinInputBox({ children, label }: SpinInputBoxI) {
  return (
    <div className="rounded-lg bg-gray-100 px-3 py-2">
      <Text className="mb-2">{label}</Text>
      <Stack direction={'row'} gap={2}>
        {children}
      </Stack>
    </div>
  );
}

interface SpinTextFieldI {
  leftEl: React.ReactElement;
  rightEl: React.ReactElement;
}

export function SpinInput({ leftEl, rightEl }: SpinTextFieldI) {
  return (
    <div className="flex w-full justify-between">
      <div className="flex-1">{leftEl}</div>
      <div className="">{rightEl}</div>
    </div>
  );
}

interface SelectBoxProps {
  name: string;
  control: any;
  defaultValue?: string;
}

export function DurationSelectBox({ name, control, defaultValue = '' }: SelectBoxProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field }) => (
        <select {...field} className="bg-transparent outline-none">
          <option className="bg-transparent outline-none" value="min">
            Minutes
          </option>
          <option value="hr">Hours</option>
          <option value="day">Days</option>
          <option value="week">Weeks</option>
          <option value="month">Months</option>
          <option value="yr">Years</option>
        </select>
      )}
    />
  );
}

interface CusInputI {
  name: string;
  defaultValue?: number;
  requiredMessage?: string;
  type: 'number' | 'text';
  validate?: (val: any) => string | boolean;
}

export function CusInput({
  name,
  defaultValue = 10,
  requiredMessage = 'This is required',
  type,
  validate = () => true,
}: CusInputI) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        {...register(name, {
          required: { value: true, message: requiredMessage },
          validate: validate,
        })}
        defaultValue={defaultValue}
        className="w-full bg-transparent outline-none"
        type={type}
      />
      {errors[name] && <span className="text-xs text-red">{errors[name]?.message as string}</span>}
    </>
  );
}
