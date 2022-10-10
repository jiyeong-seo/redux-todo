import * as styles from "./Todo.styles";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../../../redux/modules/todos";
import { useNavigate } from "react-router-dom";

const Todo = ({ todo }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 삭제 핸들러
  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todos.filter((item) => item.id !== todo.id)));
  };

  // 완료 핸들러
  const handelIsDoneCheckTodo = () => {
    dispatch(
      doneTodo(
        todos.map((item) =>
          item.id === todo.id ? { ...item, isDone: !item.isDone } : item
        )
      )
    );
  };

  return (
    <styles.Todo>
      {/* Link사용이 더 좋을까? */}
      {/* *로 404 페이지 만들기 */}
      <h1>{todo.title}</h1>
      <p>{todo.desc}</p>
      <button type="button" onClick={handleDeleteTodo}>
        삭제하기
      </button>
      <button type="button" onClick={handelIsDoneCheckTodo}>
        {todo.isDone ? "취소" : "완료"}
      </button>
      <button type="button" onClick={() => navigate(`/detail/${todo.id}`)}>
        상세보기
      </button>
    </styles.Todo>
  );
};

export default Todo;
