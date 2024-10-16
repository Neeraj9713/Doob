import React from "react";
import { GoCheck } from "react-icons/go";

function PlanTextData({data}) {
  return (
    <div className="data flex items-center gap-2">
      <GoCheck className="text-xl" />
      <p className="font-medium">{data}</p>
    </div>
  );
}

export default PlanTextData;
