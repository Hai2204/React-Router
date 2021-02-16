import React, { Component } from "react";
import "../App.css";
import Footer from "./Footer/Footer";

class About extends Component {
  render() {
    return (
      <div>
        <div className="uk-position-relative">
        <div className="uk-text-center uk-padding ">
          <div className="test"></div>
        </div>
        <div className="uk-position-absolute position-test">
        <i className="las la-cog la-2x gear-round"></i>
        </div>
        <div className="uk-position-absolute position-test1">
        <i className="las la-arrow-up la-2x arrow-up"></i>
        </div>
        <br></br>
        <div className="uk-text-center uk-align-center" uk-spinner="true; ratio: 3" ></div>
        
      </div>
      <Footer />
      </div>
    );
  }
}

export default About;
