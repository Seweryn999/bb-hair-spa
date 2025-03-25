import Image from "next/image";
import Link from "next/link";

const Services = () => {
  const homeOffers = [
    {
      title: "Strzyżenie i modelowanie",
      description:
        "Podkreśl swój styl dzięki profesjonalnemu strzyżeniu i precyzyjnemu modelowaniu.",
      price: "od 50 zł",
      image: "/images/strzmodel.jpg",
      slug: "strzyzenie-i-modelowanie",
    },
    {
      title: "Kolorowanie",
      description:
        "Nowoczesne techniki koloryzacji dla każdego rodzaju włosów.",
      price: "od 300 zł",
      image: "/images/kol.jpg",
      slug: "koloryzacja-wlosow",
    },
    {
      title: "Pielęgnacja",
      description:
        "Regenerujące zabiegi keratynowe, pielęgnacja Davroe i indywidualnie dobrane kuracje.",
      price: "od 150 zł",
      image: "/images/piel.jpg",
      slug: "pielenacja-wlosow",
    },
    {
      title: "Zabiegi trychologiczne",
      description:
        "Zdrowa skóra głowy to podstawa. Oczyszczanie, infuzja tlenowa, peelingi i więcej.",
      price: "od 250 zł",
      image: "/images/trych.jpg",
      slug: "zabiegi-trychologiczne",
    },
  ];

  return (
    <section id="oferta" className="py-20 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl font-light uppercase mb-12 text-gray-900">
          Nasza oferta
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeOffers.map((offer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow p-6 flex flex-col items-center"
            >
              <Image
                src={offer.image}
                alt={offer.title}
                width={400}
                height={300}
                className="w-full h-auto rounded-md mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                {offer.title}
              </h3>
              <p className="text-sm text-gray-600 text-center">
                {offer.description}
              </p>
              <p className="text-base font-medium text-black mt-2">
                {offer.price}
              </p>
              <Link
                href={`/oferta#${offer.slug}`}
                className="bg-black text-white text-sm px-5 py-2 rounded-full hover:bg-gray-800 transition mt-6"
              >
                Oferta
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
