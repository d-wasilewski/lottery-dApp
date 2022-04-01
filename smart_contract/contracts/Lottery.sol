// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

contract Lottery {
    address owner;
    address payable[] players;
    uint public lotteryId;
    mapping(uint => address payable) public lotteryHistory;

    constructor() {
        owner = msg.sender;
        lotteryId = 1;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function enterLottery() public payable {
        require(msg.value > 0.1 ether, "Not enough ether sent");
        players.push(payable(msg.sender));
        // TODO: check if already entered
    }

    function pickWinner() public onlyOwner {
        uint randomNumber = getRandomNumber() % players.length;
        require(randomNumber > 0, "Must use generated random number");
        players[randomNumber].transfer(address(this).balance);

        lotteryHistory[lotteryId] = players[randomNumber];
        lotteryId++;
   
        players = new address payable[](0);
    }

    function getRandomNumber() public view returns(uint) {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    function getPlayerList() public view returns(address  payable[] memory) {
        return players;
    }

    function getBalance () public view returns(uint) {
        return address(this).balance;
    }

    function getWinnerByLotteryId (uint id) public view returns (address payable) {
        return lotteryHistory[id];
    }
}