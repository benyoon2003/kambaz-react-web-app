import { useState, useEffect } from "react";
import * as client from "./client";
import { FormControl, ListGroup } from "react-bootstrap";
import { FaTrash, FaPlusCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { TiDelete } from "react-icons/ti";

export default function WorkingWithArraysAsynchronously() {
    const [todos, setTodos] = useState<any[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);
    const updateTodo = async (todo: any) => {
    try {
      await client.updateTodo(todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error: any) {
      setErrorMessage(error.response.data.message);
    }
};


    const fetchTodos = async () => {
        const todos = await client.fetchTodos();
        setTodos(todos);
    };

    const createTodo = async () => {
        const todos = await client.createTodo();
        setTodos(todos);
    };

    const postTodo = async () => {
        const newTodo = await client.postTodo({ title: "New Posted Todo", completed: false });
        setTodos([...todos, newTodo]);
    };

    const editTodo = (todo: any) => {
        setTodos(todos.map(t => t.id === todo.id ? { ...t, editing: true } : t));
    };

    const removeTodo = async (todo: any) => {
        const updatedTodos = await client.removeTodo(todo);
        setTodos(updatedTodos);
    };

    const deleteTodo = async (todo: any) => {
    try {
      await client.deleteTodo(todo);
      const newTodos = todos.filter((t) => t.id !== todo.id);
      setTodos(newTodos);
    } catch (error: any) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }  }; 

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div id="wd-asynchronous-arrays">
            <h3>Working with Arrays Asynchronously</h3>
            {errorMessage && (<div id="wd-todo-error-message" className="alert alert-danger mb-2 mt-2">{errorMessage}</div>)}
            <h4>
                Todos
                <FaPlusCircle onClick={createTodo} className="text-success float-end fs-3" id="wd-create-todo" />
                <FaPlusCircle onClick={postTodo} className="text-primary float-end fs-3 me-3" id="wd-post-todo" />
            </h4>
            <ListGroup>
                {todos.map((todo) => (
                    <ListGroup.Item key={todo.id} className="d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check-input me-2"
                            checked={todo.completed}
                            onChange={(e) => updateTodo({ ...todo, completed: e.target.checked })}
                        />

                        {todo.editing ? (
                            <FormControl
                                className="me-2 w-50"
                                value={todo.title}
                                onChange={(e) => setTodos(
                                    todos.map(t =>
                                        t.id === todo.id ? { ...t, title: e.target.value } : t
                                    )
                                )}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        updateTodo(todo);
                                    }
                                }}
                            />
                        ) : (
                            <span
                                className="me-auto"
                                style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                            >
                                {todo.title}
                            </span>
                        )}

                        {!todo.editing && (
                            <FaPencil
                                onClick={() => editTodo(todo)}
                                className="text-primary ms-auto me-2"
                                style={{ cursor: "pointer" }}
                            />
                        )}
                        <FaTrash
                            onClick={() => removeTodo(todo)}
                            className="text-danger me-2"
                            id="wd-remove-todo"
                            style={{ cursor: "pointer" }}
                        />
                        <TiDelete
                            onClick={() => deleteTodo(todo)}
                            className="text-danger fs-4"
                            id="wd-delete-todo"
                            style={{ cursor: "pointer" }}
                        />
                    </ListGroup.Item>
                ))}
            </ListGroup>
            <hr />
        </div>
    );
}
