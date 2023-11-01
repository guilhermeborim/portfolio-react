import { Link } from "react-scroll";
import Logo from "../assets/oi.png";
const Header = () => {
  return (
    <header className="max-w-[320px] md:max-w-[720px] xl:max-w-[1140px] w-full m-auto">
      <div className="flex items-center pt-[60px] md:justify-around xl:justify-between">
        <img src={Logo} alt="Logo do site" className="h-12 w-12" />
        <nav className="hidden md:block">
          <ul className="flex flex-wrap font-poppins font-normal text-[20px] text-principal gap-[30px]">
            <Link
              to="servico"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Serviços
            </Link>
            <Link
              to="projeto"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Projetos
            </Link>
            <Link
              to="contato"
              smooth={true}
              duration={1000}
              className="cursor-pointer"
            >
              Contato
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
