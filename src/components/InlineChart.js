import React from "react";
import { Line } from "react-chartjs-2";

export class InlineChart extends React.Component {
  filterData = (data, mode = 0) => {
    const NOW_SECONDS = Math.floor(Date.now() / 1000);
    const HOUR_SECONDS = 60 * 60;
    const DAY_SECONDS = HOUR_SECONDS * 24;
    const WEEK_SECONDS = DAY_SECONDS * 7;
    const MONTH_SECONDS = WEEK_SECONDS * 31;
    let startTime = NOW_SECONDS;

    if (mode === 0) {
      startTime = NOW_SECONDS - HOUR_SECONDS;
    }

    if (mode === 1) {
      startTime = NOW_SECONDS - DAY_SECONDS;
    }

    if (mode === 2) {
      startTime = NOW_SECONDS - WEEK_SECONDS;
    }

    if (mode === 3) {
      startTime = NOW_SECONDS - MONTH_SECONDS;
    }

    return data.filter(point => {
      return Number(point.x) > startTime;
    });
  };

  render() {
    const exampleData = [
      { x: "1548519420", y: 12 },
      { x: "1548519720", y: 12 },
      { x: "1548520020", y: 12 },
      { x: "1548520320", y: 12 },
      { x: "1548520620", y: 12 },
      { x: "1548520920", y: 12 },
      { x: "1548521220", y: 12 },
      { x: "1548521520", y: 12 },
      { x: "1548521820", y: 12 },
      { x: "1548522120", y: 12 },
      { x: "1548522420", y: 12 },
      { x: "1548522720", y: 12 },
      { x: "1548523800", y: 12 },
      { x: "1548524100", y: 12 },
      { x: "1548524400", y: 12 },
      { x: "1548524700", y: 12 },
      { x: "1548525000", y: 12 },
      { x: "1548525300", y: 12 },
      { x: "1548525600", y: 12 },
      { x: "1548525900", y: 12 },
      { x: "1548526200", y: 12 },
      { x: "1548526500", y: 12 },
      { x: "1548526800", y: 12 },
      { x: "1548527100", y: 12 },
      { x: "1548527400", y: 12 },
      { x: "1548527700", y: 12 },
      { x: "1548528000", y: 12 },
      { x: "1548528300", y: 12 },
      { x: "1548528600", y: 12 },
      { x: "1548528900", y: 12 },
      { x: "1548529200", y: 12 },
      { x: "1548529500", y: 12 },
      { x: "1548529800", y: 12 },
      { x: "1548530100", y: 12 },
      { x: "1548530400", y: 12 },
      { x: "1548530700", y: 12 },
      { x: "1548531000", y: 12 },
      { x: "1548548640", y: 6 },
      { x: "1548548940", y: 30 },
      { x: "1548549000", y: 74 },
      { x: "1548549300", y: 98 },
      { x: "1548549600", y: 86 },
      { x: "1548549900", y: 42 },
      { x: "1548550140", y: 104 },
      { x: "1548550200", y: 115 },
      { x: "1548552060", y: 34 },
      { x: "1548552360", y: 100 },
      { x: "1548552660", y: 46 }
    ];
    const d = this.props.data || exampleData;
    const mode = this.props.selected;
    const testData = this.filterData(d, mode);

    return (
      <div>
        <Line
          data={{
            labels: [testData],
            datasets: [
              {
                fill: false,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "#B39DDB",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "#B39DDB",
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
