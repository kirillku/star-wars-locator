import { FC } from "react";
import { PointsList } from "./list/PointsList";
import { usePoints } from "./usePoints";
import Map from "./map/Map";
import { useCurrentPosition } from "./useCurrentPosition";

const App: FC = () => {
  const [
    { position, status: positionStatus, message: positionMessage },
    getCurrentPosition,
  ] = useCurrentPosition();
  const {
    points,
    status: pointsStatus,
    message: pointsMessage,
  } = usePoints(position);

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
      {(positionStatus === "error" || pointsStatus === "error") && (
        <div className="centered-content">
          <div className="error">
            {positionMessage ?? pointsMessage ?? "Error"}
          </div>
        </div>
      )}
      {(positionStatus === "loading" || pointsStatus === "loading") && (
        <div className="centered-content">Loading...</div>
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
