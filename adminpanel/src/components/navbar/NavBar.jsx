import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="icon"/>
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className="icon"/>
            EN
          </div>
          <div className="item">
            <DarkModeIcon className="icon"/>
          </div>
          <div className="item">
            <FullscreenExitIcon className="icon"/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className="icon"/>
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg" 
              alt="" 
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar