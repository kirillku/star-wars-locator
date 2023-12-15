import { FC } from "react";
import { useData } from "./useData";
import { getPointInfo } from "./api";

export const PointsListItem: FC<{ id: number; distance: number }> = ({
  id,
  distance,
}) => {
  const { data, status } = useData(() => getPointInfo(id), [id]);

  if (status === "error") {
    return (
      <li className="MemberCard">
        <div className="error">Error</div>
      </li>
    );
  }

  if (status === "loading") {
    return null;
  }

  return (
    <li className="MemberCard">
      <img alt={data.name} src={data.image} className="MemberImg" />
      <div>
        <a href={data.wiki} target="_blank" className="MemberNameLink">
          {data.name}
        </a>
        {data.homeworld && (
          <div>
            Lives in <span className="MemberHomeworld">{data.homeworld}</span>
          </div>
        )}
        <div>{Math.round(distance / 1000)} km away</div>
      </div>
    </li>
  );
};
