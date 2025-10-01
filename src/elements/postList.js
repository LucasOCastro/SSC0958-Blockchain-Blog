class PostEntry {
    /**
     * @param {HTMLElement} prefab
     * @param {Post} post
     */
    constructor(prefab, post) {
        this.instance = prefab.cloneNode(true);

        this.text = this.instance.querySelector(".post-content");
        this.text.textContent = post.text;

        this.username = this.instance.querySelector(".post-username");
        this.username.textContent = post.username;
    }
}

export class PostList {
    /**
     * @param {HTMLElement} container
     */
    constructor(container) {
        this.container = container;
        this.prefab = container.querySelector("#post-prefab");
        this.prefab.remove();

        /** @type {PostEntry[]} */
        this.entries = [];
    }

    /** @param {Post} post */
    add(post) {
        const entry = new PostEntry(this.prefab, post);
        this.container.appendChild(entry.instance);
        this.entries.push(entry);
    }
}