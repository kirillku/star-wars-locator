import { MemberPoint, Point } from "../types";
import Map from "ol/Map";
import View from "ol/View";
import Feature from "ol/Feature";
import { fromLonLat } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import VectorSource from "ol/source/Vector";
import OSM from "ol/source/OSM";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import GeomPoint from "ol/geom/Point";

const fromPoint = (point: Point): Coordinate =>
  fromLonLat([point.lat, point.long]);

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
      features: points.map(
        (p) => new Feature({ geometry: new GeomPoint(fromPoint(p)) })
      ),
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
