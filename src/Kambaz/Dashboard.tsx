import { useState } from "react";
import { Link } from "react-router-dom";
import { FormControl } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Dashboard({courses, addNewCourse, deleteCourse, updateCourse}: {
  courses: any[];
  addNewCourse: (course: any) => void;
  deleteCourse: (course: any) => void;
  updateCourse: (course: any) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [showAllCourses, setShowAllCourses] = useState(false);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  const handleAddNewCourse = () => {
    addNewCourse(course);
    setCourse({
      _id: "1234",
      name: "New Course",
      number: "New Number",
      startDate: "2023-09-10",
      endDate: "2023-12-15",
      description: "New Description",
    });
  };

  const handleUpdateCourse = () => {
    updateCourse(course);
  };

  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />

      {currentUser?.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button className="btn btn-primary float-end" onClick={handleAddNewCourse} id="wd-add-new-course-click">
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={handleUpdateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            rows={3}
            as="textarea"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <hr />
        </>
      )}

      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowAllCourses(!showAllCourses)}
          id="wd-enrollments-btn"
        >
          {showAllCourses ? "My Courses" : "All Courses"}
        </button>
      </h2>
      <hr />

      <div className="row" id="wd-dashboard-courses">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course: any) => (
            <div key={course._id} className="col" style={{ width: "300px" }}>
              <div className="card">
                <img
                  src={course.image || "/images/reactjs.jpg"}
                  className="card-img-top"
                  alt={course.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>

                  <Link
                    to={`/Kambaz/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go
                  </Link>

                  {currentUser?.role === "FACULTY" && (
                    <>
                      <button
                        id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning me-2 float-end"
                      >
                        Edit
                      </button>
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
