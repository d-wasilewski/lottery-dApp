import React, { useContext } from "react";
import "../styles/navbar.css";
import { Button } from "./Button";
import GithubIcon from "../utils/icons/GitHub-Mark-Light-32px.png";
import { LotteryContext } from "../context/LotteryContext";

const Navbar = () => {
  const { connectWallet, connectedAccount } = useContext(LotteryContext);

  const textToDisplay = connectedAccount
    ? `${connectedAccount.slice(0, 7)}...${connectedAccount.slice(-5)}`
    : "CONNECT WALLET";

  return (
    <div className="container">
      <ul className="list">
        <li>
          <a
            href="https://github.com/d-wasilewski/lottery-dApp"
            target="_blank"
          >
            <img src={GithubIcon} style={{ marginRight: "10px" }} /> Github
          </a>
        </li>
        <li>
          <Button text={textToDisplay} onClick={connectWallet} />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
