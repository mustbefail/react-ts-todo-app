import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

import style from './App.module.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoHandler = (text: string) => {
    const todo = new Todo(text);

    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const onRemoveTodoHandler = (id: string) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  return (
    <div className={style.App}>
      <header>
        <h1>Todo list</h1>
      </header>
      <NewTodo onAddTodo={onAddTodoHandler} />
      <Todos items={todos} onRemoveTodo={onRemoveTodoHandler}/>
    </div>
  );
}

export default App;
