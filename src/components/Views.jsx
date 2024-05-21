import { faArrowTrendUp, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ViewsLineChart from "./ViewsLineChart";
const views = 7.156;
const Views = () => {
  return (
    <div className=" mr-5 z-10 h-40 shadow-lg bg-white w-fit m-1 mt-4 flex flex-col p-5  ">
      <div
      className="flex justify-between items-center text-gray-400 mb-2"> <h1 className="">Views</h1>
       <FontAwesomeIcon icon={faEllipsisVertical}/></div>
     
      <div className="flex justify-between  w-fit gap-6">
        <div className="">
          <div className="flex  items-end">
            <p className="font-bold text-xl text-black">{views}</p>{" "}
            <FontAwesomeIcon
              icon={faArrowTrendUp}
              className="text-green-400 text-xs ml-1"
            />
          </div>
          <p className="text-xs text-green-400">7.2%</p>
          <button className=" text-xs border-2 rounded-lg  border-purple-400 w-fit px-3 py-2  text-purple-600 font-semibold mt-2">
            See More
          </button>
        </div>
        <div className="">
          
          <ViewsLineChart />
        </div>
      </div>
    </div>
  );
};

export default Views;
