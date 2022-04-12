import React from "react";
import "../styles/card.css";
import CardElement from "./CardElement";

const Card = ({ list, title }) => {
  return (
    <div className="wrapper">
      <h2 className="header">
        {title} ({list.length})
      </h2>
      {list &&
        list.map((player, index) => {
          if (index === 5) return "Click to see full list >";
          return index < 5 ? (
            <CardElement address={player} key={player.address} />
          ) : null;
        })}
    </div>
  );
};

export default Card;
