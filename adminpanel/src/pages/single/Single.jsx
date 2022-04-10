import "./single.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table"

const Single = () => {
  return (
    <div className="single">
      <SideBar/>
      <div className="singleContainer">
        <NavBar/>

        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img 
                src="https://images.pexels.com/photos/3113867/pexels-photo-3113867.png?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" 
                alt="" 
                className="itemImg" 
              />
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">jd@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">123456789</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Myrtle Beach</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect = {3/1} title="User transactions"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last transactions</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single