import React, { useEffect } from 'react';
import { Chart } from 'chart.js/auto';

const MyChartComponent = () => {
  useEffect(() => {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }, []);

  return (
    <div className="chart-container">
      <canvas id="myChart" width="400" height="200"></canvas>
    </div>
  );
};

export default MyChartComponent;
