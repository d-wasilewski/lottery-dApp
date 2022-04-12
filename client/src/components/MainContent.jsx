import React, { useContext } from "react";
import { LotteryContext } from "../context/LotteryContext";
import { Button } from "./Button";
import "../styles/mainContent.css";

const MainContent = () => {
  const { enterLottery, potBalance } = useContext(LotteryContext);
  return (
    <>
      {console.log(window.innerHeight)}
      <h1 style={{ color: "white", fontSize: "80px" }}>Ethereum Lottery</h1>
      <div className="description">
        Join the best lottery in the world and stand a chance to win 0.5 ETH! (1
        ticket costs 0.1 ETH)
      </div>
      <div style={{ color: "white", fontSize: "100px" }}>
        Current pot: {potBalance ? potBalance.slice(0, 3) : 0} ETH
      </div>
      <span style={{ marginTop: "5em" }}>
        <Button text={"Enter lottery"} onClick={enterLottery} size={"big"} />
      </span>
    </>
  );
};

export default MainContent;
