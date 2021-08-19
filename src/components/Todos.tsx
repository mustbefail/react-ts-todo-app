import React from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';

import styles from './Todos.module.css';

const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> =
  ({ items, onRemoveTodo }) => {
    return (
      <ul className={styles.todos}>
        {items.map((item) => (
          <TodoItem
            text={item.text}
            key={item.id}
            id={item.id}
            onRemoveTodo={onRemoveTodo}
          />
        ))}
      </ul>
    );
  };

export default Todos;
