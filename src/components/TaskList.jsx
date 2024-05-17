import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { tasks } from "../data";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const colors = [
  "#ffc16b",
  "#5172f9",
  "#3fcb9b",
  "#ffbf68",
  "#fd5991",
  "#5172f9",
  "#ffc573",
];

const TaskList = () => {
  return (
    <div className="text-xs text-gray-600 ">
      {tasks.map((task, index) => (
        <div className="flex p-2 border-b justify-between" key={task.task}>
          <p className="w-1/4 text-2xs ">{task.time}</p>{" "}
          <div className="flex items-center justify-between w-full">
            <span
              className="mr-2"
              style={{
                backgroundColor: colors[index % colors.length],
                height: "5px",
                width: "5px",
                borderRadius: "50%",
              }}
            ></span>
            <p className=" w-full text-nowrap">{task.task}</p>
          </div>
          <button>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
