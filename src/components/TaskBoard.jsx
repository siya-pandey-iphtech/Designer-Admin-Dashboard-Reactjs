import { useState } from "react";
import tasksList from "../tasksList.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalHeader } from "flowbite-react";

const colors = [
  "#ffc16b",
  "#5172f9",
  "#3fcb9b",
  "#ffbf68",
  "#fd5991",
  "#5172f9",
  "#ffc573",
];

const TaskBoard = () => {
  const [selectedTab, setSelectedTab] = useState('Today');
  const [selectedTask, setSelectedTask] = useState(null);
  const [tempData, setTempData] = useState({});
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState(tasksList[selectedTab]);

  const openModal = (task) => {
    setSelectedTask(task);
    setTempData(task);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleChange = (e, key) => {
    setTempData({ ...tempData, [key]: e.target.value });
  };

  const saveChanges = () => {
    const updatedTasks = tasks.map(task =>
      task.id === tempData.id ? { ...task, ...tempData } : task
    );
    setTasks(updatedTasks);
    tasksList[selectedTab]=updatedTasks;
    setOpen(false);
  };
  const getColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500';
      case 'In Progress':
        return 'bg-yellow-400';
      case 'New':
        return 'bg-blue-500';
      default:
        return 'bg-pink-400';
    }
  };
  return (
    <div className="ml-5 z-10 shadow-lg bg-white m-1 mt-4 flex flex-col p-5 min-w-96">
      <h1 className="text-gray-400 mb-2">Tasks</h1>
      {/* Tabs */}
      <div className="flex text-xs p-3 pb-0 border-b border-gray-300">
        {["Today", "This week", "This month"].map(tab => (
          <div
            key={tab}
            className={`mr-4 p-2 pt-0 cursor-pointer ${selectedTab === tab ? 'border-b-2 border-pink-500' : ''}`}
            onClick={() => {
              setSelectedTab(tab);
              setTasks(tasksList[tab]);
            }}
          >
            {tab}
          </div>
        ))}
      </div>
      {/* TasksList */}
      <div className="transition-all duration-2000 ease-in-out">
        <div className="text-xs text-gray-600">
          {tasks.map((task, index) => (
            <div className="flex p-2 border-b justify-between" key={task.id}>
              <p className="w-1/4 text-2xs">{task.time}</p>
              <div className="flex items-center justify-between w-full">
                <span
        className={`mr-2 w-1 h-1 rounded-full ${getColor(task.status)}`}
                 
                ></span>
                <p className="w-full text-nowrap">{task.task}</p>
                <span className={`text-white text-2xs px-1 rounded-full mr-5 text-nowrap ${task.status === 'Completed' ? 'bg-green-500' : task.status === 'In Progress' ? 'bg-yellow-400' : task.status === 'New' ? 'bg-blue-500' : 'bg-pink-400'}`}>{task.status}</span>
              </div>
              <button onClick={() => { openModal(task) }}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal
        show={open}
        onClose={closeModal}
        className="bg-transparent"
      >
        <div className="shadow-2xl z-10 bg-purple-50">
          <ModalHeader className="bg-white">Update Task</ModalHeader>
          <Modal.Body>
            <div className="h-96 overflow-auto bg-white shadow-lg">
              <div className="grid p-1">
                {tempData && Object.entries(tempData).map(([key, value]) => (
                  <div className="grid grid-cols-2 items-center p-5" key={key}>
                    <p className="ml-20">{key.toUpperCase()}</p>
                    {key === 'status' ? (
                      <select value={value} name={key} onChange={(e) => handleChange(e, key)} className="py-2 px-3 border">
                        <option value="New">New</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancel">Cancel</option>
                      </select>
                    ) : key === 'time' ? (
                      <input type="time" value={value} name={key} onChange={(e) => handleChange(e, key)} className="py-2 px-3 border" />
                    ) : (
                      <input type="text" disabled={key === 'id'} value={value} name={key} onChange={(e) => handleChange(e, key)} className="py-2 px-3 border" />
                    )}
                  </div>
                ))}
                <div className="flex justify-end">
                  <button className="border shadow-sm border-blue-400 text-xl text-blue-400 rounded-sm px-2 py-1 my-1 mx-5" onClick={saveChanges}>
                    SAVE
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default TaskBoard;
