"use client"
import Image from "next/image";
//import Rules from "./components/Rules";

import Score from "./components/Score";
import Pick from "./components/Pick";
import rule from "./images/image-rules.svg"
import close from "./images/icon-close.svg"
import { useState } from "react";


export default function Home() {
  const [rules, setRules] = useState(false)
  const [score, setScore] = useState(0)
  if (score < 0) {
    setScore(0)
  }
  return (
    <div className="bg-gradient-to-br from-blue-700 to-blue-900 h-screen">

      <div className="flex flex-col   items-center">

        <Score score={score}></Score>
        <div className="absolute z-10 lg:pt-40">
          {rules ?
            <div className=" bg-white p-2 rounded-lg">
              <div className="flex justify-between p-5">
                <div className="text-gay-200">Rules</div>
                <Image onClick={() => { setRules(false) }} src={close}></Image></div>
              <div className="flex justify-center p-5">
                <Image src={rule}></Image></div>

            </div> : ''}</div>
        <div className="absolute z-0 pt-52 lg:pt-60"><Pick setScore={setScore} score={score}></Pick></div>
      </div>
      <div className="flex justify-between lg:pl-0 pl-5 lg:pr-0 pr-5" >
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end  lg:pl-36 lg:pt-[28%] pt-[140%]">
          <button onClick={() => { setScore(0) }} className=" w-20 lg:p-1 p-2 rounded-lg border border-white text-white">Reset</button>
        </div>


        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end  lg:pr-40 lg:pt-[28%] pt-[140%]">
          <button onClick={() => { setRules(true) }} className=" w-20 lg:p-1 p-2 rounded-lg border border-white text-white">Rules</button>
        </div>


      </div>


    </div>
  );
}
