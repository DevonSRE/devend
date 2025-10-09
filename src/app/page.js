import Clients from "./home/clients/page";
import Development from "./home/development/page";
import Footer from "./home/footer/page";
import Grid from "./home/grid/page";
import Hero from "./home/hero/page";
import Services from "@/features/home/services";
import { Branding } from "@/features/home/branding";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Development />
      <Services />
      <Branding />
      <Clients />
      <Grid />
      <Footer />
    </div>
  );
}
