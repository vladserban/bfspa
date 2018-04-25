import React from "react";
import { Link } from "react-router-dom";

import vars from "./constants";

const Menu = () => {

    console.log(vars);

    return (<ul className="menu">
        <li className="menu__item">
          <Link to="/about">About us</Link>
        </li>
        <li className="menu__item">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="menu__item">
          <Link to="/contact">Get in touch</Link>
        </li>
        <li className="menu__item menu__item--phone">
          <Link to="/contact">{vars.phoneNumber}</Link>
        </li>
        
      </ul>);
}

export default Menu;