import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default class extends Component {
  render() {
    return (
      <div>
        <div className="brand-icons">
          <div className="col-md-3 ">
            <a className="image-circle" href="#">
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="image-circle">
              <FontAwesomeIcon icon={faTwitter} size="1x" />
            </a>
          </div>
          <div className="col-md-3">
            <a href="#" className="image-circle">
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </a>
          </div>
          <div className="col-md-3">
            <a className="image-circle" href="#">
              <FontAwesomeIcon icon={faYoutube} size="1x" />
            </a>
          </div>
        </div>

        <div className="row-class links-set">
          <a className="links" href="https://axess.sc.com/legal-notice">
            Legal Notice
          </a>

          <a
            className="links"
            href="https://axess.sc.com/online-interaction-guidelines"
          >
            Online Interaction Guidelines
          </a>
          <a className="links" href="https://axess.sc.com/privacy">
            Privacy
          </a>

          <a
            className="links"
            href="https://axess.sc.com/regulatory-compliance-statement"
          >
            Regulatory Compliance Statement
          </a>

          <a className="links" href="https://axess.sc.com/accessibility">
            Accessibility
          </a>

          <a className="links" href="https://axess.sc.com/cookie-statement">
            Cookies
          </a>

          <a
            className="links"
            rel="noopener noreferrer"
            href="https://www.sc.com"
            target="_blank"
          >
            Group Website
          </a>
        </div>

        <div className="copywrite">© Standard Chartered 2020</div>
      </div>
    );
  }
}
