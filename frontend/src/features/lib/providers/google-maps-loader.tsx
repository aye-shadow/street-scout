"use client";

import {ReactNode} from "react";
import {Libraries, LoadScript} from "@react-google-maps/api";

interface Props {
    children: ReactNode
}

const libraries: Libraries = ['places'];

export default function GoogleMapsLoader({ children }: Props) {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY + "&loading=async"} libraries={libraries}>
      {children}
    </LoadScript>
  );
};

