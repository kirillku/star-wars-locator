import { DependencyList, useEffect, useState } from "react";

export const useData = <T>(
  getData: () => Promise<T>,
  deps: DependencyList = []
): [T, "success"] | [null, "loading"] | [string, "error"] => {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<"success" | "loading" | "error">(
    "loading"
  );
  const [error, setError] = useState<string>();

  useEffect(() => {
    getData()
      .then((res) => {
        setData(res);
        setStatus("success");
      })
      .catch(() => {
        setError("Error while loading data");
        setStatus("error");
      });
  }, deps);

  switch (status) {
    case "error":
      return [error!, status];
    case "loading":
      return [null, status];
    case "success":
      return [data!, status];
  }
};
