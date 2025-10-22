const hre = require("hardhat");

async function main() {
  // 1. Xác định tổng cung ban đầu: 1,000,000 token.
  // Ethers.parseUnits("1000000", 18) sẽ chuyển thành số có 18 số 0 (1,000,000 * 10^18)
  // Đây là cách chuẩn để xử lý số thập phân của token.
  const initialSupply = hre.ethers.parseUnits("1000000", 18);

  // 2. Lấy Factory và triển khai hợp đồng
  const MyToken = await hre.ethers.getContractFactory("MyToken");

  // Triển khai, truyền initialSupply vào constructor
  const token = await MyToken.deploy(initialSupply);

  // Chờ cho đến khi hợp đồng được triển khai hoàn tất
  await token.waitForDeployment();

  // 3. In địa chỉ hợp đồng đã triển khai
  console.log(`MyToken deployed to: ${token.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});