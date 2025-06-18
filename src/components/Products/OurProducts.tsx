'use client';

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "./ProductsStatic";


export const OurProducts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    initialSlide: 0,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section aria-labelledby="category-heading" className="bg-white sm:hidden block">
      <div className="mx-auto max-w-7xl pb-10 sm:mt-[12rem] sm:px-6 sm:py-32 lg:px-8">
        <div className="slider-container mt-10">
          <Slider {...settings}>
            {slides.map((value: any) => (
              <Link
                href={"/#"}
                key={value.alt}
                className="flex flex-col justify-center pb-2"
              >
                <div className="relative flex justify-center">
                  <Image
                    width={500}
                    height={500}
                    className="object-cover object-center group-hover:opacity-75 h-[20rem]"
                    src={value.src}
                    alt="avatar"
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
