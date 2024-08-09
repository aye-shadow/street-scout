import React, {ReactNode} from 'react';
import {ReactQueryProvider} from "@/features/utils";
import {BaseModal} from "@/features/modal";
import FontProvider from "@/theme/fontProvider";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <ReactQueryProvider>
      <FontProvider>
        <BaseModal />
        {children}
      </FontProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
