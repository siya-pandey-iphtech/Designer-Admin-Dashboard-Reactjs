import React from "react";
import { filesData } from "../data";
import  uiux  from "/img/Background.png";
import FolderPink  from "/img/Folder Pink.png";
import  EyePink from "/img/EyePink.png"
import  MobileFolder  from "/img/MobileFolder.png";
import  MobileIcon  from "/img/MobileIcon.png"
import  illustration  from "/img/IllustrationFolder.png";
const WorkFiles = () => {
  return (
    <div className="grid grid-flow-col ">
      {/* Ui/ux folder  */}
      <div className="relative mt-2">
        <img className="absolute" src={uiux}></img>
        <img
          className="absolute translate-x-1 translate-y-1"
          src="/img/Image(2).png"
        ></img>
        <img
          className="absolute  translate-x-14 translate-y-3"
          src="/img/Image(3).png"
        ></img>
        <p className="absolute text-xs text-blue-600 transform translate-y-9 px-5 ">
          UI/UX
        </p>
        <p className="absolute text-2xs text-blue-600 transform translate-y-12 px-5 ">
          175
        </p>
      </div>
      {/* Design folder */}
      <div className="relative mt-2 bg-green-500">
        <img className="absolute" src={FolderPink} />
        <img
          className="absolute  translate-x-14 translate-y-2"
          src={EyePink}
        />
        <p className="absolute text-xs text-pink-700 transform translate-y-9 px-5 ">
          Design
        </p>
        <p className="absolute text-2xs text-pink-700 transform translate-y-12 px-5 ">
          154
        </p>
      </div>

      {/* Mobile Folder */}
      <div className="relative mt-2 ">
        <img className="absolute" src={MobileFolder} />
        <img
          className="absolute  translate-x-14 translate-y-2"
          src={MobileIcon}
        />
        <p className="absolute text-xs text-green-600 transform translate-y-9 px-5 ">
          Mobile
        </p>
        <p className="absolute text-2xs text-green-600 transform translate-y-12 px-5 ">
          98
        </p>
      </div>
      {/* Illustration Folder */}
      <div className="relative mt-2 ">
        <img className="absolute" src={illustration} />
        <p className="absolute text-xs text-yellow-600 transform translate-y-9 px-4  ">
          Illustration
        </p>
        <p className="absolute text-2xs text-yellow-600 transform translate-y-12 px-4 ">
          154
        </p>
      </div>
    </div>
  );
};

export default WorkFiles;
