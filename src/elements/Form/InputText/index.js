import React, { useState } from "react";

import propTypes from "prop-types";

import "./index.scss";

export default function InputText(props) {
  const {
    type,
    value,
    name,
    placeholder,
    outerClassName,
    inputClassName,
    errorResponse,
    prepend,
    append,
  } = props;

  const [HasError, setHasError] = useState(null);

  let pattern = "";
  if (type === "email")
    pattern =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}

        <input
          type={type}
          name={name}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          pattern={pattern}
          onChange={onChange}
          placeholder={placeholder}
        />

        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {HasError && <span className="error-helper">{HasError}</span>}
    </div>
  );
}

InputText.defaultProps = {
  type: "text",
  placeholder: "Please type here...",
  pattern: "",
  errorResponse: "Please match the requested format.",
};

InputText.propTypes = {
  type: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
  prepend: propTypes.oneOfType(propTypes.number, propTypes.string),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
};
