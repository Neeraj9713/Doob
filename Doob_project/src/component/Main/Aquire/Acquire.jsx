import React from "react";
import panelImage from "../../../../public/upload/tabs-02.jpg";
import CardAquire from "./CardAquire";
import {useGetMainDataQuery } from "../../../store/features/apiMain";

function Acquire() {

  const {data: objData} = useGetMainDataQuery();

  const {AquireTopHighLight ,AquireHeading, AquireDescription} = objData || {};
  return (
  <>
    { objData ? (
    <div className="service-main border border-border-color bg-black h-full py-8 px-2">
      <div className="max-w-6xl mx-auto  py-[5%]">
        <div className="grid justify-items-center place-items-center gap-6">
          <div className="bg-[#0f0f11] px-4 rounded-lg">
            <p className="text-lg font-semibold gradient-text">
              {AquireTopHighLight}
            </p>
          </div>
          <div data-aos="fade-up" className="text-3xl md:text-4xl font-bold">
            <h1 className="text-center">{AquireHeading}</h1>
          </div>
          <div className=" text-lg">
            <p className="text-center text-xl ">
            {AquireDescription}
            </p>
          </div>
          <div className="main-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 my-5 gap-9 place-content-center justify-center">
            <div className="3card grid gap-2 grid-cols-1 order-2 w-full h-full lg:order-1">
            <CardAquire />
            </div>
            <div className="second image col-span-2 w-full h-full order-1 lg:order-2  ">
              <img className="rounded-lg lg:w-[38rem]" src={panelImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    ):(
      <div>No Data</div>
    )
    }
    </>
  );
}

export default Acquire;
