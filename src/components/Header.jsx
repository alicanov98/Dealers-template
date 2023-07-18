import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faBars,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const bodyRef = useRef();

  useEffect(() => {
    const bodyClickHandler = (event) => {
      if (!bodyRef.current.contains(event.target)) {
        setToggleMenu(false);
      }
    };

    document.body.addEventListener("click", bodyClickHandler);

    return () => {
      document.body.removeEventListener("click", bodyClickHandler);
    };
  }, []);

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  const headerClassName = toggleMenu ? "header active" : "header";

  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("overlay-active");
    } else {
      document.body.classList.remove("overlay-active");
    }
  }, [toggleMenu]);

  return (
    <header className={headerClassName} ref={bodyRef}>
      <div className="container">
        <div className="row">
          <div className="logo">
            <Link to="/">Dealers</Link>
          </div>
          <nav>
            <h2 className="navTitle">Dealers</h2>
            <ul className="navList">
              <li className="navItem">
                <Link to="/">Home</Link>
              </li>
              <li className="navItem">
                <Link to="/">Collection <FontAwesomeIcon icon={faChevronDown} /></Link>
                <ul className="dropdown">
                  <li className="dropdownItem">Men</li>
                  <li className="dropdownItem">Women</li>
                  <li className="dropdownItem">Children</li>
                  <li className="dropdownItem" id="subMenu">Sub Menu <FontAwesomeIcon className="rightIcon" icon={faChevronRight} />
                  <ul className="dropdownTwo">
                    <li className="dropdownItemTwo">Men</li>
                    <li className="dropdownItemTwo">Women</li>
                    <li className="dropdownItemTwo">Children</li>
                  </ul>
                  </li>
                </ul>
              </li>
              <li className="navItem">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="navItem">
                <Link to="/catalogs">Catalogs</Link>
              </li>
              <li className="navItem">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <ul className="navIcons">
            <li className="navIcon">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </li>
            <li className="navIcon">
              <FontAwesomeIcon icon={faHeart} />
            </li>
            <li className="navIcon shopIcon">
              <FontAwesomeIcon icon={faBagShopping} />{" "}
              <span className="num">2</span>
            </li>
            <li className="navIcon bars">
              <FontAwesomeIcon icon={faBars} onClick={toggleMenuHandler} />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
