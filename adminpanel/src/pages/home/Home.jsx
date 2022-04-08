import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"
import Widget from "../../components/widget/Widget"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
        <SideBar/>
        <div className="homeContainer">
          <NavBar/>
          <div className="widgets">
            <Widget type="user"/>
            <Widget type="order"/>
            <Widget type="earnings"/>
            <Widget type="balance"/>
          </div>
          homeContainer
        </div>
    </div>
  )
}

export default Home