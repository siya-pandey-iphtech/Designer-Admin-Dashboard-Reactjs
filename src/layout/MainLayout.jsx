import {
  faArrowLeft,
  faCartShopping,
  faFile,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileViewer from "../components/ProfileViewer";
import Files from "./Files";
import MediaCount from "../components/MediaCount";
import ProjectAnalytics from "../components/ProjectAnalytics";
import TaskBoard from "../components/TaskBoard";
import MyCalender from "../components/Calender";
import Views from "../components/Views";
import StarterKits from "../components/StarterKits";
import { useState } from "react";
import files from "../files.json"
const MainLayout = () => {
  const [fileData,setFileData]=useState(files)
  return (
    // Main App
    <div className="flex flex-col h-screen ">
      {/* Header */}
      <header className="h-12 bg-blue-500 shadow-lg z-50 text-white py-3 px-10 flex  justify-between ">
        <div className="flex ">
          <button>
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <p className="mx-10 text-nowrap">React Material Admin Full</p>
        </div>
        <div className="flex">
          <img
            className="rounded-full  w-7 h-7 "
            src="https://static.wikia.nocookie.net/a86f75a1-4894-4636-8cf3-00e9b3bd3fbb/smart/width/386/height/259"
          ></img>
          <p className="mx-3 text-nowrap" >Hi , admin </p>
        </div>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <nav className="w-64 text-gray-400 bg-white shadow-xl z-10  flex border-r-2">
          <div className=" h-60 w-full px-5 py-3  border-b-2">
            <ul className="space-y-3 p-4">
              <li className="flex items-center space-x-6">
                <FontAwesomeIcon
                  icon={faUser}
                  className="bg-blue-500 text-white p-1 rounded-full w-3 h-3"
                />
                <span>Profile</span>
              </li>
              <li className="flex items-center space-x-6">
                <FontAwesomeIcon icon={faHome} />
                <span>Dashboard</span>
              </li>
              <li className="relative flex items-center space-x-6">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>Ecommerce</span>
                <span
                  className="absolute top-0 right-0
  transform -translate-y-2 bg-green-600 text-white text-xs rounded-full h-4 p-1 flex items-center justify-center"
                >
                  NodeJS
                </span>
              </li>
              <li className="flex items-center space-x-6">
                <FontAwesomeIcon icon={faUser} />
                <span>User</span>
                <span className="bg-pink-500 text-white text-xs p-1 rounded-full h-4 flex items-center transform -translate-y-3 -translate-x-12">
                  New
                </span>
              </li>
              <li className="flex items-center space-x-6">
                <FontAwesomeIcon icon={faFile} />
                <span>Documentation</span>
              </li>
            </ul>
          </div>
        </nav>
        <main className="flex-grow bg-purple-50 p-4">
          {/* BreadCrumbBar */}
          <div className=" h-10 z-10 shadow-lg bg-white w-full m-1 "></div>

          {/* Profile Viewer  */}
          <div className="flex">
            <ProfileViewer fileData={fileData} setFileData={setFileData}/>
            <Files fileData={fileData} setFileData={setFileData} />
          </div>
          <div className="flex  w-120">
            <div>
            <div className="flex ">
              <MediaCount />
              <ProjectAnalytics />
            </div>
            <StarterKits/>
            </div>
            <div className="flex w-full">
              <TaskBoard />
              <div className="flex flex-col">
                <MyCalender/>
                <Views/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
