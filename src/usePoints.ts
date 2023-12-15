import { LineString } from "ol/geom";
import { getPoints } from "./api";
import { DistanceMemberPoint, MemberPoint, Point } from "./types";
import { useData } from "./useData";
import { getLength } from "ol/sphere";
import fromPoint from "./map/fromPoint";
import { useMemo } from "react";

const getDistance = (a: Point, b: Point): number =>
  getLength(new LineString([fromPoint(a), fromPoint(b)]));

const sortByDistance = (points: MemberPoint[], position?: Point | null) =>
  points
    .map((p) => ({
      ...p,
      distance: position ? getDistance(p, position) : 0,
    }))
    .sort((a, b) => a.distance - b.distance);

type PointsState = {
  points: DistanceMemberPoint[];
  status: "success" | "loading" | "error";
};

export const usePoints = (position?: Point | null): PointsState => {
  const { data: points, status } = useData(getPoints);

  const pointsState = useMemo<PointsState>(
    () => ({
      points: status !== "success" ? [] : sortByDistance(points, position),
      status,
    }),
    [points, position]
  );

  return pointsState;
};
