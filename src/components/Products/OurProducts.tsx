"use client";
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
        <div className=" mt-6">
          {slides.map((value) => (
            <div
              key={value.alt}
              className="mb-8 pb-2"
            >
              <div className="rounded-md shadow-gray-400 shadow-2xl mx-4">
                <Image
                  width={500}
                  height={500}
                  className="object-cover w-full rounded-t-md object-center group-hover:opacity-75 h-[12rem]"
                  src={value.src}
                  alt="avatar"
                />

                <p className="text-black text-xl px-4 py-6 font-semibold mt-2">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
