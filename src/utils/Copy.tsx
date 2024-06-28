import { RefObject } from 'react';

export const handleCopy = async (ref: RefObject<HTMLInputElement>) => {
  if (ref && ref.current) {
    navigator.clipboard.writeText(ref.current.value);
  }
};
