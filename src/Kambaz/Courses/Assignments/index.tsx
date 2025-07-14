import { FaPlus, FaSearch } from "react-icons/fa";
import { ListGroup, InputGroup, FormControl, Button } from "react-bootstrap";
import { FaBook } from "react-icons/fa";

export default function Assignments() {
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
          <Button
            variant="light"
            className="text-danger border border-secondary"
            id="wd-add-assignment-group"
          >
            <FaPlus className="me-1" /> Group
          </Button>
          <Button
            variant="danger"
            id="wd-add-assignment"
          >
            <FaPlus className="me-1" /> Assignment
          </Button>
        </div>
      </div>

      <h5 className="fw-bold d-flex align-items-center justify-content-between">
        ASSIGNMENTS <span className="text-secondary">40% of Total</span>
        <Button variant="light" size="sm"><FaPlus /></Button>
      </h5>
      <ListGroup className="mt-3">
        {[
          {
            title: "A1 - ENV + HTML",
            info: "Multiple Modules | Not available until May 6 at 12:00 am | Due May 13 at 11:59 pm | 100 pts",
          },
          {
            title: "A2 - CSS + BOOTSTRAP",
            info: "Multiple Modules | Not available until May 13 at 12:00 am | Due May 20 at 11:59 pm | 100 pts",
          },
          {
            title: "A3 - JAVASCRIPT + REACT",
            info: "Multiple Modules | Not available until May 20 at 12:00 am | Due May 27 at 11:59 pm | 100 pts",
          },
        ].map((assignment, index) => (
          <ListGroup.Item
            key={index}
            className="border-start border-5 border-success mb-2"
          >
            <div className="fw-semibold fs-6 text-primary">
              <FaBook>
                
              </FaBook>
              <a
                href={`#/Kambaz/Courses/1234/Assignments/${index + 1}`}
                className="text-decoration-none text-dark"
              >
                {assignment.title}
              </a>
            </div>
            <div className="text-muted small mt-1">
              {assignment.info}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
