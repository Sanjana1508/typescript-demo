import React from "react";

const url = "https://m.media-amazon.com/images/I/61TnX0PmqES._AC_UL320_.jpg";

type custom = {
  name: string;
};

interface imgProps {
  url: string;
  alt: string;
}

const Image: React.FC<imgProps> = ({ url, alt }) => {
  return <img src={url} alt={alt} />;
};

export default Image;
