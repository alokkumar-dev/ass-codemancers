import React from "react";
import "./Home.css"
export const PostPage = (props) => {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="post_div">
      <p>{props.content}</p>
      <img src={props.gif} alt="img"/>
      <button onClick={handleClick}>delete</button>
    </div>
  );
};
