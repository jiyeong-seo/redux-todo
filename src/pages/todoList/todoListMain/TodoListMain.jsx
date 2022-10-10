import * as styles from "./TodoList.styles";
import { Form, List } from "../../../components";
import { Layout, Header } from "../../../common";

const TodoListMain = () => {
  return (
    <styles.TodoListMain>
      <Layout>
        <Header>
          <h1>Todo List</h1>
        </Header>
        <Form />
        <List />
      </Layout>
    </styles.TodoListMain>
  );
};

export default TodoListMain;
