import React, { useRef } from 'react';

import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitForm = (event: React.FormEvent) => {
    event.preventDefault();

    if (inputRef.current === null) {
      return;
    }

    const enteredText = inputRef.current?.value;

    if (enteredText?.trim().length === 0) {
      return;
    }

    onAddTodo(enteredText);
    inputRef.current.value = '';
  };
  return (
    <form onSubmit={submitForm} className={styles.todo_form}>
      <label htmlFor='text'>Todo text</label>
      <input type='text' id='text' ref={inputRef} />
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
