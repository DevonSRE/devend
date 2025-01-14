import Clients from "./home/clients/page";
import Development from "./home/development/page";
import Footer from "./home/footer/page";
import Grid from "./home/grid/page";
import Hero from "./home/hero/page";
import Services from "./home/services/page";

const Home = () => {
  return (
    <div>
      <Hero/>
      <Development/>
      <Services/>
      <Clients/>
      <Grid/>
      <Footer/>
    </div>
  );
};

export default Home;