import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useGetMainDataQuery } from "../../../store/features/apiMain";

function PurchaseDoob() {
  const {data: objData} = useGetMainDataQuery();
  const {ReadyTitile,ReadyChoice} = objData||{};
  return (
    <>{objData && (
    <div className="main py-[6rem] px-2 border border-border-color bg-black h-full ">
      <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center gap-7">
        <div className="title">
          <h2 className="text-3xl font-bold md:text-5xl text-white">
            {ReadyTitile}
          </h2>
        </div>
        <div className="head ">
          <p className="text-[#ACACAC] text-lg font-medium md:text-xl tracking-wider ">
            {ReadyChoice}
          </p>
        </div>
        <div className="">
          <button className="purchase text-xl gap-3 flex justify-center items-center  w-full   px-9 py-3 rounded-lg bg-gradient-to-r from-[#9521f3] via-[#ff08de] to-[#ee4444] text-gradient text-white font-semibold ">
            Purchase Doob         
            <GoArrowRight  style={{fontSize:"1.5rem"}}/>
            </button>
        </div>
      </div>
    </div>
    )}</>
  );
}

export default PurchaseDoob;
