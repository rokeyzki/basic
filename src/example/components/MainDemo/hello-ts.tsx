import * as React from "react";

import { HelloES } from "./hello-es";

// TODO: delete me after refactoring to TS
// const JsxHelloES: any = HelloES;

export interface InterProps { compiler: string; framework: string; }

export class HelloTS extends React.Component<InterProps, {}> {
  public render() {
    return (
      <div>
        <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <HelloES compiler="EcmaScript" framework="React" />
      </div>
    );
  }
}
