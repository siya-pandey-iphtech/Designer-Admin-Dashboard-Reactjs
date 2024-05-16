import { faM } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProfileViewer = () => {
  return (
    <div>
      <div className="border   z-10 shadow-lg bg-white w-120 m-1 mt-4 flex justify-around items-center p-5  ">
        {/* Profile Image  */}
        <div className="flex flex-col justify-center items-center w-1/3 ">
          <img className="w-full" src="src/assets/img/Image.png"></img>
          <span className="bg-red-400 mt-3 text-2xs px-2 py-1 text-white rounded-full ">
            PRO
          </span>
        </div>
        {/* Profile Details  */}
        <div className=" grid gap-3 items-start">
          <h1 className="text-2xl text-gray-500 font-bold"> Julee Cruise</h1>
          <h3 className="text-xs text-gray-500 -mb-2">Product Designer</h3>
          <h2 className="text-blue-500">Flatlogic.com</h2>

          {/* tags */}
          <div className="flex gap-1">
            <span className="bg-blue-400 text-blue-700 p-1 text-xs rounded-sm">
              UI/UX
            </span>
            <span className="bg-yellow-400 text-amber-500 text-xs p-1 rounded-sm">
              Art
            </span>
            <span className="bg-red-300 text-red-500 text-xs p-1 rounded-sm">
              Design
            </span>
            <span className="bg-yellow-300 text-yellow-500 text-xs p-1 rounded-sm">
              Web-Flow
            </span>
            <span className="bg-green-300 text-green-600 text-xs p-1 rounded-sm">
              Mobile
            </span>
          </div>
          {/* Socials */}
          <div className=" my-2 grid grid-flow-col w-2/3 text-gray-400">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faM} />
            <FontAwesomeIcon icon={faDribbble} />
            <FontAwesomeIcon icon={faBehance} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewer;
