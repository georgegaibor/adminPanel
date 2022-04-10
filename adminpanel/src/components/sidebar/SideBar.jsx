import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import TimelineIcon from '@mui/icons-material/Timeline';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Link} from "react-router-dom";
import { useContext } from "react";
import {DarkModeContext} from "../../context/darkModeContext"

const SideBar = () => {
    const {dispatch} = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">Admin Logo</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/users" style={{textDecoration:"none"}}>
                    <li>
                        <PeopleIcon className="icon"/>
                        <span>Users</span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration:"none"}}>
                    <li>
                        <InventoryIcon className="icon"/>
                        <span>Products</span>
                    </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon"/>
                        <span>Orders</span>
                    </li>
                    <li>
                        <DeliveryDiningIcon className="icon"/>
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL LINKS</p>
                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationImportantIcon className="icon"/>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSuggestIcon className="icon"/>
                        <span>System Health</span>
                    </li>
                    <li>
                        <TimelineIcon className="icon"/>
                        <span>Logs</span>
                    </li>
                    <li>
                        <DisplaySettingsIcon className="icon"/>
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>  
                    <li>
                        <AccountBoxIcon className="icon"/>
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon"/>
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({type:"LIGHT"})}></div>
                <div className="colorOption" onClick={() => dispatch({type:"DARK"})}></div>
            </div>
        </div>
  )
}

export default SideBar