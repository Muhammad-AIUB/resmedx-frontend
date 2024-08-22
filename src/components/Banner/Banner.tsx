"use client";
import { useEffect, useState } from "react";
import img1 from "@/assets/banner1.jpg";
import img2 from "@/assets/img2.webp";
import img3 from "@/assets/img3.webp";
import img4 from "@/assets/img4.jpg";
import Image from "next/image";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 4) + 1);
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="carousel w-full h-[70%]">
      <div
        id="slide1"
        className={`carousel-item relative w-full ${
          currentSlide === 1 ? "block" : "hidden"
        }`}
      >
        <Image
          src={img1}
          className="w-full object-cover"
          alt="Slide 1"
          width={1920} // Example width
          height={1080} // Example height
          quality={100} // Highest quality
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide4"
            onClick={() => setCurrentSlide(4)}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide2"
            onClick={() => setCurrentSlide(2)}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide2"
        className={`carousel-item relative w-full ${
          currentSlide === 2 ? "block" : "hidden"
        }`}
      >
        <Image
          src={img4}
          className="w-full object-cover"
          alt="Slide 2"
          quality={100} // High quality
          // layout="responsive"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide1"
            onClick={() => setCurrentSlide(1)}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide3"
            onClick={() => setCurrentSlide(3)}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide3"
        className={`carousel-item relative w-full ${
          currentSlide === 3 ? "block" : "hidden"
        }`}
      >
        <Image
          src={img3}
          className="w-full object-cover"
          alt="Slide 3"
          quality={100} // High quality
          // layout="responsive"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide2"
            onClick={() => setCurrentSlide(2)}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide4"
            onClick={() => setCurrentSlide(4)}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
      <div
        id="slide4"
        className={`carousel-item relative w-full ${
          currentSlide === 4 ? "block" : "hidden"
        }`}
      >
        <Image
          src={img4}
          className="w-full object-cover"
          alt="Slide 4"
          quality={100} // High quality
          // layout="responsive"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a
            href="#slide3"
            onClick={() => setCurrentSlide(3)}
            className="btn btn-circle"
          >
            ❮
          </a>
          <a
            href="#slide1"
            onClick={() => setCurrentSlide(1)}
            className="btn btn-circle"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
