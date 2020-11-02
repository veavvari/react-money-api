import React, { Component } from "react";
import JSONToHtml from "./JSONtoHtml";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import JSONPretty from 'react-json-pretty';

export default class MoneyApi extends Component {

  render() {
    return (
      <div>
        <div className="row-class api-header">
          {/* <div className="api-header"> */}
          <div className="col-md-6">
            <h1 className="title">Hotel Booking</h1>
            <p className="sub-title">
              Corporate/  <span className="count">14</span> APIs
            </p>
          </div>
          <div className="col-md-6 ">
            <img
              src="https://axess.sc.com/images/overview/collections.svg"
              className="money-image float-right"
              alt="moneyImage"
            ></img>
          </div>
          {/* </div> */}
        </div>
        <div className="complete-api">
          <h2>
            The EPS Booking API allows you to book rooms & rates confirmed by
            the price check response
          </h2>
          <p className="description">
            The primary itinerary method of the Booking API creates a
            reservation for the selected property, room, rate and occupancy.
            Payment information, including billing/cardholder contact
            information, is provided directly within the request. Each
            successful booking response contains links to retrieve the itinerary
            or cancel a room: see our Manage Booking section for documentation.
            To make a multi-room booking (same room type), you must first make a
            Shop request and pass a separate occupancy parameter for each room.
            Then in the Book request, include corresponding separate instances
            of room in the rooms array for each room you wish to book. To hold
            inventory for a brief duration before completing a booking (e.g. to
            build a package), refer to our Hold and Resume documentation. To
            make a test booking that will not charge your card or be sent to the
            property, see our Test Request documentation.
          </p>
          <div className="api">
            <span className="api-method api-link">GET</span>
            <span className="api-link">/itineraries</span>
            
            <span className="copy-api" onClick={() => {navigator.clipboard.writeText("/itineraries")}}><FontAwesomeIcon icon={faCopy} size="2x" /></span>
          </div>
          <div>
            {" "}
            <span className="parameter-header">Parameters</span>
            <table className="table">
              <thead>
                <tr className="table-active">
                  <th
                    width="200"
                    className="table-header"
                    style={{
                      backgroundColor: "white",
                      borderTopColor: "white",
                      paddingTop: "15px",
                    }}
                  >
                    Name
                  </th>
                  <th
                    width="200"
                    className="table-header"
                    style={{
                      backgroundColor: "white",
                      borderTopColor: "white",
                    }}
                  >
                    Required
                  </th>
                  <th
                    className="table-header"
                    style={{
                      backgroundColor: "white",
                      borderTopColor: "white",
                    }}
                  >
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <p> Accept</p>
                    <p>
                      <span className="param-type">string</span>
                    </p>
                    <p>(path)</p>
                    <section className=""></section>
                  </td>
                  <td>Yes</td>
                  <td>
                    <span>
                      Specifies the response format that the client would like
                      to receive back. This must be application/json.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p> Accept-Encoding</p>
                    <p>
                      <span className="param-type">string</span>
                    </p>
                    <p>(path)</p>
                    <section className=""></section>
                  </td>
                  <td>Yes</td>
                  <td>
                    <span>
                      Specifies the response encoding that the client would like
                      to receive back. This must be gzip.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p> Authorization</p>
                    <p>
                      <span className="param-type">string</span>
                    </p>
                    <p>(path)</p>
                    <section className=""></section>
                  </td>
                  <td>Yes</td>
                  <td>
                    <span>
                      The custom generated authentication header. Refer to our
                      signature authentication page for full details.
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p> Customer-Ip</p>
                    <p>
                      <span className="param-type">string</span>
                    </p>
                    <p>(path)</p>
                    <section className=""></section>
                  </td>
                  <td>Yes</td>
                  <td>
                    <span>
                      IP address of the customer, as captured by your
                      integration. Send IPV4 addresses only. Ensure your
                      integration passes the customer’s IP, not your own. This
                      value helps determine their location and assign the
                      correct payment gateway. Also used for fraud recovery and
                      other important analytics.
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <hr className="color-class"></hr>
            <div>
              <div className="response-header"> 
              <span className="arrow-icon">
              <FontAwesomeIcon icon={faArrowDown} size="xs" />
              <span className="padding-icon"></span>
              <FontAwesomeIcon icon={faArrowUp} size="xs" />
              
              </span>
              Response Sample
              </div>

              <div className="response">
              <JSONPretty id="json-pretty"  mainStyle="color:white" keyStyle="color:white" valueStyle="color:rgb(110,192,105,1)" stringStyle="color:rgb(110,192,105,1)" booleanStyle="color:rgb(110,192,105,1)"
              data={[
                {
                  itinerary_id: "8999989898988",
                  property_id: "8150374",
                  links: {
                    cancel: {
                      method: "DELETE",
                      href:
                        "/2.4/itineraries/8999989898988?token=MY5S3j36cOcLfLBZjPYQ1abhfc8CqmjmFVzkk7euvWaunE57LLeDgaxm516m",
                    },
                  },
                  email: "smith@example.com",
                  phone: {
                    country_code: "1",
                    area_code: "487",
                    number: "5550077",
                  },
                  rooms: [
                    {
                      id: "926784314",
                      confirmation_id: {
                        expedia: "1234567890",
                        property: "BEF23123AA",
                      },
                      bed_group_id: "d395b56d-d31d-4a84-ad2b-66820b1d48e2",
                      checkin: "2018-09-21",
                      checkout: "2018-09-23",
                      number_of_adults: 2,
                      child_ages: [2, 3],
                      given_name: "Givenne",
                      family_name: "Nameo",
                      status: "booked",
                      special_request: "Please give me extra towels.",
                      smoking: false,
                      rate: {
                        id: "035943984",
                        merchant_of_record: "expedia",
                        refundable: true,
                        cancel_refund: {
                          amount: "-65.98",
                          currency: "USD",
                        },
                        amenities: ["12345", "678", "9999"],
                        promotions: {
                          value_adds: {
                            "123abc": {
                              id: "123abc",
                              description:
                                "10 USD credit on activities and sports for your stay.",
                            },
                            "3x4mp13": {
                              id: "3x4mp13",
                              description:
                                "20% discount on theme park tickets purchased through the concierge desk.",
                            },
                          },
                        },
                        cancel_penalties: [
                          {
                            percent: "30%",
                            start: "2018-01-01T01:01:01.000-08:00",
                            end: "2018-12-12T01:01:01.000-08:00",
                            amount: "250.75",
                            currency: "USD",
                            nights: "2",
                          },
                        ],
                        deposit_policies: [
                          {
                            amount: "220.75",
                            due: "2018-12-12T01:01:01.000-08:00",
                          },
                        ],
                        pricing: {
                          nightly: [
                            [
                              {
                                type: "base_rate",
                                value: "111.23",
                                currency: "USD",
                              },
                              {
                                type: "sales_tax",
                                value: "11.12",
                                currency: "USD",
                              },
                            ],
                            [
                              {
                                type: "base_rate",
                                value: "111.23",
                                currency: "USD",
                              },
                              {
                                type: "sales_tax",
                                value: "11.12",
                                currency: "USD",
                              },
                            ],
                          ],
                          stay: [
                            {
                              type: "base_rate",
                              value: "123.45",
                              currency: "USD",
                            },
                          ],
                          totals: {
                            inclusive: {
                              billable_currency: {
                                value: "368.15",
                                currency: "USD",
                              },
                            },
                            exclusive: {
                              billable_currency: {
                                value: "345.91",
                                currency: "USD",
                              },
                            },
                            property_fees: {
                              billable_currency: {
                                value: "36.95",
                                currency: "USD",
                              },
                            },
                          },
                          fees: {
                            mandatory_fee: {
                              billable_currency: {
                                value: "5.00",
                                currency: "USD",
                              },
                              scope: "per_person",
                              frequency: "per_week",
                            },
                            resort_fee: {
                              billable_currency: {
                                value: "20.00",
                                currency: "USD",
                              },
                              scope: "per_accommodation",
                              frequency: "per_day",
                            },
                            mandatory_tax: {
                              billable_currency: {
                                value: "11.95",
                                currency: "USD",
                              },
                              scope: "per_accommodation",
                              frequency: "per_stay",
                            },
                          },
                        },
                      },
                      links: {
                        cancel: {
                          method: "DELETE",
                          href:
                            "/2.4/itineraries/8999989898988/rooms/d08572fc-82d2-4d5d-ad30-60f5be7fb53e?token=MY5S3j36cOcLfLBZjPYQ1abhfc8CqmjmFVzkk7euvWaunE57LLeDgaxm516m",
                        },
                        change: {
                          method: "PUT",
                          href:
                            "/2.4/itineraries/8999989898988/rooms/d08572fc-82d2-4d5d-ad30-60f5be7fb53e?token=MY5S3j36cOcLfLBZjPYQ1abhfc8CqmjmFVzkk7euvWaunE57LLeDgaxm516m",
                        },
                      },
                    },
                  ],
                  billing_contact: {
                    given_name: "John",
                    family_name: "Smith",
                    address: {
                      line_1: "555 1st St",
                      line_2: "10th Floor",
                      line_3: "Unit 12",
                      city: "Seattle",
                      state_province_code: "WA",
                      postal_code: "98121",
                      country_code: "US",
                    },
                  },
                  adjustment: {
                    value: "-100.00",
                    type: "base_rate",
                    currency: "USD",
                  },
                  creation_date_time: "2017-08-17T13:31:15.523Z",
                  affiliate_reference_id: "4480ABC",
                  affiliate_metadata: "This booking was made with EPS.",
                  conversations: {
                    links: {
                      property: {
                        method: "GET",
                        href: "https://www.example.com?key=123abd456",
                      },
                    },
                  },
                },
              ]} >

              </JSONPretty>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
