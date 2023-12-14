import { FC, useRef, useEffect } from "react";
import "./Map.css";
import { MemberPoint, Point } from "../types";
import createMap from "./createMap";

const Map: FC<{
  points: MemberPoint[];
  position: Point;
}> = ({ points, position }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = createMap({ points, position });

    if (mapRef.current) {
      map.setTarget(mapRef.current);
    }
    return () => map.setTarget(undefined);
  }, []);

  return <div ref={mapRef} className="ol-map" />;
};

export default Map;
