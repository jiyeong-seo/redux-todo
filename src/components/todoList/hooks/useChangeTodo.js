import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTodo, doneTodo } from "../../../redux/modules/todos";

export const useChangeTodo = (todoId) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDeleteTodo = () => {
    dispatch(deleteTodo(todoId));
  };

  const handelIsDoneCheckTodo = () => {
    dispatch(doneTodo(todoId));
  };

  return { dispatch, navigate, handleDeleteTodo, handelIsDoneCheckTodo };
};
