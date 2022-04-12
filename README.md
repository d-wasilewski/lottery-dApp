# lottery-dApp

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


## Technologies

The backend part of the app is built using Ethereum, which is a blockchain that was developed to support scripting
and the creation of decentralized applications and 'smart contracts' through its virtual machine (EVM).
Ethereum's native token, Ether (ETH) is a cryptocurrency used to pay for the processing power of the EVM 
in order to run smart contracts or other Dapps, in what is called 'gas'. 

## Prerequisites

