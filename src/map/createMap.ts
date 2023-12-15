import { MemberPoint, Point } from "../types";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import { Icon, Style } from "ol/style";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
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

const createMap = ({
  points,
  position,
}: {
  points: MemberPoint[];
  position: Point;
}): Map => {
  const tileLayer = new TileLayer({ source: new OSM() });

  const markersLayer = new VectorLayer({
    source: new VectorSource({
      features: [
        getMarker(position, CURRENT_POSITION_MARKER_COLOR),
        ...points.map((p) => getMarker(p)),
      ],
    }),
  });

  return new Map({
    view: new View({
      zoom: 2,
      center: fromPoint(position),
    }),
    layers: [tileLayer, markersLayer],
    controls: [],
    overlays: [],
  });
};

export default createMap;
