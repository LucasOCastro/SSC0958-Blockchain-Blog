import {getRandomUsername} from "./utils/usernames.js";
import PostForm from "./elements/postfForm.js";
import PostService from "./services/postService.js";
import {PostList} from "./elements/postList.js";

const loggedUsername = getRandomUsername();
const loggedUsernameSpan = document.getElementById("logged-username");
loggedUsernameSpan.innerText = loggedUsername;

const postListElement = document.getElementById("post-list-container");
const postList = new PostList(postListElement);

const postService = new PostService({
    onPostAdded: newPost => postList.add(newPost),
});

const postFormElement = document.getElementById("post-area-container");
const postForm = new PostForm(postFormElement, postService, loggedUsername);