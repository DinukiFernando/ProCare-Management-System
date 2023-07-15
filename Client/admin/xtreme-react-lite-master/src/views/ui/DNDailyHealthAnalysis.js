import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle,CardSubtitle, Table } from "reactstrap";



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
  },
  // Add more table data as needed
];

const DailyHealthAnalysis = () => {
  const [filteredData, setFilteredData] = useState(tableData);

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
                  <Button className="btn" outline color="success">View</Button>
                    <Button className="btn" outline color="warning">
                      Edit
                    </Button>
                    <Button className="btn" outline color="danger">
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default DailyHealthAnalysis;
