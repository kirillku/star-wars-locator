import { FC } from "react";
import { PointsList } from "./PointsList";
import { usePoints } from "./usePoints";
import Map from "./map/Map";
import { useCurrentPosition } from "./useCurrentPosition";
import { Point } from "./types";

const App: FC = () => {
  const [points, status] = usePoints();
  const [position] = useCurrentPosition();

  return (
    <>
      <h1>Star Wars Locator</h1>
      {status === "success" && (
        <>
          <Map points={points} position={position as Point} />
          <PointsList points={points} />
        </>
      )}
    </>
  );
};

export default App;
