import { useSelector } from "react-redux";
import { Todo } from "../../todoList";
import { Heading, Box } from "../../../common";

const List = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <>
      <Box dp="grid" gtc="1fr 1fr">
        <Heading fs="27" ta="center" mg="10px 0" color="#2cabd2" ls="0.1">
          WORKING
        </Heading>
        <Heading fs="27" ta="center" mg="10px 0" color="#ed7878" ls="0.1">
          DONE
        </Heading>
      </Box>
      <Box dp="grid" gtc="1fr 1fr" overflow="scroll" height="56vh">
        <Box>
          {todos
            .filter((todo) => !todo.isDone)
            .map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
        </Box>
        <Box>
          {todos
            .filter((todo) => todo.isDone)
            .map((todo) => (
              <Todo todo={todo} key={todo.id} />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default List;
