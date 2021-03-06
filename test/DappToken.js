var DappToken = artifacts.require("./DappToken.sol");

contract('DappToken', function(accounts) {

  it('sets the total supply uopon deployment', function() {
    return DappToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1000000');
    });
  });
});
