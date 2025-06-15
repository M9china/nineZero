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
      <section className="mt-[5rem] px-4">
        <h1 className="text-[#009ec5] text-3xl font-bold">
          Our Products
        </h1>
        <div className="mt-8">
          <Image
            src="/"
            alt="Image/Icon of our products"
            width={800}
            height={600}
            className="w-full h-auto object-cover border border-gray-300 rounded-lg mt-4"
          />
          <p className="text-black mt-2 font-semibold">
            Heavy Fuel( Grade 3 Products)
          </p>
        </div>

      </section>
    </main>
  );
}
