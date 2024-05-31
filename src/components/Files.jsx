import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "flowbite-react";
import "../App.css";
const colors = ["#C7D2FE", "#FEF3C7", "#FBCFE8", "#FEF08A", "#BBF7D0"];
const colorClasses = [
  " text-blue-500",
  " text-amber-400",
  "text-pink-400",
  " text-yellow-400",
  " text-green-600",

];


const Files = ({ fileData, setFileData }) => {
  const [selectedTab, setSelectedTab] = useState('Work');
  const [open, setOpen] = useState(false);
  const [tempFileData,setTempFileData]=useState(fileData);
  console.log("Files:", fileData);
  useEffect(() => {
    setTempFileData(fileData);
  }, [fileData]);
  
  const openModal = () => {
    setTempFileData(fileData);
    setOpen(true);
  };
  const closeModal = () => {
    
    setOpen(false);
  };


  const handleFileCountChange = (e, fileIndex, folderIndex) => {
   const newTempFileData=[...tempFileData];
   const fileIndexInOriginal=newTempFileData.findIndex(file=>file.name===selectedTab);
   newTempFileData[fileIndexInOriginal].folders[folderIndex].fileCount = Number(e.target.value) ;
   setTempFileData(newTempFileData);
  };


  const saveChanges=()=>{
    setFileData(tempFileData);
    closeModal();
  };
  return (
    <div className=" z-10 shadow-lg bg-white  flex flex-col p-5  pt-3  ">
      <div className="flex items-center justify-between md:justify-start">
      <h1 className="text-gray-500 md:mr-80">Files</h1>

      <div className="">
          <button
            className=" border shadow-sm border-blue-400 text-xs text-blue-400 rounded-sm px-2 py-1 mt-1"
            onClick={openModal}
          >
            UPDATE
          </button>
          <Modal
            dismissible
            show={open}
            onClose={closeModal}
            className="bg-transparent "
          >
            <div className=" shadow-2xl z-10  bg-purple-50">
              <Modal.Header className="bg-white">Update Files </Modal.Header>

              <Modal.Body>
                <div className="h-96 overflow-auto bg-white shadow-lg">
                  {tempFileData
                  .filter(file=>file.name===selectedTab)
                  
                  
                  .map((file,fileIndex) => (
                    <div key={file.name} className="  p-5  gap-2 grid">
                      <p
                        className="font-bold text-xl text-gray-500 "
                        key={file.name}
                      >
                        {file.name}
                      </p>
                      {file.folders.map((folder, folderIndex) => (
                        <div key={folder.name} className="  grid grid-cols-2 items-center pl-20 ">
                          <div className=" flex items-center gap-2 ">
                            <FontAwesomeIcon
                              icon={faFolder}
                              style={{ color: colors[folderIndex % colors.length] }}
                              size=""
                            />
                            <p >{folder.name}</p>
                          </div>
                          <input
                            className="border p-2 w-20"
                            
                            name="fileCount"
                            value={folder.fileCount}
                            type="number"
                            onChange={(e)=>
                            handleFileCountChange(e,fileIndex,folderIndex)}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                  <div className="flex justify-end">
                    <button className=" border shadow-sm border-blue-400 text-xs text-blue-400 rounded-sm px-2 py-1 my-2 mx-5" 
                    
                    onClick={saveChanges}>
                      SAVE
                    </button>
                  </div>
                </div>
              </Modal.Body>
            </div>{" "}
          </Modal>
        </div>
        </div>
      {/* Tabs  */}
      <div className="flex justify-between items-center">
        <div className="flex  text-xs p-3 pb-0   border-b border-gray-300 w-full overflow-x-auto">
          {fileData.map((file, index) => (
            <div
              key={index}
              className={`-ml-3 mr-4   p-2 pt-0 cursor-pointer px-3 ${
                selectedTab === file.name ? "border-b-2 border-pink-500" : ""
              }`}
              onClick={() => setSelectedTab(file.name)}
            >
              {file.name}
            </div>
          ))}
        </div>
        
      </div>
{/* Folders */}
      {/* <div className="   mt-4    transition-all duration-2000 ease-in-out">
        {fileData.map((file, fileIndex) => (
          <div
            key={fileIndex}
            className={` gap-1 flex ${selectedTab !== file.name ? "hidden" : ""}`}
          >
            {file.folders.map((folder, folderIndex) => {
              const colorClassIndex=folderIndex %  colorClasses.length;
              const colorClass=colorClasses[colorClassIndex];
             return( <div
                key={folderIndex}
                className="mr-4 hover:scale-105 transition-transform duration-200 relative"
              >
                <FontAwesomeIcon
                  icon={faFolder}
                  
                 style={{ color: colors[folderIndex % colors.length] }}
                  size="5x"
                />
                <div
                  className={`absolute inset-0 flex flex-col items-start text-2xs ml-2 mt-6  justify-center ${colorClass}`}
                 
                >
                  <h3 className="font-bold text-xs">{folder.name}</h3>
                  <p>{folder.fileCount}</p>
                </div>
              </div>)
            })}
          </div>
        ))}
      </div> */}

      {/* Folders */}
<div className="mt-4 transition-all duration-2000 ease-in-out ">
  {fileData.map((file, fileIndex) => (
    <div
      key={fileIndex}
      className={`gap-1  flex whitespace-nowrap   ${selectedTab !== file.name ? "hidden" : ""}`}
    >
      {file.folders.map((folder, folderIndex) => {
        const colorClassIndex = folderIndex % colorClasses.length;
        const colorClass = colorClasses[colorClassIndex];
        return (
          <div
            key={folderIndex}
            className="mr-4 hover:scale-105 transition-transform duration-200 relative  "
          >
            <FontAwesomeIcon
              icon={faFolder}
              style={{ color: colors[folderIndex % colors.length] }}
             className="icon"
            />
            <div
              className={`absolute inset-0 flex flex-col items-start text-2xs ml-2 mt-6 justify-center ${colorClass}`}
            >
              <h3 className="font-bold text-2xs">{folder.name}</h3>
              <p>{folder.fileCount}</p>
            </div>
          </div>
        );
      })}
    </div>
  ))}
</div>
    </div>
  );
};

export default Files;
