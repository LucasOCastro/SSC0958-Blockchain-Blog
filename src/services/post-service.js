export default class PostService {
    /**
     * @param {PostEvents} listeners
     */
    constructor(listeners = {}) {
        this.listeners = listeners;
    }

    /** @param {Post} post */
    submit(post) {
        if (!this.canPost(post.text))
            return;

        post.text = this.#preProcessText(post.text);
        this.#commit(post);
    }

    canPost(text) {
        return this.#preProcessText(text).length > 0;
    }

    #preProcessText(text) {
        return text.trim();
    }

    /** @param {Post} post */
    #commit(post) {
        console.log(post.username, " posted: ", text);
    }
}