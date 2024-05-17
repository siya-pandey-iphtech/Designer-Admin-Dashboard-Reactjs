import React, { useState } from "react";
import WorkFiles from "./WorkFiles";

const Files = () => {
  const [selectedTab, setSelectedTab] = useState("Work");

  return (
    <div className=" z-10 shadow-lg bg-white w-full h-50 m-1 mt-4 flex flex-col p-5 ml-4 ">
      <h1 className="text-gray-500">Files</h1>
      {/* Tabs  */}
      <div className="flex  text-xs p-3 pb-0   border-b border-gray-300">
        <div
          className={`-ml-3 mr-4   p-2 pt-0 cursor-pointer px-3 ${
            selectedTab === "Work" ? "border-b-2 border-pink-500" : ""
          }`}
          onClick={() => setSelectedTab("Work")}
        >
          Work
        </div>
        <div
          className={`mr-4 pl-0 p-2 pt-0 cursor-pointer px-3 ${
            selectedTab === "Private" ? "border-b-2 border-pink-500" : ""
          }`}
          onClick={() => setSelectedTab("Private")}
        >
          Private
        </div>
        <div
          className={`pl-0 p-2 pt-0 cursor-pointer px-3 ${
            selectedTab === "Social" ? "border-b-2 border-pink-500" : ""
          }`}
          onClick={() => setSelectedTab("Social")}
        >
          Social
        </div>
      </div>
      {/* Work tab */}
      <div className="transition-all duration-2000 ease-in-out">
        <div className={`  ${selectedTab !== "Work" ? "hidden" : ""}`}>
          <WorkFiles />
        </div>
        <div className={`  ${selectedTab !== "Private" ? "hidden" : ""}`}>
          Private Tab
        </div>
        <div className={`  ${selectedTab !== "Social" ? "hidden" : ""}`}>
          Social Tab
        </div>
      </div>
    </div>
  );
};

export default Files;
