import About from "./About";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import logo_img from "../Images/logo_food.jpg";
import call from "../Images/call.png";
import mail from "../Images/mail.png";
import location from "../Images/location.png";
import f_1 from "../Images/f-1.jpg";
import f_2 from "../Images/f-2.jpg";
import f_3 from "../Images/f-3.jpg";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      {/* ===== TOP INFO BAR ===== */}
      <header
        className="d-flex flex-column flex-lg-row justify-content-lg-evenly py-2 text-center"
        style={{ backgroundColor: "white", color: "black", fontWeight: "600" }}
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
      {/* ===== NAVBAR (MOVED OUT OF CAROUSEL) ===== */}
      <nav
  className="navbar navbar-expand-lg navbar-dark bg-black px-5 py-2 shadow-sm position-absolute w-[100%]"
  style={{ top: "70px", zIndex: 1050 }}
>
        <div className="container-fluid">
          <div className="navbar-brand d-flex align-items-center ms-lg-5">
            <img
              src={logo_img}
              alt="Logo"
              style={{ height: "45px" }}
              className="me-3 rounded"
            />
            <span className="fw-bold fs-4">FoodZone</span>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav ms-auto align-items-center gap-4">
              <li className="nav-item">
                <span className="nav-link fw-semibold text-white">Home</span>
              </li>
              <li className="nav-item">
                <span className="nav-link fw-semibold text-white">About</span>
              </li>
              <li className="nav-item">
                <span className="nav-link fw-semibold text-white">Services</span>
              </li>
              <li className="nav-item">
                <span className="nav-link fw-semibold text-white">Contact</span>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-danger btn-sm fw-semibold px-3"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* ===== HERO CAROUSEL ===== */}
      <div className="home_container position-relative">
        <div
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active"></button>
            <button data-bs-target="#hero-carousel" data-bs-slide-to="1"></button>
            <button data-bs-target="#hero-carousel" data-bs-slide-to="2"></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active c-item">
              <img src={f_1} className="d-block w-100 c-img" alt="Slide 1" />
              <div className="carousel-caption top-0 img-phara">
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

            <div className="carousel-item c-item">
              <img src={f_2} className="d-block w-100 c-img" alt="Slide 2" />
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

            <div className="carousel-item c-item">
              <img src={f_3} className="d-block w-100 c-img" alt="Slide 3" />
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
          </div>

          <button
            className="carousel-control-prev"
            data-bs-target="#hero-carousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button
            className="carousel-control-next"
            data-bs-target="#hero-carousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>

      {/* ===== ABOUT SECTION ===== */}
      <About />
    </>
  );
};

export default Home;
