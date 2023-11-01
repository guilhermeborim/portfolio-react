import { Figma, Monitor, Smartphone } from "lucide-react";
import ServicoItem from "./servico-item";
import { Element } from "react-scroll";
const Servicos = () => {
  return (
    <Element name="servico">
      <section className="max-w-[380px] md:max-w-[720px] xl:max-w-[1140px] w-full m-auto">
        <div className="pt-[30px]">
          <h2 className="font-montserrat font-extrabold text-[30px] md:text-[40px] text-principal text-center">
            Serviços
          </h2>
          <article className="gap-10 flex flex-col md:flex-row md:flex-wrap pt-[30px]">
            <ServicoItem
              title="Web Design"
              subtitle="Crio e desenvolvo aparencias visuais e estruturais para a web"
              icon={Figma}
            />
            <ServicoItem
              title="Desenvolvimento"
              subtitle="Codifico fielmente ao Design, com as melhores praticas e tecnologias."
              icon={Monitor}
            />
            <ServicoItem
              title="Totalmente Responsivo"
              subtitle="Fielmente feito para funcionar em todos os aparelhos."
              icon={Smartphone}
            />
          </article>
        </div>
      </section>
    </Element>
  );
};

export default Servicos;
