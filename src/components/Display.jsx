import React, { useEffect, useState } from "react";
import { buttonsName } from "./Helper";

const Display = () => {
  const [calData, setCalData] = useState("");
  useEffect(() => {
    setCalData(buttonsName);
  }, []);

  const handleButtonClick = (e) => {
    e.preventDefault();
    console.log(e);
    let data = e.targer;
    console.log(data, "targer");
  };

  return (
    <div>
      <div className="flex fap-2 w-[300px]">
        <input type="text" className="border border-black w-full" />
        {buttonsName.map((item, index) => (
          <button
            onClick={handleButtonClick}
            key={index}
            className="px-4 py-2 border border-1 shadow"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Display