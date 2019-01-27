import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

export class LineChart extends React.Component {
  formatDate = (date, mode) => {
    const d = Number(date) * 1000
    if (!mode) {
      return moment(d).format("h:mma");
    }
  };

  render() {
    const data = this.props.data;
    console.log(data)
    console.log(
      data.map(point => {
        return this.formatDate(point.x);
      })
    );
    return (
      <div>
        <Line
          data={{
            labels: data.map(point => {
              return this.formatDate(point.x);
            }),
            datasets: [
              {
                label: "My First dataset",
                fill: false,
                lineTension: 0.2,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: "round",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointRadius: 1,
                pointHitRadius: 10,
                data: data
              }
            ]
          }}
          options={{
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
                    display: true //this will remove only the label
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
