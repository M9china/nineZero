import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-[4rem] pb-[2.8rem] bg-white" aria-labelledby="home-page">
      <div className="relative">
        <Image
          src="/sploosh.gif"
          alt="Hero Image"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover scale-150"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold text-center">
            NineZero Holdings Pty Ldt
          </h1>
          <h1>

          </h1>
        </div>
      </div>
    </main>
  );
}
