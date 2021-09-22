import React, { useState } from "react";

interface buttonProps {
  children: (num: number) => JSX.Element;
}

const CustomButton: React.FC<buttonProps> = ({ children }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <div>{children(count)}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>Add</button>
      </div>
    </div>
  );
};

export default CustomButton;
