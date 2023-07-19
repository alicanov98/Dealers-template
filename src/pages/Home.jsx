import "../assets/scss/pages/_home.scss";
import NewCollection from "./sections/NewCollection";
import Woman from '../assets/images/model_woman_1.png.webp';
import Man from '../assets/images/model_5.png.webp';
import HomeHero from "./sections/HomeHero";
import Products from "./sections/Products";
const Home = () => {
  return <div>
    <HomeHero />
    <Products/>
    <NewCollection src={Woman} desc="Jacket"/>
    <NewCollection src={Man} desc="NEW DENIM COAT"/>
  </div>
};

export default Home;
