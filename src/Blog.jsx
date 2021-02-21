
import { findAllByDisplayValue } from "@testing-library/react";
import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    // ボタンがクリックされたらいいねをカウントアップする
    document.getElementById("counter").addEventListener("click", this.countUp)
  }

  componentDidUpdate() {
    if (this.state.count >= 10) {
      this.setState({count: 0})
    }
  }

  // ページ遷移すると、このカウントアップメゾッドがcounterIDから外れる
  // （目視では確認できないが、サーバーの負荷を減らせる）
  componentWillUnmount() {
    document.getElementById("counter").removeEventListener("click", this.countUp)
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState({
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    const authorName = "Trahack"
    return (
      // React.Fragmentを入れるとタグで囲まなくていい<>でもいい
      <>
        <Article
          title={"Reactの使い方"}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
      </>
    )
  }
}

export default Blog;