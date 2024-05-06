import React, { useState } from "react";
import { buttonsName } from "./Helper";

const Calculator = () => {
  const [calData, setCalData] = useState("");

  const handleButtonClick = (e) => {
    if (e.target.textContent === "=") {
      // eslint-disable-next-line no-eval
      try {
        console.log(eval(calData));
      } catch (error) {
        console.log(error);
      }
    } else if (e.target.textContent === "c") {
      // eslint-disable-next-line no-eval
      setCalData("");
    } else if (e.target.textContent === "x") {
      // eslint-disable-next-line no-eval
      setCalData(calData.slice(0, -1));
    } else {
      let newVal = calData + e.target.textContent;
      //   console.log(newVal);
      setCalData(String(newVal));
    }
  };
  console.log(calData, "Cal");

  return (
    <div className="w-[400px] mx-auto border-2 bg-[#4789ec] p-2 shadow-2xl">
      <input
        type="text"
        value={calData || 0}
        className="border text-end border-black w-full h-10 outline-none p-2"
      />
      <div className="flex justify-between flex-wrap gap-2 py-5">
        {buttonsName.map((item, index) => (
          <button
            onClick={handleButtonClick}
            key={index}
            className="px-6 py-4 border text-2xl font-medium border-1 shadow-xl bg-white w-20 h-16"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
