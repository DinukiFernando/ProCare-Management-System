import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const IncidentReportsChart = () => {
  const chartOptions = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug"],
    },
  };

  const chartSeries = [
    {
      name: "Incident Reports",
      data: [3, 8, 5, 12, 9, 7, 10, 6],
    },
  ];

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Incident Reports</CardTitle>
        <Chart
          type="bar"
          width="100%"
          height="390"
          options={chartOptions}
          series={chartSeries}
        />
      </CardBody>
    </Card>
  );
};

export default IncidentReportsChart;
