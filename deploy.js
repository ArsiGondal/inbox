const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

const provider = new HDWalletProvider(
  "away wink art woman grocery provide approve true umbrella fall neither gaze",
  "https://goerli.infura.io/v3/1b2d8fcfcc0c40868b85c3cb8ccb4c50"
);

const web3 = new Web3(provider);
const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy contract from account", accounts[0]);

  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: ["Hi there!"] })
    .send({ gas: 1000000, from: accounts[0] });

  console.log("Contract deployed to", result.options.address);

  provider.engine.stop();
};
deploy();
