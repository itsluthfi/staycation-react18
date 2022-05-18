import React from "react";

import propTypes from "prop-types";

import "./index.scss";

export default function Star(props) {
  const decimals = Number(props.value) % 1;

  const star = [];
  let leftPosition = 0;
  for (let i = 0; i < 5 && i < props.value - decimals; i++) {
    leftPosition = leftPosition + props.width;
    star.push(
      <div
        className="star"
        key={`star-${i}`}
        style={{
          left: i * props.width,
          width: props.width,
          height: props.height,
          marginRight: props.spacing,
        }}
      ></div>
    );
  }

  if (decimals > 0 && props.value <= 5)
    star.push(
      <div
        className="star"
        key={`starWithDecimal`}
        style={{
          left: leftPosition,
          width: decimals * props.width - props.spacing,
          height: props.height,
        }}
      ></div>
    );

  const starPlaceholder = [];
  for (let i = 0; i < 5; i++) {
    starPlaceholder.push(
      <div
        className="star placeholder"
        key={`starPlaceholder-${i}`}
        style={{
          left: i * props.width,
          width: props.width,
          height: props.height,
          marginRight: props.spacing,
        }}
      ></div>
    );
  }

  return (
    <>
      <div
        className={[`stars`, props.className].join(" ")}
        style={{ height: props.height }}
      >
        {starPlaceholder}
        {star}
      </div>
    </>
  );
}

Star.defaultProps = {
  width: 0,
  spacing: 0,
};

Star.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
  spacing: propTypes.number,
};
