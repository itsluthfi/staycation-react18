import React, { useRef, useState } from "react";
import propTypes from "prop-types";

import "./index.scss";

export default function InputFile(props) {
  const [FileName, setFileName] = useState("");
  const {
    name,
    accept,
    value,
    append,
    prepend,
    outerClassName,
    inputClassName,
    placeholder,
  } = props;

  const refInputFile = useRef(null);

  const onChange = (event) => {
    setFileName(event.target.value);
    props.onChange({
      target: {
        name: event.target.name,
        value: event.target.files,
      },
    });
  };

  return (
    <div className={["input-file mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}

        <input
          type="file"
          ref={refInputFile}
          accept={accept}
          name={name}
          className="d-none"
          value={FileName}
          onChange={props.onChange}
        />

        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={FileName}
          placeholder={placeholder}
          className={["form-control", inputClassName].join(" ")}
        />

        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
}

InputFile.defaultProps = {
  placeholder: "Browse a file...",
};

InputFile.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
  placeholder: propTypes.string,
};
