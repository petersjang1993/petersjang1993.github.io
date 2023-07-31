import React from "react";
import Link from "./Link.js";
import Button from "./Button.js";
import Input from "./Input.js";
import Container from "./Container.js";
import {render} from "react-dom";

function App() {
    return (<>
        <a></a>
        <Link> </Link>
        <Button> </Button>
        <Input></Input>
        <Container></Container>
    </>);
}

render(<App />, document.querySelector("#react-root"));