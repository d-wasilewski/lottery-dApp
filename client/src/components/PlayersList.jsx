import React, { useContext, useState } from "react";
import "../styles/playerList.css";
import Player from "./Player";
import { LotteryContext } from "../context/LotteryContext";

const PlayersList = () => {
  const { playersList } = useContext(LotteryContext);

  return (
    <div className="wrapper">
      <h2 className="header">Players ({playersList.length})</h2>
      {playersList &&
        playersList.map((player, index) => {
          if (index == 5) return "Click to see full list >";
          return index < 5 ? <Player address={player} key={player} /> : null;
        })}
    </div>
  );
};

export default PlayersList;
