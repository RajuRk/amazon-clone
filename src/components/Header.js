import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      <div className="header__serach">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header_link">
          <div className="header__option">
            <span>Hello Raju</span>
            <span>Sign in</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header__option">
            <span>Return</span>
            <span>& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header__option">
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
