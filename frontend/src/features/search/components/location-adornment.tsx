"use client";

import React from 'react';
import {GpsFixed} from "@mui/icons-material";
import {SvgIconProps} from "@mui/material";

interface Props extends SvgIconProps {}

export function LocationAdornment ({ ...iconProps }: Props) {

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {

  };
  
  return (
    <GpsFixed
      cursor={"pointer"}
      {...iconProps}
      onClick={(e) => handleClick(e)}
    >
    </GpsFixed>
  );
};
