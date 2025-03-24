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
    name: "Strzyżenie i modelowanie",
    services: [
      {
        title: "Strzyżenie damskie",
        details: "+ pielęgnacja Davroe + modelowanie",
        price: "170 – 200 zł",
      },
      {
        title: "Modelowanie",
        price: "50 – 100 zł",
      },
      {
        title: "Fryzura okolicznościowa",
        price: "200 – 250 zł",
      },
    ],
  },
  {
    name: "Koloryzacja włosów",
    services: [
      {
        title: "Koloryzacja jednolita",
        details: "+ pielęgnacja Davroe + strzyżenie + modelowanie",
        price: "300 – 550 zł",
      },
      {
        title: "Uzupełnienie odrostu + refleksy",
        details: "+ tonowanie + pielęgnacja Davroe + strzyżenie + modelowanie",
        price: "350 – 600 zł",
      },
      {
        title: "AirTouch / Refleksy / Sombre / Baleyage",
        details: "+ tonowanie + pielęgnacja Davroe + strzyżenie + modelowanie",
        price: "500 – 1000 zł",
      },
    ],
  },
  {
    name: "Pielęgnacja włosów",
    services: [
      {
        title: "Pielęgnacja dobrana do potrzeb włosów",
        details: "+ modelowanie",
        price: "200 – 350 zł",
      },
      {
        title: "Pielęgnacja Davroe",
        details: "+ modelowanie",
        price: "200 zł",
      },
      {
        title: "Zabieg HS3 / Keratyna kaszmirowa",
        price: "300 – 360 zł",
      },
      {
        title: "Prostowanie keratynowe",
        price: "350 – 600 zł",
      },
      {
        title: "Nanoplastia",
        price: "350 – 600 zł",
      },
    ],
  },
  {
    name: "Zabiegi trychologiczne",
    services: [
      {
        title: "Zabieg trychologiczny + infuzja tlenowa",
        details:
          "(oczyszczający, pobudzający, anti-aging, przeciwłupieżowy, przeciw wypadaniu, przeciwłojotokowy) + pielęgnacja Davroe + modelowanie",
        price: "250 zł",
      },
      {
        title: "Peeling trychologiczny",
        details: "+50 zł do usługi",
        price: "",
      },
      {
        title: "Infuzja tlenowa z keratyną",
        details: "+50 zł do usługi",
        price: "",
      },
    ],
  },
];

const OfertaPage = () => {
  return (
    <section className="bg-[#f9f9f9] text-gray-800 py-16 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-light mb-8 tracking-wide uppercase text-gray-900 text-center">
          Nasza oferta
        </h1>
        <p className="text-base md:text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
          Wszystkie nasze usługi zawierają indywidualne podejście, najwyższej
          jakości pielęgnację oraz stylizację. Ostateczna cena może się różnić w
          zależności od długości i kondycji włosów – ustalana jest podczas
          konsultacji.
        </p>

        <div className="space-y-12">
          {categorizedServices.map((category, idx) => (
            <div key={idx} className="text-left">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 border-b border-gray-200 pb-2">
                {category.name}
              </h2>

              <div className="grid gap-4">
                {category.services.map((service, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-5 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {service.title}
                      </h3>
                      {service.details && (
                        <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                          {service.details}
                        </p>
                      )}
                      {service.price && (
                        <p className="mt-2 text-base font-semibold text-gray-800">
                          {service.price}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4">
                      <a
                        // href=Booksy Link
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
    </section>
  );
};

export default OfertaPage;
