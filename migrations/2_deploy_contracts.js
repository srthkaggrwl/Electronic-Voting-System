const EVotingSystem = artifacts.require("EVotingSystem");

module.exports = function (deployer) {
  // Replace these with the actual candidate addresses
  const candidate1 = "0x490Fa4c985898c2759A399B943d6d17430c975c2";  // Replace with an actual Ethereum address
  const candidate2 = "0x6E3A8446bD7c1E8CE3160c3D7Dd2180b449013a5";
  const candidate3 = "0x5F5B69683C6530028Eecad9Ca98e288E0231064a";

  deployer.deploy(EVotingSystem, candidate1, candidate2, candidate3);
};
