import "./home.scss"
import NavBar from "../../components/navbar/NavBar"
import SideBar from "../../components/sidebar/SideBar"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
import Featured from "../../components/featured/Featured"
import List from "../../components/table/Table"

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
          <div className="charts">
            <Featured/>
            <Chart/>
          </div>
          <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
            <List/>
          </div>
        </div>
    </div>
  )
}

export default Home