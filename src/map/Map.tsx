import { FC, useRef, useEffect } from "react";
import OlMap from "ol/Map";
import { MemberPoint, Point } from "../types";
import createMap from "./createMap";
import fromPoint from "./fromPoint";
import createMarkersLayer from "./createMarkersLayer";

const Map: FC<{
  points?: MemberPoint[] | null;
  position?: Point | null;
}> = ({ points, position }) => {
  const mapRef = useRef<OlMap>(createMap());
  const mapWrapperRef = useRef<HTMLDivElement>(null);

  const map = mapRef.current;

  useEffect(() => {
    if (mapWrapperRef.current) {
      map.setTarget(mapWrapperRef.current);
    }
    return () => {
      map.setTarget(undefined);
    };
  }, []);

  useEffect(() => {
    if (position) {
      map.getView().setCenter(fromPoint(position));
    }
  }, [position]);

  useEffect(() => {
    const markersLayer = createMarkersLayer({ points, position });
    map.addLayer(markersLayer);
    return () => {
      map.removeLayer(markersLayer);
    };
  }, [points, position]);

  return <div ref={mapWrapperRef} className="Map" />;
};

export default Map;
