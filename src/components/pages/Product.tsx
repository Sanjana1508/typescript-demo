import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Mobile from "../organisms/Mobile";
import { addProduct } from "../../redux/actions";

export type productType = {
  imageUrl: string;
  title: string;
  rating: number;
  price: number;
  delivery: string;
};

const Product = () => {
  const [text, setText] = useState("Limited time deal");
  const clickHandler = () => {
    setText("clicked");
  };

  const prod: productType = {
    imageUrl: "https://m.media-amazon.com/images/I/61TnX0PmqES._AC_UL320_.jpg",
    title: "OnePlus Nord 2 5G(Blue Haze, 8GB RAM,128 Storage)",
    rating: 1000,
    price: 2000,
    delivery: "Get it by friday,September 24",
  };

  const dispatch = useDispatch();

  dispatch(addProduct(prod));

  return (
    <Mobile
      imageUrl="https://m.media-amazon.com/images/I/61TnX0PmqES._AC_UL320_.jpg"
      altText="Mobile"
      text="OnePlus"
      ratings={1000}
      title={text}
      clickHandler={clickHandler}
      price={2000}
      delivery="Free delivery"
    />
  );
};
export default Product;
