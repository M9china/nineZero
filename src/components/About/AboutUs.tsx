export const AboutUs = () => {
  return (
    <main
      className="pt-[5rem] px-4 bg-white min-h-screen"
      aria-labelledby="about-us page"
    >

      <section className=" space-y-4 text-gray-700 leading-relaxed">
 

        <h2 className="text-2xl font-semibold text-[#009ec5] ">
          Our Core Products
        </h2>

        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Liquified Petroleum Gas (LPG):</strong> A versatile and
            clean-burning fuel used in residential, commercial, and industrial
            applications.
          </li>
          <li>
            <strong>Automotive Fuels (Diesel & Petrol):</strong> High-performance
            fuels that meet national quality standards, keeping vehicles running
            smoothly and efficiently.
          </li>
          <li>
            <strong>Light Fuel Oil (Grade 1):</strong> Ideal for small-scale
            industrial heating and power generation needs.
          </li>
          <li>
            <strong>Medium Fuel Oil (Grade 2):</strong> A cost-effective solution
            for medium-scale industrial operations requiring dependable energy
            output.
          </li>
          <li>
            <strong>Heavy Fuel Oil (Grade 3):</strong> Trusted by large-scale
            industries for high-heat energy production and robust operational
            efficiency.
          </li>
          <li>
            <strong>Lubricants:</strong> Engineered to protect and prolong the
            life of machinery and engines, ensuring peak performance and reduced
            downtime.
          </li>
          <li>
            <strong>Transformer Oil:</strong> Vital for insulating and cooling
            transformers and electrical equipment, maintaining safety and
            stability in power infrastructure.
          </li>
          <li>
            <strong>Illuminating Paraffin:</strong> A reliable and accessible
            fuel source for lighting and heating, particularly in off-grid and
            low-income communities.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#009ec5] mt-6">
          Why Choose Us?
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Customer-Focused: We tailor our services to suit unique client requirements.</li>
          <li>Reliable Supply: We pride ourselves on prompt delivery and consistent product availability.</li>
          <li>Sustainable Practices: We are committed to minimizing environmental impact through efficient logistics and cleaner fuel options.</li>
          <li>Experienced Team: Our dedicated professionals bring deep industry knowledge and a passion for excellence.</li>
        </ul>

        <p className="py-8 font-semibold text-center text-[#009ec5]">
          Powering Industry. Fueling Growth. Lighting the Future.
        </p>
      </section>
    </main>
  );
};
