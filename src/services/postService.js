/**
 * @typedef PostEvents
 * @property {(Post) => void} onPostAdded
 */

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

        const text = this.#preProcessText(post.text);
        console.log(post.username, " posted: ", text);

        //TODO called from contract event
        this.listeners.onPostAdded?.(post);
    }

    canPost(text) {
        return this.#preProcessText(text).length > 0;
    }

    #preProcessText(text) {
        return text.trim();
    }
}