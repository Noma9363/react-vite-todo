import React from "react";
import type {TodoInterface} from "@/interface/todo/todo-interface.tsx";
import {v4 as uuidv4} from 'uuid'
import {TodoAdd, TodoHeadline, TodoList} from "@/component";
import './styles/index.scss';

export const PageTodo = () => {

    const [todoDataState, setTodoDataState] = React.useState<TodoInterface[]>([
        {
            id: uuidv4(),
            title: "Task List One",
            updatedAt: new Date(),
            isDone: false
        },
        {
            id: uuidv4(),
            title: "Task List Two",
            updatedAt: new Date(),
            isDone: false
        }
    ]);

    const [titleValue, setTitleValue] = React.useState('');
    const inputRef=React.useRef<HTMLInputElement>(null);

    const {totalCnt, cmpCnt, duringCnt} = React.useMemo(()=>{
        const totalCnt = todoDataState.length;
        const cmpCnt = todoDataState.filter(
            (done) => done.isDone
        ).length;
        const duringCnt = totalCnt - cmpCnt;
        return{
            totalCnt,
            cmpCnt,
            duringCnt
        }

    },[todoDataState])


    const handleChangedCheck = (tarId: string)=>{
        setTodoDataState(todoDataState.map(todo=>{
            if(todo.id === tarId){
                return {...todo, isChecked: !todo.isChecked, isDone: !todo.isDone};
            }else return todo;
        }))
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setTitleValue(e.target.value);
    }

    const handleRemove = (rm_tar_key: string) =>{
        setTodoDataState(todoDataState.filter(todo=> todo.id !== rm_tar_key))
    }

    // @ts-ignore
    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        if(!titleValue){
            // case if value empty... force focus at input
            inputRef.current?.focus();
            return;
        }
        const key_uuid = uuidv4();

        // passed case: create todo
        const newTodo: TodoInterface = {
            title: titleValue,
            updatedAt: new Date(),
            id: key_uuid
        }

        // implement todo state
        setTodoDataState([...todoDataState, newTodo]);

        // clear previous values
        setTitleValue('');
        // force focus at input again
        inputRef.current?.focus();
    }

    React.useEffect(()=>{

    },[
        todoDataState
    ])

    return(
        <div className="todo-root todo">
            <TodoHeadline className="" />
            <section className="goal-status">
                <p>Total Todos 📝 : {totalCnt}</p>
                <p>Completed Todos ✅ : {cmpCnt}</p>
                <p>Progressing Todos 🛠️ : {duringCnt}</p>
            </section>
            <TodoAdd
                value={titleValue}
                onChange={handleInputChange}
                addRef={inputRef}
                onAddEvent={handleSubmit}
            />
            <TodoList
                todos={todoDataState}
                onDelete={handleRemove}
                onCheck={handleChangedCheck}
            />
        </div>
    )
}
