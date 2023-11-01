import ProjetoDog from "../assets/projeto-dog.png";
import ProjetoNft from "../assets/projeto-nft.png";
import ProjetoBike from "../assets/projeto-bike.png";
import ProjetoStore2 from "../assets/Vectary texture.png";
import ProjetoItem from "./projeto-item";
import { Element } from "react-scroll";

const TrabalhosRecentes = () => {
  return (
    <Element name="projeto">
      <section className="max-w-[380px] md:max-w-[720px] xl:max-w-[1140px] w-full m-auto">
        <article className="text-center">
          <h2 className="font-montserrat font-extrabold text-[30px] md:text-[40px] text-principal pt-[30px]">
            Meus Trabalhos Recentes
          </h2>
          <h5 className="font-montserrat font-medium text-[16px] md:text-[20px] text-principal pt-[15px] md:pt-[30px]">
            Aqui estão alguns projetos de design anteriores em que trabalhei
          </h5>
        </article>
        <article className="gap-[50px] pt-[30px] grid grid-cols-1 md:pt-[60px] md:grid-cols-2 m-auto justify-items-center md:items-center">
          <a
            href="https://ecommerce-full-stack-three.vercel.app/"
            target="_blank"
          >
            <ProjetoItem image={ProjetoStore2} alt="foto do projeto store" />
          </a>
          <a href="https://dogsborim.netlify.app/" target="_blank">
            <ProjetoItem image={ProjetoDog} alt="foto do projeto InstaDogs" />
          </a>
          <a
            href="https://guilhermeborim.github.io/NFT-Marketplace/"
            target="_blank"
          >
            <ProjetoItem image={ProjetoNft} alt="foto do projeto NFT" />
          </a>
          <a
            href="https://guilhermeborim.github.io/bikcraft-final/"
            target="_blank"
          >
            <ProjetoItem image={ProjetoBike} alt="foto do projeto bike-story" />
          </a>
        </article>
      </section>
    </Element>
  );
};

export default TrabalhosRecentes;
