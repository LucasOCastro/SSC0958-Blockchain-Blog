import {getRandomUsername} from "./utils/usernames.js";
import PostForm from "./elements/post-form.js";
import PostList from "./elements/post-list.js";
import PostService from "./services/post-service.js";

const loggedUsername = getRandomUsername();
const usernameSpan = document.getElementById("logged-username")
usernameSpan.innerText = loggedUsername;

const postService = new PostService();
const postList = new PostList(document.getElementById("post-list-container"));
new PostForm(document.getElementById("post-area-container"), postService, loggedUsername);

postService.listeners.onPostAdded = newPost => postList.add(newPost);