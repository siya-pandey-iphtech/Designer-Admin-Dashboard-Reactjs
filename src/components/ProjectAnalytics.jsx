import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Modal } from "flowbite-react";
import { useState } from "react";
import projects from "../projectData.json";
ChartJS.register(ArcElement, Tooltip, Legend);

export const ProjectAnalytics = () => {
  console.log("Projects Data from json", projects);
  const [open, setOpen] = useState(false);
  const [projectData,setProjectData]=useState(projects);
  const [tempData,setTempData]=useState(projects);
  const labels = Object.keys(projectData);
  const data = Object.values(projectData);
  const backgroundColor = ["#5172f9", "#ffbf67", "#5ed7af", "#fc6a9b"];
  console.log("type",typeof(tempData))
  const openModal = () => {
    setTempData(projectData);
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: backgroundColor,
        borderWidth: 0,
      },
    ],
  };

  const total = data.reduce((a, b) => a + b, 0);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          title: function() {
            return ''; // return empty string to not display any title
          },
          label: function(context) {
            return context.raw; // return only the data
          },
          afterLabel: function() {
            return ''; // return empty string to not display anything after the label
          }
        }
      },
      
      beforeDraw: (chart) => {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";

        var text = total,
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
    cutout: "70%",
    responsive: true,
  };
const handleValuesChange=(e)=>{
try {
  setTempData({
    ...tempData,
  [e.target.name]:Number(e.target.value)||0
  })
} catch (error) {
  console.log("error",error);
}
}
const handleUpdateClick=()=>{
  setProjectData(tempData);
  closeModal();
}
  return (
    <div className=" h-60 z-10 shadow-lg bg-white w-60 m-1 mt-4 flex flex-col p-5 ">
      <h1 className="  text-gray-400 mb-2">Projects </h1>
      <div className="w-full flex justify-center   ">
        <div className=" w-20 flex justify-center items-center">
          <Doughnut data={chartData} options={options} />
        </div>
        <p className="absolute translate-y-7">{total}</p>
      </div>
      {/* Legends  */}
      <div className="flex text-2xs flex-wrap mt-4 justify-between gap-y-1 px-5">
        {chartData.labels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              style={{
                backgroundColor: chartData.datasets[0].backgroundColor[index],
              }}
              className="w-1 h-1 mr-1 rounded-full"
            ></div>
            <p>{label}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
        <button
          className=" border shadow-sm border-blue-400 text-xs text-blue-400 rounded-sm px-2 py-1 mt-1"
          onClick={openModal}
        >
          DETAILS
        </button>

        <Modal
          dismissible
          show={open}
          onClose={closeModal}
          className="bg-transparent   flex items-center justify-center"
        >
          <div className="shadow-2xl z-10 bg-purple-50 ">
            <Modal.Header className="bg-white">Projects </Modal.Header>
            <Modal.Body>
              <div className="bg-white   shadow-lg  ">
                <div className="p-5  grid grid-cols-2 gap-2 ">
                  {
                    Object.entries(tempData).map(([key, value], index) => (
                    <p
                      key={index}
                      className=" items-center p-5  grid  grid-cols-2 "
                    >
                      <div className="flex items-center">
                        <div
                          style={{
                            backgroundColor:
                              chartData.datasets[0].backgroundColor[index],
                          }}
                          className="w-2 h-2 mr-1 rounded-full"
                        ></div>
                        <p>{key}</p>
                      </div>

                      <input
                        value={value}
                        name={key}
                        type="number"
                        onChange={handleValuesChange}
                       
                        className=" ml-4 py-2 px-3 border w-16"
                      />
                    </p>
                  ))}
                  
                </div>
                <div className=" flex justify-end w-full col">
                    <button className=" border shadow-sm border-blue-400 text-sm text-blue-400 rounded-sm px-2 py-1 m-5 mt-1" 
                    onClick={handleUpdateClick}>
                      UPDATE
                    </button>
                  </div>
              </div>
            </Modal.Body>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default ProjectAnalytics;
