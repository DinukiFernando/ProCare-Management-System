import React, { useEffect, useState } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const BarChart = () => {
  const [monthlyPayments, setMonthlyPayments] = useState([]);

  useEffect(() => {
    fetchMonthlyPayments();
  }, []);

  const fetchMonthlyPayments = async () => {
    try {
      const response = await fetch("http://localhost:4000/monthly-payment-details");
      const data = await response.json();
      setMonthlyPayments(data);
    } catch (error) {
      console.error("Error fetching monthly payments:", error);
    }
  };

  const prepareChartData = () => {
    const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug"];
    const sums = Array(8).fill(0);
  
    monthlyPayments.forEach((payment) => {
      const monthIndex = new Date(payment.date).getMonth();
      sums[monthIndex] += payment.amount;
    });
  
    const chartData = [
      {
        name: "Payments",
        data: sums,
      },
    ];
  
    return chartData;
  };
  

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

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Monthly Payments</CardTitle>
        <Chart
          type="bar"
          width="100%"
          height="390"
          options={chartOptions}
          series={prepareChartData()}
        />
      </CardBody>
    </Card>
  );
};

export default BarChart;
