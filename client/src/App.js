import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import Navbar from "./components/Navbar";
import PlayersList from "./components/PlayersList";
import { LotteryContext } from "./context/LotteryContext";

function App() {
  const {
    connectWallet,
    connectedAccount,
    enterLottery,
    potBalance,
    pickWinner,
    updateState,
  } = useContext(LotteryContext);

  const textToDisplay = connectedAccount ? connectedAccount : "CONNECT WALLET";

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="left-side">
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
            Pot: {potBalance} ETH
          </div>
          {/* <button onClick={enterLottery}>PLAY NOW</button> */}
          <div style={{ marginTop: "5em" }}>
            <Button text={"Enter lottery"} onClick={pickWinner} size={"big"} />
          </div>
        </div>
        <div className="right-side">
          <PlayersList />
          <PlayersList />
        </div>
      </div>
    </>
  );
}

export default App;
