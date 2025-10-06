
export default class PostForm {
    /**
     * @param {HTMLFormElement} form
     * @param {PostService} postService
     * @param {string} username
     */
    constructor(form, postService, username) {
        this.form = form;
        this.postService = postService;
        this.username = username;

        /** @type HTMLTextAreaElement */
        this.textArea = form.querySelector("#post-text-area");
        /** @type HTMLButtonElement */
        this.submitButton = form.querySelector("#post-submit-button");

        this.textArea.oninput = () => this.#onTextAreaInput();
        this.form.onsubmit = async (e) => {
            e.preventDefault();
            await this.#onSubmit()
        };
    }

    #onTextAreaInput() {
        const text = this.textArea.value;
        const canPost = this.postService.canPost(text);
        this.submitButton.disabled = !canPost;
    }

    async #onSubmit() {
        this.submitButton.disabled = true;
        this.textArea.disabled = true;
        this.textArea.blur();

        await this.postService.submit({
            username: this.username,
            text: this.textArea.value
        });

        this.textArea.value = "";
        this.textArea.disabled = false;
        this.submitButton.disabled = false;
    }
}