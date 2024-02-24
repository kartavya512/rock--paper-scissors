import React, { useState, useEffect } from "react";
import Image from "next/image";
import scisscors from "../images/icon-scissors.svg";
import papers from "../images/icon-paper.svg";
import rocks from "../images/icon-rock.svg";
import { motion, AnimatePresence } from "framer-motion";
import Pick from "./Pick";

const Game = ({setScore,score,select,setSelect}) => {
  
  const [rock, setRock] = useState(false);
  const [paper, setPaper] = useState(false);
  const [scissor, setScissor] = useState(false);
  const [computerSelection, setComputerSelection] = useState(null);
  const [color, setColor] = useState(null);
  const [result, setResult] = useState(false);

  useEffect(() => {
    if (select === 1) {
      setRock(false);
      setPaper(true);
      setScissor(false);
    } else if (select === 2) {
      setRock(false);
      setPaper(false);
      setScissor(true);
    } else if (select === 3) {
      setRock(true);
      setPaper(false);
      setScissor(false);
    }
  }, [select]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
        const currentTime = new Date().getTime();
        const randomSeed = Math.random() * currentTime;
        const randomSelection = Math.floor(randomSeed) % 3 + 1;
      setComputerSelection(randomSelection);

      // Set color based on computerSelection
      let color;
      if (randomSelection === 1) {
        color = "blue-700";
      } else if (randomSelection === 2) {
        color = "yellow-500";
      } else if (randomSelection === 3) {
        color = "red-600";
      }

      setColor(color);
      setTimeout(() => {
        if (select === randomSelection) {
          setResult("draw");
        
        } else if (
          (select === 1 && randomSelection === 3) ||
          (select === 2 && randomSelection === 1) ||
          (select === 3 && randomSelection === 2)
        ) {
          setResult(" you win");
          setScore(score+10)
        } else {
          setResult("you lose");
          setScore(score-10)
        }
      }, 1000);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  if(select==0){
    return <Pick></Pick>
  }




  const renderImage = (option) => {
    switch (option) {
      case 1:
        return <Image src={papers} alt="Paper" />;
      case 2:
        return <Image src={scisscors} alt="Scissors" />;
      case 3:
        return <Image src={rocks} alt="Rock" />;
      default:
        return null;
    }
  };

  return (
    <div className="pt-5">
      <div className="flex flex-row justify-evenly text-white">
        <div className="flex flex-col items-center">
          <div className="font-bold text-xl">YOU PICKED</div>
          <div className="pt-10">
            {paper ? (
              <div className='rolling-box bg-white w-40 items-center justify-center flex rounded-full h-40 border-[11px] border-blue-700'>
                <Image src={papers} alt="paper"></Image>
              </div>
            ) : null}
            <div>
              {rock ? (
                <div className="bg-white w-40  items-center justify-center flex   rounded-full h-40 border-[11px] border-red-600 ">
                  <Image className="" src={rocks}></Image>{" "}
                </div>
              ) : null}
            </div>
            <div>
              {scissor ? (
                <div className="bg-white w-40  items-center justify-center flex  rounded-full h-40 border-[11px] border-yellow-500 ">
                  <Image className="" src={scisscors}></Image>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="text-white p-5 pt-20 text-2xl font-bold pl-40 pr-40 flex flex-col justify-between items-center"><div className="text-4xl font-bold capitalize">{result}</div>
        <div className="pt-2">{result?<button className="w-60 bg-white text-blue-900 font-semibold hover:text-red-600 p-2 rounded-lg " onClick={()=>{setSelect(0)}}>Play Again</button>:<div></div>}</div></div>

        <div className="flex flex-col items-between justify-between pl-[]">
          <div className="font-bold text-xl">THE HOUSE PICKED</div>

          <div>
            <AnimatePresence>
              {computerSelection && (
                <motion.div
                  key={computerSelection}
                  className={`rolling-box bg-white w-40 items-center justify-center flex rounded-full h-40 border-[11px] border-${color}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                >
                  {renderImage(computerSelection)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
