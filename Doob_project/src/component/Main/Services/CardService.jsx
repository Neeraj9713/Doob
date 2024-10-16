import React from "react";

function CardService({item}) {
  
  return (
    <div className="Service1 px-2 ">
      <div className="relative max-w-44 p-2 flex flex-col justify-center items-center gap-5 ">
        <div className={`h-44 w-44 relative right-2 text-6xl rounded-full  flex flex-col items-center justify-center`
        }  style={{backgroundColor: item.color}}
        >
          <div className={`hidden lg:block lg:absolute  h-[1px] left-full ${item.textColor} ${item.num > 3 ? "w-0": "w-full" } border border-border-color  `}></div>
          {item.num}
        </div>
        <div className="content text-center mt-3 w-60">
          <div className="title text-2xl font-bold mb-3 text-center ">{item.title}</div>
          <div className="discription">
            {item.description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardService;
