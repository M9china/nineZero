import { Mission, OurProducts } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="pt-[1.8rem] pb-[2.8rem] overflow-hidden min-h-screen bg-white"
      aria-labelledby="home-page"
    >
      <div className="relative">
        <Image
          src="/sploosh.gif"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full pt-[4rem] h-auto object-cover scale-150"
        />
        <div className="absolute inset-0 px-2 mt-16 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold text-center">
            Welcome to NineZero Holdings
          </h1>
        </div>
      </div>
      <section className="mt-32">
        <h1 className="text-[#009ec5] text-3xl px-4 font-bold">Who We Are</h1>
        <div>
          <p className="text-gray-700 px-4 mt-4">
            NineZero Holdings Pty Ltd was formed to offer{" "}
            <strong>quality products </strong>{""}
            at <strong>competitive prices</strong> including{" "}
            <strong>reliability</strong> and{" "}
            <strong>flexibility of supply</strong>,<strong> consistency</strong>
            , <strong>simplicity</strong>, <strong>accessibility</strong>, and{" "}
            <strong>personal</strong> or
            <strong> technical services</strong> to our clients.
          </p>
          <p className="text-gray-700 px-4 mt-2">
            Ourpriority is to build long-lasting, reliable services. We empower clients with our expertise
            , superseding all their expectatins.
          </p>
          <p className="text-gray-700 px-4 mt-2">
          NineZero Holdings (PTY) LTD is not a manufacture but a distributor. It
          has strategically formed alliences with some recognised SA Fuel oil
          major manufactures fot the distribution of petroleum products
        </p>
        </div>
      </section>
      <section className="mt-8">
        <div className="">
          <Mission />
        </div>
      </section>
      <section className="">
        <div className="mt-8">
          <OurProducts />
        </div>
      </section>
    </main>
  );
}
