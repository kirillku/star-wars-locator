import { fromLonLat } from "ol/proj";
import { Coordinate } from "ol/coordinate";
import { Point } from "../types";

const fromPoint = (point: Point): Coordinate =>
  fromLonLat([point.long, point.lat]);

export default fromPoint;
