import { FC } from "react";
import { DistanceMemberPoint } from "../types";
import { PointsListItem } from "./PointsListItem";

export const PointsList: FC<{ points: DistanceMemberPoint[] }> = ({
  points,
}) => {
  return (
    <ul className="List">
      {points.map((point) => (
        <PointsListItem
          key={point.id}
          id={point.id}
          distance={point.distance}
        />
      ))}
    </ul>
  );
};
