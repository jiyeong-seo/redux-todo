import styled from "styled-components";

export const TodoListDetail = styled.div`
  background-image: url(${({ bgimg }) => (bgimg ? bgimg : "")});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;
