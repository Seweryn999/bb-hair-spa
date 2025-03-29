"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaStar, FaRegStar } from "react-icons/fa";
import { opinie, Opinion } from "@/data/opinions";

const Testimonials = () => {
  const totalReviews = 34;
  const positivePercent = 98;

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-gray-300" />);
      }
    }
    return <div className="flex space-x-1 justify-center mb-2">{stars}</div>;
  };

  return (
    <section className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-light uppercase tracking-wider mb-2">
          Opinie Klientów
        </h2>
        <p className="text-sm text-gray-500 mb-8">
          Mamy już {totalReviews} opinii na Facebooku, z czego {positivePercent}
          % to opinie pozytywne!
        </p>

        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={30}
            slidesPerView={1}
            loop
            className="py-4"
          >
            {opinie.map((op: Opinion, index: number) => (
              <SwiperSlide key={index}>
                <div className="bg-white shadow-md rounded-lg p-6 mx-4 sm:mx-0">
                  {renderStars(op.rating)}
                  <p className="text-gray-700 text-sm sm:text-base italic mb-4">
                    „{op.content}”
                  </p>
                  <p className="text-sm text-gray-600 font-semibold">
                    – {op.name}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6">
          <a
            href="https://www.facebook.com/bbhairspa/reviews?locale=pl_PL"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            Zobacz wszystkie opinie
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
