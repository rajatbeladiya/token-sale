pragma solidity ^0.5.16;

contract DappToken {
  // Constructor
  // Set the number of tokens
  // Read the total number of tokens
  uint256 public totalSupply;

  constructor() public {
    totalSupply = 1000000;
  }
}