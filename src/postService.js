export default class PostService {
    /**
     * @param {string} username
     */
    constructor(username) {
        this.username = username;
    }

    submit(text) {
        console.log(this.username, " posted: ", text);
    }
}