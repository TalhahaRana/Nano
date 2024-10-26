import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import image from '../img/image.png'
import "./Style.css";

function Home() {
  return (
    <div className=" py-5 hero">
      <div className="container mt-5">
        {/* Hero Section */}
        <div className="row justify-content-center item-center he">
          <div className="col-6">
            <h1 className="display-4 text-primary gradient-text">
              Welcome to the World of Stress-Free Printing!
            </h1>
          </div>
          <div className="col-6">
            <p className="lead text-white">
              Discover the power of SpeedyDry High-Performance Ink Drier — a
              game-changing formula that accelerates drying rates and optimizes
              your printing process.
            </p>
          </div>
        </div>
        {/* Featured Product Section */}
        <div className="text-center my-5">
          <h1 className="mb-4 text-white">Featured Product</h1>
          <div className="card mx-auto" style={{ width: "18rem" }}>
            <img
              src="https://via.placeholder.com/150"
              className="card-img-top"
              alt="Product 1"
            />
            <div className="card-body">
              <h5 className="card-title">SpeedyDry Ink Drier</h5>
              <p className="card-text">
                SpeedyDry Ink Drier is a revolutionary product that enhances the
                drying speed of inks. Perfect for industrial printers.
              </p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="container mt-5">
          <h2 class="text-center bg-ex">WHAT CAN SPEEDYDRY HELP YOU WITH?</h2>
          <h3 class="text-center">What’s your type?</h3>
          <p class="text-center">
            SpeedyDry can be used on any type of stock you can think of. “Give
            us your worst job, and we’ll fix it for you!” we like to say.
          </p>

          <div class="row justify-content-around mt-2">
            <div class="col-md-5 con">
              <h4>Felt Stock</h4>
              <p>
                In order to produce good coverage, the ink must be pushed into
                the valleys of the sheet. Longer drying times are associated
                with more ink. SpeedyDry solves this problem by allowing for a
                thicker ink layer without requiring additional drying time.
              </p>
            </div>

            <div class="col-md-5 con">
              <h4>Gloss Coated Stock</h4>
              <p>
                This type of paper helps ink to dry quickly. You can gain more
                scratch and rub resistance by applying SpeedyDry.
              </p>
            </div>
          </div>

          <div class="row justify-content-around mt-2">
            <div class="col-md-5 con">
              <h4>Matte Coated Stock</h4>
              <p>
                Matte Coated Stock is acidic and has a matte finish. Ink has a
                hard time drying due to lower pH levels. SpeedyDry links the ink
                pigment to the carrier, eliminating chalking and drastically
                decreasing drying times.
              </p>
            </div>

            <div class="col-md-5 con">
              <h4>Synthetic Substrates</h4>
              <p>
                Think of Reflex Blue on Yupo, which is a printer’s nightmare.
                SpeedyDry improves rub resistance, adhesion, and set times
                without needing costly UV or EB inks or equipment.
              </p>
            </div>
          </div>

          <div class="row justify-content-around mt-2">
            <div class="col-md-5 con">
              <h4>Uncoated Substrates</h4>
              <p>
                Acidic stocks have fast absorption rates, leading the vehicle to
                pass through the paper without binding to the pigment. SpeedyDry
                binds the ink pigment to the vehicle, ensuring full thickness
                drying.
              </p>
            </div>

            <div class="col-md-5 con">
              <h4>Label Stocks</h4>
              <p>
                With low absorption, label stocks take a long time to dry.
                SpeedyDry allows you to run jobs with regular ink and without
                downtime, even when not using UV or EB systems.
              </p>
            </div>
          </div>

          <div class="row justify-content-around mt-2">
            <div class="col-md-5 con">
              <h4>Carton/Board Stock</h4>
              <p>
                The vehicle penetrates too fast into the paper, leaving the
                pigment on the surface and causing chalking. SpeedyDry prevents
                this issue.
              </p>
            </div>

            <div class="col-md-5 con">
              <h4>Foil Stamping (Laser & Thermal Safe)</h4>
              <p>
                If the ink isn’t properly cured, it will be too soft to release
                the foil. SpeedyDry fully cures the ink, creating a firm surface
                that better accepts the foil.
              </p>
            </div>
          </div>
        </div>

        <div className="container hero mt-5 why">
          <div className="row  justify-content-center p-5">
            <h2 className="card-title text-center mb-2">Why SpeedyDry?</h2>
            <p className="card-text text-justify text-white">
              SpeedyDry High-Performance Ink Drier is a revolutionary formula
              that accelerates ink drying by catalyzing cross-linking reactions
              more efficiently than previous driers. The key to our patented
              formula is innovative chemistry that increases the solubility of
              our catalysts in ink.
            </p>
            <p className="card-text text-white">
              This increased solubility offers two major advantages:
            </p>
            <p className="card-text text-white">
            Catalysts are more uniformly distributed, closer to
            cross-linking initiation sites.
            </p>
            <p className="card-text text-white">
            Drier concentration can be increased substantially without phase
            separation.
            </p>
            <p className="card-text mt-4 text-white">
              With SpeedyDry, you can print on substrates without relying on
              dedicated UV or EB inks and systems, streamlining your printing
              workflow for faster, more efficient results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
