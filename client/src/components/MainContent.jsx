import React, { useContext } from "react";
import { LotteryContext } from "../context/LotteryContext";
import { Button } from "./Button";

const MainContent = () => {
  const {
    connectWallet,
    connectedAccount,
    enterLottery,
    potBalance,
    pickWinner,
    updateState,
  } = useContext(LotteryContext);
  return (
    <>
      <h1 style={{ color: "white", fontSize: "80px" }}>Ethereum Lottery</h1>
      <div
        style={{
          color: "white",
          fontSize: "40px",
          padding: "0 150px",
          color: "rgb(225,255,255)",
          marginBottom: "30px",
        }}
      >
        Join the best lottery in the world and stand a chance to win some
        ethereum for just 0.1 ETH!
      </div>
      <div style={{ color: "white", fontSize: "100px" }}>
        Pot: {potBalance ? potBalance.slice(0, 3) : 0} ETH
      </div>
      {/* <button onClick={enterLottery}>PLAY NOW</button> */}
      <div style={{ marginTop: "5em" }}>
        <Button text={"Enter lottery"} onClick={enterLottery} size={"big"} />
      </div>
    </>
  );
};

export default MainContent;
