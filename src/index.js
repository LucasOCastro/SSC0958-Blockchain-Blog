import {getRandomUsername} from "./usernames.js";
import PostForm from "./postfForm.js";
import PostService from "./postService.js";

const loggedUsername = getRandomUsername();
const loggedUsernameSpan = document.getElementById("logged-username");
loggedUsernameSpan.innerText = loggedUsername;

const postService = new PostService(loggedUsername);

const postFormElement = document.getElementById("post-area-container");
const postForm = new PostForm(postFormElement, postService);

const postListElement = document.getElementById("post-list-container");