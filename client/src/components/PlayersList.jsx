import React, { useContext, useState } from "react";
import "../styles/playerList.css";
import Player from "./Player";
import { LotteryContext } from "../context/LotteryContext";

// const players = [
//   "0x5429Fa166B6f8bfd3BD3De4027D5a458104ABb5e",
//   "0x5429Fa166B6f8bfd3BD3De4027D5a458104ABb5e",
//   "0x5429Fa166B6f8bfd3BD3De4027D5a458104ABb5e",
//   "0x5429Fa166B6f8bfd3BD3De4027D5a458104ABb5e",
//   "0x5429Fa166B6f8bfd3BD3De4027D5a458104ABb5e",
// ];

const PlayersList = () => {
  const { connectedAccount, playersList } = useContext(LotteryContext);

  return (
    <div className="wrapper">
      {console.log(playersList)}
      <h2>Players (5)</h2>
      {playersList &&
        playersList.map((player) => {
          return <Player address={player} key={player} />;
        })}
      <Player address={connectedAccount} />
    </div>
  );
};

export default PlayersList;
