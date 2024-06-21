import { useState } from 'react';

export type ToggleState = {
  value: boolean;
  toggle: () => void;
  handleOn: () => void;
  handleOff: () => void;
};

export const useToggle = (status: boolean) => {
  const [value, setValue] = useState(status);

  const handleOn = () => setValue(true);
  const handleOff = () => setValue(false);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, { toggle, handleOn, handleOff }];
};
