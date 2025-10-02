const hre = require("hardhat");
const { ethers } = hre;

async function main() {
    const SocialMedia = await ethers.getContractFactory("SocialMedia");
    const socialMedia = await SocialMedia.deploy();
    console.log("SocialMedia deployed to:", socialMedia.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });