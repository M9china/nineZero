import { Mission, OurProducts } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-[4rem] pb-[2.8rem] overflow-hidden min-h-screen bg-white" aria-labelledby="home-page">
      <div className="relative">
        <Image
          src="/sploosh.gif"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover scale-150"
        />
        <div className="absolute inset-0 px-2 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">
            Welcome to NineZero Holdings Pty Ltd
          </h1>
        </div>
      </div>
      <section className="mt-[8rem]">
        <h1 className="text-[#009ec5] text-3xl px-4 font-bold">
          Our Products
        </h1>
        <div>
          <p className="text-gray-700 px-4 mt-2">
                 Discover our premium range of petroleum and gas products designed to power industries, 
                 fuel transportation, and support households across Southern Africa.
          </p>
        </div>
        <div className="mt-8">
          <OurProducts />
        </div>
      </section>
      <section className="">
        <Mission/>
      </section>
    </main>
  );
}
