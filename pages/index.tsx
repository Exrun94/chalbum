import * as React from 'react'
import { Button, Modal, Navbar } from "../components/"

function Home() {

    return (
        <React.Fragment>
            <Navbar />
            <Button>TEST</Button>
            <Button color='error'>TEST</Button>
            <Button color='accent'>TEST</Button>
        </React.Fragment>
    )
}

export default Home;