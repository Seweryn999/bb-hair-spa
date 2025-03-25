import { FaArrowDown } from "react-icons/fa";

const HeroSection = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section
      id="hero"
      className="h-[40vh] md:h-[90vh] bg-cover bg-center relative pt-16"
      style={{ backgroundImage: `url('${basePath}/images/hero1.jpg')` }}
    >
      <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-light tracking-wider text-white">
            BB HAIR SPA
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-gray-200">
            Blossom Beauty by Izabella
          </p>
        </div>
      </div>
      <a
        href="#o-nas"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-3 rounded-full hover:bg-gray-100 transition z-10"
      >
        <FaArrowDown className="text-black" size={24} />
      </a>
    </section>
  );
};

export default HeroSection;
