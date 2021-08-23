// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.5;

contract SimpleBank {



    
    mapping(address => uint) private balanceOf;
    address public owner;
    event LogDepositMade(address entitiesAddr, uint amountDeposited);
   
    constructor () {
            owner = msg.sender;
    }

    function deposit() public payable returns (uint currentBalance) {
    
        balanceOf[msg.sender] += msg.value;

        emit LogDepositMade(msg.sender, msg.value);

        currentBalance = balanceOf[msg.sender];
    }

    function withdraw(uint withdrawAmount) public returns (uint currentBalance) {

        if (balanceOf[msg.sender] >= withdrawAmount) {

            balanceOf[msg.sender] -= withdrawAmount;

            if (!payable(msg.sender).send(withdrawAmount)) {

                balanceOf[msg.sender] += withdrawAmount;

            }
            
        }
        currentBalance = balanceOf[msg.sender];
    }
  



    



    
}