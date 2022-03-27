import styles from "./Board.module.css";

import { useEffect, useState } from "react";
import { levels, lvlIDs } from "../engine";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

import Cell from "./Cell.jsx";

const printObj = obj => {
  let arr = [];
  for (let key in obj) {
    arr.push(`${key}`);
  }

  return arr;
};

const Board = () => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [level, setLevel] = useState(levels[levelIndex]);
  const [levelName, setLevelName] = useState();
  const landConqueredPercentage = 70;

  const switchUpHandler = () => {
    if (levelIndex !== 2) {
      setLevelIndex(levelIndex + 1);
      setLevel(levels[levelIndex + 1]);
    } else if (levelIndex === 2) {
      setLevelIndex(0);
      setLevel(levels[0]);
    }
  };

  const switchDownHandler = () => {
    if (levelIndex !== 0) {
      setLevelIndex(levelIndex - 1);
      setLevel(levels[levelIndex - 1]);
    } else if (levelIndex === 0) {
      setLevelIndex(2);
      setLevel(levels[2]);
    }
  };

  console.log("#################################");
  console.log("### START OF FRANCESCO'S CODE ###");
  console.log("### DO NOT TOUCH ################");
  console.log("#################################");

  const currentLevelName = printObj(lvlIDs)[levelIndex];

  useEffect(() => {
    setLevelName(currentLevelName);
  }, [currentLevelName]);

  console.log(currentLevelName, "currentLevelName");
  console.log(level, `Grid for ${currentLevelName} level`);

  return (
    <section className={styles["board-container"]}>
      <div className={styles["board-wrapper"]}>
        <div className={styles["board-container__level-selector"]}>
          <FaArrowUp
            className={styles.arrow}
            onClick={switchUpHandler}
            color="#ebebeb"
            size="4rem"
          />
          <FaArrowDown
            className={styles.arrow}
            onClick={switchDownHandler}
            color="#ebebeb"
            size="4rem"
          />
        </div>
        <div className="middle-column">
          <h1 className={styles.title}>Attack by {currentLevelName} </h1>
          <div className={`${styles.board} ${styles[`${levelName}`]}`}>
            <>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
              <Cell>Hi</Cell>
            </>
          </div>
          <p style={{ color: "white", fontSize: "19px" }}>Land conquered</p>
          <ProgressBar
            completed={landConqueredPercentage}
            maxCompleted={100}
            bgColor="#0967a5"
            height="20px"
          />
          ;
        </div>
      </div>
    </section>
  );
};

export default Board;
