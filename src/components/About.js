import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Custom CSS for additional styles

function About() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <div className="blockquote-container">
        <blockquote className="blockquote text-center">
          <p className="mb-0">“OUNCES OF SPEEDYDRY (PREVENTION) ARE WORTH POUNDS OF DOLLARS (CURES)”</p>
         
        </blockquote>
      </div>
      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">Who We Are</h5>
          <p className="card-text">
            We make one product line, and simply put – we do it better than anyone else. SpeedyDry is the result of one goal: making the press room easier. As a result, we got our fast ink dry cure. No frills, no fancy terms, just trying to make your life easier and make you money along the way. 
            We wish we could make the product cheaper; it sure would make our life easier. Unfortunately, for us, we have to produce it in specially crafted batches. 
            We can promise you this though, we will show you a return on your product investment of at least 5 times your money. 
            Give us a fair trial by simply tailing it in at the end of one of your difficult runs and you will see the results. Or return the product, no questions asked, no restocking fees, no shipping charges (to or from), no hidden expenses – a full refund – our promise to you.
          </p>
        </div>
      </div>
      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">Our Promise</h5>
          <p className="card-text">
            Our formulation is patented and award-winning (A GATF InterTech Technology Award Winner). The product has spent a ridiculous amount of hours in the lab and in the press room over the years and has been constantly revised throughout its lifetime to continuously improve upon the base formulation. 
            It is expensive, but that old saying “you get what you pay for” rings especially true when it comes to SpeedyDry. 
            It more than pays for itself – it makes you money and saves you time.
          </p>
        </div>
      </div>
      <div className="card my-4">
        <div className="card-body">
          <h5 className="card-title">Why Choose Us?</h5>
          <p className="card-text">
            That’s why we created SpeedyDry, a fast ink dry cure for your ink. Do you need a fast ink dry cure? Get your gallon of SpeedyDry on our webshop. Do you want to know how to use SpeedyDry? Click here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
