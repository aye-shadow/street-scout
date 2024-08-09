import React, {ReactNode} from 'react';
import {ReactQueryProvider} from "@/features/utils";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  );
};

export default Providers;
