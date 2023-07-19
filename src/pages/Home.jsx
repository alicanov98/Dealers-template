import "../assets/scss/pages/_home.scss";
import Collection from "./sections/Collection";
import NewCollection from "./sections/NewCollection";
import Woman from "../assets/images/model_woman_1.png.webp";
import Man from "../assets/images/model_5.png.webp";
import HomeHero from "./sections/HomeHero";
import Products from "./sections/Products";
const Home = () => {
  return (
    <>
      <HomeHero />
      <Products />
      <NewCollection src={Woman} desc="Jacket" />
      <Collection />
      <NewCollection src={Man} desc="NEW DENIM COAT" />
    </>
  );
};

export default Home;
