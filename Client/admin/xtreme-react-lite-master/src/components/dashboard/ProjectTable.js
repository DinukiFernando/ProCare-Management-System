import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";

const tableData = [
  {
    avatar: user1,
    name: "Hanna Gover",
    phone: "077 599 2880",
    doctor: "Hanna Gover",
    date: "05/03/2023",
    time: "08.00.00 am",
    payment: "pending",
    
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    phone: "077 599 2880",
    doctor: "Hanna Gover",
    date: "05/03/2023",
    time: "08.00.00 am",
    payment: "pending",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    phone: "077 599 2880",
    doctor: "Hanna Gover",
    date: "05/03/2023",
    time: "08.00.00 am",
    payment: "holt",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    phone: "077 599 2880",
    doctor: "Hanna Gover",
    date: "05/03/2023",
    time: "08.00.00 am",
    payment: "pending",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    phone: "077 599 2880",
    doctor: "Hanna Gover",
    date: "05/03/2023",
    time: "08.00.00 am",
    payment: "holt",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Appointments</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the Appointments
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Clients</th>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>   
                <th>Payment</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.doctor}</td>
                  <td>{tdata.date}</td>
                  <td>{tdata.time}</td>
                  <td>
                    {tdata.payment === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.payment === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
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

export default ProjectTables;
