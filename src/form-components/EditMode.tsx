import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [editing, setMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);

    function update_IsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="is-edit-mode"
                    label="Edit"
                    checked={editing}
                    onChange={() => setMode(!editing)}
                />
            </div>
            <div>
                {editing ? (
                    <Form.Group controlId="FormPersonName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event: ChangeEvent) =>
                                setName(event.target.value)
                            }
                        />
                        <Form.Check
                            type="switch"
                            id="is-student"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={update_IsStudent}
                        />
                    </Form.Group>
                ) : (
                    <div>
                        {name} is {isStudent ? "a student" : "not a student"}
                    </div>
                )}
            </div>
        </div>
    );
}
