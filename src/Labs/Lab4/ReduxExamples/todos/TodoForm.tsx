import { ListGroup, Button, FormControl } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm(){
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  
  return (
    <ListGroup.Item className="d-flex align-items-center gap-2">
      <FormControl
        className="flex-grow-1"
        defaultValue={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
      <Button 
        className="btn-warning" 
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
      > 
        Update 
      </Button>
      <Button 
        className="btn-success" 
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
      > 
        Add 
      </Button>
    </ListGroup.Item>
  );
}