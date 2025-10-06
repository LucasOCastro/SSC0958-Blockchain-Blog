import {
    BrowserProvider,
    Contract,
} from 'ethers';
import { contract_address, SocialMediaAbi } from "../contract-config.js";

export default class PostService {
    /** @type {BrowserProvider | null} */
    provider = null;

    /** @type {SocialMediaContract | null} */
    contract = null;

    /**
     * @param {PostEvents} listeners
     */
    constructor(listeners = {}) {
        this.listeners = listeners;
        this.contract = null;
        this.signer = null;
        this.provider = null;
        this.blockchainReady = false;

        this.#initBlockchain();
    }

    /**
     * @param {CreatePostData} createPostData
     */
    async submit(createPostData) {
        const { username, text } = createPostData;
        if (!this.canPost(text))
            return;

        const processedText = this.#preProcessText(text);
        await this.#commit({ username, text: processedText});
    }

    /**
     * @param {string} text
     * @returns {boolean}
     */
    canPost(text) {
        return this.#preProcessText(text).length > 0
            && !!this.blockchainReady
            && !!this.provider
            && !!this.signer
            && !!this.contract;
    }

    /** @param {string} text */
    #preProcessText(text) {
        return text.trim();
    }

    /** @param {CreatePostData} createPostData */
    async #commit({ username, text}) {
        try {
            const tx = await this.contract.createPost(username, text);
            await tx.wait();

            console.log("Post submitted to blockchain!");
        } catch (error) {
            console.error("Transaction failed:", error);
        }
    }

    async #initBlockchain() {
        if (!window.ethereum) {
            console.error("MetaMask not detected. Please install a wallet.");
            return;
        }

        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            // Connect to the network and contract
            this.provider = new BrowserProvider(window.ethereum);
            this.signer = await this.provider.getSigner();
            this.contract = new Contract(contract_address, SocialMediaAbi, this.signer);
            console.log("Connected to blockchain and contract.");

            // Load posts and setup events
            await this.#loadInitialPosts();
            await this.contract.on("NewPost", (id, author, username, text, timestamp) => {
                this.listeners.onPostAdded?.({
                    id,
                    username,
                    text,
                    timestamp
                });
            });

            this.blockchainReady = true;
        } catch (error) {
            console.error("Error connecting to wallet or contract:", error);
        }
    }

    async #loadInitialPosts() {
        if (!this.contract) return;

        try {
            const contractPosts = await this.contract.getAllPosts();

            for (const { id, username, text, timestamp } of contractPosts) {
                this.listeners.onPostAdded?.({
                    id,
                    username,
                    text,
                    timestamp
                });
            }
        } catch (error) {
            console.error("Error fetching initial posts:", error);
        }
    }
}