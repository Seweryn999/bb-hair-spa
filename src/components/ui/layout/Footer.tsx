import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <Image
              src={`${basePath}/logo/logoog.png`}
              alt="BB Hair Spa Logo"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="mb-4 text-sm text-gray-400">
            ul. Franciszkańska 99, 91-844 Łódź
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-white transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.495V14.708h-3.13v-3.62h3.13V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.793.143v3.24l-1.917.001c-1.504 0-1.796.716-1.796 1.763v2.315h3.59l-.467 3.62h-3.123V24h6.116c.73 0 1.323-.593 1.323-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-white transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.2 0 3.584.012 4.85.07 1.206.056 1.838.248 2.27.415.545.21.937.462 1.348.873.41.411.663.803.873 1.348.167.432.359 1.064.415 2.27.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.248 1.838-.415 2.27-.21.545-.462.937-.873 1.348-.411.41-.803.663-1.348.873-.432.167-1.064.359-2.27.415-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-1.838-.248-2.27-.415a3.466 3.466 0 0 1-1.348-.873 3.466 3.466 0 0 1-.873-1.348c-.167-.432-.359-1.064-.415-2.27-.058-1.266-.07-1.65-.07-4.85s.012-3.584.07-4.85c.056-1.206.248-1.838.415-2.27.21-.545.462-.937.873-1.348.41-.41.803-.663 1.348-.873.432-.167 1.064-.359 2.27-.415 1.266-.058 1.65-.07 4.85-.07M12 0C8.741 0 8.332.013 7.053.07 5.775.127 4.802.345 4.055.654c-.75.31-1.386.72-2.02 1.354A5.136 5.136 0 0 0 .68 4.028c-.309.747-.527 1.72-.584 2.998C.013 8.305 0 8.714 0 12c0 3.259.013 3.668.07 4.947.057 1.278.275 2.251.584 2.998.31.75.72 1.386 1.354 2.02.634.634 1.27 1.045 2.02 1.354.747.309 1.72.527 2.998.584 1.278.057 1.687.07 4.947.07s3.668-.013 4.947-.07c1.278-.057 2.251-.275 2.998-.584.75-.31 1.386-.72 2.02-1.354.634-.634 1.045-1.27 1.354-2.02.309-.747.527-1.72.584-2.998.057-1.278.07-1.687.07-4.947s-.013-3.668-.07-4.947c-.057-1.278-.275-2.251-.584-2.998a5.136 5.136 0 0 0-1.354-2.02A5.136 5.136 0 0 0 19.945.68c-.747-.309-1.72-.527-2.998-.584C15.668.013 15.259 0 12 0z" />
                <path d="M12 5.838A6.163 6.163 0 0 0 5.838 12 6.163 6.163 0 0 0 12 18.163 6.163 6.163 0 0 0 18.163 12 6.163 6.163 0 0 0 12 5.838m0 10.163A3.999 3.999 0 1 1 12 8a3.999 3.999 0 0 1 0 7.999" />
                <circle cx="18.406" cy="5.595" r="1.44" />
              </svg>
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 uppercase">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Start
              </Link>
            </li>
            <li>
              <Link href="/oferta" className="hover:text-white">
                Oferta
              </Link>
            </li>
            <li>
              <Link href="/salon" className="hover:text-white">
                Salon
              </Link>
            </li>
            <li>
              <Link href="/kontakt" className="hover:text-white">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 uppercase">
            Informacje
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/polityka-prywatnosci" className="hover:text-white">
                Polityka prywatności
              </Link>
            </li>
            <li></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4 uppercase">
            Godziny otwarcia
          </h3>
          <ul className="space-y-1 text-sm">
            <li>Pon: 10:00 - 20:00</li>
            <li>Wt - Pt: 08:00 - 20:00</li>
            <li>Sob: 09:00 - 18:00</li>
            <li>Nd: Zamknięte</li>
          </ul>
          <h3 className="text-white font-semibold mt-6 mb-2 uppercase">
            Masz pytanie?
          </h3>
          <p className="text-sm">
            <Link href="tel:+48793015386" className="hover:text-white">
              +48 793 015 386
            </Link>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8 text-center text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} BB Hair Spa. Wszelkie prawa
          zastrzeżone.
        </p>
        <p className="mt-2">
          Wdrożenie:{" "}
          <Link
            href="https://www.stalink.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            stalink
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
