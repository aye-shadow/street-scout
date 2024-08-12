"use client";

import React, { ReactNode } from 'react';
import {useModalStore} from "@/features/modal";
import {Button, ButtonProps} from "@mui/material";

interface Props extends ButtonProps {
  text?: string;
  children: ReactNode;
}

export function ShowModalButton ({ text, children, ...rest }: Props) {
  const show = useModalStore(state => state.show);
  return (
    <Button
      {...rest}
      onClick={() => show(children)}
    >
      {text}
    </Button>
  );
};
