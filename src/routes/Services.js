import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import { slide as Menu } from "react-burger-menu";
import logo from "../img/logo.png";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    return (
      <div className="Services">
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

        <section className="Services-hero">
          <div className="Services-overlay">
            <h1 className="Services-h1">Our Services</h1>
            {/* Photo by <a href="https://unsplash.com/@matze_betz?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Matthias Betz</a> on <a href="https://unsplash.com/s/photos/control-tower?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
          </div>
        </section>
        <section className="Services-info">
          <h2 className="Service-h2">iNav optimizing airports and airspace</h2>
          <p>
            IBG are experts in aviation infrastructure. Our core competence is
            to optimize airspace and airports from an air traffic, regulatory,
            technical, financial, and sustainable perspective. Our clients are
            primarily airports and airport authorities, and increasingly,
            municipalities, advanced air mobility logistics companies and others
            keen to take a front position in the next phase of aviation.
          </p>

          <h4>Our services:</h4>

          <h5>Level of engagement</h5>
          <ul>
              <li>IBG Consultancy Framework (Time-based)</li>
              <li>Deliverable (Task Based) Consultancy </li>
              <li>Project Management Consulting </li>
              <li>Turnkey</li>
          </ul>
          
        </section>
      </div>
    );
  }
}

export default Services;
