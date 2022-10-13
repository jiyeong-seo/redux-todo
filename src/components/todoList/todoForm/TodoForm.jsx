import { Form, Box, Flex, Input, Button } from "../../../common";
import { useTodo } from "../hooks";

const TodoForm = () => {
  const {
    todo,
    descInput,
    handleGetTodoValue,
    handleAddTodo,
    handleEnterPress,
  } = useTodo();

  // todo(state) 구조 분해 할당
  const { title, desc } = todo;

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
            aria-label="submit button"
          ></Button>
        </Flex>
      </Box>
    </Form>
  );
};

export default TodoForm;
