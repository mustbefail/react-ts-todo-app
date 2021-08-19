import styles from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  id: string;
  onRemoveTodo: (id: string) => void;
}> = ({ text, id, onRemoveTodo }) => {
  return (
    <li className={styles.item} onClick={() => onRemoveTodo(id)}>
      {text}
    </li>
  );
};

export default TodoItem;
