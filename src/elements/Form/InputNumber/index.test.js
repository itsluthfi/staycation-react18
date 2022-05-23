import React, { Component } from "react";
import { render, fireEvent } from "@testing-library/react";
import InputNumber from "./index";

class InputNumberTest extends Component {
  state = {
    value: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <InputNumber
        name="value"
        value={this.state.value}
        onChange={this.handleChange}
        max={31}
      />
    );
  }
}

const setup = () => {
  const { container } = render(<InputNumberTest />);
  const input = container.querySelector(`input.form-control[name="value"]`);

  return { input };
};

test("Should able to change value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 23 } });
  expect(input.value).toBe("23");
});

test("Should not able to change when reach max value", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: 32 } });
  expect(input.value).toBe("");
});
