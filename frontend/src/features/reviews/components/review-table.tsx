"use client";

import React, { ReactNode } from 'react';

interface Props {
  data?: any;
  children?: ReactNode;
}

export function ReviewTable ({ data, children }: Props) {
  return (
    <>
      ReviewTable
      {children}
    </>
  );
};
