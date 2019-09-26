import React, { Component } from "react";
import "./styles.scss";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={require("./../../assets/images/ramen.jpg")} alt="card" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">Ramen is amazeballs!</p>
              <p className="subtitle is-6">Sep 25</p>
            </div>
          </div>

          <div className="content">
            <p>
              Ramen is a Japanese adaptation of Chinese wheat noodles.\One
              theory says that ramen was first introduced to Japan during the
              1660s by the Chinese neo-Confucian scholar Zhu Shunsui who served
              as an advisor to Tokugawa Mitsukuni after he became a refugee in
              Japan to escape Manchu rule and Mitsukuni became the first
              Japanese person to eat ramen, although most historians reject this
              theory as a myth created by the Japanese to embellish the origins
              of ramen. The more plausible theory is that ramen was introduced
              by Chinese immigrants in the late 19th or early 20th century at
              Yokohama Chinatown. According to the record of the Yokohama Ramen
              Museum, ramen originated in China and made its way over to Japan
              in 1859.Early versions were wheat noodles in broth topped with
              Chinese-style roast pork.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
