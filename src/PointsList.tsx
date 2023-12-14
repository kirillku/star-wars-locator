import { FC } from "react";
import { PointsListItem } from "./PointsListItem";
import { Point } from "./types";

export const PointsList: FC<{ points: Point[] }> = ({ points }) => {
  return (
    <ul>
      {points.map((point) => (
        <PointsListItem key={point.id} id={point.id} />
      ))}
    </ul>
  );
};
