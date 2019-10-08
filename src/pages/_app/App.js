import React, { Component } from "react";
import Navbar from "./../../components/Navbar/Navbar";
// import Hero from "./../../components/Hero/Hero";
import Blog from "./../../components/Blog/Blog";
import Footer from "./../../components/Footer/Footer";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Navbar />
        {/* <Hero /> */}
        <Blog />
        <Footer />
      </div>
    );
  }
}
