import { ReactNode, createContext, useEffect, useState } from "react";
import { Todo } from "../api/todos/types";
import { TodoAPI } from "../api/todos/client";

type TodosContextProps = {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodosContext = createContext<TodosContextProps | null>(null);

interface TodosContextProviderProps {
    children: ReactNode
}

const http = new TodoAPI();

const TodosContextProvider = ({children}: TodosContextProviderProps) => {
    const [todos, setTodos] = useState<Todo[]>([]);

    console.log("data: ", todos)

    useEffect(() => {
        const fetchTodos = async () =>  {
          const res = await http.getTodos();
          setTodos(res);
        }
    
        fetchTodos();
    }, []); 


    console.log("todos is changed!", todos);


    return <TodosContext.Provider value={{todos, setTodos}}>
        {children}
    </TodosContext.Provider>
}

export default TodosContextProvider;
