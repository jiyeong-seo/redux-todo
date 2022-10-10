import * as styles from "./TodoListDetail.styles";
import { Modal } from "../../../common";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

const TodoListDetail = () => {
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  // todoid 이런식으로 이름 지을 때 카멜케이스가 가능한가?
  const { todoid } = useParams();
  const { title, desc, id } = todos.find((item) => item.id === +todoid);

  // id변수가 이상하면 상품 없다는 UI보여주기
  return (
    <styles.TodoListDetail>
      <Modal>
        <button type="button" onClick={() => navigate("/")}>
          이전으로
        </button>
        <p>id:{id}</p>
        <h1>{title}</h1>
        <p>{desc}</p>
      </Modal>
    </styles.TodoListDetail>
  );
};

export default TodoListDetail;
