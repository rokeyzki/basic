import "babel-polyfill";
import "isomorphic-fetch";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";
// import MainDemo from "./components/main-demo";

const bar = () => 321;

function baz(a, b) {
    console.log(a, b);
}

ReactDOM.render(
    <Hello
        compiler="TypeScript"
        framework="React"
        test={{ foo: 123 }}
        bar={bar}
        baz={baz}
    />,
    // <MainDemo />,
    document.querySelector("#app"),
);
