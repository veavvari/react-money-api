import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSignOutAlt,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

export default class Header extends Component {
  render() {
    return (
      <div className="row-class">
        <div className="col-md-6 col-lg-6">
          <span className="bars">
            <FontAwesomeIcon icon={faBars} size="3x" color="rgb(63, 156, 53)" />
          </span>
          <a href="/" className="logo">
            <img src="https://axess.sc.com/images/logo.svg" alt="logo"></img>
          </a>
        </div>
        <div className="col-md-6 col-lg-6">
          <button className="header-btn header-btn-sgOut float-right">
            <FontAwesomeIcon icon={faSignOutAlt} size="1x" />
            <span className="sg-out-span"></span>
            Sign Out
          </button>
          <button className="header-btn header-btn-profile float-right">
            <FontAwesomeIcon icon={faSyncAlt} size="1x" />
            <span className="sg-out-span"></span>
            Your Profile
          </button>
        </div>
      </div>
    );
  }
}
