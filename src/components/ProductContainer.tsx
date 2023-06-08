import React from "react";
import Description from "./Description";
import BuyButton from "./BuyButton";
import "../style/ProductContainer.css";

interface props {
  title: string;
  text: string;
  price: string;
}

const ProductContainer = ({ title, text, price }: props) => {
  const str =
    "descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc";
  return (
    <div className="cont">
      <h1 className="tit">{title}</h1>
      <div className="desc">
        <Description text={str}></Description>
      </div>
      <div className="butt">
        <BuyButton price={price}></BuyButton>
      </div>
    </div>
  );
};

export default ProductContainer;
