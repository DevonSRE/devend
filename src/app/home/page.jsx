import Clients from "./clients/page";
import Development from "./development/page";
import Footer from "./footer/page";
import Grid from "./grid/page";
import Hero from "./hero/page";
import Services from "./services/page";

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