import React from "react";
import { Fade } from "react-reveal";

import ImgCompleted from "assets/images/completed.jpg";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-4">
            <img
              src={ImgCompleted}
              className="img-fluid"
              alt="completed payment"
            />
            <p className="text-gray-300">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
