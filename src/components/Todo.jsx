import React, { useState } from "react";
import {
	addTodo,
	todoSlice,
	deleteTodo,
	toggleTodo,
} from "../Application/todoSlice";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";

function Todo() {
	const [newTodo, setNewTodo] = useState("");
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todo.todos);

	function handleChange(e) {
		const { value } = e.target;
		setNewTodo(value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (newTodo.trim()) {
			dispatch(addTodo(newTodo.trim()));
			setNewTodo("");
		}
	}

	return (
		<>
			<div className="d-flex flex-column align-items-center justify-content-center vh-100">
				<h1 className="h2 mb-3">Manage Todos</h1>
				<form action="" onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="todo" className="form-label">
							Todo
						</label>
						<input
							type="text"
							className="form-control"
							id="todo"
							placeholder="Make a Coffee"
							value={newTodo || ""}
							onChange={handleChange}
						/>
					</div>
					<button className="btn btn-secondary btn-sm">Add Todo</button>
				</form>
				<div className="my-5">
					<ul className="list-group">
						{todos.map((todo) => {
							return (
								<li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
									<input
										className="form-check-input me-3"
										type="checkbox"
										id={`todo-${todo.id}`}
										onChange={() => dispatch(toggleTodo(todo.id))}
										defaultChecked={todo.completed}
									/>
									<label
										className={`form-check-label ${
											todo.completed ? "text-decoration-line-through" : ""
										}`}
										htmlFor={`todo-${todo.id}`}
									>
										{todo.text}
									</label>
									<button
										className="btn p-0 ms-3 fs-5 text-danger"
										onClick={() => dispatch(deleteTodo(todo.id))}
									>
										<MdDelete />
									</button>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</>
	);
}

export default Todo;
