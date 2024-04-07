import { db } from "../firebase.js";
import { doc, deleteDoc } from "firebase/firestore";
const Todo = ({ arr }) => {
  return (
    <ul>
        <h1 primary={arr.item.todo} secondary={arr.item.todo} />
    
      <li
        fontSize="large"
        style={{ opacity: 0.7 }}
        onClick={() => {
          deleteDoc(doc(db, "todos", arr.id));
        }}
      />
    </ul>
  );
};
export default Todo;