import * as styles from "./TodoListDetail.styles";
import { Layout, Flex, Box, Button, Heading, P } from "../../../common";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TodoListDetail = () => {
  useEffect(() => {
    console.log("디테일 페이지 렌더링");
  });
  const todos = useSelector((state) => state.todos);
  const navigate = useNavigate();
  // todoid 이런식으로 이름 지을 때 카멜케이스가 가능한가?
  const { todoid } = useParams();
  const { title, desc, id, isDone } = todos.find((item) => item.id === +todoid);

  // id변수가 이상하면 상품 없다는 UI보여주기
  return (
    <styles.TodoListDetail bgimg={process.env.PUBLIC_URL + "/images/sky.png"}>
      <Layout>
        <Flex fd="column" jc="center" ai="center" height="100vh">
          <Box
            height="450px"
            width="450px"
            bg="#fafafa"
            br="20"
            overflow="hidden"
            bs="1px 10px 7px 7px rgba(113, 113, 113, 0.3)"
            pd="40"
            tf="translateY(-1%)"
          >
            <P fs="14" color="#5d5d5d" ls="0.1">
              id:{id}
            </P>
            <Heading
              fs="28"
              ta="center"
              mg="10px 0"
              color={isDone ? "#ed7878" : "#2cabd2"}
              ls="0.1"
              pd="0 0 25px 0"
              bdb="1px solid #d5d5d5"
            >
              {title}
            </Heading>
            <Flex height="200px" jc="center" ai="center">
              <P fs="21" color="#5d5d5d" ls="0.1" lh="1.2">
                {desc}
              </P>
            </Flex>
            <Flex jc="center" ai="center">
              <Button
                onClick={() => navigate("/")}
                bgimg="/images/before.png"
                width="35"
                height="35"
                bd="none"
                pd="10px 18"
                bc="transParent"
                mg="40px 0 0 0"
              ></Button>
            </Flex>
          </Box>
        </Flex>
      </Layout>
    </styles.TodoListDetail>
  );
};

export default TodoListDetail;
