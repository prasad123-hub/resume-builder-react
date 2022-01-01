import React from "react";
import "../Styles/Banner.css";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner-outer">
      <div className="banner-inner">
        <div className="banner-photo">
          <img
            src="https://buildresume.learncodeonline.in/static/295632d973feb33e08d85844b6516787/0a681/hero-banner.webp"
            alt="home-image"
            className="banner-image"
          />
          <div className="banner-text">
            <h1 className="banner-text-heading">
              Stand out with a Exceptional CV
            </h1>
            <p className="banner-text-des">
              Welcome to version 1 of our resume builder. We will eventually add
              more templates and features. No login, No hassle.
            </p>
            <Link to="builder">
              <button className="banner-text-button">Build My CV</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
