"use client"

import {useCallback, useState} from "react";
import {Location} from "@/features/vendor";
import {useLocationStore} from "@/features/location";

export function useGeolocation()  {
  const {setError, setLoading, setLocation } = useLocationStore()

  const getGeoLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      setLoading(false);
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
        setError("");
        setLoading(false);
        console.log("Geolocation success:", {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => {
        setError(`Error: ${error.message}`);
        setLoading(false);
        console.log("Geolocation error:", error.message);
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  }, []);

  return { getGeoLocation };
}
