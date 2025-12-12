import SectionDivider from "@/src/utils/div/div";
import BotonesDeContacto from "../botonesDeContacto/botonesDeContacto";
import PorQueElegirnosYPartners from "../porQue/porQue";
import Hero from "./bannerHero/bannerHero";
import NosotrosSection from "../nosotros/nosotros";
import FundadoresSection from "../creadores/creadores";
import BeneficiosSection from "../beneficios/beneficios";

function Home() {
  return (
    <>
      <Hero />
      <BotonesDeContacto />
      <SectionDivider />
      <BeneficiosSection />
      <SectionDivider />
      <PorQueElegirnosYPartners />
      <SectionDivider />
      <NosotrosSection />
      <SectionDivider />
      <FundadoresSection />
    </>
  );
}

export default Home;
