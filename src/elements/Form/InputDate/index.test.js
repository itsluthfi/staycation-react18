import React, { Component } from "react";
import { fireEvent, render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import InputDate from "./index";

class InputDateTest extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <InputDate
        name="value"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<InputDateTest />);
  const wrapper = container.querySelector(".input-date");
  const input = container.querySelector("input.form-control");
  return { input, wrapper, container };
};

test("Should show wrapper with className .form-control", () => {
  const { wrapper } = setup();
  expect(wrapper).toBeInTheDocument();
});

test("Should show tag <input> and has className .form-control", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test("Should date picker when click input fields", () => {
  const { container, input } = setup();

  //   screen.debug();
  fireEvent.click(input, { button: 1 });
  const datePickerWrapper = container.querySelector(".date-range-wrapper");
  screen.debug();

  expect(datePickerWrapper).toBeInTheDocument();
});
