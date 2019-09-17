import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import Navbar from "./components/Navbar";
import Content from "./components/Content";

const App = () => {
    return (
        <div>
            <Navbar />
            <Content />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector("#root"));
