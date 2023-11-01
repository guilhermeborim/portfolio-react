import ScrollTop from "@/components/button-rolagem";
import Footer from "@/components/footer";
import Header from "@/components/header";
import TrabalhosRecentes from "@/components/meus-trabalhos";
import SectionTitle from "@/components/section-title";
import Servicos from "@/components/servicos";
import SobreMim from "@/components/sobre-mim";

const HomePage = () => {
  return (
    <>
      <Header />
      <SectionTitle />
      <SobreMim />
      <Servicos />
      <TrabalhosRecentes />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default HomePage;
