import React from "react";

interface textProps {
  children: string | number;
  description?: string;
}

const CustomText: React.FC<textProps> = ({ children, description }) => {
  return (
    <div>
      <p>{children}</p>
      <p>{description}</p>
    </div>
  );
};

export default CustomText;
