import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos";

export const useTodo = () => {
  const dispatch = useDispatch();
  // Description input을 가리키는 ref 객체
  const descInput = useRef(null);

  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    id: null,
    isDone: false,
  });

  // 투두(state) 데이터 변경 핸들러
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

  // 투두 생성 핸들러
  const handleAddTodo = () => {
    if (todo.title && todo.desc) {
      dispatch(addTodo(todo));
      setTodo((prevState) => {
        return { ...prevState, title: "", desc: "" };
      });
    }
  };

  // Enter키를 눌렀을 경우 투두 생성 핸들러
  const handleEnterPress = () => {
    if (window.event.keyCode === 13) {
      handleAddTodo();
      descInput.current.focus();
    }
  };

  return {
    todo,
    descInput,
    handleGetTodoValue,
    handleAddTodo,
    handleEnterPress,
  };
};
