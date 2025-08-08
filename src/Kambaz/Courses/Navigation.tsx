import { Link, useParams, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((linkName) => {
        const linkPath = `/Kambaz/Courses/${cid}/${linkName}`;
        const isActive = pathname === linkPath;

        return (
          <Link
            key={linkName}
            to={linkPath}
            id={`wd-course-${linkName.toLowerCase()}-link`}
            className={`list-group-item border-0 ${isActive ? "active" : "text-danger"
              }`}
          >
            {linkName}
          </Link>
        );
      })}
    </div>
  );
}
