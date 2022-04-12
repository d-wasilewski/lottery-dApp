const main = async () => {
  const lotteryContract = await hre.ethers.getContractFactory("Lottery");
  const lottery = await lotteryContract.deploy();
  await lottery.deployed();

  console.log("Contract address:", lottery.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
