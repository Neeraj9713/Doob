import React from "react";
import { MdStarRate } from "react-icons/md";
import PlanTextData from "./PlanTextData";
import { useGetMainDataQuery } from "../../../store/features/apiMain";

function PlanPage() {
  const { data: objData } = useGetMainDataQuery();

  const { AdvanceTopHighlight,AdvanceTitle, AdvanceDescription } = objData || {};
  return (
    <>
      {objData && (
        <div className="main py-[8rem] px-2">
          <div className="max-w-6xl mx-auto text-center flex flex-col justify-center items-center gap-4">
            <div className="head bg-[#0F0F11] px-4 py-1 rounded-md">
              <p className="gradient-text font-bold ">{AdvanceTopHighlight}</p>
            </div>
            <div className="title">
              <h2 className="text-3xl font-bold md:text-4xl">
                {AdvanceTitle}
              </h2>
            </div>
            <div className="para ">
              <p className="text-[#ACACAC] text-lg md:text-xl">
                {AdvanceDescription}
              </p>
            </div>
            <div className="grid grid-cols-1 mt-8 md:mx-10 lg:grid-cols-2 md:w-[40rem]">
              <div className="part1  bg-[#1E1E1E] px-10 py-9 rounded-l-lg text-left grid gap-7 ">
                <div className="head ">
                  <h1 className="text-3xl md:text-4xl font-bold text-white leading-[3rem]">
                    Active Plan Mode.
                  </h1>
                </div>
                <div className="para">
                  <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nemo, quisquam.
                  </p>
                </div>
                <div className="amount flex gap-3 justify-center items-center ">
                  <h1 className="text-white text-6xl font-bold">$129</h1>
                  <sup className="text-white text-xl">/mo</sup>
                </div>
                <div className="button-purchase flex flex-col justify-center items-center gap-4">
                  <button className="purchase  w-full  px-9 py-3 rounded-xl bg-gradient-to-r from-[#9521f3] via-[#ff08de] to-[#ee4444] text-gradient text-white font-semibold ">
                    Purchase Now
                  </button>
                  <button className="Upgrade border border-border-color w-full px-9 py-3 rounded-xl  text-white font-semibold ">
                    Upgrade
                  </button>
                </div>
                <div className="rating flex justify-center items-center text-yellow-500 text-xl">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                </div>
                <div className="reviews text-lg">
                  <p>rated 4.5/5 Stars in 1000+ reviews.</p>
                </div>
              </div>
              <div className="part2 grid gap-2 text-left bg-[#060606] px-10 py-8 rounded-l-lg rounded-b-lg md:rounded-r-lg">
                <div className="space ">
                  <div className="heading  font-bold text-xl ">
                    <h1 className="text-white">Advance Plans You can Get.</h1>
                  </div>
                  <div className="text-xl mt-3 flex flex-col gap-4 ">
                    <PlanTextData data="5 PPC Campaigns" />
                    <PlanTextData data="Digital Marketing" />
                    <PlanTextData data=" Marketing Agency" />
                    <PlanTextData data="Seo Friendly" />
                  </div>
                </div>
                <div className="space2 mt-6">
                  <div className="heading font-bold text-xl ">
                    <h1 className="text-white">Basic Plans Uou can Get.</h1>
                  </div>
                  <div className="text-xl mt-3 flex flex-col gap-4">
                    <PlanTextData data="5 PPC Campaigns" />
                    <PlanTextData data="Digital Marketing" />
                    <PlanTextData data=" Marketing Agency" />
                    <PlanTextData data="Seo Friendly" />
                    <PlanTextData data="App Development" />
                    <PlanTextData data="Social Development" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default PlanPage;
