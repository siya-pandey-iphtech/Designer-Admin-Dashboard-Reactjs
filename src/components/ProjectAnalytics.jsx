import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ProjectAnalytics = () => {
  const data = {
    labels: ['New', 'In Progress', 'Completed', 'Cancelled'],
    datasets: [
      {
        data: [30, 20, 50, 21],
        backgroundColor: ['#5172f9', '#fc6a9b', '#5ed7af', '#ffbf67',],
        borderWidth:0,
      },
    ],
  };

  const total = data.datasets[0].data.reduce((a, b) => a + b, 0);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
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
      }
    },
    cutout: '70%', 
    responsive:true,
  };

  return (
    <div className=" z-10 shadow-lg bg-white w-60 m-1 mt-4 flex flex-col p-5 ">
      <h1 className="  text-gray-400 mb-2">Projects </h1>
     <div className="w-full flex justify-center   p-5">
     <div className=" w-32 h-32 flex justify-center  items-center"> 
       <Doughnut data={data} options={options} />
     </div>
     </div>
     {/* Legends  */}
      <div className="flex text-2xs flex-wrap mt-4">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div
              style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              className="w-2 h-2 mr-2 rounded-full"
            ></div>
            <p>{label}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-end">
      <button className=" border-2 border-blue-400 text-xs text-blue-400 rounded-sm px-2 py-1 mt-1">DETAILS</button>
      </div>
    </div>
  );
};

export default ProjectAnalytics;