import React from "react";
import { BsSearch } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css";
import LowerHeader from "./LowerHeader";
function Header() {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="logo"
              />
            </a>
            <div className={classes.delivery}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={37} />
          </div>
          <div className={classes.order__container}>
            <div className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flg_of_the_United_States.svg.png"
                alt="flag"
              />
              <select>
                <option value="">EN</option>
              </select>
            </div>

            <a href="/">
              <p>Sign In</p>
              <span>Account & Lists</span>
            </a>
            <a href="/">
              <p>returns</p>
              <span> & Orders</span>
            </a>
            <a href="/cart" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
              <sub>Cart</sub>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
