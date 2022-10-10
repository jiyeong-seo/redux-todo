import * as styles from "./Form.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos";

const Form = () => {
  // 커스텀 훅 사용해보기
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    id: null,
    isDone: false,
  });
  const { title, desc } = todo;
  const dispatch = useDispatch();

  // 투두 생성 핸들러
  const handleGetTodoValue = (e) => {
    const { name, value } = e.target;
    setTodo((prevState) => {
      return {
        ...prevState,
        [name]: value,
        id: Math.floor(Math.random() * 100),
        isDone: false,
      };
    });
  };

  // 제출 핸들러
  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo((prevState) => {
      return { ...prevState, title: "", desc: "" };
    });
  };

  return (
    <styles.Form>
      <label htmlFor="title">제목</label>
      <input
        type="text"
        id="title"
        onChange={handleGetTodoValue}
        name="title"
        value={title}
      />
      <label htmlFor="desc">내용</label>
      <input
        type="text"
        id="desc"
        onChange={handleGetTodoValue}
        name="desc"
        value={desc}
      />
      <button type="button" onClick={handleAddTodo}>
        제출하기
      </button>
    </styles.Form>
  );
};

export default Form;
