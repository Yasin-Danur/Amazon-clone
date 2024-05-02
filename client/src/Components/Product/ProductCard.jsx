import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./product.module.css";
import { Link } from "react-router-dom";
function ProductCard({ product }) {
  const { id, title, price, image, rating } = product;
  return (
    <div className={classes.card_container}>
      <Link to={`/products/${id}`}>
        <img src={image} alt="" />
        <div>
          <h3>{title}</h3>
          {product?.rating && (
            <div className={classes.rating}>
              {/*rating star */}
              <Rating value={product.rating.rate} precision={0.1} />
              {/*count */}
              <small>{product.rating.count}</small>
            </div>
          )}
          <div>
            {/*price */}
            <CurrencyFormat amount={price} />
          </div>
          <button className={classes.button}>add to cart</button>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;
