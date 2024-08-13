import React, {ReactNode} from 'react';
import {BaseModal} from "@/features/modal";
import FontProvider from "@/theme/fontProvider";
import {SessionProvider} from "next-auth/react";
import {ReactQueryProvider} from "@/features/lib";

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {
  return (
    <SessionProvider>
      <ReactQueryProvider>
        <FontProvider>
          <BaseModal />
          {children}
        </FontProvider>
      </ReactQueryProvider>
    </SessionProvider>
  );
};

export default Providers;
