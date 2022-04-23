import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

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
            <span className="header__optionLineOne">Hello Raju</span>
            <span class="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header__option">
            <span className="header__optionLineOne">Return</span>
            <span class="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header_link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span class="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        <Link to="/checkout" className="header_link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span class="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
