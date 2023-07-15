import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const tableData = [
  {
    id: "PCDT01",
    name: "John Doe",
    timetable: [
      { time: "09:00 AM", task: "Medication" },
      { time: "11:00 AM", task: "Physical Therapy" },
      { time: "02:00 PM", task: "Check-up" },
    ],
  },
  // Add more table data as needed
];

const CarePlan = () => {
  const [filteredData, setFilteredData] = useState(tableData);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newTask, setNewTask] = useState({ time: "", task: "" });

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

  const handleViewTimetable = (index) => {
    setSelectedAppointment(filteredData[index]);
  };

  const handleEditTask = (index) => {
    // Handle edit task logic here
    console.log("Edit task:", selectedAppointment.timetable[index]);
  };

  const handleDeleteTask = (index) => {
    // Handle delete task logic here
    const updatedTimetable = selectedAppointment.timetable.filter(
      (_, i) => i !== index
    );
    setSelectedAppointment((prevState) => ({
      ...prevState,
      timetable: updatedTimetable,
    }));
  };

  const handleAddTask = () => {
    setSelectedAppointment((prevState) => ({
      ...prevState,
      timetable: [...prevState.timetable, newTask],
    }));
    setNewTask({ time: "", task: "" });
  };

  const handleCloseTimetable = () => {
    setSelectedAppointment(null);
  };

  const handleNewTaskChange = (event, field) => {
    setNewTask((prevState) => ({
      ...prevState,
      [field]: event.target.value,
    }));
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button className="btn" color="primary" size="lg">
          Add a Care Plan
        </Button>
      </div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Patients</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Care Plan
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
                      onClick={() => handleViewTimetable(index)}
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

      {selectedAppointment && (
        <Card>
          <CardBody>
            <CardTitle tag="h5">Timetable</CardTitle>
            <Button
              className="btn"
              outline
              color="secondary"
              onClick={handleCloseTimetable}
            >
              Close
            </Button>

            <Table className="no-wrap mt-4 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Task</th>
                  <th>Manage</th>
                </tr>
              </thead>
              <tbody>
                {selectedAppointment.timetable.map((task, index) => (
                  <tr key={index} className="border-top">
                    <td>{task.time}</td>
                    <td>{task.task}</td>
                    <td>
                      <Button
                        className="btn"
                        outline
                        color="warning"
                        onClick={() => handleEditTask(index)}
                      >
                        Edit
                      </Button>
                      <Button
                        className="btn"
                        outline
                        color="danger"
                        onClick={() => handleDeleteTask(index)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

            <div className="mt-4">
              <input
                type="text"
                placeholder="Time"
                value={newTask.time}
                onChange={(e) => handleNewTaskChange(e, "time")}
              />
              <input
                type="text"
                placeholder="Task"
                value={newTask.task}
                onChange={(e) => handleNewTaskChange(e, "task")}
              />
              <Button
                className="btn"
                outline
                color="primary"
                onClick={handleAddTask}
              >
                Add Task
              </Button>
            </div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default CarePlan;
