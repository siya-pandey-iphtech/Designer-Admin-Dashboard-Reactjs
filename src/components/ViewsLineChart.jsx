import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const ViewsLineChart = () => {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], // Example labels, replace with your data
    datasets: [
      {
        label: 'Views',
        data: [5000, 2000, 1000, 2000, 4000, 5000, 6000, 7000, 8000, 9000], // Adjusted data
        fill: true,
        backgroundColor: 'rgba(63, 81, 181, 0.2)',
        borderColor: 'rgba(63, 81, 181, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(63, 81, 181, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(63, 81, 181, 1)',
        tension: 0.4, // Smooth curve
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        display: false, // Hide y-axis
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend
      },
    },
    elements: {
      line: {
        tension: 0.4, // Smooth curve
      },
      point: {
        radius: 0, // Hide points
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-40 -mr-5 h-20 p-0 ">
     
     
        <Line data={data} options={options} />
    
    </div>
  );
};

export default ViewsLineChart;
