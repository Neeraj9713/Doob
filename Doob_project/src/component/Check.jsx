// Check.jsx
import React from "react";
import { useGetMainDataQuery } from "../store/features/apiMain"; // Adjust the path as necessary

function Check() {
  // Using the modified hook to get the main data
  const { data: objdata, isLoading, error } = useGetMainDataQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;

  // Destructure the properties from objdata if it exists
  const {
    BannerText,
    BannerDescription,
    ServiceTopHighlight,
    ServiceDescription,
    AquireTopHighLight,
    AquireDescription,
    AdvanceTopHighlight,
    AdvanceDescription,
    AwesomeTop,
    AwesomeTitle,
  } = objdata || {}; // Fallback to an empty object to avoid destructuring errors

  return (
    <div>
      {objdata ? ( // Check if objdata has been successfully loaded
        <>
          <p className="text-5xl text-green-800">{BannerText}</p>
          <p className="text-2xl">{BannerDescription}</p>

          <div className="my-5">
            <h2 className="text-4xl">{ServiceTopHighlight}</h2>
            <p>{ServiceDescription}</p>
          </div>

          <div className="my-5">
            <h2 className="text-4xl">{AquireTopHighLight}</h2>
            <p>{AquireDescription}</p>
          </div>

          <div className="my-5">
            <h2 className="text-4xl">{AdvanceTopHighlight}</h2>
            <p>{AdvanceDescription}</p>
          </div>

          <div className="my-5">
            <h2 className="text-4xl">{AwesomeTop}</h2>
            <p>{AwesomeTitle}</p>
          </div>
        </>
      ) : (
        <div>No data available</div>
      )}
      <div className="text-5xl text-black">Hii</div>
    </div>
  );
}

export default Check;