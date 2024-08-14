import {useCallback, useState} from "react";
import {Location} from "@/features/vendor";

export function useGeolocation()  {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

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


  return { location, error, loading, getGeoLocation };
}
