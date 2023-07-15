import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faHeart,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "../assets/scss/components/_header.scss";

export const Header = () => {
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
            <Link>Dealers</Link>
          </div>
          <nav>
            <h2 className="navTitle">Dealers</h2>
            <ul className="navList">
              <li className="navItem">
                <NavLink to="/">Collection</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/">Shop</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/">Catalogs</NavLink>
              </li>
              <li className="navItem">
                <NavLink to="/">Contact</NavLink>
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
