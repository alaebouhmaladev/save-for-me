import React from "react";
import Home from "./pages/Home/home";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/Login/login";
import SingUp from "./pages/SingUp/singup";
import "./index.css";

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element = {<Home />} />
      <Route path="/login" exact element = {<Login />} />
      <Route path="/singup" exact element = {<SingUp />} />
    </Routes>
  </Router>
);

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App;