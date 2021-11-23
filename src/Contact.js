import React, { Component } from "react";
import nikos from "./img/nikos-contact.jpg";
import Button from "@mui/material/Button";

class Contact extends Component {
  render() {
    return (
      <section className="Contact">
        <div className="Contact-wrapper">
          <h2 className="Contact-h2">Founder</h2>
          <h3 className="Contact-h3">Nikos Simeonidis</h3>
          <div className="Contact-img-wrapper">
            <img className="Contact-img" src={nikos} />
          </div>

          <p className="Contact-p">
            Text about Nikos and how he works as a individual. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Sed ac neque lacus.
            Pellentesque quis ante a ex vehicula malesuada. Proin nec felis
            ipsum. Nulla facilisis commodo fringilla. Aliquam laoreet nibh vitae
            dolor tincidunt sodales. Donec maximus, neque a imperdiet tempus,
            ligula metus consequat ante, nec viverra leo eros eu velit. Donec
            vehicula nec libero quis sodales. Aliquam pulvinar aliquam volutpat.
            Maecenas feugiat accumsan quam, vel ornare tellus congue eget.
            Aenean justo nibh, bibendum quis placerat eu, dignissim non nunc.
            Vestibulum consequat elit vel nunc fringilla, sed vulputate quam
            finibus. Proin tincidunt suscipit mi, nec sagittis dolor consequat
            quis. Duis felis eros, vulputate sed rhoncus quis, hendrerit a
            lorem. Sed ut mauris tempor, faucibus libero a, hendrerit neque.
            Pellentesque in volutpat metus. In feugiat odio at efficitur
            pretium.
          </p>

          <button className="Contact-button">
            <a href="https://www.linkedin.com/in/simeonidis/">LinkedIn</a>
          </button>
        </div>
      </section>
    );
  }
}

export default Contact;
