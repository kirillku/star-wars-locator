import { FC } from "react";
import { useData } from "./useData";
import { getPointInfo } from "./api";

export const PointsListItem: FC<{ id: number; distance: number }> = ({
  id,
  distance,
}) => {
  const [info, status] = useData(() => getPointInfo(id), [id]);

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

  if (status)
    return (
      <li className="MemberCard">
        <img alt={info.name} src={info.image} className="MemberImg" />
        <div>
          <a href={info.wiki} target="_blank" className="MemberNameLink">
            {info.name}
          </a>
          {info.homeworld && (
            <div>
              Lives in <span className="MemberHomeworld">{info.homeworld}</span>
            </div>
          )}
          <div>{Math.round(distance / 1000)} km away</div>
        </div>
      </li>
    );
};
