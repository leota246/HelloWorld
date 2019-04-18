var helloWorld = artifacts.require("./heloWorld.sol");

contract("helloWorld:GetMessage", function (accounts) {
  it("should return a correct string", async function () {
    const contract = await helloWorld.deployed();
    const result = await contract.GetMessage.call();
    assert.isTrue(result === "I know smart contract testing!!");
  });
});