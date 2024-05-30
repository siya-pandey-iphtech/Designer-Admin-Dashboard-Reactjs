


import MediaCount from "./components/MediaCount";
import ProjectAnalytics from "./components/ProjectAnalytics";
import TaskBoard from "./components/TaskBoard";
import MyCalender from "./components/Calender";
import Views from "./components/Views";
import StarterKits from "./components/StarterKits";

import { useState } from "react";
import files from "./files.json"
import ProfileViewer from "./components/ProfileViewer";
import Files from "./components/Files";
const Profile = () => {
    const [fileData,setFileData]=useState(files)
  return (
    <div>
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
    </div>
  )
}

export default Profile
