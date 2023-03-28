import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [requested_attempts, setReleased] = useState<string>("");
    const [num_attempts, setAttempts] = useState<number>(3);
    const num_requested = parseInt(requested_attempts) || 0;
    const total_attempts = num_attempts;

    return (
        <div>
            <Form.Group controlId="attempts_requested">
                <Form.Label>Requested Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requested_attempts}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setReleased(event.target.value)
                    }
                />
            </Form.Group>
            <div>Attempts: {total_attempts}</div>
            <Button
                onClick={() => setAttempts(total_attempts - 1)}
                disabled={num_attempts === 0}
            >
                use
            </Button>
            <Button onClick={() => setAttempts(total_attempts + num_requested)}>
                gain
            </Button>
        </div>
    );
}
