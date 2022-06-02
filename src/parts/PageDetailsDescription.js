import React from "react";

import parse from "html-react-parser";

export default function PagesDetailsDescription(props) {
  return (
    <div className="wrap-details-desc">
      <h4>About The Place</h4>
      <div>{parse(props.data.description)}</div>
      <div className="row" style={{ marginTop: 30 }}>
        {props.data.features.map((feature, idx) => {
          return (
            <div
              key={`DetailDesc-${idx + 1}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                width={38}
                className="d-block mb-2"
                src={feature.imageUrl}
                alt={feature.name}
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-300 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
