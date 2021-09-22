import React from "react";

import CustomText from "../atoms/CustomText";
import Ratings from "../atoms/Ratings";

interface reviewProps {
  children: number;
}

const Reviews: React.FC<reviewProps> = ({ children }) => {
  return (
    <div>
      <CustomText>{children}</CustomText>
      <Ratings />
    </div>
  );
};

export default Reviews;
