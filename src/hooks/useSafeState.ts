import { useState, Dispatch, SetStateAction } from 'react';

export const useSafeState = <TypeState>(
  value: TypeState
): [TypeState, Dispatch<SetStateAction<TypeState>>] => {
  const [state, setState] = useState<TypeState>(value!);

  return [state, setState];
};
