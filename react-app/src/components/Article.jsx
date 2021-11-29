import React from "react";

const Article = (props) => {
  return (
    <article>
      <img src={props.img} alt="article-img" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </article>
  );
};

export default Article;
