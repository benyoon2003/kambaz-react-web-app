import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/canvasDefault.png" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/canvasDefault.png" width={200} />
            <div>
              <h5> CS3650 Computer Systems </h5>
              <p className="wd-dashboard-course-title">
                Low level dev  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/canvasDefault.png" width={200} />
            <div>
              <h5> CS3000 Algo </h5>
              <p className="wd-dashboard-course-title">
                Algorithms dev  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/canvasDefault.png" width={200} />
            <div>
              <h5> ECE4972 Capstone </h5>
              <p className="wd-dashboard-course-title">
                ECE  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/canvasDefault.png" width={200} />
            <div>
              <h5> EECE2520 Linear Systems </h5>
              <p className="wd-dashboard-course-title">
                Electrical Engineer  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/canvasDefault.png" width={200} />
            <div>
              <h5> DS3000 Data Science </h5>
              <p className="wd-dashboard-course-title">
                Data scientist  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/1234/Home"
                className="wd-dashboard-course-link" >
            <img src="/images/canvasDefault.png" width={200} />
            <div>
              <h5> Pancake making class </h5>
              <p className="wd-dashboard-course-title">
                Pancakes  </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
);}
