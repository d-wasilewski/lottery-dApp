import { useContext } from "react";
import "./App.css";

import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { LotteryContext } from "./context/LotteryContext";

function App() {
  const { lotteryHistory, playersList } = useContext(LotteryContext);

  return (
    <>
      <Navbar />
      <div className="App">
        <div className="left-side">
          <MainContent />
        </div>
        <div className="right-side">
          <Card list={playersList} title={"Players"} />
          <Card list={lotteryHistory} title={"Winners"} />
        </div>
      </div>
    </>
  );
}

export default App;
