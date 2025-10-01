
export default class PostForm {
    /**
     * @param {HTMLElement} form
     * @param {PostService} postService
     */
    constructor(form, postService) {
        this.postService = postService;
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
        const text = this.textArea.value;
        this.postService.submit(text);
    }
}