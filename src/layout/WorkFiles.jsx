import React from "react";
import { filesData } from "../data";
const WorkFiles = () => {
  return (
    <div className="grid grid-flow-col ">
      {/* Ui/ux folder  */}
      <div className="relative mt-2">
       

        <img  className="absolute" src="../../src/assets/img/Background.png"></img>
        <img className="absolute translate-x-1 translate-y-1" src="../../src/assets/img/Image (2).png"></img>
        <img className="absolute  translate-x-14 translate-y-3" src="../../src/assets/img/Image (3).png"></img>
        <p className="absolute text-xs text-blue-600 transform translate-y-9 px-5 ">UI/UX</p>
        <p className="absolute text-2xs text-blue-600 transform translate-y-12 px-5 ">175</p>
      </div>
{/* Design folder */}
      <div className="relative mt-2 bg-green-500">
<img className="absolute"src="../../src/assets/img/Folder Pink.png"/>
<img  className="absolute  translate-x-14 translate-y-2" src="../../src/assets/img/Eye Pink.png"/>
<p className="absolute text-xs text-pink-700 transform translate-y-9 px-5 ">Design</p>
        <p className="absolute text-2xs text-pink-700 transform translate-y-12 px-5 ">154</p>
      </div>

      {/* Mobile Folder */}
      <div className="relative mt-2 ">
<img className="absolute"src="../../src/assets/img/MobileFolder.png"/>
<img  className="absolute  translate-x-14 translate-y-2" src="../../src/assets/img/MobileIcon.png"/>
<p className="absolute text-xs text-green-600 transform translate-y-9 px-5 ">Mobile</p>
        <p className="absolute text-2xs text-green-600 transform translate-y-12 px-5 ">98</p>
      </div>
      {/* Illustration Folder */}
      <div className="relative mt-2 ">
<img className="absolute"src="../../src/assets/img/IllustrationFolder.png"/>
<p className="absolute text-xs text-yellow-600 transform translate-y-9 px-4  ">Illustration</p>
        <p className="absolute text-2xs text-yellow-600 transform translate-y-12 px-4 ">154</p>
      </div>
     
    </div>
  );
};

export default WorkFiles;
