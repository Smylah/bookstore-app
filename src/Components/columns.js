import { ColumnFilter } from "./ColumnFilter"

export const COLUMNS = [
  {
    Header: "",
    accessor: "class",
    Filter: ColumnFilter,
  },
  {
    Header: "BOOK NAMES",
    accessor: "Name",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "PUBLISHER",
    accessor: "Publisher",
    Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "(NGN)PRICES",
    accessor: "Price",
    Filter: ColumnFilter,
    disableFilters: true,
  },
]
