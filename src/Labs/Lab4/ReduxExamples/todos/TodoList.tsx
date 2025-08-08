import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);
  
  return (
    <div id="wd-todo-list-redux" className="container-fluid" style={{ maxWidth: '600px' }}>
      <h1 className="display-6 fw-bold mb-4 text-dark">
        Todo List
      </h1>
      
      <div className="mb-3">
        <TodoForm />
      </div>
      
      {todos.map((todo: any, index: number) => (
        <div 
          key={index}
          className="d-flex justify-content-between align-items-center p-3 mb-2 border border-2 rounded bg-white"
        >
          <span className="fs-5">{todo.title || todo.text}</span>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
}