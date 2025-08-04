"use client";

import React from "react";
import Head from "next/head";
import SocialPostsSection from "../../components/sections/SocialMedia";

type Service = {
  title: string;
  details?: string;
  price: string;
};

type ServiceCategory = {
  name: string;
  services: Service[];
};

const categorizedServices: ServiceCategory[] = [
  {
    name: "Strzyżenie damskie i modelowanie",
    services: [
      { title: "Grzywka", price: "60 zł" },
      {
        title: "Strzyżenie damskie – Włosy do ramion",
        details:
          "W cenie usługi:\n• konsultacja\n• strzyżenie\n• pielęgnacja wieloetapowa Davroe\n• modelowanie",
        price: "180 zł",
      },
      {
        title: "Strzyżenie damskie – Włosy za ramiona",
        details:
          "W cenie usługi:\n• konsultacja\n• strzyżenie\n• pielęgnacja wieloetapowa Davroe\n• modelowanie",
        price: "200 zł",
      },
      {
        title: "Modelowanie – Włosy do ramion",
        details: "W cenie usługi:\n- Konsultacja\n- Pielęgnacja\n- Modelowanie",

        price: "80 zł",
      },
      {
        title: "Modelowanie – Włosy za ramiona",
        details: "W cenie usługi:\n- Konsultacja\n- Pielęgnacja\n- Modelowanie",

        price: "100 zł",
      },
    ],
  },
  {
    name: "Fale / Loki",
    services: [
      { title: "Fale / Loki – Włosy do ramion", price: "200 zł" },
      { title: "Fale / Loki – Włosy za ramiona", price: "250 zł" },
    ],
  },
  {
    name: "Koloryzacja jednolita",
    services: [
      {
        title: "Koloryzacja jednolita – Włosy do ramion",
        details:
          "W cenie usługi:\n• konsultacja\n•dobór koloru\n• strzyżenie\n• pielęgnacja wieloetapowa Davroe\n• modelowanie",
        price: "350 zł",
      },
      {
        title: "Koloryzacja jednolita – Włosy za ramiona",
        details:
          "W cenie usługi:\n• konsultacja\n•dobór koloru\n• strzyżenie\n• pielęgnacja wieloetapowa Davroe\n• modelowanie",
        price: "450 zł",
      },
    ],
  },
  {
    name: "Koloryzacja uzupełniająca / Odrost",
    services: [
      {
        title: "Odrost – Włosy do ramion",
        details:
          "W cenie usługi:\n• konsultacja\n• uzupełnienie koloru do 2 cm\n• pielęgnacja wieloetapowa Davroe\n• strzyżenie\n• modelowanie",
        price: "250 zł",
      },
      {
        title: "Odrost – Włosy za ramiona",
        details:
          "W cenie usługi:\n• konsultacja\n• uzupełnienie koloru do 2 cm\n• pielęgnacja wieloetapowa Davroe\n• strzyżenie\n• modelowanie",
        price: "300 zł",
      },
    ],
  },
  {
    name: "Refleksy",
    services: [
      {
        title: "Refleksy – Włosy do ramion",
        details:
          "W cenie usługi:\n• konsultacja\n• dobór koloru\n• pielęgnacja wieloetapowa Davroe\n• tonowanie\n• strzyżenie\n• modelowanie",
        price: "400 zł",
      },
      {
        title: "Refleksy – Włosy za ramiona",
        details:
          "W cenie usługi:\n• konsultacja\n• dobór koloru\n• pielęgnacja wieloetapowa Davroe\n• tonowanie\n• strzyżenie\n• modelowanie",
        price: "480 zł",
      },
    ],
  },
  {
    name: "Farbowanie odrostu + Refleksy na koronie",
    services: [
      {
        title: "Farbowanie odrostu + Refleksy – Włosy do ramion",
        details:
          "Usługa polegająca na uzupełnieniu odrostu i odświeżeniu koloru na długości poprzez wprowadzenie delikatnych pojaśnień na koronie.",
        price: "420 zł",
      },
      {
        title: "Farbowanie odrostu + Refleksy – Włosy za ramiona",
        details:
          "Usługa polegająca na uzupełnieniu odrostu i odświeżeniu koloru na długości poprzez wprowadzenie delikatnych pojaśnień na koronie.",

        price: "470 zł",
      },
    ],
  },
  {
    name: "Tonowanie / Pigmentacja",
    services: [
      {
        title: "Tonowanie / Pigmentacja – Włosy do ramion",
        details:
          "W cenie usługi:\n• konsultacja\n• tonowanie\n• pielęgnacja wieloetapowa Davroe\n• modelowanie",
        price: "200 zł",
      },
      {
        title: "Tonowanie / Pigmentacja – Włosy za ramiona",
        details:
          "W cenie usługi:\n• konsultacja\n• tonowanie\n• pielęgnacja wieloetapowa Davroe\n• modelowanie",
        price: "250 zł",
      },
    ],
  },
  {
    name: "Baleyage / AirTouch",
    services: [
      {
        title: "Baleyage / AirTouch – Włosy do ramion",
        details:
          "W cenie usługi:\n• konsultacja\n• dobór koloru\n• wielowymiarowa koloryzacja z naturalnym przejściem\n• strzyżenie\n• pielęgnacja wieloetapowa Davroe\n• modelowanie",

        price: "600 zł",
      },
      {
        title: "Baleyage / AirTouch – Włosy za ramiona",
        details:
          "W cenie usługi:\n• konsultacja\n• dobór koloru\n• wielowymiarowa koloryzacja z naturalnym przejściem\n• strzyżenie\n• pielęgnacja wieloetapowa Davroe\n• modelowanie",
        price: "700 zł",
      },
    ],
  },
  {
    name: "Pielęgnacja włosów",
    services: [
      {
        title: "Pielęgnacja dobrana do potrzeb włosów – Włosy do ramion",
        details: "Indywidualna pielęgnacja dobrana do potrzeb włosów.",
        price: "190 zł",
      },
      {
        title: "Pielęgnacja dobrana do potrzeb włosów – Włosy za ramiona",
        details: "Indywidualna pielęgnacja dobrana do potrzeb włosów.",
        price: "240 zł",
      },
      {
        title: "Pielęgnacja Davroe – Włosy do ramion",
        details:
          "Davroe to idealna pielęgnacja dla włosów zniszczonych, kruchych, łamliwych lub rozjaśnianych. Proteinowy rekonstruktor włosów naprawia, regeneruje i wzmacnia zniszczone włosy, odbudowując naturalną elastyczność włosów przywracając im blask i odżywienie.",
        price: "190 zł",
      },
      {
        title: "Pielęgnacja Davroe – Włosy za ramiona",
        details:
          "Davroe to idealna pielęgnacja dla włosów zniszczonych, kruchych, łamliwych lub rozjaśnianych. Proteinowy rekonstruktor włosów naprawia, regeneruje i wzmacnia zniszczone włosy, odbudowując naturalną elastyczność włosów przywracając im blask i odżywienie.",
        price: "240 zł",
      },
      {
        title: "Kuracja Kaszmirową Keratyną – Włosy do ramion",
        details:
          "Kuracja kaszmirową keratyną to idealne rozwiązanie dla cienkich, słowiańskich włosów tworząc efekt pogrubienia, ale bez obciążenia. Kuracja polega na odbudowaniu wiązania keratynowego wewnątrz włosa. Dodatkowo, regeneruje łuskę włosa po farbowaniu lub rozjaśnianiu włosów, a także wyrównuje i wygładza i nawilża strukturę zniszczonych i porowatych włosów. Aby podtrzymać efekt zabiegu polecamy szampon i odżywkę BIOACTIVE NATURALIS oraz serum arganowe BIOACTIVE HS3.",
        price: "370 zł",
      },
      {
        title: "Kuracja Kaszmirową Keratyną – Włosy za ramiona",
        details:
          "Kuracja kaszmirową keratyną to idealne rozwiązanie dla cienkich, słowiańskich włosów tworząc efekt pogrubienia, ale bez obciążenia. Kuracja polega na odbudowaniu wiązania keratynowego wewnątrz włosa. Dodatkowo, regeneruje łuskę włosa po farbowaniu lub rozjaśnianiu włosów, a także wyrównuje i wygładza i nawilża strukturę zniszczonych i porowatych włosów. Aby podtrzymać efekt zabiegu polecamy szampon i odżywkę BIOACTIVE NATURALIS oraz serum arganowe BIOACTIVE HS3.",
        price: "450 zł",
      },
      {
        title: "Prostowanie keratynowe – Włosy do ramion",
        details:
          "Zabieg, który odbudowuje i wzmacnia włosy nadając im miękkość, jedwabistą gładkość i połysk, a tym samym chroni je przed wilgocią i uszkodzeniami mechanicznymi. Zabieg dedykowany dla włosów kręconych, puszących się i trudnych do ujarzmienia.",
        price: "500 zł",
      },
      {
        title: "Prostowanie keratynowe – Włosy za ramiona",
        details:
          "Zabieg, który odbudowuje i wzmacnia włosy nadając im miękkość, jedwabistą gładkość i połysk, a tym samym chroni je przed wilgocią i uszkodzeniami mechanicznymi. Zabieg dedykowany dla włosów kręconych, puszących się i trudnych do ujarzmienia.",
        price: "600 zł",
      },
      { title: "Nanoplastia – Włosy do ramion", price: "800 zł" },
      { title: "Nanoplastia – Włosy za ramiona", price: "1000 zł" },
    ],
  },
  {
    name: "Zabiegi trychologiczne",
    services: [
      {
        title: "Zabieg trychologiczny – Infuzja – Włosy do ramion",
        details:
          "Zabieg oczyszczający, pobudzający, anti aging, przeciwłojotokowy, przeciw wypadaniu włosów, przeciwłupieżowy.",
        price: "250 zł",
      },
      {
        title: "Zabieg trychologiczny – Infuzja – Włosy za ramiona",
        details:
          "Zabieg oczyszczający, pobudzający, anti aging, przeciwłojotokowy, przeciw wypadaniu włosów, przeciwłupieżowy.",
        price: "270 zł",
      },
    ],
  },
  {
    name: "Dodatki do usługi",
    services: [
      { title: "Peeling trychologiczny – dodatek do usługi", price: "70 zł" },
      {
        title: "Infuzja tlenowa z keratyną – dodatek do usługi",
        price: "70 zł",
      },
      { title: "Fale / Loki – dodatek do usługi", price: "100 zł" },
    ],
  },
];

