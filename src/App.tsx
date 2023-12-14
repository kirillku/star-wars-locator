import { FC } from "react";
import { PointsList } from "./PointsList";
import { usePoints } from "./usePoints";

const App: FC = () => {
  const [points, status] = usePoints();

  return (
    <>
      <h1>Star Wars Locator</h1>
      {status === "success" && <PointsList points={points} />}
    </>
  );
};

export default App;
