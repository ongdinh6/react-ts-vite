import { Todo } from "../../api/todos/types";
import CheckboxButton from "../buttons/CheckboxButton";



interface TodoItemProps {
    todo: Todo
}

const TodoItem = ({todo}: TodoItemProps) => {
    return <>
        <CheckboxButton />&nbsp;
        {todo.title} &nbsp;
        <span className="hover:cursor-pointer" onClick={() => console.log(todo.id)}>&times;</span>
    </>
}

export default TodoItem;
