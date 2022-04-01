import React from "react";
import "../styles/player.css";

const Player = ({ address }) => {
  return (
    <p className="address">
      <a
        href={`https://rinkeby.etherscan.io/address/${address}`}
        target="_blank"
      >
        {address}
      </a>
    </p>
  );
};

export default Player;
