"use client";

import React from 'react';
import {SearchBar, SearchBarProps} from "@/features/search";
import {Autocomplete, InputAdornment} from "@mui/material";
import {useNearbyVendors} from "@/features/location";

type Props = SearchBarProps & {

}

export function LocationSearchBar ({
    startAdornment,
    endAdornment,
    inputProps,
    InputProps,
    ...searchBarProps
  }: Props) {

  const {nearbyVendors} = useNearbyVendors()

  return (
    <Autocomplete
      options={nearbyVendors.map(v => v.name)}
      renderInput={(params) => (
        <SearchBar
          {...searchBarProps}
          inputProps={{
            ...inputProps,
            ...params.inputProps
          }}
          InputProps={{
            ...InputProps,
            ref: params.InputProps.ref,
            startAdornment: startAdornment ? (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ) : null,
            endAdornment: endAdornment ? (
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            ) : null,
          }}
        />
      )}
    />
  );
};
