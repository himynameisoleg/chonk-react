import React, { Component } from "react";
import Card from "./../Card/Card";
import "./styles.scss";

export default class Blog extends Component {
  render() {
    return (
      <section className="section">
        <div className="columns is-centered">
          <div className="column is-half">
            <Card />
          </div>
        </div>
      </section>
    );
  }
}
