import styles from "./Cell.module.css";

const Cell = props => {
  return <div className={styles.cell}>{props.children}</div>;
};

export default Cell;
