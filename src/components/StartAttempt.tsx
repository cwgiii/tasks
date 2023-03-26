import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [num_attempts, setNumOfAttempts] = useState<number>(4);
    const [quiz_active, setQuizInProgress] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => [
                    setQuizInProgress(true),
                    setNumOfAttempts(num_attempts - 1)
                ]}
                disabled={quiz_active || num_attempts === 0}
            >
                Start Quiz
            </Button>
            <Button
                onClick={() => setQuizInProgress(false)}
                disabled={!quiz_active}
            >
                Stop Quiz
            </Button>
            <Button
                onClick={() => setNumOfAttempts(num_attempts + 1)}
                disabled={quiz_active}
            >
                Mulligan
            </Button>
            <span>{num_attempts}</span>
        </div>
    );
}
