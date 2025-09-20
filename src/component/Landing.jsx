// app/component/Landing.jsx
import React from "react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <section id="mainPage" className="mainPage min-hv-100 d-flex align-items-center">
      <div className="container">
        <div className="row king">
          <div className="col-lg-6 d-flex flex-column justify-content-center text-start order-2 order-lg-1">
            <h1 data-aos="fade-up">emkAy</h1>
            <h2 data-aos="fade-up" data-aos-delay="400">
              I provide Digital <br /> Designs.
            </h2>
            <p>
              My expertise covers a wide range of design services including logo creation, brand identity, posters, social media content, and UI/UX elements. 
              I believe in blending creativity with strategy, ensuring every project I take on reflects innovation, clarity, and purpose.
            </p>
            <div className="d-flex flex-row gap-4 justify-content-center mt-4">
              <Link href="/work" className="btn btn-lg text-uppercase rounded-0 btn-outline-primary scrollto">
                View My Work
              </Link>
              <Link href="/intouch" className="btn btn-lg text-uppercase rounded-0 btn-outline-primary scrollto">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="col-lg-6 hero-img order-lg-1 order-1" data-aos="zoom-out" data-aos-delay="200">
            <img src="/about.jpg" className="img-fluid p-5" alt="Portfolio" />
          </div>
        </div>
      </div>
    </section>
  );
}