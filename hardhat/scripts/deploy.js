import fs from "node:fs";
import hre from "hardhat";
const { ethers } = hre;

const FRONTEND_CONFIG_PATH = '../frontend/src/contract-config.js';
const ARTIFACT_PATH = './artifacts/contracts/SocialMedia.sol/SocialMedia.json';

async function exportConfig(contractAddress) {
    const artifact = JSON.parse(fs.readFileSync(ARTIFACT_PATH, 'utf8'));
    const abi = artifact.abi;

    const configContent = `
export const contract_address = "${contractAddress}";
export const SocialMediaAbi = ${JSON.stringify(abi, null, 2)};
    `;

    try {
        fs.writeFileSync(FRONTEND_CONFIG_PATH, configContent.trim());
        console.log(`Successfully exported contract configuration to ${FRONTEND_CONFIG_PATH}`);
    } catch (error) {
        console.error("Error writing configuration file:", error);
    }
}

async function main() {
    const SocialMedia = await ethers.getContractFactory("SocialMedia");
    const socialMedia = await SocialMedia.deploy();

    const contractAddress = socialMedia.target;
    console.log("SocialMedia deployed to:", contractAddress);

    await exportConfig(contractAddress);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });