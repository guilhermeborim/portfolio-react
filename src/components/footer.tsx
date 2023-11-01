import FooterItem from "./footer-item";
import { Element } from "react-scroll";
const Footer = () => {
  return (
    <Element name="contato">
      <footer>
        <section className="max-w-[380px] md:max-w-[720px] xl:max-w-[1140px] w-full m-auto">
          <section>
            <h2 className="pt-[30px] xl:pt-[60px] font-montserrat font-extrabold text-[30px] md:text-[40px] text-principal text-center">
              Vamos trabalhar juntos?
            </h2>
            <article className="mt-[30px]  xl:mt-[60px] flex flex-col md:flex-row md:justify-evenly md:gap-0 text-center gap-[30px]">
              <FooterItem
                title="E-mail"
                subtitle="borimdev@gmail.com"
                icon={<i className="fa-solid fa-envelope"></i>}
              />
              <a
                href="https://www.linkedin.com/in/guilherme-borim-404895255/"
                target="_blank"
              >
                <FooterItem
                  title="Linkedin"
                  subtitle="@guilhermeborim"
                  icon={<i className="fa-brands fa-linkedin-in"></i>}
                />
              </a>
              <a
                href="https://github.com/guilhermeborim?tab=repositories"
                target="_blank"
              >
                <FooterItem
                  title="Github"
                  subtitle="@guilhermeborim"
                  icon={<i className="fa-brands fa-github"></i>}
                />
              </a>
            </article>
          </section>
        </section>
        <section className="bg-[#5F00BA] mt-[30px] xl:mt-[60px]">
          <div className="max-w-[380px] md:max-w-[720px] xl:max-w-[1140px] w-full m-auto">
            <p className="md:text-[16px] text-center text-white italic font-montserrat text-[12px] font-light py-[10px]">
              &copy; Todos os direitos reservados a Guilherme Borim!
            </p>
          </div>
        </section>
      </footer>
    </Element>
  );
};

export default Footer;
