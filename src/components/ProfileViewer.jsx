import { faM } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "/img/Image.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ProfileViewer = () => {
  return (
    <div>
      <div className="   z-10 shadow-lg bg-white w-125 m-1 mt-4 flex justify-around items-center py-5 px-7  ">
        {/* Profile Image  */}
        <div className="flex flex-col justify-center items-center w-1/3 ">
          <img className="w-full" src={Image}></img>
          <span className="bg-pink-500 mt-3 text-2xs px-2 py-1 text-white rounded-full ">
            PRO
          </span>
        </div>
        {/* Profile Details  */}
        <div className=" grid gap-3 items-start">
          <h1 className="text-2xl text-gray-500 font-bold"> Julee Cruise</h1>
          <h3 className="text-2xs text-gray-400 -mb-2">Product Designer</h3>
          <h2 className="text-blue-500 text-xs">Flatlogic.com</h2>

          {/* tags */}
          <div className="flex text-2xs gap-2">
            <span className="bg-indigo-200 text-blue-500 p-1  rounded-sm">
              UI/UX
            </span>
            <span className="bg-amber-100 text-amber-400  p-1 rounded-sm">
              Art
            </span>
            <span className="bg-pink-200 text-pink-400  p-1 rounded-sm">
              Design
            </span>
            <span className="bg-yellow-200 text-yellow-400  p-1 rounded-sm">
              Illustration
            </span>
            <span className="bg-green-200  text-green-600  p-1 rounded-sm">
              Mobile
            </span>
          </div>
          {/* Socials */}
          <div className=" mb-2 mt-5 grid grid-flow-col w-2/3 text-gray-300">
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
