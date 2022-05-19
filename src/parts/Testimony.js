import React from "react";
import { Fade } from "react-reveal";

import Star from "elements/Star";
import Button from "elements/Button";

import TestimonialFrame from "assets/images/testimonial-landingpages-frame.jpg";

export default function Testimony(props) {
  return (
    <section className="container">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 60 }}>
            <div className="testimonial-hero">
              <img
                className="position-absolute"
                src={props.data.imageUrl}
                alt={props.data.name}
                style={{ margin: "30px 0 0 30px", zIndex: 1 }}
              />
              <img
                className="position-absolute"
                src={TestimonialFrame}
                alt={`${props.data.name}-frame`}
              />
            </div>
          </div>
          <div className="col">
            <h4 className="text-gray-900" style={{ marginBottom: 40 }}>
              {props.data.name}
            </h4>
            <Star value={props.data.rate} width={35} height={35} spacing={4} />
            <h5 className="h2 font-weight-light my-2 line-height-2">
              {props.data.content}
            </h5>
            <span className="font-weight-light text-gray-300">
              {props.data.familyName}, {props.data.familyOccupation}
            </span>
            <div>
              <Button
                type="link"
                className="btn px-5"
                href={`/testimonial/${props.data._id}`}
                isPrimary
                hasShadow
                style={{ marginTop: 50 }}
              >
                Read Their Story
              </Button>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
