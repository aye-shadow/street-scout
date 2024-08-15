import React, {ReactNode} from 'react';
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
          {children}
        </FontProvider>
      </ReactQueryProvider>
    </SessionProvider>
  );
};

export default Providers;
