import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import propTypes from "prop-types";

import Button from "elements/Button";
import { InputDate, InputNumber } from "elements/Form";

class BookingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        duration: 1,
        date: {
          startDate: new Date(),
          endDate: new Date(),
          key: "selection",
        },
      },
    };
  }

  updateData = (event) => {
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const { data } = this.state;

    if (prevState.data.date !== data.date) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(data.date.endDate);
      const countDuration = new Date(endDate - startDate).getDate();
      this.setState({
        data: {
          ...this.state.data,
          duration: countDuration,
        },
      });
    }

    if (prevState.data.duration !== data.duration) {
      const startDate = new Date(data.date.startDate);
      const endDate = new Date(
        startDate.setDate(startDate.getDate() + Number(data.duration) - 1)
      );
      this.setState({
        ...this.state,
        data: {
          ...this.state.data,
          date: {
            ...this.state.data.date,
            endDate: endDate,
          },
        },
      });
    }
  }

  startBooking = () => {
    const { data } = this.state;
    this.props.startBooking({
      _id: this.props.itemDetails._id,
      duration: data.duration,
      date: {
        startDate: data.date.startDate,
        endDate: data.date.endDate,
      },
    });
    this.props.history.push("/checkout");
  };

  render() {
    const { itemDetails } = this.props;
    const { data } = this.state;

    return (
      <div className="card bordered" style={{ padding: "60px 80px" }}>
        <h4 className="mb-3">Start Booking</h4>
        <h5 className="h2 text-teal mb-4">
          ${itemDetails.price}{" "}
          <span className="text-gray-300 font-weight-light">
            per {itemDetails.unit}
          </span>
        </h5>

        <label htmlFor="duration">How long you will stay?</label>
        <InputNumber
          max={30}
          suffix=" night"
          isSuffixPlural
          name="duration"
          onChange={this.updateData}
          value={data.duration}
        />

        <label htmlFor="date">Pick a date</label>
        <InputDate name="date" onChange={this.updateData} value={data.date} />

        <h6
          className="text-gray-300 font-weight-light"
          style={{ marginBottom: 40 }}
        >
          You will pay $
          <span className="text-gray-900 font-weight-normal">
            {itemDetails.price * data.duration} USD
          </span>{" "}
          per{" "}
          <span className="text-gray-900 font-weight-normal">
            {data.duration} {itemDetails.unit}
          </span>
        </h6>

        <Button
          className="btn"
          isPrimary
          hasShadow
          isBlock
          onClick={this.startBooking}
        >
          Continue Book
        </Button>
      </div>
    );
  }
}

BookingForm.propTypes = {
  itemDetails: propTypes.object,
  startBooking: propTypes.func,
};

export default withRouter(BookingForm);
