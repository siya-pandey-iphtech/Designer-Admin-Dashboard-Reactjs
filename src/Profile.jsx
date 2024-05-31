// import MediaCount from "./components/MediaCount";
// import ProjectAnalytics from "./components/ProjectAnalytics";
// import TaskBoard from "./components/TaskBoard";
// import MyCalender from "./components/Calender";
// import Views from "./components/Views";
// import StarterKits from "./components/StarterKits";

// import { useState } from "react";
// import files from "./files.json";
// import ProfileViewer from "./components/ProfileViewer";
// import Files from "./components/Files";
// const Profile = () => {
//   const [fileData, setFileData] = useState(files);
//   return (
//     // <div className="flex flex-col ">
//     //   <div className="flex flex-col sm:flex-row">
//     //     <div className="w-[35rem] mr-2 min-w-max">
//     //       <ProfileViewer fileData={fileData} setFileData={setFileData} />
//     //     </div>
//     //     <div className=" w-fit  m-1 mt-4  ">

//     //       <Files fileData={fileData} setFileData={setFileData} />
//     //     </div>
//     //   </div>
//     //   <div className="flex  w-120">
//     //     <div>
//     //       <div className="flex gap-0">
//     //         <div className="h-60 w-60 mr-4  m-1 mt-4">
//     //         <MediaCount />
//     //         </div>
//     //         <div className="h-60 w-60 m-1 mt-4 ">
//     //         <ProjectAnalytics />
//     //         </div>
//     //       </div>
//     //       <div  className="m-1 mt-4 ">
//     //       <StarterKits />
//     //       </div>
//     //     </div>
//     //     <div className="flex w-full">
//     //       <TaskBoard />
//     //       <div className="flex flex-col">

//     //        <div className="w-full"><MyCalender /></div>

//     //     <div>    <Views /></div>

//     //       </div>
//     //     </div>
//     //   </div>
//     // </div>

//     //     <div className="grid grid-cols-2 gap-5 overflow-auto">
//     //       {/* Left pane */}
//     //       <div className="grid gap-5">
//     //         <div className="m-1 mt-4">
//     //           <ProfileViewer fileData={fileData} setFileData={setFileData} />
//     //         </div>
//     //         <div className="grid grid-cols-2 gap-5">
//     //           <div>
//     //             <MediaCount />
//     //           </div>
//     //           <div>
//     //             <ProjectAnalytics />
//     //           </div>
//     //         </div>
//     //         <div>
//     //         <StarterKits />
//     //         </div>
//     //       </div>
//     //       {/* Right Pane  */}
//     //       <div className="grid   ">
//     //       <div className=" grid  mt-4  h-fit">
//     //       <Files fileData={fileData} setFileData={setFileData} />
//     //       </div>
//     // <div className="grid  grid-cols-3 gap-5 -mt-[6rem]">
//     // <div className=" col-span-2">
//     // <TaskBoard />
//     // </div>
//     // <div className="grid ">
//     //   <div ><MyCalender/></div>
//     //   <div className="-mt-[8rem]"><Views/></div>
//     // </div>
//     // </div>
//     //       </div>
//     //     </div>

//     <div className="grid grid-cols-1 md:grid-cols-2  gap-5 w-screen overflow-auto  overflow-x-scroll">
//       {/* Left pane */}
//       <div className="grid gap-5">
//         <div className=" mt-4  ">
//           <ProfileViewer fileData={fileData} setFileData={setFileData} />
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
//           <div className="">
//             <MediaCount />
//           </div>
//           <div className="">
//             <ProjectAnalytics />
//           </div>
//         </div>
//         <div>
//           <StarterKits />
//         </div>
//       </div>
//       {/* Right Pane  */}
//       <div className="grid gap-5 h-screen ">
//         <div className=" grid mt-4  h-[5rem] ">
//           <Files fileData={fileData} setFileData={setFileData} />
//         </div>
//        <div className="grid gap-5 h-fit  grid-cols-3 bg-red-200 space-x-0">
//           <div className="  grid  min-w-[25rem]  max-w-[25rem] mr-5 mt-5">
//             <TaskBoard />
//           </div>
//           <div className="  grid   ">
//             <div className=" mb-5 ">
//               <MyCalender />
//             </div>
//             <div className="">
//               <Views />
//             </div>
//           </div>

//           </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

// Fixed for big screen 
// import MediaCount from "./components/MediaCount";
// import ProjectAnalytics from "./components/ProjectAnalytics";
// import TaskBoard from "./components/TaskBoard";
// import MyCalender from "./components/Calender";
// import Views from "./components/Views";
// import StarterKits from "./components/StarterKits";

// import { useState } from "react";
// import files from "./files.json";
// import ProfileViewer from "./components/ProfileViewer";
// import Files from "./components/Files";

// const Profile = () => {
//   const [fileData, setFileData] = useState(files);
//   return (
//     <div className="container mx-auto p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//         {/* Left pane */}
//         <div className="flex flex-col gap-5">
//           <div className="mt-4">
//             <ProfileViewer fileData={fileData} setFileData={setFileData} />
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <div>
//               <MediaCount />
//             </div>
//             <div>
//               <ProjectAnalytics />
//             </div>
//           </div>
//           <div>
//             <StarterKits />
//           </div>
//         </div>
        
//         {/* Right pane */}
//         <div className="flex flex-col gap-5 h-full">
//           <div className="mt-4">
//             <Files fileData={fileData} setFileData={setFileData} />
//           </div>
//           <div className="flex flex-col md:flex-row gap-5">
//             <div className="flex-2">
//               <TaskBoard />
//             </div>
//             <div className="flex flex-col gap-5">
//               <div>
//                 <MyCalender />
//               </div>
//               <div>
//                 <Views />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;


//Fix for mobile 

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
    <div className="container  p-4 pt-0 pl-1 w-full ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Left pane */}
        <div className="flex flex-col gap-5 min-w-[280px]">
          <div className="mt-4">
            <ProfileViewer fileData={fileData} setFileData={setFileData} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 min-w-[280px]">
            <div className="min-w-[180px]">
              <MediaCount />
            </div>
            <div className="min-w-[180px] ">
              <ProjectAnalytics />
            </div>
          </div>
          <div className="min-w-[280px]">
            <StarterKits />
          </div>
        </div>
        
        {/* Right pane */}
        <div className="flex flex-col gap-5 h-full min-w-[280px] w-full">
          <div className="mt-4 min-w-[280px] mb-10">
            <Files fileData={fileData} setFileData={setFileData} />
          </div>
          <div className="flex flex-col md:flex-row gap-5 min-w-[280px] w-full ">
            <div className="flex-1 min-w-[350px]">
              <TaskBoard />
            </div>
            <div className="flex flex-col gap-5 min-w-[280px]">
              <div className="min-w-[180px] max-w-[280px] z-10">
                <MyCalender />
              </div>
              <div className="min-w-[180px]">
                <Views />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
