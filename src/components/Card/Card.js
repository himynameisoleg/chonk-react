import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import AppMarkdown from "./../../markdown/post_001.md"
import "./styles.scss";

export default class Card extends Component {
  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {

    fetch(AppMarkdown)
      .then(res => res.text())
      .then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state; 
    return (
      
      <div className="content">
        <ReactMarkdown 
          source={markdown} 
          escapeHtml={false}
        />
      </div>


      // <div className="card">
      //   <div className="card-image">
      //     <figure className="image">
      //       <img src={require("./../../assets/images/ramen.jpg")} alt="card" />
      //     </figure>
      //   </div>
      //   <div className="card-content">
      //     <div className="media">
      //       <div className="media-content">
      //         <p className="title is-4">What is Ramen?</p>
      //         <p className="subtitle is-6">Sep 25</p>
      //       </div>
      //     </div>

      //     <div className="content">
      //       <p>
      //         "Ramen is a Japanese adaptation of Chinese wheat noodles.One
      //         theory says that ramen was first introduced to Japan during the
      //         1660s by the Chinese neo-Confucian scholar Zhu Shunsui who served
      //         as an advisor to Tokugawa Mitsukuni after he became a refugee in
      //         Japan to escape Manchu rule and Mitsukuni became the first
      //         Japanese person to eat ramen, although most historians reject this
      //         theory as a myth created by the Japanese to embellish the origins
      //         of ramen. The more plausible theory is that ramen was introduced
      //         by Chinese immigrants in the late 19th or early 20th century at
      //         Yokohama Chinatown. According to the record of the Yokohama Ramen
      //         Museum, ramen originated in China and made its way over to Japan
      //         in 1859.Early versions were wheat noodles in broth topped with
      //         Chinese-style roast pork."
      //       </p>
      //       <p>
      //         test excerpt from:{" "}
      //         <a href="https://en.wikipedia.org/wiki/Ramen">Wikipedia</a>
      //       </p>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
