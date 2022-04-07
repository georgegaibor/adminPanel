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

const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="top">
            <span className="logo">Admin Logo</span>
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
                <li>
                    <PeopleIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <InventoryIcon className="icon"/>
                    <span>Products</span>
                </li>
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
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default SideBar