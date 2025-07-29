import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname.includes(path);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-course-signin-link"
        className={`list-group-item border-0 ${
          isActive("Signin") ? "active" : "text-danger"
        }`}
      >
        Signin
      </Link>
      <br />
      <Link
        to="/Kambaz/Account/Signup"
        id="wd-course-signup-link"
        className={`list-group-item border-0 ${
          isActive("Signup") ? "active" : "text-danger"
        }`}
      >
        Signup
      </Link>
      <br />
      <Link
        to="/Kambaz/Account/Profile"
        id="wd-course-profile-link"
        className={`list-group-item border-0 ${
          isActive("Profile") ? "active" : "text-danger"
        }`}
      >
        Profile
      </Link>
    </div>
  );
}
