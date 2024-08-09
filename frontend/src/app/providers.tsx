import React, {ReactNode} from 'react';
import {ReactQueryProvider} from "@/features/utils";
import {BaseModal} from "@/features/modal";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <BaseModal />
      {children}
    </ReactQueryProvider>
  );
};

export default Providers;
