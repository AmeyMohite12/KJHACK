import React, { Component } from "react";
import { useState, useEffect } from "react";
import Articles from "./Articles";

///have to use capital letters for a single function  ..

function ArticlesParent() {
  useEffect(() => {
    fetchPosts();
  }, []);

  const [item, setItems] = useState([]);
  const fetchPosts = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");

    const item = await data.json();
    //console.log(item);
    setItems(item);
  };

  return (
    <div className="features">
      {item.map(i => (
        <Articles title={i.title} key={i.id} />
      ))}
    </div>
  );
}
export default ArticlesParent;
