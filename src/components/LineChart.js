import React from "react";
import { Line } from "react-chartjs-2";
import moment from "moment";

export class LineChart extends React.Component {
  formatDate = (date, mode) => {
    const d = Number(date) * 1000;
    if (mode == 0) {
      return moment(d).format("h:mma");
    }

    if (mode == 1) {
      return moment(d).format("h:mma");
    }

    if (mode == 2) {
      return moment(d).format("h:mma");
    }

    if (mode == 3) {
      return moment(d).format("h:mma");
    }

    return moment(d).format("h:mma");
  };

  filterData = (data, mode) => {
    const NOW_SECONDS = Math.floor(Date.now() / 1000);
    const HOUR_SECONDS = 60 * 60;
    const DAY_SECONDS = HOUR_SECONDS * 24;
    const WEEK_SECONDS = DAY_SECONDS * 7;
    const MONTH_SECONDS = WEEK_SECONDS * 31;
    let startTime = NOW_SECONDS;

    if (mode == 0) {
      startTime = NOW_SECONDS - HOUR_SECONDS;
    }

    if (mode == 1) {
      startTime = NOW_SECONDS - DAY_SECONDS;
    }

    if (mode == 2) {
      startTime = NOW_SECONDS - WEEK_SECONDS;
    }

    if (mode == 3) {
      startTime = NOW_SECONDS - MONTH_SECONDS;
    }

    return data.filter(point => {
      return Number(point.x) > startTime;
    });
  };

  render() {
    const d = this.props.data;
    const mode = this.props.selected;
    const data = this.filterData(d, mode);

    /*
    console.log(data);
    console.log(
      data.map(point => {
        return this.formatDate(point.x, mode);
      })
    );
    */
    return (
      <div>
        <Line
          data={{
            labels: data.map(point => {
              return this.formatDate(point.x, mode);
            }),
            datasets: [
              {
                label: "Timestamp",
                fill: false,
                lineTension: 0.2,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "#B39DDB",
                borderCapStyle: "round",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "#B39DDB",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "#B39DDB",
                pointHoverBorderWidth: 2,
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
                    display: true, //this will remove only the label
                    fontColor: "#c0c0c0"
                  },
                  gridLines: {
                    color: "#424242"
                  }
                }
              ],
              yAxes: [
                {
                  ticks: {
                    display: false //this will remove only the label
                  },
                  gridLines: {
                    color: "#424242"
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
