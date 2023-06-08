import React from "react";

interface props {
  price: string;
}

const BuyButton = ({ price }: props) => {
  return <button className="btn btn-success">{price}</button>;
};

export default BuyButton;
