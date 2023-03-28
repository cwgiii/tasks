import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [text, set_text] = useState<string>("");
    let correctness = "❌";
    if (text == expectedAnswer) {
        correctness = "✔️";
    }
    function update_text(event: React.ChangeEvent<HTMLInputElement>) {
        set_text(event.target.value);
    }

    return (
        <div>
            <Form.Group controlId="form_text">
                <Form.Label>Answer:</Form.Label>
                <Form.Control value={text} onChange={update_text} />
            </Form.Group>
            <div>Your answer is: {correctness}.</div>
        </div>
    );
}
