import * as styles from "./Modal.styles";

const Modal = ({ children }) => {
  // 재활용 할 수 있도록 props를 효과적으로 받는 방법..? 그냥 props로 받아야 하나? ㅠㅠ
  return <styles.Modal>{children}</styles.Modal>;
};

export default Modal;
