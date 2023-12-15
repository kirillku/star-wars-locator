import { DependencyList, useEffect, useState } from "react";

type DataState<T> =
  | { data: null; status: "loading"; message: string }
  | { data: null; status: "error"; message: string }
  | { data: T; status: "success"; message: string };

export const useData = <T>(
  getData: () => Promise<T>,
  deps: DependencyList = []
): DataState<T> => {
  const [state, setState] = useState<DataState<T>>({
    data: null,
    status: "loading",
    message: "Loading...",
  });

  useEffect(() => {
    getData()
      .then((data) => {
        setState({
          data,
          status: "success",
          message: "",
        });
      })
      .catch(() => {
        setState({
          data: null,
          status: "error",
          message: "Error while loading data",
        });
      });
  }, deps);

  return state;
};
