var NFTX = artifacts.require("NFTX");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(NFTX);
};