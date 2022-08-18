import React from "react";
import "./Home.css";
export const PostPage = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <>
      <div className="postDiv">
        <div>
          <img src={props.gif} alt="img" />
          <h3>{props.content}</h3>
        </div>
        <button onClick={handleClick} className="deleteBtn">
          Delete Post
        </button>
      </div>
    </>
  );
};
