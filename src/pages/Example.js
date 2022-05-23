import React, { Component } from "react";
import Breadcrumb from "../elements/Breadcrumb";

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            {/* <InputNumber
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
              max={31}
              suffix=" night"
              isSuffixPlural
            /> */}
            {/* <InputDate
              name="value"
              value={this.state.value}
              onChange={this.handleChange}
            /> */}
            <Breadcrumb data={breadcrumbList} />
          </div>
        </div>
      </div>
    );
  }
}
