import SectionDivider from "@/src/utils/div/div";
import BotonesDeContacto from "../botonesDeContacto/botonesDeContacto";
import PorQueElegirnosYPartners from "../porQue/porQue";
import Hero from "./bannerHero/bannerHero";
import NosotrosSection from "../nosotros/nosotros";
import FundadoresSection from "../creadores/creadores";
import BeneficiosSection from "../beneficios/beneficios";
import AppDownload from "../appDescarga/appDescarga";

function Home() {
  return (
    <>
      <Hero />
      <BotonesDeContacto />
      <SectionDivider />
      <AppDownload />
      <SectionDivider />
      <BeneficiosSection />
      <SectionDivider />
      <PorQueElegirnosYPartners />
      <SectionDivider />
      <NosotrosSection />
      <FundadoresSection />
    </>
  );
}

export default Home;
