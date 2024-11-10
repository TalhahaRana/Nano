import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import "./Style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faPaintBrush,
  faPalette,
  faClipboard,
  faTag,
  faBox,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "react-bootstrap";
import proA from "../img/product/proA.png";
import proB from "../img/product/proB.png"; // Example images
import proC from "../img/product/proC.png";


function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Adjust duration as desired
  }, []);

  return (
    <div className="main pb-5">
      <div className="hero">
        {/* Hero Section */}
        <div className="container he">
          <div className="row justify-content-center item-center">
            <div className="col-md-6 col-sm-12" data-aos="fade-up">
              <h1 className="display-4 text-primary gradient-text">
                Welcome to the World of Stress-Free Printing!
              </h1>
            </div>
            <div className="col-md-6 col-sm-12" data-aos="fade-up">
              <p className="lead text-white">
                Discover the power of NanoDrier High-Performance Ink Drier — a
                game-changing formula that accelerates drying rates and
                optimizes your printing process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Product Section */}
      <div className="text-center my-5" data-aos="zoom-in">
        <h1 className="mb-4 text-white">Featured Product</h1>
        <div className="card mx-auto" style={{ width: "18rem" }}>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src={proA} alt="First product image" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={proB} alt="Second product image" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={proC} alt="Third product image" />
            </Carousel.Item>
          </Carousel>
          <div className="card-body">
            <h5 className="card-title">NanoDrier-offset</h5>
            <p className="card-text">
              NanoDrier Ink Drier is a revolutionary product that enhances the drying speed of inks. Perfect for industrial printers.
            </p>
            <Link to="/products">
              <button className="btn btn-primary">Buy Now</button>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional Content Sections with Animations */}
      <div className="container mt-5 text-white">
        <h2 className="text-center bg-ex" data-aos="fade-up">
          HOW CAN NanoDrier BENEFIT YOU?
        </h2>
        <h3 className="text-center" data-aos="fade-down">
          What’s your paper type?
        </h3>
        <p className="text-center" data-aos="fade-up">
          NanoDrier is versatile and suitable for a wide range of substrates. As
          we say, “Give us your toughest job, and we’ll make it right!”
        </p>
        <div className="about">
        <div className="row justify-content-around mt-2 text-white">
          <div className="col-md-5 con mt-2" data-aos="fade-up">
            <h4>
              <FontAwesomeIcon
                icon={faFileAlt}
                className="me-2"
                style={{ color: "#ff5733" }}
              />{" "}
              Felt Stock
            </h4>
            <p>
              For excellent coverage, ink needs to settle into the paper’s
              crevices. However, more ink can mean extended drying. NanoDrier
              solves this by supporting thicker ink layers with no extra drying
              time required.
            </p>
          </div>

          <div className="col-md-5 con mt-2" data-aos="fade-up">
            <h4>
              <FontAwesomeIcon
                icon={faPaintBrush}
                className="me-2"
                style={{ color: "#33aaff" }}
              />{" "}
              Gloss Coated Stock
            </h4>
            <p>
              This smooth paper enables faster drying of ink. NanoDrier enhances
              scratch and rub resistance for even better durability.
            </p>
          </div>
        </div>

        <div className="row justify-content-around mt-2">
          <div className="col-md-5 con mt-2" data-aos="fade-up">
            <h4>
              <FontAwesomeIcon
                icon={faPalette}
                className="me-2"
                style={{ color: "#ffaa33" }}
              />{" "}
              Matte Coated Stock
            </h4>
            <p>
              This acidic, matte-finish paper makes ink drying challenging due
              to low pH levels. NanoDrier binds the ink to its carrier, reducing
              chalking and significantly shortening drying times.
            </p>
          </div>

          <div className="col-md-5 con mt-2" data-aos="fade-up">
            <h4>
              <FontAwesomeIcon
                icon={faClipboard}
                className="me-2"
                style={{ color: "#ff33aa" }}
              />{" "}
              Synthetic Substrates
            </h4>
            <p>
              Known for its printing challenges (like Reflex Blue on Yupo),
              NanoDrier boosts rub resistance, adhesion, and set times without
              the need for expensive UV or EB inks and systems.
            </p>
          </div>
        </div>

        <div className="row justify-content-around mt-2">
          <div className="col-md-5 con mt-2" data-aos="fade-up">
            <h4>
              <FontAwesomeIcon
                icon={faTag}
                className="me-2"
                style={{ color: "#33ffaa" }}
              />{" "}
              Uncoated Substrates
            </h4>
            <p>
              Acidic stocks rapidly absorb ink, bypassing pigment binding.
              NanoDrier ensures full ink adhesion by bonding the pigment to the
              carrier for complete drying.
            </p>
          </div>

          <div className="col-md-5 con mt-2" data-aos="fade-up">
            <h4>
              <FontAwesomeIcon
                icon={faBox}
                className="me-2"
                style={{ color: "#aaff33" }}
              />{" "}
              Label Stocks
            </h4>
            <p>
              Label stocks have slow ink absorption and lengthy drying times.
              With NanoDrier, you can use regular inks without the need for
              downtime or UV/EB systems.
            </p>
          </div>
        </div>

        <div className="row justify-content-around mt-2">
          <div className="col-md-5 con mt-2" data-aos="fade-up">
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="me-2"
                style={{ color: "#aa33ff" }}
              />{" "}
              Carton/Board Stock
            </h4>
            <p>
              The ink’s vehicle quickly absorbs, leaving pigment on the surface
              and leading to chalking. NanoDrier prevents this, ensuring a
              smooth finish.
            </p>
          </div>

          <div className="col-md-5 con mt-2" data-aos="fade-up">
            <h4>
              <FontAwesomeIcon
                icon={faStar}
                className="me-2"
                style={{ color: "#33ffaa" }}
              />{" "}
              Foil Stamping (Laser & Thermal Safe)
            </h4>
            <p>
              Without proper curing, ink can be too soft for foil release.
              NanoDrier cures the ink thoroughly, creating a solid base that
              securely holds the foil.
            </p>
          </div>
        </div>
        </div>


      </div>

      <div className="container herooo mt-5 why">
        <div className="row justify-content-center p-5 " data-aos="fade-up">
          <h2 className="card-title text-center mb-2">Why Choose NanoDrier?</h2>
          <p className="card-text text-justify text-white">
            NanoDrier’s Advanced Ink Drier is a groundbreaking solution designed
            to speed up ink drying by boosting cross-linking reactions far more
            efficiently than traditional driers. The secret to our proprietary
            formula lies in cutting-edge chemistry that enhances catalyst
            solubility within the ink.
          </p>
          <p className="card-text text-white">
            This improvement in solubility provides two key benefits:
          </p>
          <p className="card-text text-white">
            Catalysts are evenly distributed, positioned closer to where
            cross-linking begins.
          </p>
          <p className="card-text text-white">
            Higher drier concentration is possible without causing phase
            separation.
          </p>
          <p className="card-text mt-4 text-white">
            With NanoDrier, you can print on a range of substrates without
            depending on specialized UV or EB inks, simplifying your workflow
            for quicker, more efficient printing processes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
