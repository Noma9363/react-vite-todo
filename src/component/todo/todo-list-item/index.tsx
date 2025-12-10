import React from 'react';
import type {TodoInterface} from "@/interface";
import './styles/index.scss';

interface TodoListItemProps extends TodoInterface{
    onCheck?: (e:React.ChangeEvent<HTMLInputElement>)=>void;
    onDelete?: (e:React.MouseEvent<HTMLButtonElement>)=>void;
    onTitleChange?: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}

export const TodoListItem = ({...props}:TodoListItemProps) => {

    // localizing DateForm
    const formatsDate = Intl.DateTimeFormat(
        'ko',
        {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        }
    ).format(props.updatedAt);



    return(
        <div className="item">
            <label className="item__check-box">
                <input
                    type="checkbox"
                    onChange={props.onCheck}
                    checked = {props.isChecked ?? false}
                />
            </label>
            <div className="item__title">
                <span>
                    {props.title}
                </span>
            </div>
            <div className="item__uploaded-at">
                <span>
                    {formatsDate}
                </span>
            </div>
            <div className="item__del">
                <button onClick={props.onDelete}>
                    Delete!
                </button>
            </div>
        </div>
    )
}
