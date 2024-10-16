import React, { useEffect, useState } from "react";
import right from "../../../../public/logo/bg-image-hero-1.png";
import { FaArrowRight } from "react-icons/fa6";
import Typewriter from "typewriter-effect";

//RTK Query
import { useGetMainDataQuery } from "../../../store/features/apiMain";

function Hero() {
  const { data: objdata, isLoading, error } = useGetMainDataQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  const {BannerText,BannerKeyWords=[], BannerDescription} = objdata || {};

  return (
    <>
      {objdata ? (
        <div
          className="hero-1  border border-border-color"
        >
          <div className="my-20 flex justify-center items-center max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center place-items-center px-2 ">
              <div className="left col-span-2 order-2 md:order-1">
                <h1 className="text-5xl font-semibold leading-tight gradient-text md:text-7xl md:font-bold">
                  {BannerText}
                  <br />
                  
                  <span className="bg-none">
                    <Typewriter
                      options={{
                        strings: BannerKeyWords,
                        autoStart: true,
                        loop: true,
                        cursor: "|",
                      }}
                    />
                  </span>
                </h1>
                <div className="py-8">
                  <p className="text-xl">
                    {BannerDescription}
                  </p>
                </div>
                <div className="Contact flex flex-col gap-5 font-bold">
                  <div className="border-2 border-border-color w-60 px-5 py-4 rounded-full flex justify-center items-center gap-2">
                    <h4>New Customer</h4>
                    <FaArrowRight />
                  </div>
                  <div className="border-2 border-border-color w-48 px-5 py-4 rounded-full flex justify-center items-center gap-2">
                    <h4>Contact Us</h4>
                    <FaArrowRight />
                  </div>
                </div>
              </div>
              <div className="right w-full h-full order-1 mb-10">
                <img
                  className="w-auto h-full md:h-1/2 md:w-80 lg:w-auto lg:h-2/3"
                  src={right}
                  alt="Hero Background"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </>
  );
}

export default Hero;
