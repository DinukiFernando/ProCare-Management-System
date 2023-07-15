import React, { useState } from "react";
import { Card, CardBody, CardTitle,CardSubtitle, Table } from "reactstrap";



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

const Insuarance = () => {
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
      <Card>
        <CardBody>
          <CardTitle tag="h5">Patients</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Insuarance details
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
                <th>Profile</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Guardian</th>
                <th>Contact Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>{tdata.id}</td>
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                    </div>
                  </td>
                  <td>{tdata.name}</td>
                  <td>{tdata.gender}</td>
                  <td>{tdata.age}</td>
                  <td></td>
                  <td></td>
                  <td>{tdata.phone}</td>
                  <td>{tdata.address}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Insuarance;
