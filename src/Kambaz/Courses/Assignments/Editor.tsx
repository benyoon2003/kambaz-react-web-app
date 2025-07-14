import { Form, Row, Col, Button } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label><h4>Assignment Name</h4></Form.Label>
          <Form.Control type="text" value="A1 - ENV + HTML" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Control
            as="textarea"
            rows={6}
            defaultValue={`The assignment is available online Submit a link to the landing page of your Web application...`}
          />
        </Form.Group>

        <Row className="mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>Points</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control type="number" value={100} />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>Assignment Group</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Select defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </Form.Select>
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>Display Grade as</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Select defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-3 align-items-start">
          <Col sm={2}>
            <Form.Label>Submission Type</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Select defaultValue="Online" className="mb-2">
              <option value="Online">Online</option>
            </Form.Select>

            <Form.Check type="checkbox" id="text-entry" label="Text Entry" />
            <Form.Check type="checkbox" id="website-url" label="Website URL" defaultChecked />
            <Form.Check type="checkbox" id="media-recordings" label="Media Recordings" />
            <Form.Check type="checkbox" id="student-annotation" label="Student Annotation" />
            <Form.Check type="checkbox" id="file-uploads" label="File Uploads" />
          </Col>
        </Row>
        <Row className="mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>Assign to</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control type="text" value="Everyone" />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>Due</Form.Label>
          </Col>
          <Col sm={10}>
            <Form.Control type="datetime-local" defaultValue="2024-05-13T23:59" />
          </Col>
        </Row>

        <Row className="mb-3 align-items-center">
          <Col sm={2}>
            <Form.Label>Available from</Form.Label>
          </Col>
          <Col sm={5}>
            <Form.Control type="datetime-local" defaultValue="2024-05-06T00:00" />
          </Col>
          <Col sm={1} className="text-end">
            <Form.Label>Until</Form.Label>
          </Col>
          <Col sm={4}>
            <Form.Control type="datetime-local" defaultValue="2024-05-20T00:00" />
          </Col>
        </Row>

        <div className="d-flex justify-content-end gap-2 mt-4">
          <Button variant="secondary">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
