import React, { useEffect, useRef, useState } from "react";
import propTypes from "prop-types";

import { DateRange } from "react-date-range";

import formatDate from "../../../utils/formatDate";
import IcCalendar from "assets/images/icons/ic_calendar.svg";

import "./index.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

export default function InputDate(props) {
  const { name, value, placeholder } = props;
  const [isShowed, setIsShowed] = useState(false);

  const datePickerChange = (value) => {
    const target = {
      target: {
        name: name,
        value: value.selection,
      },
    };

    props.onChange(target);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutSide);

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  const refDate = useRef(null);
  const handleClickOutSide = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false);
    }
  };

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false);
  };

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ""}${
    value.endDate ? " - " + formatDate(value.endDate) : ""
  }`;

  return (
    <div
      ref={refDate}
      className={["input-date mb-3", props.outerClassName].join(" ")}
    >
      <div className="input-group">
        <div className="input-group-prepend bg-gray-900">
          <div className="input-group-text">
            <img src={IcCalendar} alt="icon-calendar" />
          </div>
        </div>
        <input
          readOnly
          type="text"
          className="form-control"
          onClick={() => setIsShowed(!isShowed)}
          value={displayDate}
          placeholder={placeholder}
        />
        {isShowed && (
          <div className="date-range-wrapper">
            <DateRange
              editableDateInputs={true}
              onChange={datePickerChange}
              onRangeFocusChange={check}
              ranges={[value]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

InputDate.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
};
