"use client";

import React from "react";
import SocialMedia from "../../components/sections/SocialMedia";

const KontaktPage = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <title>BB Hair Spa - Kontakt</title>
        <link rel="icon" href={`${basePath}/logo/logob.svg`} />
        <h1 className="text-4xl font-light uppercase tracking-wider text-center mb-10">
          Kontakt
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2442.1234567890123!2d19.465!3d51.759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a31d6c2d8f5bb%3A0x8b7e2a1234567890!2sul.%20Franciszkańska%2099%2C%2091-844%20%C5%81%C3%B3d%C5%BA!5e0!3m2!1spl!2spl!4v1680000000000!5m2!1spl!2spl"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Dane kontaktowe
            </h2>
            <p className="text-lg mb-2">
              <strong>Adres:</strong> ul. Franciszkańska 99, 91-844 Łódź
            </p>
            <p className="text-lg mb-2">
              <strong>Telefon:</strong>{" "}
              <a
                href="tel:+48793015386"
                className="text-black underline"
                style={{ color: "#000000" }}
              >
                +48 793 015 386
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16"></div>
      <SocialMedia />
    </section>
  );
};

export default KontaktPage;
