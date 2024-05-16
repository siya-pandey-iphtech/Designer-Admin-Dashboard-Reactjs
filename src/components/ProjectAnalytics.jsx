import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ProjectAnalytics = () => {
  const data = {
    labels: ['New', 'In Progress', 'Completed', 'Cancelled'],
    datasets: [
      {
        data: [120, 200, 300, 80], // Random numbers for each project status
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF5733'],
      },
    ],
  };
  const options={
    legend:{
        display:false
    }
  }


  return (
    <div className="border z-10 shadow-lg bg-white w-60 m-1 mt-4 flex flex-col p-5">
      <h1 className="text-gray-400 mb-2">Projects</h1>
      <Doughnut  
      data={data}
      options={options}/>
      <div className="flex text-2xs flex-wrap justify-around mt-4">
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
    </div>
  );
};

export default ProjectAnalytics;