"use client";

import React from "react";

const PrivacyPolicyPage = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white to-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-4">
        <title>BB Hair Spa - Polityka Prywatności</title>
        <link rel="icon" href="/logo/logob.svg" />
        <header className="text-center mb-12">
          <h1 className="text-5xl font-light uppercase tracking-wide mb-4">
            Polityka Prywatności
          </h1>
          <p className="text-lg text-gray-600">
            BB Hair Spa – Twoje bezpieczeństwo jest dla nas priorytetem.
          </p>
        </header>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-6 leading-relaxed text-gray-700">
            <p>
              Niniejsza Polityka Prywatności określa zasady przetwarzania i
              ochrony danych osobowych przekazanych przez Użytkowników w związku
              z korzystaniem przez nich ze strony BB Hair Spa.
            </p>
            <h2 className="text-xl font-semibold text-gray-900">
              1. Administrator danych
            </h2>
            <p>
              Administratorem Twoich danych osobowych jest BB Hair Spa z
              siedzibą przy ul. Franciszkańska 99, 91-844 Łódź.
            </p>
            <h2 className="text-xl font-semibold text-gray-900">
              2. Zbieranie danych
            </h2>
            <p>
              Podczas korzystania ze strony mogą być zbierane dane takie jak
              imię, nazwisko, adres e-mail, numer telefonu, a także informacje
              dotyczące korzystania ze strony.
            </p>
            <h2 className="text-xl font-semibold text-gray-900">
              3. Cel przetwarzania danych
            </h2>
            <p>
              Dane osobowe są przetwarzane w celu świadczenia usług, kontaktu z
              użytkownikiem, realizacji zamówień oraz w celach marketingowych, o
              ile użytkownik wyrazi na to zgodę.
            </p>
            <h2 className="text-xl font-semibold text-gray-900">
              4. Prawa użytkownika
            </h2>
            <p>
              Użytkownik ma prawo dostępu do swoich danych, ich poprawiania,
              usunięcia oraz ograniczenia przetwarzania. Wszelkie żądania
              dotyczące ochrony danych osobowych należy kierować na adres:{" "}
              <a href="mailto:kontakt@bbhairspa.pl" className="underline">
                kontakt@bbhairspa.pl
              </a>
              .
            </p>
            <h2 className="text-xl font-semibold text-gray-900">
              5. Bezpieczeństwo danych
            </h2>
            <p>
              BB Hair Spa stosuje odpowiednie środki techniczne i organizacyjne
              w celu zapewnienia bezpieczeństwa przetwarzania danych osobowych.
            </p>
            <p>
              Korzystając ze strony, wyrażasz zgodę na przetwarzanie Twoich
              danych zgodnie z niniejszą Polityką Prywatności.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
