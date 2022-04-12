import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";

export const LotteryContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const lotteryContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return lotteryContract;
};

const contract = getEthereumContract();

export const LotteryProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState("");
  const [potBalance, setPotBalance] = useState(0);
  const [playersList, setPlayersList] = useState([]);
  const [lotteryHistory, setLotteryHistory] = useState([]);

  const checkIfWalletIsConnected = async () => {
    if (!ethereum) return alert("Please install metamask!");

    const accounts = await ethereum.request({ method: "eth_accounts" });

    setConnectedAccount(accounts[0]);
    updateState();
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) return alert("Please install metamask!");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setConnectedAccount(accounts[0]);
      updateState();
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const enterLottery = async () => {
    if (!connectedAccount) {
      connectWallet();
    }

    try {
      await contract.enterLottery({
        from: connectedAccount,
        value: ethers.utils.parseEther("0.1"),
        gasLimit: 300000,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getLotteryId = async () => {
    const lotteryId = await contract.lotteryId();
    return lotteryId.toNumber();
  };

  const getHistory = async (id) => {
    const historyList = [];

    for (let i = id - 1; i > 0; i--) {
      const winnerAddress = await contract.getWinnerByLotteryId(i);
      const historyObj = {};
      historyObj.id = i;
      historyObj.address = winnerAddress;
      historyList.push(winnerAddress);
    }

    setLotteryHistory(historyList);
  };

  const getPlayersList = async () => {
    const players = await contract.getPlayerList();
    setPlayersList(players);
  };

  const getPotBalance = async () => {
    if (contract) {
      const pot = await contract.getBalance();
      setPotBalance(ethers.utils.formatEther(pot));
    }
  };

  const updateState = async () => {
    await getPotBalance();
    await getPlayersList();
    const lotteryId = await getLotteryId();
    await getHistory(lotteryId);
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    const onNewEntry = async () => {
      updateState();
    };

    if (contract) {
      contract.on("NewPlayer", onNewEntry);
    }

    return () => {
      if (contract) {
        contract.off("NewPlayer", onNewEntry);
      }
    };
  }, []);

  return (
    <LotteryContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        enterLottery,
        playersList,
        potBalance,
        updateState,
        lotteryHistory,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
};
