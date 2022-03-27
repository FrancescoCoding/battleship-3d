import styles from "./Cell.module.css";
import { useState, useEffect } from "react";
import { FaShip } from "react-icons/fa";

import {
  startGameOnePlayer,
  playerOneLevels,
  playerTwoLevels,
} from "../engine";

let value = "";

console.log(playerOneLevels, "playerOneLevels");

const Cell = props => {
  const [hasHit, setHasHit] = useState(false);
  const [percentage, setPercentage] = useState(0);

  const row = props.rowIndex;
  const col = props.colIndex;
  const clickHandler = () => {
    setHasHit(startGameOnePlayer(`${props.levelIndex}${col}${row}`).hit);
    setPercentage(
      startGameOnePlayer(`${props.levelIndex}${col}${row}`).percentage
    );
  };

  return (
    <div
      onClick={clickHandler}
      style={props.styles}
      className={`${styles.cell} ${hasHit ? styles.hit : ""}`}
    >
      {hasHit && props.levelIndex === 0 ? (
        <FaShip className={styles.ship} />
      ) : null}
    </div>
  );
};

export default Cell;
