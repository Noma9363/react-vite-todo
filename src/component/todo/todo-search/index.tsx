import React from "react";

interface TodoSearchProps{
    searchText: string;
    onTitleSearchChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}
export const TodoSearch = ({...props}:TodoSearchProps) => {

    return(
        <div className="todo-search">
            <label className="todo-search__label">
                <input
                    type="text"
                    value={props.searchText}
                    onChange={props.onTitleSearchChange}
                    name="todo-search"
                    className="todo-search__input"
                    placeholder="Insert Keyword Here..!"
                />
            </label>

        </div>
    )
}
