import * as React from "react";

interface ImterTest {
    foo: number;
}

type FuncBar = () => number;

type FuncBaz = (a: string, b: string) => void;

interface InterProps {
    compiler: string;
    framework: string;
    test: ImterTest;
    bar: FuncBar;
    baz: FuncBaz;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<InterProps, {}> {
    public render() {
        console.log(this.props.bar());
        this.props.baz("A", "B");
        console.log(this.props.test.foo);
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
