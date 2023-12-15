import { useCallback, useState } from "react";
import { Point } from "./types";

type PositionState = {
  position: Point | null;
  status: "idle" | "success" | "loading" | "error";
  message: string;
};

export const useCurrentPosition = (): [PositionState, () => void] => {
  const [state, setState] = useState<PositionState>({
    position: null,
    status: "idle",
    message: "",
  });

  const getCurrentPosition = useCallback(() => {
    if (!navigator.geolocation) {
      setState({
        position: null,
        status: "error",
        message: "Geolocation is not supported by your browser",
      });
    } else {
      setState({
        position: null,
        status: "loading",
        message: "Loading...",
      });
      navigator.geolocation.getCurrentPosition(
        (p) => {
          setState({
            position: { lat: p.coords.latitude, long: p.coords.longitude },
            status: "success",
            message: "",
          });
        },
        () => {
          setState({
            position: null,
            status: "error",
            message: "Unable to retrieve your location",
          });
        }
      );
    }
  }, []);

  return [state, getCurrentPosition];
};
