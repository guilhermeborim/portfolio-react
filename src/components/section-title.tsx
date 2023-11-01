import ImagePc from "../assets/Imagem-PC.png";
import ButtonDownload from "./button-download";

const SectionTitle = () => {
  return (
    <section className="max-w-[380px] md:max-w-[720px] xl:max-w-[1140px] w-full m-auto ">
      <div className="text-center pt-[60px]">
        <h1 className="font-montserrat font-bold text-[35px] md:text-[50px] text-principal">
          Designer, Frontend Developer
        </h1>
        <h4 className="font-poppins font-normal text-[20px] md:text-[25px] text-principal pt-[10px] md:pt-[15px]">
          Eu projeto e codifico coisas lindamente simples e amo o que faço
        </h4>
      </div>
      <div className="py-[30px] md:pt-[60px] xl:pt-[120px] md:pb-[0px] md:flex md:items-center">
        <div className="xl:mr-[100px]">
          <div>
            <h2 className="font-montserrat font-bold text-[30px] md:text-[40px] text-principal text-center">
              Guilherme Borim.
            </h2>
            <p className="font-poppins font-normal text-[12px] md:text-[16px] text-[#b7aeae] py-[15px] text-center">
              Desenvolvedor Front-End
            </p>
          </div>
          <ButtonDownload />
        </div>
        <div>
          <img
            src={ImagePc}
            alt=""
            className="w-full h-auto object-cover hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;
