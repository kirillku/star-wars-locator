import { FC } from "react";
import { useData } from "./useData";
import { getPointInfo } from "./api";

export const PointsListItem: FC<{ id: number }> = ({ id }) => {
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
        <div>
          <img alt={info.name} src={info.image} height={100} width={100} />
          <a href={info.wiki} target="_blank">
            {info.name}
          </a>
        </div>
      </li>
    );
};
