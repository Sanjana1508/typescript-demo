import React, { useState } from "react";

import Image from "../atoms/Image";
import CustomText from "../atoms/CustomText";
import Reviews from "../molecules/Reviews";
import DealButton from "../atoms/DealButton";

interface mobProps {
  imageUrl: string;
  altText: string;
  text: string;
  ratings: number;
  title: string;
  clickHandler: () => void;
  price: number;
  delivery: string;
  prime?: string;
}

const Mobile: React.FC<mobProps> = ({
  imageUrl,
  altText,
  text,
  ratings,
  title,
  clickHandler,
  price,
  delivery,
}) => {
  return (
    <div>
      <Image url={imageUrl} alt={altText} />
      <CustomText>{text}</CustomText>
      <Reviews>{ratings}</Reviews>
      <DealButton title={title} clickHandler={clickHandler} />
      <CustomText>{price}</CustomText>
      <CustomText>{delivery}</CustomText>
    </div>
  );
};

export default Mobile;
