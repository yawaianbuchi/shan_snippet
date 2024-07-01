'use client';
import React, { ReactNode } from 'react';
import RDatePicker, { CalendarContainer } from 'react-datepicker';
import { formatDate } from '@/utils';

import 'react-datepicker/dist/react-datepicker.css';
import { Icons } from '../images/Icons';
import Button from '../button';
import { ToggleState, useToggle } from '@/hooks/useToggle';
import { cn } from '@/utils/cn';

type DatePickerProps = {
  onChange: (value: Date | string | null) => void;
  icon?: ReactNode;
  className?: string;
  placeholder?: string;
  calendarClass?: string;
};

const Datepicker = ({ onChange, className, placeholder, calendarClass, icon }: DatePickerProps) => {
  const [show, { toggle }] = useToggle(false) as [boolean, ToggleState];
  const [startDate, setStartDate] = React.useState<Date | null>(null);

  const handleChange = (e: Date | null) => {
    toggle();
    setStartDate(e);
    onChange(e);
  };

  const MyContainer = ({ className, children }: { className: string; children: ReactNode }) => {
    return (
      <CalendarContainer className={className}>
        <div>{children}</div>
      </CalendarContainer>
    );
  };

  return (
    <div className="relative">
      <Button
        variant="contained"
        className={cn('h-8 bg-green-50 text-green hover:bg-green/25', className)}
        disableElevation
        onClick={toggle}
      >
        {icon ? icon : <Icons.calendar className="mr-1" />}
        {startDate ? formatDate(startDate, 'DD MMM YY') : placeholder ?? 'Select Date'}
      </Button>
      {show && (
        <div className={cn('absolute left-0 top-10 z-20', calendarClass)}>
          <RDatePicker
            selected={startDate}
            onChange={handleChange}
            inline
            calendarContainer={MyContainer}
          />
        </div>
      )}
    </div>
  );
};

export default Datepicker;
