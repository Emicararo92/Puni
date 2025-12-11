import SectionDivider from "@/src/utils/div/div";
import BotonesDeContacto from "../botonesDeContacto/botonesDeContacto";
import PorQueElegirnosYPartners from "../porQue/porQue";
import Hero from "./bannerHero/bannerHero";
import NosotrosSection from "../nosotros/nosotros";
import FundadoresSection from "../creadores/creadores";

function Home() {
  return (
    <>
      <Hero />
      <BotonesDeContacto />
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
