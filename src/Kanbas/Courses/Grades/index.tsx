import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { FaFilter, FaFileImport, FaFileExport } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div>
      <div
        className="d-flex"
      >
        <div style={{ display: "flex-row", flexGrow: "1"}}>
          <button className="btn btn-secondary wd-secondary-btn m-2 float-end">
            <span>
              <IoMdSettings size={20}/>
            </span>
          </button>
          <button className="btn btn-secondary wd-secondary-btn m-2 float-end">
          <span style={{paddingRight:"5px"}}>
            <FaFileExport />
            </span>
            Export
          </button>
          <button className="btn btn-secondary wd-secondary-btn m-2 float-end">
            <span style={{paddingRight:"5px"}}>
            <FaFileImport />
            </span>
            Import
          </button>
        </div>
      </div>

      <br />

      <div className="row pb-4">
        <div className="col-6">
          <h4>Student Names</h4>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ padding: "12px" }}
              >
                <IoIosSearch />
              </span>
            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Search Students</option>
            </select>
          </div>
        </div>
        <div className="col-6">
          <h4>Assignment Names</h4>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ padding: "12px" }}
              >
                <IoIosSearch />
              </span>
            </div>
            <select className="form-select" aria-label="Default select example">
              <option selected>Search Students</option>
            </select>
          </div>
        </div>
      </div>
      <button className="btn btn-secondary wd-secondary-btn">
        <span>
          <FaFilter />
        </span>
        Apply Filter
      </button>
      <hr />
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="wd-table-header">
            <th>Student Name</th>
            {as.map((assignment) => (
              <th>{assignment.title}</th>
            ))}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                  <td style={{color:"red"}}>
                    {user?.firstName} {user?.lastName}
                  </td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) =>
                        grade.student === enrollment.user &&
                        grade.assignment === assignment._id
                    );
                    return <td>{grade?.grade || ""}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Grades;
