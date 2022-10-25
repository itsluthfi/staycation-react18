import React, { Component } from "react";

import { Fade } from "react-reveal";
import { connect } from "react-redux";

import Header from "parts/Header";
import Stepper from "elements/Stepper";
import Button from "elements/Button";
import BookingInformation from "parts/Checkout/BookingInformation";
import Completed from "parts/Checkout/Completed";
import Payment from "parts/Checkout/Payment";
import Numbering from "elements/Stepper/Numbering";
import Meta from "elements/Stepper/Meta";
import MainContent from "elements/Stepper/MainContent";
import Controller from "elements/Stepper/Controller";

import ItemDetails from "json/itemDetails.json";

class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proofPayment: "",
      bankHolder: "",
      bankName: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const { data } = this.state;
    const { checkout } = this.props;

    if (!checkout)
      return (
        <div className="container">
          <div
            className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
          >
            <div className="col-3">
              Pilih kamar dulu
              <div>
                <Button
                  className="btn mt-5"
                  type="button"
                  onClick={() => this.props.history.goBack()}
                  isLight
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      );

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields below",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            itemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            itemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Yay! Completed",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCenter />
        <Stepper steps={steps}>
          {(prevStep, nextStep, currentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={currentStep}
                style={{ marginBottom: 50 }}
              />
              <Meta data={steps} current={currentStep} />
              <MainContent data={steps} current={currentStep} />
              {currentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn d-flex justify-content-center"
                    type="link"
                    isBlock
                    isLight
                    href={`/details/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === "payment" && (
                <Controller>
                  {data.proofPayment !== "" &&
                    data.bankHolder !== "" &&
                    data.bankName !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    type="button"
                    isBlock
                    isLight
                    onClick={prevStep}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {currentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn d-flex justify-content-center"
                    type="link"
                    isBlock
                    isPrimary
                    hasShadow
                    href="/"
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
  page: state.page,
});

export default connect(mapStateToProps)(Checkout);
