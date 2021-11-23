import "./App.css";
import "./Header.css";
import "./MainContent.css";
import "./Contact.css";
import './Services.css'
import Header from "./Header";
import MainContent from "./MainContent";
import { slide as Menu } from "react-burger-menu";
import AppBar from "@mui/material/AppBar";
import logo from "./img/logo.png";
import { Link,  } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppBar id="Header">
        <Menu width={"100%"}>
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/services" className="menu-item">
            Air Navigation Services
          </Link>
          <Link to="/refrences" className="menu-item">
            Refrences
          </Link>
        </Menu>
        <div className="logo-contain">
          <img className="logo" src={logo} alt="iNav logo" />
        </div>
      </AppBar>
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
