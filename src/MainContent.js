import React, { Component } from "react";
import Contact from "./Contact";

class MainContent extends Component {
  render() {
    return (
      <section className="MainContent">
        <div className="MainContent-info-wrapper">
          <div className="MainContent-info-contain">
            <h2 className="MainContent-h2">Welcome to iNav</h2>
            <p className="MainContent-p">
              iNav is a Consultancy providing round the clock advice and support
              in all fields of Air Traffic Control Engineering & Air side
              Technical Services. We have a vast international network of
              contacts & have participated in multi-million dollar projects.
            </p>
            <p className="MainContent-p">
              We can support customer needs in all phases of the project, to
              include:
            </p>
            <ul className="MainContent-ul">
              <li>- Concept/ feasibility studies</li>
              <li>- Preliminary and detailed design</li>
              <li>- Provision of specifications</li>
              <li>- Supervision management</li>
              <li>- Factory & Site acceptance testing (FAT&SAT)</li>
              <li>- Final handover and operational support. </li>
            </ul>
            <p className="MainContent-p">
              We specialise in both permanent & mobile Air traffic control
              platforms.
            </p>
          </div>
          <section className="MainContent-divider">
            {/*  Photo by Tim Mossholder on Unsplash  */}
          </section>
          <div className="MainContent-info-contain">
            <h2 className="MainContent-h2">More about us</h2>
            <p className="MainContent-p">
              Our team of experts is highly motivated and approach any task with
              a can-do attitude; we always strive to achieve the best results
              for our clients while maintaining a first class service.
            </p>
            <a>Services</a>

            <p className="MainContent-p">
              We have vast experience and work with a number of high profile
              individuals and corporate’s throughout the UK, Europe and the
              Middle East.
            </p>
            <a>References</a>
          </div>
          <Contact/>
        </div>
      </section>
    );
  }
}

export default MainContent;
