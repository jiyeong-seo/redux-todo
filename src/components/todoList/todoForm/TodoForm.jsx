import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../redux/modules/todos";
import { Form, Box, Flex, Input, Button } from "../../../common";

// 새로고침 했을 경우 전 페이지로 돌려주며 알림창을 띄워주는 등 예외처리 => 어디에서 해줘야 하지?

// 함수들을 전부 밖으로 뺀다면 어디에 빼줘야 하지?

const TodoForm = () => {
  // useEffect를 호출하면 왜 콘솔이 안찍히지?

  // Redux
  const dispatch = useDispatch();

  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    id: null,
    isDone: false,
  });

  // todo(state) 구조 분해 할당
  const { title, desc } = todo;

  // Description input을 가리키는 ref 객체
  const descInput = useRef(null);

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

  // Enter키를 눌렀을 경우 투두 생성 핸들러
  const handleEnterPress = () => {
    if (window.event.keyCode === 13) {
      handleAddTodo();
      descInput.current.focus();
    }
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

  return (
    <Form>
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
            ref={descInput}
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
            onKeyUp={handleEnterPress}
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
    </Form>
  );
};

export default TodoForm;
