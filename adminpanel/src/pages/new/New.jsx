import "./new.scss";
import { useState } from "react";

import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs, title}) => {
  const [file, setFile] = useState("")

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  return (
    <div className="new">
      <SideBar/>
      <div className="newContainer">
        <NavBar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img 
              src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
              alt="" 
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadIcon className="icon"/>
                </label>
                <input type="file" id="file" onChange={handleFileChange} style={{display: "none"}}/>
              </div>
              {inputs.map(input=>(
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>Send</button>
            </form>
          </div>
        </div>
        New
      </div>
    </div>
  )
}

export default New