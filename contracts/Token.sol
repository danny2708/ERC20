// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

// 1. Import chuẩn ERC20 và Ownable (để quản lý hợp đồng)
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol"; 

contract MyToken is ERC20, Ownable {
    // Constructor sẽ chạy khi hợp đồng được triển khai
    constructor(uint256 initialSupply)
        // Khởi tạo ERC20: Tên và Ký hiệu (Symbol)
        ERC20("My Hardhat Token", "MHT") 
        // Khởi tạo Ownable: Thiết lập người triển khai (msg.sender) là chủ sở hữu
        Ownable(msg.sender)
    {
        // 2. Đúc (mint) tổng cung ban đầu và chuyển vào ví của người triển khai (msg.sender)
        _mint(msg.sender, initialSupply); 
    }

    // Chức năng tùy chọn: Chỉ chủ sở hữu mới được mint thêm token (ví dụ)
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}