import React from "react";
import { Link } from "react-router-dom";

import Menu from "./menu";

const Header = () => (
    <header className="header">
        <div className="row">
            <div className="col-sm-2 logo-container">
                <Link to="/">
                    <img src="images/logo_header.png" className="logo" alt="Bearded Fellows Logo" />
                </Link>
            </div>
            <div className="col-sm-10 menu-container">
                <Menu />
            </div>
        </div>
    </header>
);

export default Header;