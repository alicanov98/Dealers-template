import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_top">
          <div>
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
              quae reiciendis distinctio voluptates sed dolorum excepturi iure
              eaque, aut unde.
            </p>
            <h3>Subscribe</h3>
            <div>
              <input type="text"></input>
              <button>SEND</button>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <div>
              <ul>
                <li>
                  <a href="#">Sell online</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Shopping cart</a>
                </li>
                <li>
                  <a href="#">Store builder</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Mobile commerce</a>
                </li>
                <li>
                  <a href="#">Dropshipping</a>
                </li>
                <li>
                  <a href="#">Shopping cart</a>
                </li>
                <li>
                  <a href="#">Website development</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Point of sale</a>
                </li>
                <li>
                  <a href="#">Hardware</a>
                </li>
                <li>
                  <a href="#">Software</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h3>Contact Info</h3>
            <div>
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#207dff" }}
              />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPhone} style={{ color: "#207dff" }} />
              <p>+2 392 3929 210</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#207dff" }} />
              <p>emailaddress@domain.com</p>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <p>
            Copyright ©2023 All rights reserved | This template is made with
            &hearts; by <span>Colorlib</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
