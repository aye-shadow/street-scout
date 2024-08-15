"use client";

import React from 'react';
import {LocationOn, LocationSearching} from "@mui/icons-material";
import {SvgIcon, SvgIconProps} from "@mui/material";
import {useGeolocation} from "@/features/location";

interface Props extends SvgIconProps {}

export function LocationAdornment ({ ...iconProps }: Props) {
  const { getGeoLocation, location } = useGeolocation();

  const handleClick = () => {
    getGeoLocation();

  };

  return (
    <SvgIcon
      {...iconProps}
      component={location == null ? LocationSearching : LocationOn}
      cursor={"pointer"}
      onClick={handleClick}
    />
  );
};
