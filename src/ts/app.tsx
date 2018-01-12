import "babel-polyfill";
import "isomorphic-fetch";

import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.querySelector("#app"),
);