const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/ą/g, "a")
    .replace(/ć/g, "c")
    .replace(/ę/g, "e")
    .replace(/ł/g, "l")
    .replace(/ń/g, "n")
    .replace(/ó/g, "o")
    .replace(/ś/g, "s")
    .replace(/ź/g, "z")
    .replace(/ż/g, "z")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9\-]/g, "");
};

const OfertaPage = () => {
  return (
    <section className="bg-[#f9f9f9] text-gray-800 py-16 px-6 md:px-8">
      <Head>
        <title>BB Hair Spa - Oferta</title>
        <link rel="icon" href="/logo/logob.svg" />
      </Head>

      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 tracking-wide uppercase text-gray-900 text-center">
          Nasza oferta
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Każda z naszych usług rozpoczyna się konsultacją, podczas której
          dobieramy idealną pielęgnację i stylizację dostosowaną do potrzeb
          Twoich włosów. Ostateczna cena może się różnić w zależności od
          długości i kondycji włosów – ustalana jest podczas konsultacji.
        </p>

        <div className="space-y-12">
          {categorizedServices.map((category, idx) => (
            <div key={idx} id={slugify(category.name)} className="text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {category.name}
              </h2>

              <div className="grid gap-4">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-5 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-1 flex items-center">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {service.title}
                        </h3>
                        {service.details && (
                          <p className="text-sm text-gray-500 mt-1 leading-relaxed whitespace-pre-line">
                            {service.details}
                          </p>
                        )}
                        {service.price && (
                          <p className="mt-2 text-base font-semibold text-gray-800">
                            {service.price}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:text-right md:ml-6">
                      <a
                        href="https://booksy.com/pl-pl/252493_bb-hair-spa_fryzjer_23280_lodz#ba_s=sr_1"
                        className="inline-block bg-gray-900 text-white text-sm font-medium px-6 py-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                      >
                        Umów wizytę
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 md:mt-24"></div>
      <SocialPostsSection />
    </section>
  );
};

export default OfertaPage;
