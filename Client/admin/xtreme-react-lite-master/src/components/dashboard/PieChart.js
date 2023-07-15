import React from "react";
import { Card, CardBody,CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const PieChart = () => {
  const chartOptions = {
    chart: {
      type: "pie", // Changed to "pie"
    },
    labels: ["Elderly Patients", "Post-Surgical Patients", "Chronic Illness Patients", "Mental Health Patients", "Pediatric Patients", "Memory Care Patients"],
  };

  const chartSeries = [10, 12, 14, 15, 12, 6]; // Array of data points for the pie chart

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Patients group by the diagonsis </CardTitle>
        <Chart
          type="pie"
          width="100%"
          height="100%"
          options={chartOptions}
          series={chartSeries}
        />
      </CardBody>
    </Card>
  );
};

export default PieChart;
