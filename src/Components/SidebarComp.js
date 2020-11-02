import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faAngleRight,
  faAngleDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faGalacticSenate } from "@fortawesome/free-brands-svg-icons";

export default class SidebarComp extends React.Component {
  
  state = {
    authFlag: true,
    debitFlag: true,
    hotelFlag: true,
    liColor: "black",
    active: false,
    Status:false,retrieval:false,Initiation:false,activation:false,Amendment:false,All:false,code:false,Itineraries:false,ItinerariesById:false
  };

  displayComp = () => {
    this.setState({ liColor: "rgb(110, 192, 105, 1)" });
    this.props.getComp("true");
  };
  

  
    enableChildren = (e) => {
    e.preventDefault();
    if (e.currentTarget.dataset.id == "Authorization") {
      this.setState({ authFlag: !this.state.authFlag });
    } else if (e.currentTarget.dataset.id == "Debit") {
      this.setState({ debitFlag: !this.state.debitFlag });
    } else if (e.currentTarget.dataset.id == "HotelBooking") {
      this.setState({ hotelFlag: !this.state.hotelFlag });
    }
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
          <li className="item-list">SDK </li>
          <br />
          <li className="item-list item-style-2">APIs </li>
          <li
            className="item-list"
            data-id="Authorization"
            onClick={this.enableChildren}
          >
            {this.state.authFlag ? (
              <span className="plus-circle">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-dash-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </span>
            ) : (
              <span className="plus-circle">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-plus-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </span>
            )}
            Direct Debit Authorization
          </li>
          {this.state.authFlag && (
            <ul className="sidebar-list transition-list">
              <li
                className={this.state.Status ? "item-list-click" : "item-list"}
                data-id="Status"
                onClick={()=>{
                  this.setState({Status:true,retrieval:false,Initiation:false,activation:false,Amendment:false,All:false,code:false,Itineraries:false,ItinerariesById:false});
                }}
              >
                {this.state.Status && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}
                Status
              </li>
              <li
                className={
                  this.state.retrieval ? "item-list-click" : "item-list"
                }
                data-id="retrieval"
                onClick={()=>{
                  this.setState({Status:false,retrieval:true,Initiation:false,activation:false,Amendment:false,All:false,code:false,Itineraries:false,ItinerariesById:false});
                }}
              >
                 {this.state.retrieval && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}
                Individual retrieval
              </li>
              <li
                className={
                  this.state.Initiation ? "item-list-click" : "item-list"
                }
                data-id="Initiation"
                onClick={()=>{
                  this.setState({Status:false,retrieval:false,Initiation:true,activation:false,Amendment:false,All:false,code:false,Itineraries:false,ItinerariesById:false});
                }}
              >
                 {this.state.Initiation && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}

                Initiation
              </li>
              <li
                 className={
                  this.state.activation ? "item-list-click" : "item-list"
                }
                data-id="activation"
                onClick={()=>{
                  this.setState({Status:false,retrieval:false,Initiation:false,activation:true,Amendment:false,All:false,code:false,Itineraries:false,ItinerariesById:false});
                }}
              >
                 {this.state.activation && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}
  
                De-activation
              </li>
              <li
               className={
                this.state.Amendment ? "item-list-click" : "item-list"
              }
              data-id="Amendment"
              onClick={()=>{
                this.setState({Status:false,retrieval:false,Initiation:false,activation:false,Amendment:true,All:false,code:false,Itineraries:false,ItinerariesById:false});
              }}
            >
               {this.state.Amendment && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}

                Amendment
              </li>
              <li
               className={
                this.state.All ? "item-list-click" : "item-list"
              }
              data-id="All"
              onClick={()=>{
                this.setState({Status:false,retrieval:false,Initiation:false,activation:false,Amendment:false,All:true,code:false,Itineraries:false,ItinerariesById:false});
              }}
            >
               {this.state.All && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}

                All
              </li>
            </ul>
          )}
          <li
            className="item-list"
            data-id="Debit"
            onClick={this.enableChildren}
          >
            {this.state.debitFlag ? (
              <span className="plus-circle">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-dash-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </span>
            ) : (
              <span className="plus-circle">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-plus-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </span>
            )}
            Direct Debit Instruction
          </li>
          {this.state.debitFlag && (
            <ul className="sidebar-list">
              <li  className={
                this.state.code ? "item-list-click" : "item-list"
              }
              data-id="code"
              onClick={()=>{
                this.setState({Status:false,retrieval:false,Initiation:false,activation:false,Amendment:false,All:false,code:true,Itineraries:false,ItinerariesById:false});
              }}
            >
               {this.state.code && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}
QR Code Generation</li>
            </ul>
          )}
          <li
            className="item-list"
            data-id="HotelBooking"
            onClick={this.enableChildren}
          >
            {this.state.hotelFlag ? (
              <span className="plus-circle">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-dash-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </span>
            ) : (
              <span className="plus-circle">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-plus-circle"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                  />
                </svg>
              </span>
            )}
            Hotel Booking
          </li>
          {this.state.hotelFlag && (
            <ul className="sidebar-list">
              <li
               className={
                this.state.Itineraries ? "item-list-click" : "item-list"
              }
              data-id="Itineraries"
              onClick={()=>{
                this.setState({Status:false,retrieval:false,Initiation:false,activation:false,Amendment:false,All:false,code:false,Itineraries:true,ItinerariesById:false});
                this.displayComp();
              }}
            >
               {this.state.Itineraries && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}

                Itineraries
              </li>
              <li  className={
                  this.state.ItinerariesById ? "item-list-click" : "item-list"
                }
                data-id="ItinerariesById"
                onClick={()=>{
                  this.setState({Status:false,retrieval:false,Initiation:false,activation:false,Amendment:false,All:false,code:false,Itineraries:false,ItinerariesById:true});
                }}
              >
                 {this.state.ItinerariesById && <span className="arrow-class"><FontAwesomeIcon icon={faArrowRight} size="1x" /></span>}

                Itineraries by Id
              </li>
            </ul>
          )}
          {/* <Accordion defaultActiveKey="0">
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
          </Accordion> */}
        </ul>
      </div>
    );
  }
}
