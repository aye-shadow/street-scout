"use client";

import React from 'react';
import {GpsFixed} from "@mui/icons-material";
import {SvgIconProps} from "@mui/material";
import {useGeolocation} from "@/features/location";

interface Props extends SvgIconProps {}

export function LocationAdornment ({ ...iconProps }: Props) {
  const { getGeoLocation } = useGeolocation();

  const handleClick = () => {
    getGeoLocation();

  };

  return (
    <GpsFixed
      {...iconProps}
      cursor={"pointer"}
      onClick={handleClick}
    />
  );
};
