import React from 'react';

interface CustomSwitchI {
  isOpen: boolean;
  handleToggle: () => void;
}

function CustomSwitch({ isOpen, handleToggle }: CustomSwitchI) {
  return (
    <div className={`relative h-[25px] w-[40px] rounded-full ${isOpen ? 'bg-green' : 'bg-red'}`}>
      <div
        onClick={handleToggle}
        className={`absolute cursor-pointer ${isOpen ? 'right-[5%]' : 'left-[5%]'} top-1/2 h-[20px] w-[20px] -translate-y-1/2 rounded-full bg-white`}
      />
    </div>
  );
}

export default CustomSwitch;
