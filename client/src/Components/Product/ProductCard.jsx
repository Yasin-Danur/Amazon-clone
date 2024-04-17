import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
function ProductCard({ product }) {
  const { id, title, price, image, rating } = product;
  return (
    <div className={classes.card_container}>
      <a href="">
        <img src={image} alt="" />
        <div>
          <h3>{title}</h3>
          <div className={classes.rating}>
            {/*rating star */}
            <Rating value={rating.rate} precision={0.1} />
            {/*count */}
            <small>{rating.count}</small>
          </div>
          <div>
            {/*price */}
            <CurrencyFormat amount={price} />
          </div>
          <button className={classes.button}>add to cart</button>
        </div>
      </a>
    </div>
  );
}

export default ProductCard;
