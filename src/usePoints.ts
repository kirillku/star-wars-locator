import { LineString } from "ol/geom";
import { getPoints } from "./api";
import { DistanceMemberPoint, MemberPoint, Point } from "./types";
import { useData } from "./useData";
import { getLength } from "ol/sphere";
import fromPoint from "./map/fromPoint";

const getDistance = (a: Point, b: Point): number =>
  getLength(new LineString([fromPoint(a), fromPoint(b)]));

const sortByDistance = (points: MemberPoint[], position?: Point | null) =>
  points
    .map((p) => ({
      ...p,
      distance: position ? getDistance(p, position) : 0,
    }))
    .sort((a, b) => a.distance - b.distance);

export const usePoints = (
  position?: Point | null
): [null, "loading"] | [null, "error"] | [DistanceMemberPoint[], "success"] => {
  const [points, pointsStatus] = useData(getPoints);

  if (pointsStatus === "loading") {
    return [null, "loading"];
  }

  if (pointsStatus === "error") {
    return [null, "error"];
  }

  const distancePoints = sortByDistance(points, position);

  return [distancePoints, "success"];
};
