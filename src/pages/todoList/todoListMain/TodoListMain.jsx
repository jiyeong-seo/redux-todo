import * as styles from "./TodoList.styles";
import { useEffect } from "react";
import { TodoForm, List } from "../../../components";
import { Layout, Header, Flex, Box, Heading } from "../../../common";
import { Typing, Blink } from "../../../common/animation";

const TodoListMain = () => {
  useEffect(() => {
    console.log("useEffect!!");
  });

  return (
    <styles.TodoListMain>
      <Layout>
        <Flex fd="column" jc="center" ai="center" height="100vh">
          <Header>
            <Flex jc="center" ai="center">
              <Heading
                width="220"
                fs="55"
                color="#ffffff"
                ls="0.4"
                mg="0 0 25px 0"
                bdr="3px solid"
                ovf="hidden"
                Typing={Typing}
                Blink={Blink}
              >
                TODO
              </Heading>
            </Flex>
          </Header>
          <Box
            height="70vh"
            width="710px"
            bg="#fafafa"
            br="20"
            overflow="hidden"
            pd="30px 30"
            bs="1px 10px 7px 7px rgba(113, 113, 113, 0.3)"
            tf="translateY(-0.5%)"
          >
            <TodoForm />
            <List />
          </Box>
        </Flex>
      </Layout>
    </styles.TodoListMain>
  );
};

export default TodoListMain;
