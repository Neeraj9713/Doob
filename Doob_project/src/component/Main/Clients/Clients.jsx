import React from "react";
import img1 from "../../../../public/brand-01.png";
import img2 from "../../../../public/brand-02.png";
import { useGetMainDataQuery } from "../../../store/features/apiMain";

function Clients() {
  const { data: objData } = useGetMainDataQuery();
  const { AwesomeTop ,AwesomeTitle } = objData || {};
  return (
    <>
      {objData && (
        <div className="main pb-[8rem] px-2">
          <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center gap-4">
            <div className="head bg-[#0F0F11] px-4 py-1 rounded-md">
              <p className="gradient-text font-bold tracking-wide ">
                {AwesomeTop}
              </p>
            </div>
            <div className="title">
              <h2 className="text-3xl font-bold md:text-5xl text-white">
                {AwesomeTitle}
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-4">
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
              <img src={img1} alt="" />
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Clients;
