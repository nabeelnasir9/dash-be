import React from "react";
import ReactApexChart from "react-apexcharts";

class SalesAndPurchaseChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Purchase",
          data: [
            55000, 58000, 45000, 13000, 60000, 45000, 85000, 58000, 45000,
            13000, 60000, 45000,
          ],
        },
        {
          name: "Sales",
          data: [
            50000, 48000, 53000, 17000, 45000, 48000, 50000, 48000, 53000,
            17000, 45000, 48000,
          ],
        },
        // {
        //   name: "Science",
        //   data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        // },
      ],
      options: {
        colors: ["#79D0F1", "#46A46C"],
        grid: {
          row: {
            colors: ["#fff", "#fff", "#fff"],
          },
          //   column: {
          //     colors: ["red", "red", "red"],
          //   },
        },
        chart: {
          type: "bar",
          height: 350,
          fontFamily: "Inter",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
            borderRadius: 2,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
        yaxis: {},
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default SalesAndPurchaseChart;
