"use client";

import React, {useEffect, useState} from 'react';
import {LocationOn, LocationSearching} from "@mui/icons-material";
import {CircularProgress, SvgIcon, SvgIconProps} from "@mui/material";
import {useGeolocation, useLocationStore} from "@/features/location";

interface Props extends SvgIconProps {}

export function LocationAdornment ({ ...iconProps }: Props) {
  const { getGeoLocation } = useGeolocation();
  const location = useLocationStore(state => state.location);
  const loading = useLocationStore(state => state.loading);

  return (
    <SvgIcon
      {...iconProps}
      component={loading ? CircularProgress : (location == null ? LocationSearching : LocationOn)}
      cursor={"pointer"}
      onClick={getGeoLocation}
    />
  );
};
