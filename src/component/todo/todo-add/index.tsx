import React from "react";

interface TodoAddProps {
    addRef?: React.RefObject<HTMLInputElement | null>;
    onAddEvent: (e: React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TodoAdd = ({...props}: TodoAddProps) => {

    // catch current enterEvent(keyboard) and callback parent Handler Event
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {

            // when Input case: Enter caught
            const syntheticEvent = {
                currentTarget: document.createElement('button'),
                preventDefault: () => {
                },
                stopPropagation: () => {
                }
            } as React.MouseEvent<HTMLButtonElement>;
            props.onAddEvent(syntheticEvent)
        }
    }

    return (
        <div className="todo-input">
            <h2 className="todo--title">
                create new "todo" Now!
            </h2>
            <label className="todo-input__label">
                <input
                    className="todo-input__input"
                    value={props.value}
                    onChange={props.onChange}
                    onKeyDown={handleKeyDown}
                    type="text"
                    ref={props.addRef}
                    name="todo-input"
                />
                <button
                    className="todo-input__button"
                    onClick={props.onAddEvent}
                >
                    Add!
                </button>
            </label>
        </div>
    )
}
