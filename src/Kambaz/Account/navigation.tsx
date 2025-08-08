import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  const isActive = (path: string) => location.pathname.includes(path);
  useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-course-signin-link"
        className={`list-group-item border-0 ${isActive("Signin") ? "active" : "text-danger"
          }`}
      >
        Signin
      </Link>
      <br />
      <Link
        to="/Kambaz/Account/Signup"
        id="wd-course-signup-link"
        className={`list-group-item border-0 ${isActive("Signup") ? "active" : "text-danger"
          }`}
      >
        Signup
      </Link>
      <br />
      <Link
        to="/Kambaz/Account/Profile"
        id="wd-course-profile-link"
        className={`list-group-item border-0 ${isActive("Profile") ? "active" : "text-danger"
          }`}
      >
        Profile
      </Link>
      <br />
      {currentUser && currentUser.role === "ADMIN" && (
        <Link to={`/Kambaz/Account/Users`} className={`list-group-item border-0 ${isActive("Users") ? "active" : "text-danger"
          } ${active("Users")}`}> Users </Link>)}
    </div>
  );
}
