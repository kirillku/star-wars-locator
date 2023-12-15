import { LineString } from "ol/geom";
import { getPoints } from "./api";
import { DistanceMemberPoint, MemberPoint, Point } from "./types";
import { useCurrentPosition } from "./useCurrentPosition";
import { useData } from "./useData";
import { getLength } from "ol/sphere";
import fromPoint from "./map/fromPoint";

const getDistance = (a: Point, b: Point): number =>
  getLength(new LineString([fromPoint(a), fromPoint(b)]));

const sortByDistance = (points: MemberPoint[], position: Point) =>
  points
    .map((p) => ({
      ...p,
      distance: getDistance(p, position),
    }))
    .sort((a, b) => a.distance - b.distance);

export const usePoints = ():
  | [null, "loading"]
  | [string, "error"]
  | [DistanceMemberPoint[], "success"] => {
  const [points, pointsStatus] = useData(getPoints);
  const [position, positionStatus] = useCurrentPosition();

  if (pointsStatus === "loading" || positionStatus === "loading") {
    return [null, "loading"];
  }

  if (pointsStatus === "error" || positionStatus === "error") {
    return ["Error", "error"];
  }

  const distancePoints = sortByDistance(points, position);

  return [distancePoints, "success"];
};
