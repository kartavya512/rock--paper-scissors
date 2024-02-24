"use client";
import React, { useState } from "react";
import triangle from "../images/bg-triangle.svg";
import Image from "next/image";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scisscors from "../images/icon-scissors.svg";

import Game from "../components/game";

const Pick = ({setScore,score}) => {
  const [select, setSelect] = useState(0);
 
  if (select) {
    return <Game select={select} setSelect={setSelect} setScore={setScore} score={score}/>
  }

  return (
    <div className="items-center pt-28">
      <div className="absolute -z-2 ">
        <Image src={triangle} />
      </div>
      <div
        onClick={() => setSelect(1)}
        className=" bg-white z-10 relative w-40 items-center justify-center flex  rounded-full h-40 border-[11px] border-blue-700  -mt-20 -ml-[4rem]"
      >
        <Image className="" src={paper}></Image>
      </div>

      <div
        onClick={() => setSelect(2)}
        className="bg-white w-40 z-10 relative items-center justify-center flex  rounded-full h-40 border-[11px] border-yellow-500 -mt-[10rem] ml-[14rem]"
      >
        <Image className="" src={scisscors}></Image>
      </div>

      <div
        onClick={() => setSelect(3)}
        className="bg-white w-40 relative z-10 items-center justify-center flex   rounded-full h-40 border-[11px] border-red-600  mt-20 ml-20"
      >
        <Image className="" src={rock}></Image>
      </div>
    </div>
  );
};

export default Pick;
