import { useRef, useState } from "react";
import BasicButton from "../components/buttons/BasicButton";
import InputField from "../components/inputs/InputField";
import { useTodosContext } from "../contexts/utils";
import { TodoAPI } from "../api/todos/client";
import TodoItem from "../components/todo/TodoItem";


const http = new TodoAPI();

const TodoList = () => {
    const { todos, setTodos } = useTodosContext();
    const [addedValue, setAddedValue] = useState("");
    const filterInputRef = useRef<HTMLInputElement>(null)

    const handleAddNewTodo = async () => {
        const addedTodo = await http.addNew({
            title: addedValue,
            id: (todos.length + 1).toString()
        });

        setTodos(prev => [addedTodo, ...prev])
    }

    const handleAddedValueChange = (e: React.ChangeEvent<HTMLInputElement>) => setAddedValue(e.target.value);

    const handleSearch = async () => {
        let filterValue = ""
        if (filterInputRef) {
            if (filterInputRef.current) {
                filterValue = filterInputRef.current.value
            }
        } 
        
        const filteredTodos = await http.search(filterValue)

        setTodos(filteredTodos)
    }

    return <div className="flex space-x-5">
        <section>
            Filter: <InputField inputRef={filterInputRef} /> <BasicButton onClick={handleSearch}>Find</BasicButton> 
            <ul>
                {todos.map(todo => (<li key={todo?.id}><TodoItem todo={todo} /></li>))}
            </ul>
        </section>
        <section>
            <InputField value={addedValue} onChange={handleAddedValueChange}/>
            <BasicButton onClick={handleAddNewTodo}>Add to list</BasicButton>
        </section>
    </div>
}

export default TodoList;
