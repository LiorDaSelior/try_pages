import React from "react";

interface props {
  text: string;
}

const Description = ({ text }: props) => {
  return <div>{text}</div>;
};

export default Description;
