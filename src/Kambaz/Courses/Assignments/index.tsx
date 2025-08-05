import { useParams, useNavigate } from "react-router";
import { ListGroup, InputGroup, FormControl, Button, Modal } from "react-bootstrap";
import { FaPlus, FaSearch, FaBook, FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import * as assignmentClient from "./client";
import { useState } from "react";

export default function Assignments() {
  const { cid } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);

  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<any>(null);

  const courseAssignments = assignments.filter((a: any) => a.course === cid);

  const handleAddAssignment = () => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/new`);
  };

  const handleDeleteClick = (assignment: any) => {
    setAssignmentToDelete(assignment);
    setShowDeleteDialog(true);
  };

  const handleConfirmDelete = () => {
    if (assignmentToDelete) {
      assignmentClient.deleteAssignment(assignmentToDelete._id);
    }
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowDeleteDialog(false);
    setAssignmentToDelete(null);
  };

  const handleEditAssignment = (assignmentId: string) => {
    navigate(`/Kambaz/Courses/${cid}/Assignments/${assignmentId}`);
  };

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
        
        {currentUser?.role === "FACULTY" && (
          <div className="d-flex gap-2">
            <Button variant="light" className="text-danger border border-secondary" id="wd-add-assignment-group">
              <FaPlus className="me-1" /> Group
            </Button>
            <Button variant="danger" id="wd-add-assignment" onClick={handleAddAssignment}>
              <FaPlus className="me-1" /> Assignment
            </Button>
          </div>
        )}
      </div>
      
      <h5 className="fw-bold d-flex align-items-center justify-content-between">
        ASSIGNMENTS <span className="text-secondary">{courseAssignments.length * 10}% of Total</span>
        {currentUser?.role === "FACULTY" && (
          <Button variant="light" size="sm" onClick={handleAddAssignment}>
            <FaPlus />
          </Button>
        )}
      </h5>
      
      <ListGroup className="mt-3">
        {courseAssignments.map((assignment: any) => (
          <ListGroup.Item
            key={assignment._id}
            className="border-start border-5 border-success mb-2"
          >
            <div className="d-flex justify-content-between align-items-start">
              <div className="flex-grow-1">
                <div className="fw-semibold fs-6 text-primary">
                  <FaBook className="me-2" />
                  <span
                    onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`)}
                    className="text-decoration-none text-dark"
                    style={{ cursor: 'pointer' }}
                  >
                    {assignment.title}
                  </span>
                </div>
                <div className="text-muted small mt-1">
                  Assignment ID: {assignment._id}
                </div>
              </div>

              {currentUser?.role === "FACULTY" && (
                <div className="d-flex gap-2">
                  <Button
                    variant="link"
                    size="sm"
                    className="text-primary p-0"
                    onClick={() => handleEditAssignment(assignment._id)}
                  >
                    <FaPencil />
                  </Button>
                  <Button
                    variant="link"
                    size="sm"
                    className="text-danger p-0"
                    onClick={() => handleDeleteClick(assignment)}
                  >
                    <FaTrash />
                  </Button>
                </div>
              )}
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showDeleteDialog} onHide={handleCancelDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to remove the assignment "{assignmentToDelete?.title}"?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}