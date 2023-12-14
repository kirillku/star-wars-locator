import { FC } from "react";
import { getPoints } from "./api";
import { useData } from "./useData";
import { PointsList } from "./PointsList";
import { useCurrentPosition } from "./useCurrentPosition";

const App: FC = () => {
  const [points, status] = useData(getPoints);
  const [position, positionStatus] = useCurrentPosition();

  return (
    <>
      <h1>Star Wars Locator</h1>
      {positionStatus === "success" && (
        <div>location: {JSON.stringify(position)}</div>
      )}
      {status === "success" && <PointsList points={points} />}
    </>
  );
};

export default App;
