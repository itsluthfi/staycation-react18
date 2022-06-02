import React from "react";

import BrandIcon from "parts/IconText";
import Button from "elements/Button";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto mr-5" style={{ width: 300 }}>
            <BrandIcon />
            <div className="text-gray-300 font-weight-light mt-2">
              We kaboom your beauty holiday instantly and memorable.
            </div>
          </div>
          <div className="col mr-5">
            <h5 className="text-gray-900 mt-2">For Beginners</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/booking">
                  Start Booking a Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col mr-5">
            <h5 className="text-gray-900 mt-2">Explore Us</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/careers">
                  Our Careers
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5 className="text-gray-900 mt-2">Connect Us</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register" isExternal>
                  support@staycation.id
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="tel:+622122081996">
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className="list-group-item">
                <span>Staycation, Yogyakarta, DI Yogyakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2022 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
