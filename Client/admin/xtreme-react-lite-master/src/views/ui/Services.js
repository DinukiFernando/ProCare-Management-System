import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Row,
  Col,
  Button,
} from "reactstrap";

import a1 from "../../assets/images/bg/na1.jpg";
import a2 from "../../assets/images/bg/a2.png";
import a3 from "../../assets/images/bg/a3.png";
import a4 from "../../assets/images/bg/a4.jpg";
import a5 from "../../assets/images/bg/a5.png";
import a6 from "../../assets/images/bg/na6.jpg";


const Cards = () => {
  return (
    <div> 
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <CardImg alt="Card image cap" src={a1} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Home Nursing Services</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                At St. Annes Nursing Home, we take priority in offering home care services for the patients 
                in need. Our establishment was founded to fill the void in home nursing. An extensive range 
                of home care services are fulfilled by our team of professionals.
                </CardText>
              </CardBody>
              <div className="d-flex align-items-center">
              <Button className="btn" outline color="success">View</Button>
                <Button className="btn" outline color="warning">Edit</Button>
                <Button className="btn" outline color="danger">Delete</Button>
              </div>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={a2} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Industrial Nursing Services</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                We have extended our hands in industrial nursing services to fulfill health needs of the 
                employees within industrial and commercial establishment. We offer a plethora of services 
                from treating injuries up to organizing medical campaigns to contribute for health service.
                </CardText>
              </CardBody>
              <div className="d-flex align-items-center">
              <Button className="btn" outline color="success">View</Button>
                <Button className="btn" outline color="warning">Edit</Button>
                <Button className="btn" outline color="danger">Delete</Button>
              </div>
                
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={a3} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Doctor on call 24x7</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                We deliver on call home care doctor visits by experienced and trained doctors for emergency 
                situations and routine check ups.Our patients can avail the services of our health care 
                specialists within the comfort of their home instead of the trouble of visiting the doctor 
                at the clinic.
                </CardText>
              </CardBody>
              <div className="d-flex align-items-center">
              <Button className="btn" outline color="success">View</Button>
                <Button className="btn" outline color="warning">Edit</Button>
                <Button className="btn" outline color="danger">Delete</Button>
              </div>
            </Card>
          </CardGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <CardImg alt="Card image cap" src={a4} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Ambulance Services</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                Our 24 hour ambulance service is equipped with qualified doctors and paramedics along with 
                cutting edge emergency equipment and is available on all days of the week. We are your reliable 
                partner for pre- hospital treatments during medical emergency.
                </CardText>
              </CardBody>
              <div className="d-flex align-items-center">
              <Button className="btn" outline color="success">View</Button>
                <Button className="btn" outline color="warning">Edit</Button>
                <Button className="btn" outline color="danger">Delete</Button>
              </div>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={a5} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Medical Camp</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                Comprehensive and cost-effective medical care to ensure the health and wellbeing of your 
                employees. We offer tailor-made plans to suit the healthcare requirements of your employees.
                </CardText>
              </CardBody>
              <div className="d-flex align-items-center">
              <Button className="btn" outline color="success">View</Button>
                <Button className="btn" outline color="warning">Edit</Button>
                <Button className="btn" outline color="danger">Delete</Button>
              </div>
            </Card>
            <Card>
              <CardImg alt="Card image cap" src={a6} top width="100%" />
              <CardBody>
                <CardTitle tag="h5">Other Services</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                A range of professional medical services at your convenience for the overall health and 
                well-being of you and your loved ones.
                </CardText>
              </CardBody>
              <div className="d-flex align-items-center">
              <Button className="btn" outline color="success">View</Button>
                <Button className="btn" outline color="warning">Edit</Button>
                <Button className="btn" outline color="danger">Delete</Button>
              </div>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
