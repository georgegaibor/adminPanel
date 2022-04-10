import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../dataTableSource";
import {Link} from 'react-router-dom';

const DataTable = () => {
    const actionColumn = [{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell:() => {
            return (
                <div className="cellAction">
                    <Link to="/users/test" style={{textDecoration:"none"}}>
                        <button className="viewButton">View</button>
                    </Link>
                    <Link to="/users" style={{textDecoration:"none"}}>
                        <button className="deleteButton">Delete</button>
                    </Link>
                </div>
            );
        },
    }];

    return (
        <div className="datatable">
            <div className="datatableTitle">
                User List
                <Link to="/users/new" style={{textDecoration:"none"}} className="link">
                    Add New
                </Link>
            </div>
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