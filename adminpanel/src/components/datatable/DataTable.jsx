import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../dataTableSource";


const DataTable = () => {
    const actionColumn = [{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell:() => {
            return (
                <div className="cellAction">
                    <button className="viewButton">View</button>
                    <button className="deleteButton">Delete</button>
                </div>
            );
        },
    }];

    return (
        <div className="datatable">
            <DataGrid
            rows={userRows}
            columns={[...userColumns,...actionColumn]}
            pageSize={9}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    )
}

export default DataTable