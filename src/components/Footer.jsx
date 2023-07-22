import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faEnvelope,
  faPhone,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
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
                  <Link href="#">Sell online</Link>
                </li>
                <li>
                  <Link href="#">Features</Link>
                </li>
                <li>
                  <Link href="#">Shopping cart</Link>
                </li>
                <li>
                  <Link href="#">Store builder</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#">Mobile commerce</Link>
                </li>
                <li>
                  <Link href="#">Dropshipping</Link>
                </li>
                <li>
                  <Link href="#">Shopping cart</Link>
                </li>
                <li>
                  <Link href="#">Website development</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#">Point of sale</Link>
                </li>
                <li>
                  <Link href="#">Hardware</Link>
                </li>
                <li>
                  <Link href="#">Software</Link>
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
