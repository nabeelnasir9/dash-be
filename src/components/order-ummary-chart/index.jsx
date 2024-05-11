import React from "react";
import Chart from "react-apexcharts";

class OrderSummaryChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "#fff",
          foreColor: "#858D9D",
        },
        colors: ["#DBA362", "#B6D3FA"],
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
          ],
        },
        // stroke: {
        //   curve: "smooth",
        // },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            shadeIntensity: 0.5,
            gradientToColors: ["#DF9B2D11", "#C5A67411"],
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.8,
            stops: [0, 100],
          },
        },
        stroke: {
          curve: "smooth",
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "",
          align: "center",
          margin: 20,
          offsetY: 20,
          style: {
            fontSize: "25px",
          },
        },
        tooltip: {
          theme: "dark",
        },
      },
      series: [
        {
          name: "Ordered",
          data: [1500, 2400, 3700, 400, 1000, 4500],
        },
        {
          name: "Delivered",
          data: [2100, 3800, 200, 2500, 3000, 3700],
        },
      ],
    };
  }

  render() {
    return (
      <div id="chart">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

export default OrderSummaryChart;
