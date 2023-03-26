import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [first_dice, setDice1] = useState<number>(2);
    const [second_dice, setDice2] = useState<number>(1);

    return (
        <div>
            <span data-testid="left-die">{first_dice}</span>
            <span data-testid="right-die">{second_dice}</span>
            <div>
                <Button onClick={() => setDice1(d6())}>Roll Left</Button>
                <Button onClick={() => setDice2(d6())}>Roll Right</Button>
            </div>
            {first_dice === second_dice && first_dice != 1 ? (
                <span>Win</span>
            ) : first_dice !== second_dice ? (
                <span></span>
            ) : (
                <span>Lose</span>
            )}
        </div>
    );
}
