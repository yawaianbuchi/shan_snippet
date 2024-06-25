import React, { PropsWithChildren } from 'react';

function CusContainer({ children }: PropsWithChildren) {
  return <div className="bg-white min-h-[80vh  ] p-4 rounded-lg">{children}</div>;
}

export default CusContainer;
