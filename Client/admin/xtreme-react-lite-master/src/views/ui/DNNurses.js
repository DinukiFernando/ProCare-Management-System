import {Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";

const tableData = [
  {
    id: "DHTR01",
    avatar: user1,
    name: "",
    gender: "",
    age: "",
    phone: "",
    addres: "",
    
  },
 

  
];

const Nurses = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Nurses</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            View Nurses' details
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Nurse Id</th>
                <th>Profile</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Contact Number</th>   
                <th>Address</th>
                <th>Specialty </th> 

              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
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
                      /></div></td>
                      
                  <td>{tdata.name}</td>
                  <td>{tdata.gender}</td>
                  <td>{tdata.age}</td>
                  <td></td>
                  <td></td>
                  <td>{tdata.phone}</td>
                  <td>{tdata.addres}</td>
                  
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Nurses;
