import styles from "./Board.module.css";

import { useEffect, useState } from "react";
import { playerTwoLevels, lvlIDs, checkPlayerTwoGrid } from "../engine";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";

import Cell from "./Cell.jsx";

import { startGameOnePlayer } from "../engine";

const printObj = obj => {
  let arr = [];
  for (let key in obj) {
    arr.push(`${key}`);
  }

  return arr;
};

const Board = props => {
  const [levelIndex, setLevelIndex] = useState(0);
  const [level, setLevel] = useState(playerTwoLevels[levelIndex]);
  const [levelName, setLevelName] = useState();

  const switchUpHandler = () => {
    if (levelIndex !== 2) {
      setLevelIndex(levelIndex + 1);
      setLevel(playerTwoLevels[levelIndex + 1]);
    } else if (levelIndex === 2) {
      setLevelIndex(0);
      setLevel(playerTwoLevels[0]);
    }

    return levelIndex;
  };

  const switchDownHandler = () => {
    if (levelIndex !== 0) {
      setLevelIndex(levelIndex - 1);
      setLevel(playerTwoLevels[levelIndex - 1]);
    } else if (levelIndex === 0) {
      setLevelIndex(2);
      setLevel(playerTwoLevels[2]);
    }

    return levelIndex;
  };

  console.log("#################################");
  console.log("### START OF FRANCESCO'S CODE ###");
  console.log("### DO NOT TOUCH ################");
  console.log("#################################");

  const currentLevelName = printObj(lvlIDs)[levelIndex];

  useEffect(() => {
    setLevelName(currentLevelName);
  }, [currentLevelName]);

  // Whenever the levelIndex changes, the grid is updated

  useEffect(() => {
    setLevel(playerTwoLevels[levelIndex]);
  }, [levelIndex]);

  console.log(currentLevelName, "currentLevelName");
  console.log(level, `Grid for ${currentLevelName} level`);
  console.log(playerTwoLevels, "levels");
  <div class="Cell_cell__r49dY " style="border: 1px solid grey;"></div>;
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
            {playerTwoLevels[levelIndex].map((row, rowIndex) => {
              return (
                <div className={styles.row} key={rowIndex}>
                  {row.map((col, colIndex) => {
                    // const percentage = cell.percentage;

                    return (
                      <Cell
                        styles={{ border: "1px solid grey" }}
                        key={colIndex}
                        rowIndex={rowIndex}
                        colIndex={colIndex}
                        levelIndex={levelIndex}
                      ></Cell>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <p style={{ color: "white", fontSize: "19px" }}>Land conquered</p>
          <ProgressBar
            // Mark completed as the percentage of the progress bar
            completed={20}
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
