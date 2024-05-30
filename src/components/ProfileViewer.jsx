import { faM } from "@fortawesome/free-solid-svg-icons";
import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "/img/Image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Tooltip } from 'react-tooltip';

const ProfileViewer = ({ fileData }) => {
  const colorClasses = [
    "bg-indigo-200 text-blue-500",
    "bg-amber-100 text-amber-400",
    "bg-pink-200 text-pink-400",
    "bg-yellow-200 text-yellow-400",
    "bg-green-200 text-green-600",
    // Add more color classes if needed
  ];

  console.log("Profile: ", fileData);
  const [fileCountsByType, setFileCountsByType] = useState({});
  
  const calculateFilesCount = () => {
    const data = fileData;
    const allFolders = data.flatMap(category => category.folders);
    console.log("Step 1 Flatten Data:", allFolders);
    const fileCounts = allFolders.reduce((acc, folder) => {
      if (!acc[folder.name]) {
        acc[folder.name] = 0; // incase not present, initialize
      }
      acc[folder.name] += folder.fileCount; // accumulate the file count of all types of folders
      return acc;
    }, {});
    console.log("fileCounts by type", fileCounts);
    setFileCountsByType(fileCounts);
  };

  useEffect(() => {
    calculateFilesCount();
  }, [fileData]);
console.log("fileCountsby type",fileCountsByType)
  return (
    <div>
      <div className="z-10 shadow-lg bg-white   flex justify-around items-center py-5 px-7">
        {/* Profile Image */}
        <div className="flex flex-col justify-center items-center w-1/3">
          <img className="w-full" src={Image} alt="Profile" />
          <span className="bg-pink-500 mt-3 text-2xs px-2 py-1 text-white rounded-full">
            PRO
          </span>
        </div>
        {/* Profile Details */}
        <div className="grid gap-3 items-start">
          <h1 className="text-2xl text-gray-500 font-bold">Julee Cruise</h1>
          <h3 className="text-2xs text-gray-400 -mb-2">Product Designer</h3>
          
          <a
            href="https://iphtechnologies.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="text-blue-500 text-xs">iphtechnologies.org</h2>
          </a>

          {/* Tags */}
          <div className="flex text-2xs gap-2">
            {Object.keys(fileCountsByType).map((key, index) => (
              <span
                key={index}
                className={`${colorClasses[index % colorClasses.length]} p-1 rounded-sm`}
                data-tooltip-id="file-tooltip"
                data-tooltip-content={fileCountsByType[key].toString()
                }
                
              >
              {console.log(`Total Files: ${fileCountsByType[key].toString()}`)}
                {key}
              </span>
            ))}
            <Tooltip id="file-tooltip" />
          </div>

          {/* Socials */}
          <div className="mb-2 mt-5 grid grid-flow-col w-2/3 text-gray-300">
            <a
              href="https://www.facebook.com/IPHTechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="mailto:info@iphtechnologies.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faM} />
            </a>
            <a
              href="https://dribbble.com/tags/react"
              target="_blank"
              rel="noopener noreferreer"
            >
              <FontAwesomeIcon icon={faDribbble} />
            </a>
            <a
              href="https://www.behance.net/search/projects/reactjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a
              href="https://www.instagram.com/iphtechnologies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewer;
