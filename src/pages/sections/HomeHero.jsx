import person from "../../assets/images/person_transparent.png.webp";
import { Button } from "../../components/Button";

const HomeHero = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="row">
          <div className="homeContent">
            <h1>Madewell</h1>
            <h4>Summer Collection</h4>
            <div className="row price">
              <strong>1,499</strong>
              <del>$1,999</del>
            </div>
            <div className="btns">
              <Button variant="btnOne" />
              <Button variant="btn" />
            </div>
          </div>
          <div className="homeImg">
            <img src={person} alt="#" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
