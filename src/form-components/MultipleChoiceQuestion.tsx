import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    let correctness = "❌";
    if (answer == expectedAnswer) {
        correctness = "✔️";
    }
    function changeAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form>
                <Form.Select value={answer} onChange={changeAnswer}>
                    <option value=" ">Select an Answer</option>
                    {options.map((choice) => (
                        <option key={choice} value={choice}>
                            {choice}
                        </option>
                    ))}
                </Form.Select>
            </Form>
            <div>Your answer is: {correctness}</div>
        </div>
    );
}