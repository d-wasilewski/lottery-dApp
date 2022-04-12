import React, { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import "../styles/cardElement.css";

const CardElement = ({ address }) => {
  const [numbersToSlice, setNumbersToSlice] = useState("0");
  const { width } = useWindowSize();

  useEffect(() => {
    setNumbersToSlice(Math.floor(width / 100));
  }, [width]);

  const abbreviation =
    address.slice(0, numbersToSlice) + "..." + address.slice(-numbersToSlice);

  return (
    <p className="address">
      <a
        href={`https://rinkeby.etherscan.io/address/${address}`}
        target="_blank"
      >
        {width > 1700 ? address : abbreviation}
      </a>
    </p>
  );
};

export default CardElement;
