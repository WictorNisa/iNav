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
          <div className="Services-wrapper">
            <h2 className="Services-h2">
              iNav optimizing airports and airspace
            </h2>
            <p className="Services-p">
              IBG are experts in aviation infrastructure. Our core competence is
              to optimize airspace and airports from an air traffic, regulatory,
              technical, financial, and sustainable perspective. Our clients are
              primarily airports and airport authorities, and increasingly,
              municipalities, advanced air mobility logistics companies and
              others keen to take a front position in the next phase of
              aviation.
            </p>

            <h3 className="Services-h3">Our services:</h3>

            <h5 className="Services-h5">Level of engagement</h5>
            <ul>
              <li>&gt; iNav Consultancy Framework (Time-based)</li>
              <li>&gt; Deliverable (Task Based) Consultancy </li>
              <li>&gt; Project Management Consulting </li>
              <li>&gt; Turnkey</li>
            </ul>

            <h5 className="Services-h5">Consultancy areas</h5>
            <ul>
              <li>&gt; Financial Analysis</li>
              <li>&gt; Advisory</li>
              <li>&gt; A-CDM/TAM/APOC/AOCC</li>
              <li>&gt; Safety Management & Audit</li>
              <li>&gt; Airport Audit & Certification</li>
            </ul>

            <h5 className="Services-h5">Engineering & Design </h5>
            <ul>
              <li>&gt; CNS/ATM</li>
              <li>&gt; Meteorology</li>
            </ul>

            <h5 className="Services-h5">Pans-Ops & Airspace</h5>
            <ul>
              <li>&gt; Aeronautical Studies</li>
              <li>&gt; Airspace/Procedure design</li>
              <li>&gt; Obstacle Assessment</li>
              <li>&gt; Safeguarding</li>
            </ul>

            <h5 className="Services-h5">Advanced Air Mobility</h5>
            <ul>
              <li>&gt;Advanced Air Mobility Consulting</li>
              <li>&gt;Training</li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
