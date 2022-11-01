import React from "react";

import parse from "react-html-parser";

export default function PagesDetailsDescription(props) {
  return (
    <div className="wrap-details-desc">
      <h4>About The Place</h4>
      <div>{parse(props.data.description)}</div>
      <div className="row" style={{ marginTop: 30 }}>
        {props.data.featureId.length === 0
          ? "Tidak Ada Feature"
          : props.data.featureId.map((feature, index) => {
              return (
                <div
                  key={`DetailDesc-${index + 1}`}
                  className="col-3"
                  style={{ marginBottom: 20 }}
                >
                  <img
                    width={38}
                    className="d-block mb-2"
                    src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
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
