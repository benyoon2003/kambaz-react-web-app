import { useParams } from "react-router";
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaPlus, FaSearch, FaBook } from "react-icons/fa";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter((a: any) => a.course === cid);

  return (
    <div id="wd-assignments" className="p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <InputGroup style={{ maxWidth: "300px" }}>
          <InputGroup.Text className="bg-white border-end-0">
            <FaSearch className="text-muted" />
          </InputGroup.Text>
          <FormControl
            placeholder="Search for Assignments"
            className="border-start-0"
            id="wd-search-assignment"
          />
        </InputGroup>

        <div className="d-flex gap-2">
          <Button variant="light" className="text-danger border border-secondary" id="wd-add-assignment-group">
            <FaPlus className="me-1" /> Group
          </Button>
          <Button variant="danger" id="wd-add-assignment">
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <h5 className="fw-bold d-flex align-items-center justify-content-between">
        ASSIGNMENTS <span className="text-secondary">{assignments.length * 10}% of Total</span>
        <Button variant="light" size="sm"><FaPlus /></Button>
      </h5>

      <ListGroup className="mt-3">
        {assignments.map((assignment: any) => (
          <ListGroup.Item
            key={assignment._id}
            className="border-start border-5 border-success mb-2"
          >
            <div className="fw-semibold fs-6 text-primary">
              <FaBook className="me-2" />
              <a
                href={`#/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                className="text-decoration-none text-dark"
              >
                {assignment.title}
              </a>
            </div>
            <div className="text-muted small mt-1">
              Assignment ID: {assignment._id}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
