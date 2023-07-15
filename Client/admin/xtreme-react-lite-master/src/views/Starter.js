import { Col, Row } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import BarChart from "../components/dashboard/BarChart";
import PieChart from "../components/dashboard/PieChart";
import TopCards from "../components/dashboard/TopCards";
import Feeds from "../components/dashboard/Feeds";


const Starter = () => {
  return (
    <div>
      {/***Top Cards***/}
      <Row>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-success text-success"
            title="Doctors"
            subtitle="Doctors"
            earning="4"
            icon="bi bi-wallet"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-danger text-danger"
            title="Nurses"
            subtitle="Nurses"
            earning="15"
            icon="bi bi-coin"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-warning text-warning"
            title="Patients"
            subtitle="Patients"
            earning="45"
            icon="bi bi-basket3"
          />
        </Col>
        <Col sm="6" lg="3">
          <TopCards
            bg="bg-light-info text-into"
            title="Rooms"
            subtitle="Rooms"
            earning="50"
            icon="bi bi-bag"
          />
        </Col>
      </Row>
      <Row>
        <Col sm="6" lg="6" xl="6" xxl="6"><SalesChart /></Col>
        <Col sm="6" lg="6" xl="6" xxl="6"><BarChart /></Col>
      </Row>
      <Row>
        <Col sm="6" lg="6" xl="6" xxl="6"><PieChart /></Col>
        <Col sm="6" lg="6" xl="6" xxl="6"><Feeds /></Col>
        
      </Row> 
      {/***Table ***/}
      {/* <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row> */}
    </div>
  );
};

export default Starter;
