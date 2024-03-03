import { useContext } from "react"
import { TodosContext } from "./TodosContextProvider"

export const useTodosContext = () => {
    const context = useContext(TodosContext);

    if (!context) throw new Error("TodosContext must be used in TodosContextProvider");

    return context;
}
