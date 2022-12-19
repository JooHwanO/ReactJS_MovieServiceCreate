import PropTypes, { string } from "prop-types";
import styles from "./css/Button.module.css";
function Button({ text }) {
  return (
    <button
      //   style={{
      //     backgroundColor: "tomato",
      //      color: "white",
      //   }}
      className={styles.btn}
    >
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
