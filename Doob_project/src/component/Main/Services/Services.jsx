import React from "react";
import CardService from "./CardService";
import { useGetMainDataQuery, useGetServiceDataQuery } from "../../../store/features/apiMain";

function Services() {

  const {data: objData} = useGetMainDataQuery();
  const {data: serviceData} = useGetServiceDataQuery();

  const {ServiceTopHighlight,ServiceHeading, ServiceDescription} = objData || {};
  

  return (
    <>
    {objData ? (
      <div className="service-main border border-border-color bg-black h-full py-8 ">
      <div className="max-w-6xl mx-auto  py-[5%]">
        <div className="grid justify-items-center place-items-center gap-6">
        <div data-aos="fade-up"  className="bg-[#0f0f11] px-4 rounded-lg">
            <p className="text-lg font-semibold gradient-text">
              {ServiceTopHighlight}
            </p>
          </div>
          <div data-aos="fade-up" className="text-3xl md:text-4xl font-bold">
          <h1 className="text-center">{ServiceHeading}</h1>
          </div>
          <div data-aos="fade-up" className=" text-lg">
          <p className="text-center text-xl ">
          {ServiceDescription}
            </p>
            </div>
          <div data-aos="fade-up" className="main-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-5 gap-9">
          {serviceData ? serviceData.map((item , index)=>(
            <CardService key={index} item={item} />
          ))
          : <p>No Services</p>}
          </div>
          </div>
          </div>
          </div>
        ) :(
          <div>No Data</div>
        )
      }
      </>
  );
}

export default Services;
