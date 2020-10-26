import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default class SidebarComp extends React.Component {
  state = { flag: true };

  setFlag = () => {
    this.setState({ flag: !this.state.flag });
  };

  displayComp = () => {
    this.props.getComp("true");
  };
  render() {
    return (
      <div className="siderbar">
        <ul className="sidebar-list">
          <li className="item-list item-style-1">Overview</li>
          <li className="item-list">What can I do these APIs</li>
          <li className="item-list">Key features</li>
          <li className="item-list">How to get started</li>
          <br />
          <li className="item-list item-style-1">Supporting Libraries</li>
          <li className="item-list">SDK</li>
          <br />
          <li className="item-list item-style-2">APIs</li>
          <Accordion defaultActiveKey="0">
            <div className="panel-wrap active-panel">
              <div className="panel-header">
                <Accordion.Toggle
                  className="panel-toggle"
                  variant="link"
                  eventKey="0"
                  onClick={this.setFlag}
                >
                  <span className="">Hotel Booking</span>
                  {this.state.flag && (
                    <span className="icon-style">
                      {" "}
                      <FontAwesomeIcon icon={faAngleDown} size="1x" />
                    </span>
                  )}
                  {!this.state.flag && (
                    <span className="icon-style">
                      {" "}
                      <FontAwesomeIcon icon={faAngleRight} size="1x" />
                    </span>
                  )}
                </Accordion.Toggle>
              </div>
              <Accordion.Collapse eventKey="0">
                <ul className="sidebar-list">
                  <li className="item-list" onClick={this.displayComp}>
                    Itineraries
                  </li>
                  <li className="item-list" onClick={this.displayComp}>
                    Itineraries by Id
                  </li>
                </ul>
              </Accordion.Collapse>
            </div>
          </Accordion>
        </ul>
      </div>
    );
  }
}
