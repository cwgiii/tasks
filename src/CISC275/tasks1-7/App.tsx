import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function CharlesGordinierIIIApp(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">/CISC275.i</header>
            <h1>Header Part 2</h1>
            <img
                src="../Downloads/old_linedin.jpeg"
                alt="My old linked in profile picture"
            />
            <ul>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>First column.</Col>
                    <div id="rectangle"></div>
                    <Col>Second column.</Col>
                    <div id="rectangle"></div>
                </Row>
            </Container>
        </div>
    );
}

export default CharlesGordinierIIIApp;
