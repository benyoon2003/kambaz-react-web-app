import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import { ListGroup, Button } from "react-bootstrap";

export default function TodoItem({ todo }: { todo: any }) {
        const dispatch = useDispatch();

        return (
                <ListGroup.Item>
                        <       Button
                                size="sm"
                                onClick={() => dispatch(setTodo(todo))}
                                id="wd-set-todo-click"
                        >
                                Edit
                        </Button>
                        <Button
                                variant="danger"
                                size="sm"
                                onClick={() => dispatch(deleteTodo(todo.id))}
                                id="wd-delete-todo-click"
                                className="btn-danger"
                        >
                                Delete
                        </Button>
                </ListGroup.Item>
        );
}
