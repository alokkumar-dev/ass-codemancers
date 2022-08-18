import { useState } from "react";
import "./Home.css";
import { PostPage } from "./PostPage";
import { CreatePage } from "./CreatePage";

export const HomePage = () => {
  const [posts, setPosts] = useState([]);

  function addPost(newPost) {
    setPosts((prevPosts) => {
      return [...prevPosts, newPost];
    });
  }

  function deletePost(id) {
    setPosts((prevPosts) => {
      return prevPosts.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="homeContainer">
      <div className="leftSide">
        <CreatePage onAdd={addPost} />
      </div><hr />
      <div className="rightSide">
        {posts.map((postItem, index) => (
          <PostPage
            key={index}
            id={index}
            title={postItem.title}
            content={postItem.content}
            onDelete={deletePost}
            gif={postItem.gif}
          />
        ))}
      </div>
    </div>
  );
};
