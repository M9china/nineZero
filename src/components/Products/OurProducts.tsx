"use client";

import Link from "next/link";
import Image from "next/image";
import { slides } from "./ProductsStatic";

export const OurProducts = () => {
  return (
    <section
      aria-labelledby="category-heading"
      className="bg-white sm:hidden block"
    >
      <div className="mx-auto max-w-7xl pb-10 sm:mt-[12rem] sm:px-6 sm:py-32 lg:px-8">
        <h1 className="text-[#009ec5] text-3xl px-4 font-bold">Our Products</h1>
        <div>
          <p className="text-gray-700 px-4 mt-2">
            Our products inlcude but not limited to, liquified petroleum gas (LPG), Automative fuel,
            Heavy Fuel(grade 3 products), Light fuel oil, Lubricants and Transformer oil.
          </p>
        </div>
        <div className="slider-container mt-6">
          {slides.map((value) => (
            <Link
              href={"/#"}
              key={value.alt}
              className="flex flex-col justify-center pb-2"
            >
              <div className="px-4 mb-4 group relative">
                <Image
                  width={500}
                  height={500}
                  className="object-cover rounded-md object-center group-hover:opacity-75 h-[17rem]"
                  src={value.src}
                  alt="avatar"
                />
                  <div className="absolute inset-0 mx-4 mt-[12rem] justify-center">
                <p className="text-white text-xl font-semibold px-4 mt-2">
                  {value.description}
                </p>
              </div>
              </div>
            
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
