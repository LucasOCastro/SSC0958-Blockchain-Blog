
export default class PostForm {
    /**
     * @param {HTMLElement} form
     * @param {PostService} postService
     * @param {string} username
     */
    constructor(form, postService, username) {
        this.postService = postService;
        this.username = username;

        /** @type HTMLTextAreaElement */
        this.textArea = form.querySelector("#post-text-area");
        /** @type HTMLButtonElement */
        this.submitButton = form.querySelector("#post-submit-button");

        this.textArea.oninput = () => this.#onTextAreaInput();
        this.submitButton.onclick = () => this.#onSubmitClick();
    }

    #onTextAreaInput() {
        const text = this.textArea.value;
        const canPost = this.postService.canPost(text);
        this.submitButton.disabled = !canPost;
    }

    #onSubmitClick() {
        /** @type {Post} */
        const post= { username: this.username, text: this.textArea.value };
        this.postService.submit(post);
    }
}