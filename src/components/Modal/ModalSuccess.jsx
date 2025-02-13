import Modal from "react-modal";
//import css from "./Modal.module.css";
// import Iconsvg from '../components/Icon/Icon';

Modal.setAppElement("#root");
const customStyles = {
  overlay: {
    backgroundColor: "rgba(20, 20, 20, 0.6)", // Пример изменения цвета фона оверлея
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // Пример изменения рамки модального окна
    background: "#1f1f1f",
    border: "1px solid rgba(104, 104, 104, 0.2)",
    borderRadius: "12px",
    // overflow: "auto",
    //margin: "40px 229px",
    // WebkitOverflowScrolling: "touch",
    //borderRadius: "20px",
    // outline: "none",
    width: "500px", // Задаем ширину 80% от экрана
    // height: "483px",
    padding: "0",

    overflow: "none",
    //padding: "0", // Отступы внутри модального окна
  },
};
const ModalSuccess = ({ children, isOpen, closeModal }) => {
  return (
    <Modal
      //   className={css.modal}
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      {children}
    </Modal>
  );
};
export default ModalSuccess;
