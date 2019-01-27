import React from "react";
import { Line } from "react-chartjs-2";

export class InlineChart extends React.Component {
  render() {
    const testData = this.props.data || [
      { x: 0, y: 5 },
      { x: 1, y: 10 },
      { x: 2, y: 20 },
      { x: 3, y: 0 },
      { x: 4, y: 25 }
    ];
    return (
      <div>
        <Line
          data={{
            labels: testData,
            datasets: [
              {
                fill: false,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointRadius: 1,
                responsive: true,
                data: testData
              }
            ]
          }}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false,
            legend: {
              display: false
            },
            tooltips: {
              enabled: false
            },
            scales: {
              xAxes: [
                {
                  ticks: {
                    display: false //this will remove only the label
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    display: false //this will remove only the label
                  },
                  gridLines: {
                    color: "rgba(0, 0, 0, 0)"
                  }
                }
              ]
            }
          }}
        />
      </div>
    );
  }
}
