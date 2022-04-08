import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {

  let data;

  //placeholders
  const percent = 20;
  const amount = 23123;

  switch(type){
    case "user":
        data={
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (<PersonOutlineIcon className="icon user"/>)
        }
        break;
    case "order":
        data={
            title: "ORDERS",
            isMoney: false,
            link: "See all orders",
            icon: (<ShoppingCartOutlinedIcon className="icon order"/>)
        }
        break;
    case "earnings":
        data={
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: (<MonetizationOnOutlinedIcon className="icon earnings"/>)
        }
        break;
    case "balance":
        data={
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            icon: (<AccountBalanceWalletOutlinedIcon className="icon balance"/>)
        }
        break;
    default:
        break;
  }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
                <KeyboardArrowUpIcon/>
                {percent}
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget