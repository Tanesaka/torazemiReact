
import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "Trahack"
    return (
      // React.Fragmentを入れるとタグで囲まなくていい<>でもいい
      <>
        <Article
          title={"Reactの使い方"}
        />
        <Article
          title={"JSXの使い方"}
        />
        <Article
          title={"環境構築してみよう"}
        />
      </>
    )
  }
}

export default Blog;