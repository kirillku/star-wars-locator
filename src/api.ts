import { Point, PointInfo } from "./types";

export const getPoints = (): Promise<Point[]> =>
  fetch("https://aseevia.github.io/star-wars-frontend/data/secret.json")
    .then((res) => res.json())
    .then((res) => JSON.parse(atob(res.message)));

export const getPointInfo = (id: number): Promise<PointInfo> =>
  fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`).then((res) =>
    res.json()
  );
