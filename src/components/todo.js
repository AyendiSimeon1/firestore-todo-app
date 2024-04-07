import { doc, deleteDoc } from 'firebase/firestore';
import db from './firebaseConfig.js';

const Todo = ({ arr }) => {
  return (
    <ul>
      <h1>{arr.item.todo}</h1>

      <li
        style={{ fontSize: 'large', opacity: 0.7 }}
        onClick={() => {
          deleteDoc(doc(db, 'todos', arr.id));
        }}
      >
        Click to delete
      </li>
    </ul>
  );
};

export default Todo;