import React, { useState } from "react";

import "../../index.css";

interface btnProps {
  title: string;
  clickHandler: () => void;
}

const DealButton: React.FC<btnProps> = ({ title, clickHandler }) => {
  return (
    <button className="btn" onClick={clickHandler}>
      {title}
    </button>
  );
};

export default DealButton;
