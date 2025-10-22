require("@nomicfoundation/hardhat-ethers");
// require('dotenv').config(); // Giữ nguyên hoặc bỏ comment nếu bạn dùng mạng testnet/mainnet

module.exports = {
  solidity: "0.8.20",
  networks: {
    // Cấu hình Localhost cho mạng Hardhat Node
    localhost: {
      url: "http://127.0.0.1:8545", // Hoặc chỉ cần "http://localhost:8545"
      // Hardhat sẽ tự động dùng các tài khoản test trong node
    },
    // sepolia: { ... } // Giữ nguyên hoặc bỏ comment nếu có
  },
};