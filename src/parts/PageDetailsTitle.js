import React from "react";
import Breadcrumb from "elements/Breadcrumb";
import { Fade } from "react-reveal";

export default function PageDetailsTitle(props) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={props.breadcrumbList} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{props.data.title}</h1>
            <span className="text-gray-300">
              {props.data.city}, {props.data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
