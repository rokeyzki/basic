import "babel-polyfill";
import "isomorphic-fetch";

import * as React from "react";
import * as ReactDOM from "react-dom";

// import { Hello } from "./components/Hello";
import MainDemo from "./components/main-demo";

ReactDOM.render(
    // <Hello compiler="TypeScript" framework="React" />,
    <MainDemo />,
    document.querySelector("#app"),
);
