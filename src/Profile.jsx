import MediaCount from "./components/MediaCount";
import ProjectAnalytics from "./components/ProjectAnalytics";
import TaskBoard from "./components/TaskBoard";
import MyCalender from "./components/Calender";
import Views from "./components/Views";
import StarterKits from "./components/StarterKits";

import { useState } from "react";
import files from "./files.json";
import ProfileViewer from "./components/ProfileViewer";
import Files from "./components/Files";
const Profile = () => {
  const [fileData, setFileData] = useState(files);
  return (
    // <div className="flex flex-col ">
    //   <div className="flex flex-col sm:flex-row">
    //     <div className="w-[35rem] mr-2 min-w-max">
    //       <ProfileViewer fileData={fileData} setFileData={setFileData} />
    //     </div>
    //     <div className=" w-fit  m-1 mt-4  ">

    //       <Files fileData={fileData} setFileData={setFileData} />
    //     </div>
    //   </div>
    //   <div className="flex  w-120">
    //     <div>
    //       <div className="flex gap-0">
    //         <div className="h-60 w-60 mr-4  m-1 mt-4">
    //         <MediaCount />
    //         </div>
    //         <div className="h-60 w-60 m-1 mt-4 ">
    //         <ProjectAnalytics />
    //         </div>
    //       </div>
    //       <div  className="m-1 mt-4 ">
    //       <StarterKits />
    //       </div>
    //     </div>
    //     <div className="flex w-full">
    //       <TaskBoard />
    //       <div className="flex flex-col">

    //        <div className="w-full"><MyCalender /></div>

    //     <div>    <Views /></div>

    //       </div>
    //     </div>
    //   </div>
    // </div>

//     <div className="grid grid-cols-2 gap-5 overflow-auto">
//       {/* Left pane */}
//       <div className="grid gap-5">
//         <div className="m-1 mt-4">
//           <ProfileViewer fileData={fileData} setFileData={setFileData} />
//         </div>
//         <div className="grid grid-cols-2 gap-5">
//           <div>
//             <MediaCount />
//           </div>
//           <div>            
//             <ProjectAnalytics />
//           </div>
//         </div>
//         <div>
//         <StarterKits />
//         </div>
//       </div>
//       {/* Right Pane  */}
//       <div className="grid   ">
//       <div className=" grid  mt-4  h-fit">
//       <Files fileData={fileData} setFileData={setFileData} />
//       </div>
// <div className="grid  grid-cols-3 gap-5 -mt-[6rem]">
// <div className=" col-span-2">
// <TaskBoard />
// </div>
// <div className="grid ">
//   <div ><MyCalender/></div>
//   <div className="-mt-[8rem]"><Views/></div>
// </div>
// </div>
//       </div>
//     </div>

<div className="grid grid-cols-1 md:grid-cols-2  gap-5 overflow-auto">
  {/* Left pane */}
  <div className="grid gap-5">
    <div className="m-1 mt-4 ">
      <ProfileViewer fileData={fileData} setFileData={setFileData} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <MediaCount />
      </div>
      <div>            
        <ProjectAnalytics />
      </div>
    </div>
    <div>
      <StarterKits />
    </div>
  </div>
  {/* Right Pane  */}
  <div className="grid gap-5 ">
    <div className="grid mt-4 h-1/2">
      <Files fileData={fileData} setFileData={setFileData} />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 -mt-[6rem]">
      <div className="md:col-span-2">
        <TaskBoard />
      </div>
      <div className="grid">
        <div><MyCalender/></div>
        <div className="-mt-[8rem]"><Views/></div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Profile;
