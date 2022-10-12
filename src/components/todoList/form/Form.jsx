import * as styles from "./Form.styles";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos";
import { Box, Flex, Input, Button } from "../../../common";

// 새로고침 했을 경우 전 페이지로 돌려주며 알림창을 띄워주는 등 예외처리

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
      <Box>
        <Flex jc="center" ai="center">
          <Input
            id="title"
            type="text"
            placeholder="Write the title of Todo!"
            maxLength="12"
            width="43%"
            height="50"
            bg="#e8ebed;"
            bd="none"
            br="10"
            pd="0 20px 0 20"
            mg="10"
            onChange={handleGetTodoValue}
            name="title"
            value={title}
          />
          <Input
            id="desc"
            type="text"
            placeholder="Today's To-do"
            maxLength="45"
            width="43%"
            height="50"
            bg="#e8ebed;"
            bd="none"
            br="10"
            pd="0 20px 0 20"
            mg="15"
            onChange={handleGetTodoValue}
            name="desc"
            value={desc}
          />
          <Button
            type="button"
            onClick={handleAddTodo}
            bgimg="https://cdn-icons-png.flaticon.com/512/1828/1828817.png"
            color="#747272"
            width="40"
            height="40"
            bd="none"
            br="50%"
            pd="10px 18"
          ></Button>
        </Flex>
      </Box>
    </styles.Form>
  );
};

export default Form;
