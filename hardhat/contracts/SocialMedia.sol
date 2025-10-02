pragma solidity ^0.8.19;

contract SocialMedia {
    struct Post {
        address author;
        string username;
        string text;
        uint256 timestamp;
    }

    Post[] public posts;

    event NewPost(uint256 indexed id, address indexed author, string username, string text, uint256 timestamp);

    function createPost(string calldata username, string calldata text) external {
        posts.push(Post(msg.sender, username, text, block.timestamp));
        uint256 id = posts.length - 1;
        emit NewPost(id, msg.sender, username, text, block.timestamp);
    }

    function getPost(uint256 id) external view returns (address, string memory, string memory, uint256) {
        Post storage p = posts[id];
        return (p.author, p.username, p.text, p.timestamp);
    }

    function getAllPosts() external view returns (Post[] memory) {
        return posts;
    }
}
