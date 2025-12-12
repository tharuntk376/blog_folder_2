import About from "./About";
import { useState } from "react";
import logo_img from "../Images/logo_food.jpg";
import call from "../Images/call.png";
import mail from "../Images/mail.png";
import location from "../Images/location.png";
import f_1 from "../Images/f-1.jpg";
import f_2 from "../Images/f-2.jpg";
import f_3 from "../Images/f-3.jpg";
import "./Home.css";

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header
        className="d-flex flex-column flex-lg-row justify-content-lg-evenly py-0 text-center mt-4"
        style={{
          backgroundColor: "white",
          color: "black",
          fontWeight: "600",
        }}
      >
        <p className="m-0">
          <img className="pe-2" src={location} alt="Location" />
          Chennai
        </p>
        <p className="m-0">
          <img className="pe-2" src={call} alt="Call" />
          +91 1234567890
        </p>
        <p className="m-0">
          <img className="pe-2" src={mail} alt="Mail" />
          food_231@gmail.com
        </p>
      </header>

      <div className="home_container position-relative">
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
          <nav className="navbar navbar-expand-lg navbar-dark bg-black px-5 py-2 shadow-sm text-center">
            <div className="container-fluid">
              {/* LOGO */}
              <a
                className="navbar-brand d-flex align-items-center ms-lg-5"
                href="#!"
              >
                <img
                  src={logo_img}
                  alt="Logo"
                  style={{ height: "45px", width: "auto" }}
                  className="me-3 rounded"
                />
                <span className="fw-bold fs-4">FoodZone</span>
              </a>

              {/* TOGGLER BUTTON */}
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#mainNav"
                aria-controls="mainNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              {/* NAV LINKS */}
              <div className="collapse navbar-collapse" id="mainNav">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
                  <li className="nav-item">
                    <a className="nav-link fw-semibold text-white" href="#!">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link fw-semibold text-white" href="#!">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link fw-semibold text-white" href="#!">
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link fw-semibold text-white" href="#!">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active c-item">
              <img src={f_1} class="d-block w-100 c-img" alt="Slider 1" />
              <div class="carousel-caption top-0 img-phara">
                <p className="mt-5 fs-3 text-uppercase">Carol Smith</p>
                <h1 className="display-4 fw-bolder text-capitalize">
                  I had an amazing dining experience. The staff was attentive
                  and family.
                </h1>
                <button className="btn btn-warning px-3 py-2 fs-4 mt-5">
                  Read More
                </button>
              </div>
            </div>
            <div class="carousel-item c-item">
              <img src={f_2} class="d-block w-100 c-img" alt="Slider 2" />
              <div class="carousel-caption top-0 img-phara">
                <p className="mt-5 fs-3 text-uppercase">Frank Miller</p>
                <h1 className="display-4 fw-bolder text-capitalize">
                  I truly enjoyed the variety of dishes offered here. Served
                  with care.
                </h1>
                <button className="btn btn-warning px-3 py-2 fs-4 mt-5">
                  Read More
                </button>
              </div>
            </div>
            <div class="carousel-item c-item">
              <img src={f_3} class="d-block w-100 c-img" alt="Slider 3" />
              <div class="carousel-caption top-0 img-phara">
                <p className="mt-5 fs-3 text-uppercase">"Ivy Anderson"</p>
                <h1 className="display-4 fw-bolder text-capitalize">
                  I had an amazing dining experience. The staff was attentive
                  and friendly.
                </h1>
                <button className="btn btn-warning px-3 py-2 fs-4 mt-5">
                  Read More
                </button>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <About />
    </>
  );
};

export default Home;
