const AboutUs = () => {
  return (
    <section id="o-nas" className="py-20 bg-[#f5f5f5] text-gray-800">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-light tracking-widest mb-6 uppercase text-gray-900">
          O nas
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
          BB Hair Spa to wyjątkowe miejsce stworzone z pasji do piękna i stylu.
          Nasz zespół doświadczonych stylistów dba nie tylko o perfekcyjną
          fryzurę, ale także o Twoje samopoczucie. Łączymy nowoczesne techniki z
          klasyczną elegancją, oferując profesjonalne usługi w atmosferze
          relaksu i komfortu. To tutaj każdy detal ma znaczenie – od momentu
          wejścia, aż po efekt końcowy.
        </p>

        <a
          href="#oferta"
          className="mt-10 inline-block bg-black text-white px-6 py-3 rounded-full font-medium tracking-wide hover:bg-gray-900 transition"
        >
          Zarezerwuj wizytę
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
