import React, { useState, useEffect } from "react";
import { Button, Row, Col, Table, Card, CardTitle, CardBody, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Alert } from "reactstrap";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingRoomId, setEditingRoomId] = useState(null);
  const [editingOccupantInfo, setEditingOccupantInfo] = useState("");
  const [editingRoomStatus, setEditingRoomStatus] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch("http://localhost:4000/room-details");
      const data = await response.json();
      setRooms(data);
    } catch (error) {
      console.error("Error fetching rooms:", error);
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
    setEditingRoomId(null);
    setEditingOccupantInfo("");
    setEditingRoomStatus("");
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleEditRoom = (room) => {
    setEditingRoomId(room.room_id);
    setEditingOccupantInfo(room.OccupantInfo);
    setEditingRoomStatus(room.roomStatus);
    setModalOpen(true);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/room-details/${editingRoomId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          OccupantInfo: editingOccupantInfo,
          roomStatus: editingRoomStatus,
        }),
      });

      if (response.ok) {
        // Room updated successfully
        fetchRooms();
        toggleModal();
        setSuccessMessage('Room updated successfully!');
      } else {
        throw new Error('Failed to update room. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to update room. Please try again.');
    }
  };

  return (
    <div>
      <Row>
        <Col lg="12">
          <Card>
            <CardTitle tag="h6" className="border-bottom p-3 mb-0">
              <i className="bi bi-card-text me-2"> </i>
              Room Management
            </CardTitle>
            <CardBody>
              <Table bordered hover>
                <thead>
                  <tr>
                    <th>Room ID</th>
                    <th>Room Type</th>
                    <th>Room Status</th>
                    <th>Floor</th>
                    <th>Occupant Information</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {rooms.map((room, index) => (
                    <tr key={index}>
                      <td>{room.room_id}</td>
                      <td>{room.roomType}</td>
                      <td>{room.roomStatus}</td>
                      <td>{room.floor}</td>
                      <td>{room.OccupantInfo}</td>
                      <td>
                        <Button className="btn" outline color="primary" onClick={() => handleEditRoom(room)}>
                          Edit
                        </Button>{" "}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{editingRoomId ? "Edit Room" : "Add a Room"}</ModalHeader>
        <ModalBody>
          {successMessage && <Alert color="success">{successMessage}</Alert>}
          {errorMessage && <Alert color="danger">{errorMessage}</Alert>}
          <Form onSubmit={handleFormSubmit}>
            <FormGroup>
              <Label for="OccupantInfo">Occupant Information</Label>
              <Input
                type="text"
                name="OccupantInfo"
                id="OccupantInfo"
                value={editingOccupantInfo}
                onChange={(e) => setEditingOccupantInfo(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="roomStatus">Room Status</Label>
              <Input
                type="text"
                name="roomStatus"
                id="roomStatus"
                value={editingRoomStatus}
                onChange={(e) => setEditingRoomStatus(e.target.value)}
              />
            </FormGroup>
            <ModalFooter>
              <Button color="primary" type="submit">
                {editingRoomId ? "Save Changes" : "Add Room"}
              </Button>{" "}
              <Button color="secondary" onClick={toggleModal}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default RoomList;
