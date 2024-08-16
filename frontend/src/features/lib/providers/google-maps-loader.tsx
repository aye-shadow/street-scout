"use client";

import {ReactNode} from "react";
import {Libraries, useLoadScript} from "@react-google-maps/api";

interface Props {
    children?: ReactNode
}

const libraries: Libraries = ['places'];

export default function GoogleMapsLoader({ children }: Props) {
  useLoadScript({
    googleMapsApiKey: `${process.env.GOOGLE_MAPS_API_KEY}&loading=async`,
    libraries,
  });

  return (
    <>
      {children}
    </>
  );
};
