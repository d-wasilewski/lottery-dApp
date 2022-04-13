# lottery-dApp

## Table of Contents

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#overview">Overview</a>
    </li>
    <li>
      <a href="#built-with">Built with</a>
    </li>
    <li>
      <a href="#getting-started">Getting started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#running-locally">Running locally</a></li>
      </ul>
    </li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


## Overview 

As a big fan of blockchain technology I wanted to learn to make decentralized applications and this is my first approach to this.
I learned Solidity to create a smart contract so that I could use blockchain as a server and a database, and
achieve verifiable consensus without the need for a trusted third party such as a payment processors in this case.

The app allows the user to participate in a lottery by contributing 0.1 ETH to the smart contract, after he succesfully connected his wallet.
If the balance of the contract is bigger or equal to 0.5 ETH
a function that picks winner is invoked and full balance of the contract is sent to randomly picked participant of the lottery.
You can see the list of addresses of the players that are currently taking part in the lottery as well as addresses of the winners of previous lotteries.
By clicking on each of them you get redirected to etherscan so you can check on that player.

![image](https://user-images.githubusercontent.com/71132144/163058972-0e89f1d8-b26f-4728-820d-f881395b9f64.png)


## Built with

- [Ethereum Rinkeby Testnet](https://www.rinkeby.io/#stats)

The backend part of the app is built using Ethereum, which is a blockchain that was developed to support scripting
and the creation of decentralized applications and 'smart contracts' through its virtual machine (EVM).
Ethereum's native token, Ether (ETH) is a cryptocurrency used to pay for the processing power of the EVM 
in order to run smart contracts or other Dapps, in what is called 'gas'. 
Since we have to pay has fees before each transaction modifying the blockchain it would be very expensive to test the smart contract, because
the gas fees cost real money. Obviously I didn't want to spend money when I was just testing my smart contract, that's why I used a testnet
that provides free cryptocurrency I could use to pay for gas fees (this free tokens doesn't have any value and we can't use it on mainnet). 
In short, testnets are like mocks in that they are used to test the protocol in a controlled environment.

- [Solidity v0.8.11](https://docs.soliditylang.org/en/v0.8.13/)

Solidity is an object-oriented, high-level language for implementing smart contracts. 
Smart contracts are programs which govern the behaviour of accounts within the Ethereum state.
I used solidity to create my lottery smart contract that has the logic of the dApp.

- [Hardhat v2.9.3](https://hardhat.org)

Hardhat is an environment I used to compile and deploy my dApp on the Rinkeby testnet

- [Ethers v5.6.1](https://docs.ethers.io/v5/)

Ethers is a library I used to interact with the Ethereum Blockchain on the frontend part on my dApp.

- [React v17.0.2](https://reactjs.org)

React is a JS library I used to build the user interface

## Getting started

### Prerequisites

In order to use the app you need to have [Metamask](https://metamask.io) installed.
Its function is to inject a JavaScript library called web3.js into the namespace of each page your browser loads, so that you can interact with the dApp.

In order to install metamask you need to:
1. Go to [Metamask web browser extension on Chrome Web Store](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn)
2. Check the number of downloads to make sure that the legitimate MetaMask is being installed, as hackers might try to make clones of it
3. Click the Add to Chrome button
4. Once installation is complete this page will be displayed. Click on the Get Started button
5. This is the first time creating a wallet, so click the Create a Wallet button. If there is already a wallet then import the already created using the Import Wallet button
6. Click I Agree button to allow data to be collected to help improve MetaMask or else click the No Thanks button. The wallet can still be created even if the user will click on the No Thanks button.
7. Create a password for your wallet. This password is to be entered every time the browser is launched and wants to use MetaMask. A new password needs to be created if chrome is uninstalled or if there is a switching of browsers. Agree to Terms of Use
8. Click on the dark area which says Click here to reveal secret words to get your secret phrase
9. This is the most important step. Back up your secret phrase properly. Do not store your secret phrase on your computer. Please read everything on this screen until you understand it completely before proceeding. The secret phrase is the only way to access your wallet if you forget your password. Once done click the Next button
10. Click the buttons respective to the order of the words in your seed phrase. In other words, type the seed phrase using the button on the screen. If done correctly the Confirm button should turn blue
11. Click the Confirm button. Please follow the tips mentioned
12. You can access MetaMask in the browser by clicking the Foxface icon on the top right. If the Foxface icon is not visible, then click on the puzzle piece icon right next to it

Great, you have a fully functioning cryptocurrency wallet!
Now you need to change your network from default Ethereum Mainnet to Rinkeby Testnet and get some free coins we talked about earlier so that you can pay the fee and
perform operations on the blockchain.
1. Open the Metamask browser extension
2. Click "Ethereum Mainnet" button and if your test networks don't show you need to click Show/hide test networks button 

![image](https://user-images.githubusercontent.com/71132144/163218758-b0f0bf15-8a27-42fb-98d8-1e80dd58b049.png)

3. Enable showing test networks

![image](https://user-images.githubusercontent.com/71132144/163218932-fd5d09ed-2a19-4b06-bdc2-aee3f0a01839.png)

4. Choose Rinkeby Test Network from the list 

![image](https://user-images.githubusercontent.com/71132144/163219032-960a206e-1fab-4f4a-9cea-e2752ed3b14d.png)

5. Go to [Chainlink Faucet](https://faucets.chain.link/rinkeby), make sure you are connected to the right network, click "Send request" and enjoy your tokens!![image](https://user-images.githubusercontent.com/71132144/163219424-a97fbeda-0ef9-4163-bade-e0e241afb488.png)
6. You need to repeat step 5 and claim additional 0.1 ETH, because the ticket to the lottery costs 0.1 ETH and you need to have some more money on the side to pay for 
the fees associated with this operation:)

After you successfully connected to your metamask and claimed some free ETH, you can connect your wallet with this app and join the lottery!

### Running locally

To run the project locally, you need to perform following operations:
1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Switch to client directory
   ```sh
   cd ./client
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
4. Run the app
   ```js
   npm start
   ```

## Acknowledgements

- [What is blockchain](https://www.investopedia.com/terms/b/blockchain.asp)
- [What is ethereum](https://www.investopedia.com/terms/e/ethereum.asp)
- [Ethereum Testnets](https://blog.logrocket.com/top-4-ethereum-testnets-testing-smart-contracts/)
- [Smart contracts](https://www.ibm.com/topics/smart-contracts)
- [Hardhat](https://hardhat.org)
- [Installing Metamask](https://www.geeksforgeeks.org/how-to-install-and-use-metamask-on-google-chrome/)






