import React, { useMemo } from "react"
import {
  useFilters,
  useRowSelect,
  useTable,
  usePagination,
  useGlobalFilter,
} from "react-table"
import BOOKLIST from "./BOOKLIST.json"
import { COLUMNS } from "./columns"

import CheckBox from "./CheckBox"

export var Sum
export var selectedFlatRows
export var selectedBooks

const BooksTable = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => BOOKLIST, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,

    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    selectedFlatRows,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <CheckBox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <CheckBox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
        ]
      })
    }
  )

  const { pageIndex, pageSize } = state

  Sum = selectedFlatRows
    .map((row) => row.original["Price"])
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    }, 0)
  selectedBooks = selectedFlatRows.length

  return (
    <div className="p-5 ">
      <span>
        <h3 className="text-end">
          Cart
          <span>
            <button type="button" className="btn btn-primary">
              {Sum}
              <span className="badge bg-secondary">
                {selectedFlatRows.length}
              </span>
            </button>
          </span>
        </h3>
      </span>

      <table className="table table-striped" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell, index) => {
                  return (
                    <td key={index} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="mb-4 p-2 d-flex row bg-dark text-white">
        <span className="col-8">Books Selected: {selectedBooks}</span>
        <span className="col-4">Total: NGN {Sum}</span>
      </div>
      <div className="p-2 bg-dark text-white d-flex row">
        <span className="col-2">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span className="col-3">
          | Go to Page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(pageNumber)
            }}
            style={{ width: "30px" }}
          />
        </span>
        <select
          className="col-2"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[5, 10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              P {pageSize}
            </option>
          ))}
        </select>
        <div className="col-4">
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {"<<"}
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            {"<"}Prev
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next{">"}
          </button>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default BooksTable
