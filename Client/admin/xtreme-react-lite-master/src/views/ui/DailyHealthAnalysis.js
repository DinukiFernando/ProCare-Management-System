import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

import user1 from "../../assets/images/users/user1.jpg";

const tableData = [
  {
    id: "PCDT01",
    avatar: user1,
    name: "John Doe",
    gender: "Male",
    age: 25,
    phone: "1234567890",
    address: "123, Street Name, City",
    healthData: {
      heartRate: 75,
      temperature: 98.6,
      sugarLevel: 120,
      bloodPressure: {
        systolic: 120,
        diastolic: 80,
      },
    },
  },
  // Add more table data as needed
];

const DailyHealthAnalysis = () => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const filterData = (searchTerm) => {
    const filtered = tableData.filter((data) => {
      const id = data.id.toLowerCase();
      return id.includes(searchTerm);
    });

    setFilteredData(filtered);
  };

  const handleIdSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    filterData(searchTerm);
  };

  const handleViewData = (index) => {
    setSelectedPatient(filteredData[index]);
  };

  const handleCloseData = () => {
    setSelectedPatient(null);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="btn" color="primary" size="lg">
          Add a Daily Health Analysis
        </Button>
      </div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Patients</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Daily Health Analysis
          </CardSubtitle>

          <input
            type="text"
            placeholder="Search by ID..."
            onChange={handleIdSearch}
          />

          <Table className="no-wrap mt-4 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Patient Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Manage</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.id}</td>
                  <td>{tdata.name}</td>
                  <td>{tdata.gender}</td>
                  <td>
                    <Button
                      className="btn"
                      outline
                      color="success"
                      onClick={() => handleViewData(index)}
                    >
                      View
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      {selectedPatient && (
        <Card>
          <CardBody>
            <CardTitle tag="h5">Health Data for {selectedPatient.name}</CardTitle>
            <Button
              className="btn"
              outline
              color="secondary"
              onClick={handleCloseData}
            >
              Close
            </Button>

            <BarChart
              width={500}
              height={300}
              data={[
                {
                  name: "Heart Rate",
                  value: selectedPatient.healthData.heartRate,
                },
                {
                  name: "Temperature",
                  value: selectedPatient.healthData.temperature,
                },
                {
                  name: "Sugar Level",
                  value: selectedPatient.healthData.sugarLevel,
                },
                {
                  name: "Blood Pressure",
                  value: selectedPatient.healthData.bloodPressure.systolic,
                },
              ]}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default DailyHealthAnalysis;
