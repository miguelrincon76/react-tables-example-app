import { useMemo } from "react";

export default function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Year",
        accessor: "Year",
      },
      {
        Header: "Make",
        accessor: "Make",
      },
      {
        Header: "Model",
        accessor: "Model",
      },
      {
        Header: "Category",
        accessor: "Category",
      },
    ],
    []
  );

  return columns;
}
