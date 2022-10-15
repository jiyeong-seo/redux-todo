import styled from "styled-components";

export const TodoListMain = styled.section`
  background-image: url(${({ bgimg }) => (bgimg ? bgimg : "")});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 1px solid gray;
`;
