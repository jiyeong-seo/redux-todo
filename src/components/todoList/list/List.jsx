import * as styles from "./List.styles";
import { useSelector } from "react-redux";
import { Todo } from "../../todoList";

const List = () => {
  const todos = useSelector((state) => state.todos);
  console.log(todos.filter((item) => item.isDone));
  return (
    <styles.List>
      <h1>working</h1>
      {todos
        .filter((todo) => !todo.isDone)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
      <h1>done</h1>
      {todos
        .filter((todo) => todo.isDone)
        .map((todo) => (
          <Todo todo={todo} key={todo.id} />
        ))}
    </styles.List>
  );
};

export default List;
