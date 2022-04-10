import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import "./style/dark.scss"
import {userInputs, productInputs} from "./formSource"
import {DarkModeContext} from "./context/darkModeContext"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useContext } from "react";

function App() {

  const {darkMode} = useContext(DarkModeContext)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}></Route>
            <Route path="login" element={<Login/>}></Route>
            <Route path="users">
              <Route index element={<List/>}></Route>
              <Route path="new" element={<New inputs = {userInputs} title="Add new user"/>}></Route>
              <Route path=":userid" element={<Single/>}></Route>
            </Route>
            <Route path="products">
              <Route index element={<List/>}></Route>
              <Route path="new" element={<New inputs = {productInputs} title="Add new product"/>}></Route>
              <Route path=":productId" element={<Single/>}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
