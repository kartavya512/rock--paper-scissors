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
    <div className="items-center lg:pt-28 pt-32">
      <div className="ml-12 lg:ml-0 absolute -z-2 lg:w-full w-[75%] ">
        <Image src={triangle} />
      </div>
      <div
        onClick={() => setSelect(1)}
        className=" bg-white z-10 relative lg:w-40 w-32 h-32 items-center justify-center flex  rounded-full lg:h-40 border-[11px] border-blue-700  lg:-mt-20 -mt-16 lg:-ml-[4rem] "
      >
        <Image className="" src={paper}></Image>
      </div>

      <div
        onClick={() => setSelect(2)}
        className="bg-white lg:w-40 w-32 h-32 z-10 relative items-center justify-center flex  rounded-full lg:h-40 border-[11px] border-yellow-500 lg:-mt-[10rem] -mt-[8rem] ml-[14rem] "
      >
        <Image className="" src={scisscors}></Image>
      </div>

      <div
        onClick={() => setSelect(3)}
        className="bg-white lg:w-40 w-32 h-32 relative z-10 items-center justify-center flex   rounded-full lg:h-40 border-[11px] border-red-600  mt-20 lg:ml-20 ml-28"
      >
        <Image className="" src={rock}></Image>
      </div>
    </div>
  );
};

export default Pick;
