import axiosInstance from "../axiosInstance";
import { Todo } from "./types";

export class TodoAPI {

    constructor() {}


    async getTodos(): Promise<Todo[]> {
        return await axiosInstance.get("/todos")
    }

    async addNew(todo: Todo) : Promise<Todo> {
        return await axiosInstance.post("/todos", todo)
    }

    async search(filterValue: string): Promise<Todo[]> {
        return await axiosInstance.get(`/todos?title=${filterValue}`)
    }

    
}