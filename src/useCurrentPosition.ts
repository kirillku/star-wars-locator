import { useEffect, useState } from "react";

interface Position {
  lat: number;
  long: number;
}

export const useCurrentPosition = ():
  | [Position, "success"]
  | [null, "loading"]
  | [string, "error"] => {
  const [position, setPosition] = useState<Position>();
  const [status, setStatus] = useState<"success" | "loading" | "error">(
    "loading"
  );
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setStatus("error");
    } else {
      navigator.geolocation.getCurrentPosition(
        (p) => {
          setPosition({ lat: p.coords.latitude, long: p.coords.longitude });
          setStatus("success");
        },
        () => {
          setError("Unable to retrieve your location");
          setStatus("error");
        }
      );
    }
  }, []);

  switch (status) {
    case "error":
      return [error!, status];
    case "loading":
      return [null, status];
    case "success":
      return [position!, status];
  }
};
