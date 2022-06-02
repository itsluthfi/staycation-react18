import React, { Component } from "react";

import { Fade } from "react-reveal";

import Header from "parts/Header";
import PageDetailsTitle from "parts/PageDetailsTitle";
import PageDetailsDescription from "parts/PageDetailsDescription";
import FeaturedImage from "parts/FeaturedImage";

import itemDetails from "json/itemDetails.json";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Staycation | Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumbList = [
      { pageTitle: "Home", pageHref: "/" },
      { pageTitle: "House Details", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <main>
          <PageDetailsTitle
            data={itemDetails}
            breadcrumbList={breadcrumbList}
          />
          <FeaturedImage data={itemDetails.imageUrls} />
          <section className="container">
            <div className="row">
              <div className="col-7 pr-3">
                <Fade bottom>
                  <PageDetailsDescription data={itemDetails} />
                </Fade>
              </div>
              <div className="col-5">
                <Fade bottom>
                  <BookingForm itemDetails={itemDetails} />
                </Fade>
              </div>
            </div>
          </section>
          <Categories data={itemDetails.categories} />
          <Testimony data={itemDetails.testimonial} />
        </main>
        <Footer />
      </>
    );
  }
}
