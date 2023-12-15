import { MemberPoint, Point } from "../types";
import Feature from "ol/Feature";
import { Icon, Style } from "ol/style";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import GeomPoint from "ol/geom/Point";
import fromPoint from "./fromPoint";

const CURRENT_POSITION_MARKER_COLOR = "#4285f4";
const MEMBER_POSITION_MARKER_COLOR = "#78909c";

const getMarker = (
  point: Point,
  color: string = MEMBER_POSITION_MARKER_COLOR
): Feature<GeomPoint> => {
  const marker = new Feature({
    geometry: new GeomPoint(fromPoint(point)),
  });
  marker.setStyle(
    new Style({
      image: new Icon({
        color,
        scale: 0.5,
        crossOrigin: "anonymous",
        src: "public/circle.svg",
      }),
    })
  );
  return marker;
};

const createMarkersLayer = ({
  points,
  position,
}: {
  points?: MemberPoint[] | null;
  position?: Point | null;
}) => {
  const markers = [];

  if (position) {
    markers.push(getMarker(position, CURRENT_POSITION_MARKER_COLOR));
  }

  if (points) {
    markers.push(...points.map((p) => getMarker(p)));
  }

  const markersLayer = new VectorLayer({
    source: new VectorSource({ features: markers }),
  });

  return markersLayer;
};

export default createMarkersLayer;
