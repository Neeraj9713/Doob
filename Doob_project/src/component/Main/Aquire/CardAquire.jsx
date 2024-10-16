import React, { useState } from "react";
import { useGetAcquireDataQuery } from "../../../store/features/apiMain";

function CardAquire() {
  const [select, setSelect] = useState(0);
  const {data:acquireData} = useGetAcquireDataQuery();


  return (
    <>
      {acquireData && acquireData.map((Elem, index) => {
        return (
          <div key={index} className="flex justify-center items-center w-[19rem]  sm:w-[44rem] lg:w-auto lg:ml-10 h-full">
            <div 
              className={`firstcard  ${
                select === index ? "bg-[#0F0F11]" : ""
              }  p-5 rounded-lg py-8 lg:py-11  `}
              onClick={() => setSelect(index)}
            >
              <h4 className="head font-bold text-lg mb-2">{Elem.title}</h4>
              <p className="description leading-6">{Elem.description}</p>
            </div>
            <div className={`hidden lg:block w-0 h-0 border-[13px] border-solid border-transparent 
                ${select === index ? "border-l-[#0F0F11]": ""}
                `}></div>
          </div>
        );
      })}
    </>
  );
}

export default CardAquire;
