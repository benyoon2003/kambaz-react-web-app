import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
  <Row xs={1} md={5} className="g-4">
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS1234 React JS</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Full Stack software developer</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3650 Computer Systems</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Low level dev</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
   <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS3000 Algo</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Algo dev</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">Pancake making class</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Panckaes</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE4792 Capstone</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        ECE</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">DS3000 Data Science</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Data Scientist</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
      <Col className="wd-dashboard-course" style={{ width: "300px" }}>
    <Card>
     <Link to="/Kambaz/Courses/1234/Home"
           className="wd-dashboard-course-link text-decoration-none text-dark">
      <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160}/>
      <Card.Body>
       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">EECE2520 Linear Systems</Card.Title>
       <Card.Text  className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
        Electrical Engineering</Card.Text>
       <Button variant="primary">Go</Button>
      </Card.Body>
     </Link>
    </Card>
   </Col>
  </Row>
      </div>
    </div>
);}
