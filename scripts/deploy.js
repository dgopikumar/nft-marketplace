const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftmarketplace = await NFTMarketplace.deploy();
  await nftmarketplace.deployed();
  console.log("MarketplaceAddress deployed to:", nftmarketplace.address);

  // const NFT = await hre.ethers.getContractFactory("NFT");
  // const nft = await NFT.deploy(nftmarket.address);
  // await nft.deployed();
  // console.log("NFT deployed to:", nft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
