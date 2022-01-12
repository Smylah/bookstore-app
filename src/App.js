import MaterialTable from "material-table"
import { Divider, Grid, TablePagination, Typography } from "@material-ui/core"
import { useState } from "react"
import Books from "./db.json"
import columns from "./columns"
import Navbar from "./NavBar"
import FooterPage from "./footer"

function App() {
  const [tableData, setTableData] = useState([...Books.books])
  const [selectedRows, setSelectedRows] = useState([])

  const handleBulkDelete = () => {
    const updatedData = tableData.filter((row) => !selectedRows.includes(row))
    setTableData(updatedData)
  }

  return (
    <>
      <Navbar />
      <div className="p-5">
        <MaterialTable
          columns={columns}
          data={tableData}
          components={{
            Pagination: (props) => (
              <>
                <Grid container style={{ padding: 15, background: "#f5f5f5" }}>
                  <Grid sm={6} item>
                    <Typography variant="subtitle2">Total</Typography>
                  </Grid>
                  <Grid sm={6} item align="center">
                    <Typography variant="subtitle2">
                      Books Selected: {selectedRows.length}
                    </Typography>
                  </Grid>
                </Grid>
                <Divider />
                <TablePagination {...props} />
              </>
            ),
          }}
          editable={{
            onRowUpdate: (updatedRow, oldRow) =>
              new Promise((resolve, reject) => {
                const index = oldRow.tableData.id
                const updatedRows = [...tableData]
                updatedRows[index] = updatedRow
                setTimeout(() => {
                  setTableData(updatedRows)
                  resolve()
                }, 2000)
              }),
          }}
          onSelectionChange={(rows) => setSelectedRows(rows)}
          options={{
            sorting: false,
            filtering: true,
            actionsColumnIndex: -1,
            pageSizeOptions: [10, 20, 30, 50],
            pageSize: 10,
            paginationType: "stepped",
            selection: true,
            showTextRowsSelected: false,
            rowStyle: (data, index) =>
              index % 2 === 0 ? { background: "#f5f5f5" } : null,
            headerStyle: { background: "lightblue" },
          }}
          actions={[
            {
              icon: "delete",
              tooltip: "Would you like to delete these Books",
              onClick: () => handleBulkDelete(),
            },
          ]}
          title={
            <div>
              <h1 className="text-center">THE SPRINGFIELD SCHOOLS BOOKLIST</h1>
            </div>
          }
        ></MaterialTable>
        {console.log(selectedRows)}
      </div>
      <FooterPage />
    </>
  )
}

export default App
