import React from 'react';
import type {TodoInterface} from "@/interface";
import {TodoListItem, TodoSearch} from "@/component";

interface TodoListProps{
    todos: TodoInterface[];
    onDelete: (key: string)=>void;
    onCheck: (key: string)=> void;
}
export const TodoList = ({...props}:TodoListProps) => {

    const [searchVal, setSearchVal] = React.useState('');
    const [filteredTodos, setFilteredTodos] = React.useState<TodoInterface[]>(props.todos);


    // search onChange handler
    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchVal(e.target.value)
    }

    // search filter handler
    const getResultSearch = ()=>{
        if(searchVal.length !== 0){
            // at least has something
            return props.todos.filter(item => item.title.toLowerCase().includes(searchVal.toLowerCase()))
        }else{
            return props.todos;
        }
    }

    React.useEffect(()=>{
        setFilteredTodos(getResultSearch())
    },[searchVal, props.todos])


    return(
        <div className="todo-list">
            <h2 className="todo-list__h2">
                Todo List
            </h2>
            <TodoSearch
                searchText={searchVal}
                onTitleSearchChange={handleInputChange}
            />
            <ul className="todo-list__ul">
                {filteredTodos.map((todoItem)=>{

                    return(
                        <li key={todoItem.id}>
                            <TodoListItem
                                title={todoItem.title}
                                id={todoItem.id}
                                isDone={todoItem.isDone}
                                updatedAt={todoItem.updatedAt}
                                isChecked={todoItem.isChecked}
                                onCheck={()=>{
                                    props.onCheck(todoItem.id)
                                }}
                                onDelete={()=>{
                                    props.onDelete(todoItem.id)
                                }}
                            />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
