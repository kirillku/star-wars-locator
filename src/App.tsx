import { FC } from "react";
import { getPoints } from "./api";
import { useData } from "./useData";
import { PointsList } from "./PointsList";

const App: FC = () => {
  const [points, status] = useData(getPoints);

  return (
    <>
      <h1>Star Wars Locator</h1>
      {status === "success" && <PointsList points={points} />}
    </>
  );
};

export default App;
