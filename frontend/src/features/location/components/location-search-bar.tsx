"use client";

import React, {useState} from 'react';
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
  }: Props)
{
  const [value, setValue] = useState("")
  const {nearbyVendors} = useNearbyVendors()

  return (
    <Autocomplete
      id={"location-search-bar"}
      options={nearbyVendors.map(v => v.name)}
      autoComplete
      includeInputInList
      onInputChange={(e, val) => setValue(val)}
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
