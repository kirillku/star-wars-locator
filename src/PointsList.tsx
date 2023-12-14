import { FC } from "react";
import { PointsListItem } from "./PointsListItem";
import { DistanceMemberPoint } from "./types";

export const PointsList: FC<{ points: DistanceMemberPoint[] }> = ({
  points,
}) => {
  return (
    <ul>
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
