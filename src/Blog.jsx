
import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false
    }
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  render() {
    const authorName = "Trahack"
    return (
      // React.Fragmentを入れるとタグで囲まなくていい<>でもいい
      <>
        <Article
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
        />
      </>
    )
  }
}

export default Blog;