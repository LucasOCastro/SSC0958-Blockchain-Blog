/**
 * @typedef PostEvents
 * @member {() => void}
 */

export default class PostService {
    /**
     * @param {string} username
     */
    constructor(username) {
        this.username = username;
    }

    submit(text) {
        if (!this.canPost(text))
            return;

        text = this.#preProcessText(text);
        console.log(this.username, " posted: ", text);
    }

    canPost(text) {
        return this.#preProcessText(text).length > 0;
    }

    #preProcessText(text) {
        return text.trim();
    }
}