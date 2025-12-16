import React from "react";
import f_3 from "../Images/f-3.jpg";
import "./Home.css"
import Gallery from "./Gallery";
import Card from "./Card";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <section className="py-3 about-container">
        <div className="container-lg">
          <h1 className="a-title mb-5 text-center">About Us</h1>
          <div className="row about-section">
            <div className="col-lg-6">
              <img className="img-fluid rounded-4 h-75" src={f_3} alt="About Us" />
            </div>
            <div className="col-lg-6 ps-5 mt-md-4 mt-4 mt-lg-5">
              <h3 className="about-title">In Our Food</h3>
              <p>
                We are passionate about delivering fresh and healthy food
                straight to your doorstep. Our chefs use only the finest
                ingredients to create delicious meals that you’ll love.
              </p>
              <p>
                From traditional recipes to modern culinary innovations, our
                menu offers something for every taste. Experience quality,
                flavor, and convenience all in one place.
              </p>
               <p>
               Traditional recipes to modern culinary innovations, our
                menu offers something for every taste. Experience quality,
                flavor, and convenience all in one place.
              </p>
              <button className="btn btn-warning btn-lg rounded-pill mt-3">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Card />
      <Footer />
    </>
  );
};

export default About;
