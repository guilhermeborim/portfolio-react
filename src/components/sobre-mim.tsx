import Linguagens from "./linguagens";

const SobreMim = () => {
  return (
    <section className="bg-[#5F00BA]">
      <div
        className="max-w-[320px] md:max-w-[700px] xl:max-w-[1140px] w-full m-auto
      text-white"
      >
        <article className="pt-[30px]">
          <h4 className="font-montserrat font-medium text-[20px] md:text-[25px] xl:text-[30px] text-center">
            Obrigado por estar aqui, Prazer em conhece-lo!
          </h4>
        </article>
        <article className="pt-[15px] md:pt-[30px]">
          <p className="text-center font-poppins font-normal text-[16px] xl:text-[25px] tracking-[1px] leading-7 xl:leading-10">
            Sou um apaixonado por programação e desenvolvimento front-end, com
            uma sólida formação autodidata e uma paixão por criar interfaces de
            usuário atraentes e funcionais. Embora minha jornada profissional
            ainda esteja em seus estágios iniciais, adquiri habilidades valiosas
            em desenvolvimento web e front end.
          </p>
        </article>
        <Linguagens />
      </div>
    </section>
  );
};

export default SobreMim;
