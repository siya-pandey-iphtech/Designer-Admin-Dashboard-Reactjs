import React from "react";
import { filesData } from "../data";
import uiux from "/img/Background.png";
import FolderPink from "/img/Folder Pink.png";
import EyePink from "/img/EyePink.png";
import MobileFolder from "/img/MobileFolder.png";
import MobileIcon from "/img/MobileIcon.png";
import illustration from "/img/IllustrationFolder.png";
import art from "/img/ArtFolder.png";
const WorkFiles = () => {
  return (
    <div className="grid grid-flow-col gap-6  mt-2 text-white  flex-shrink-0 w-120">
      {/* Ui/ux folder  */}
      <div className="relative mt-2">
        <img className="absolute -translate-y-1 flex-shrink-0  " src={uiux}></img>
        <img className="absolute translate-x-1 " src="/img/Image(2).png"></img>
        <img
          className="absolute  translate-x-16 translate-y-3"
          src="/img/Image(3).png"
        ></img>
        <p className="absolute text-2xs  transform translate-y-7 px-3 ">
          UI/UX
        </p>
        <p className="absolute text-3xs  transform translate-y-10 px-3 py-1">
          175 files
        </p>
      </div>
      {/* Design folder */}
      <div className="relative mt-2 bg-green-500">
        <img className="absolute" src={FolderPink} />
        <img className="absolute  translate-x-14 translate-y-2" src={EyePink} />
        <p className="absolute text-2xs  transform translate-y-7 px-2 ">
          Design
        </p>
        <p className="absolute text-3xs  transform translate-y-10 px-2 py-1">
          154 files
        </p>
      </div>

      {/* Mobile Folder */}
      <div className="relative mt-2 ">
        <img className="absolute" src={MobileFolder} />
        <img
          className="absolute  translate-x-14 translate-y-2"
          src={MobileIcon}
        />
        <p className="absolute text-2xs  transform translate-y-7 px-2 ">
          Mobile 
        </p>
        <p className="absolute text-3xs  transform translate-y-10 px-2 py-1 ">
          98 files
        </p>
      </div>
      {/* Illustration Folder */}
      <div className="relative mt-2 ">
        <img className="absolute" src={illustration} />
        <p className="absolute text-2xs  transform translate-y-7 px-2  ">
          Illustration
        </p>
        <p className="absolute text-3xs  transform translate-y-10 px-2 py-1">
          154 files
        </p>
      </div>
      {/* Art Folder */}
      <div className="relative mt-2 ">
        <img className="absolute" src={illustration} />
        <p className="absolute text-2xs  transform translate-y-7 px-2  ">
   Art
        </p>
        <p className="absolute text-3xs  transform translate-y-10 px-2 py-1">
          154 files
        </p>
      </div>
    </div>
  );
};

export default WorkFiles;
