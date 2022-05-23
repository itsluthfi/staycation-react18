import React from "react";

import propTypes from "prop-types";

import "./index.scss";

export default function InputNumber(props) {
  const { value, min, max, placeholder, name, prefix, suffix, isSuffixPlural } =
    props;

  const onChange = (e) => {
    let value = String(e.target.value);

    if (+value <= max && +value >= min) {
      props.onChange({
        target: {
          name: name,
          value: +value,
        },
      });
    }
  };

  const minus = () => {
    value > min &&
      onChange({
        target: {
          name: name,
          value: +value - 1,
        },
      });
  };

  const plus = () => {
    value < max &&
      onChange({
        target: {
          name: name,
          value: +value + 1,
        },
      });
  };

  return (
    <div className={["input-number mb-3", props.outerClassName].join(" ")}>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text minus" onClick={minus}>
            -
          </span>
        </div>
        <input
          readOnly
          className="form-control"
          name={name}
          value={`${prefix}${value}${suffix}${
            isSuffixPlural && value > 1 ? "s" : ""
          }`}
          onChange={onChange}
          min={min}
          max={max}
          placeholder={placeholder ? placeholder : "0"}
        />
        <div className="input-group-append">
          <span className="input-group-text plus" onClick={plus}>
            +
          </span>
        </div>
      </div>
    </div>
  );
}

InputNumber.defaultProps = {
  min: 1,
  max: 1,
  prefix: "",
  suffix: "",
};

InputNumber.propTypes = {
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  name: propTypes.string,
  isSuffixPlural: propTypes.bool,
};
