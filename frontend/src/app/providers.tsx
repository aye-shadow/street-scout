import React, {ReactNode} from 'react';
import {SessionProvider} from "next-auth/react";
import FontProvider from "@/theme/fontProvider";
import ReactQueryProvider from "@/features/lib/providers/react-query-provider";
import dynamic from 'next/dynamic';
import {Toaster} from "sonner";

const GoogleMapsLoader = dynamic(() => import("@/features/lib/providers/google-maps-loader"),
{ssr: false}
);

interface Props {
  children: ReactNode;
}

const Providers = ({ children }: Props) => {

  return (
    <SessionProvider>
      <ReactQueryProvider>
        <FontProvider>
          <Toaster position="bottom-right" />
          {children}
        </FontProvider>
      </ReactQueryProvider>
    </SessionProvider>
  );
};

export default Providers;
