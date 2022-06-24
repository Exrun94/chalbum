import * as React from 'react';
import Button from "../components";

function Home() {
    return (
        <React.Fragment>
            <Button color="error">Button</Button>
            <Button color="primary">Button</Button>
            <Button color="secondary">Button</Button>
            <Button color="info">Button</Button>
        </React.Fragment>
    )
}

export default Home;