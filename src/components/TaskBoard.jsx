import { useState } from "react";
import WorkFiles from "../layout/WorkFiles";
import TaskList from "./TaskList";

const TaskBoard = () => {
    const [selectedTab, setSelectedTab] = useState('Today');
  return (
    <div className=" z-10 shadow-lg bg-white  m-1 mt-4 flex flex-col p-5  min-w-96 ">
    <h1 className="text-gray-400 mb-2">Tasks</h1>
      {/* Tabs  */}
      <div className="flex  text-xs p-3 pb-0   border-b border-gray-300">
        <div 
          className={`mr-4   p-2 pt-0 cursor-pointer ${selectedTab === 'Today' ? 'border-b-2 border-pink-500' : ''}`}
          onClick={() => setSelectedTab('Today')}
        >
          Today
        </div>
        <div 
          className={`mr-4 pl-0 p-2 pt-0 cursor-pointer ${selectedTab === 'This week' ? 'border-b-2 border-pink-500' : ''}`}
          onClick={() => setSelectedTab('This week')}
        >
          This week
        </div>
        <div 
          className={`pl-0 p-2 pt-0 cursor-pointer ${selectedTab === 'This month' ? 'border-b-2 border-pink-500' : ''}`}
          onClick={() => setSelectedTab('This month')}
        >
          This month
        </div>
      </div>
      <div className="transition-all duration-2000 ease-in-out">
        <div className={`  ${selectedTab !== "Today" ? "hidden" : ""}`}>
          <TaskList/>
        </div>
        <div className={`  ${selectedTab !== "This week" ? "hidden" : ""}`}>
          Private Tab
        </div>
        <div className={`  ${selectedTab !== "This month" ? "hidden" : ""}`}>
          Social Tab
        </div>
      </div>
    </div>
  )
}

export default TaskBoard
