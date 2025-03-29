"use client";

import Head from "next/head";
// import SocialPostsSection from "../../components/sections/SocialMedia";
import Testimonials from "../../components/sections/Testimonials";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SalonPage = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const images = [
    "/images/bb1.jpg",
    "/images/bb2.jpg",
    "/images/bb3.jpg",
    "/images/bb4.jpg",
  ];

  return (
    <section className="py-20 bg-white text-gray-800">
      <Head>
        <title>BB Hair Spa - Salon</title>
        <link rel="icon" href={`${basePath}/logo/logob.svg`} />
      </Head>
      <div className="container mx-auto px-4 mb-16">
        <h1 className="text-4xl font-light uppercase tracking-wider text-center mb-10">
          Nasz Salon BB Hair Spa
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden md:flex items-center p-6">
          {/* Swiper z obrazami salonu */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="max-w-4xl mx-auto"
            >
              {images.map((src, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <div className="relative w-full max-w-4xl h-96 flex items-center justify-center overflow-hidden rounded-lg">
                    <img
                      src={`${basePath}${src}`}
                      alt={`Zdjęcie salonu nr ${index + 1}`}
                      className="max-w-full max-h-full object-contain transform transition duration-300 ease-in-out"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-semibold text-gray-900">
              BB Hair Spa
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              ul. Franciszkańska 99, 91-844 Łódź
            </p>
            <p className="text-sm text-gray-600">
              tel.{" "}
              <a
                href="tel:+48793015386"
                className="text-sm text-black hover:underline"
                style={{ color: "#000000" }}
              >
                +48 793 015 386
              </a>
            </p>

            <div className="mt-4 text-sm text-gray-600 leading-relaxed">
              <h3 className="font-semibold mb-1">Godziny otwarcia:</h3>
              <p>Pon: 10:00 - 20:00</p>
              <p>Wt - Pt: 08:00 - 20:00</p>
              <p>Sob: 09:00 - 18:00</p>
              <p className="mb-1">Nd: Zamknięte</p>
            </div>

            <div className="mt-6">
              <a
                href="https://booksy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
              >
                Zarezerwuj wizytę
              </a>
            </div>
          </div>
        </div>

        <Testimonials />
      </div>
    </section>
  );
};

export default SalonPage;
