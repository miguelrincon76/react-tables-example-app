import React from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import { useExportData } from "react-table-plugins";
import { FaCaretSquareUp, FaCaretSquareDown } from "react-icons/fa";
import Papa from "papaparse";

import useData from "./useData";
import useColumns from "./useColumns";
import "./App.css";

function getExportFileBlob({ columns, data }) {
  const headerNames = columns.map((col) => col.exportValue);
  const csvString = Papa.unparse({
    fields: headerNames,
    data,
  });
  return new Blob([csvString], {
    type: "text/csv",
  });
}

function App() {
  const data = useData();
  const columns = useColumns();

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    // pagination props
    page,
    canNextPage,
    canPreviousPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    exportData,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 10,
      },
      getExportFileBlob,
    },
    useSortBy,
    usePagination,
    useExportData
  );

  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {" "}
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {" "}
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {" "}
                  {column.render("Header")}{" "}
                  <span>
                    {" "}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaCaretSquareDown />
                      ) : (
                        <FaCaretSquareUp />
                      )
                    ) : (
                      ""
                    )}{" "}
                  </span>{" "}
                </th>
              ))}{" "}
            </tr>
          ))}{" "}
        </thead>{" "}
        <tbody {...getTableBodyProps()}>
          {" "}
          {page.map((row) => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {" "}
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  );
                })}{" "}
              </tr>
            );
          })}{" "}
        </tbody>{" "}
      </table>{" "}
      <div>
        <div>
          <button disabled={!canPreviousPage} onClick={() => previousPage()}>
            Previous Page{" "}
          </button>{" "}
          <button disabled={!canNextPage} onClick={() => nextPage()}>
            Next Page{" "}
          </button>{" "}
        </div>{" "}
        <div>
          <span>
            Page {pageIndex + 1} of {pageOptions.length}{" "}
          </span>{" "}
        </div>{" "}
        <div>
          <button onClick={() => exportData("csv")}> Export CSV </button>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
