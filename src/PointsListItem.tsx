import { FC } from "react";
import { useData } from "./useData";
import { getPointInfo } from "./api";

export const PointsListItem: FC<{ id: number; distance: number }> = ({
  id,
  distance,
}) => {
  const [info, status] = useData(() => getPointInfo(id), [id]);

  if (status === "error") {
    return <div>Error</div>;
  }

  if (status === "loading") {
    return null;
  }

  if (status)
    return (
      <li>
        <img alt={info.name} src={info.image} height={100} width={100} />
        <div>
          <a href={info.wiki} target="_blank">
            {info.name}
          </a>
          <div>Distance: {Math.round(distance)}m</div>
        </div>
      </li>
    );
};
