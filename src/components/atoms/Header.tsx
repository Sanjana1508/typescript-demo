import React from "react";

interface Props {
  title: string;
  subtitle?: string;
  description: string;
}

const Header: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
