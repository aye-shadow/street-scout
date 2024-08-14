"use client";

import React from 'react';
import {SearchBar, SearchBarProps} from "@/features/search";

type Props = SearchBarProps & {

}

export function LocationSearchBar ({ ...searchBarProps }: Props) {
  return (
    <>
      <SearchBar {...searchBarProps} />
    </>
  );
};
