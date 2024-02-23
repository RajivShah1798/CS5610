import { assignments, courses } from "../Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";

const Courses = () => {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  var path_split = pathname.split("/");
  const path_last = path_split.pop();
  const path_second_last = path_split.pop();
  var assignment;
  if (path_second_last === "Assignments") {
    assignment = assignments.find(
      (assignment) =>
        assignment._id === path_last && assignment.course === courseId
    );
  }

  return (
    <div className="container-fluid">
      <div className="d-none d-md-flex flex-row p-1 m-1 align-items-center">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb wd-breadcrumb">
            <HiMiniBars3 size={30} />
            <li>
              <i className="fa fa-solid fa-bars wd-breadcrumb wd-ham-menu"></i>
            </li>
            <li className="breadcrumb-item wd-bc-item">
              <a href="#">{course?.name}</a>
            </li>
            {path_second_last === "Assignments" ? (
              <>
                <li className="breadcrumb-item" aria-current="page">
                  <a className="wd-bc-item" href="#">
                    {path_second_last}
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  <a className="wd-bc-item-active" href="#">
                    {assignment?.title}
                  </a>
                </li>
              </>
            ) : (
              <li className="breadcrumb-item active" aria-current="page">
                <a className="wd-bc-item-active" href="#">
                  {path_last}
                </a>
              </li>
            )}
          </ol>
        </nav>
      </div>
      <hr />
      <h6 className="m-2">{course?.name}</h6>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "100px" }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Courses;
