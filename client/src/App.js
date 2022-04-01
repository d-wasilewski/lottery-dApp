import { useContext, useEffect, useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import MainContent from "./components/MainContent";
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

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="left-side">
          <MainContent />
        </div>
        <div className="right-side">
          <PlayersList />
          {/* <PlayersList /> */}
        </div>
      </div>
    </>
  );
}

export default App;
