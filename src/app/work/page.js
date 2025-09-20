"use client";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./work.css"; // ✅ custom CSS file for hover effects

export default function WorkPage() {
  const [index, setIndex] = useState(-1);

  // ✅ Full 18 images with title + description
  const images = [
    {
      src: "/design1.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design2.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design3.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design4.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design5.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design6.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design7.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design8.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design9.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design10.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design11.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design12.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design13.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design14.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design15.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design16.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design17.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    },
    {
      src: "/design18.jpg",
      title: "Creative Digital Designs",
      description:
        "Let us create or redesign your Logo, Flyer, Poster, Business Cards with the latest tool."
    }
  ];

  return (
    <div className="pt-5">
      <section className="portfolio-section">
        <div className="container">
          <h2 className="text-center mb-4">My Work</h2>
          <p className="text-center text-white">
            Here are some of my graphic design projects created using CorelDraw,
            Photoshop, Canva, and more. Click on any image to view fullscreen.
          </p>

          {/* ✅ Card Grid */}
          <div className="row">
            {images.map((img, i) => (
              <div key={i} className="col-md-4 mb-4">
                <div
                  className="card work-card h-100"
                  onClick={() => setIndex(i)}
                >
                  <img
                    src={img.src}
                    className="card-img-top"
                    alt={`Design ${i + 1}`}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{img.title}</h5>
                    <p className="card-text">{img.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Lightbox with captions */}
          <Lightbox
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            slides={images.map((img) => ({
              src: img.src,
              description: `${img.title} – ${img.description}`
            }))}
          />
        </div>
      </section>
    </div>
  );
}
