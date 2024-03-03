import './App.css'
import TodoList from './pages/TodoList'
import TodosContextProvider from './contexts/TodosContextProvider';



function App() {
  return (
    <div className="border w-[800px] p-5 m-auto bg-blue-100">
      <TodosContextProvider>
        <TodoList />
      </TodosContextProvider>
    </div>
  )
}

export default App
