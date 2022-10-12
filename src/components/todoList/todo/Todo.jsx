import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, doneTodo } from "../../../redux/modules/todos";
import { useNavigate } from "react-router-dom";
import { Heading, Box, Button, Flex, P } from "../../../common";

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
    <Box
      height="215px"
      width="295px"
      bg={todo.isDone ? "#ffefef" : "#e8f9ff"}
      mg="15px 15px 25px 15"
      br="10"
      overflow="hidden"
      bs="1px 3px 10px 2px rgba(213, 213, 213, 0.3)"
    >
      <Flex fd="column" jc="center" ai="center" height="100%">
        {/* Link사용이 더 좋을까? */}
        {/* *로 404 페이지 만들기 */}
        <Heading color="#444444" fs="22" ta="center" pd="10" mg="0 0 6px 0">
          {todo.title}
        </Heading>
        <Flex height="60px" ai="center" jc="center">
          <P fs="18" color="#555555" width="230" ls="0.05" lh="1.1" ta="center">
            {todo.desc}
          </P>
        </Flex>
        <Box mg="6px 0 0 0" width="30">
          <Button
            onClick={handleDeleteTodo}
            bgimg="/images/delete.png"
            width="30"
            height="30"
            bd="none"
            pd="10px 18"
            bc="transParent"
            mg="10"
          ></Button>
          <Button
            onClick={handelIsDoneCheckTodo}
            bgimg={todo.isDone ? "/images/cancel.png" : "/images/finish.png"}
            width="30"
            height="30"
            bd="none"
            pd="10px 18"
            bc="transParent"
            mg="10"
          ></Button>
          <Button
            bgimg="/images/detail.png"
            width="30"
            height="30"
            bd="none"
            pd="10px 18"
            bc="transParent"
            mg="10"
            onClick={() => navigate(`/detail/${todo.id}`)}
          ></Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Todo;
