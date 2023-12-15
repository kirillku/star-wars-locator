import { FC } from "react";
import { PointsList } from "./PointsList";
import { usePoints } from "./usePoints";
import Map from "./map/Map";
import { useCurrentPosition } from "./useCurrentPosition";

const App: FC = () => {
  const [{ position, status: positionStatus, message }, getCurrentPosition] =
    useCurrentPosition();
  const { points, status: pointsStatus } = usePoints(position);

  return (
    <>
      <h1>Star Wars Locator</h1>
      <Map points={points} position={position} />
      {positionStatus === "idle" && (
        <div className="centered-content">
          <button onClick={getCurrentPosition}>
            Find Star Wars guys near you
          </button>
        </div>
      )}
      {positionStatus === "error" && (
        <div className="centered-content">
          <div className="error">{message}</div>
        </div>
      )}
      {positionStatus === "loading" && (
        <div className="centered-content">{message}</div>
      )}
      {positionStatus === "success" && pointsStatus === "success" && (
        <>
          <PointsList points={points} />
        </>
      )}
    </>
  );
};

export default App;
