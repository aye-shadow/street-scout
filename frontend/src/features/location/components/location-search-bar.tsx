"use client";

import React from 'react';
import {SearchBar, SearchBarProps} from "@/features/search";
import {Autocomplete, InputAdornment} from "@mui/material";

type Props = SearchBarProps & {

}

export function LocationSearchBar ({
    startAdornment,
    endAdornment,
    inputProps,
    InputProps,
    ...searchBarProps
  }: Props) {

  const options = [];

  return (
    <Autocomplete
      options={options}
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
