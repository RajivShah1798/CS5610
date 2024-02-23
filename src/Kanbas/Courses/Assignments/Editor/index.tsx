import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment?.title}
             className="form-control mb-2" />
            <br/><br/>
            
            <textarea className="form-control" name="bio" cols={20} rows={3}>This is the assignment description</textarea><br/>
            
            <div className="row align-items-top pb-3">
                <div className="col-3 text-end">
                    <label htmlFor="points">Points</label>
                </div>
                <div className="col-9">
                    <input className="form-control" type="number" value="100" />
                </div>
            </div>

            <div className="row align-items-top pb-3">
                <div className="col-3 text-end">
                    <label htmlFor="as-groups">Assignment Group</label>
                </div>
                <div className="col-9">
                    <select className="form-select" name="assignment-groups" id="as-groups">
                        <option value="assignments" selected>ASSIGNMENTS</option>
                        <option value="quizzes" >QUIZZES</option>
                        <option value="exams" >EXAMS</option>
                        <option value="projects" >PROJECTS</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-top pb-3">
                <div className="col-3 text-end">
                    <label htmlFor="display-as">Display Grade as</label>
                </div>
                <div className="col-9">
                    <select className="form-select" name="display-as" id="disp-as-groups">
                        <option value="assignments" selected>PERCENTAGE</option>
                        <option value="quizzes" >POINTS</option>
                    </select>
                </div>
            </div>
            <div className="row align-items-top pb-3">
                <div className="col-3">

                </div>
                <div className="col-9">
                    <label>
                        <input type="checkbox" id="wd-count-towards-grade"/> Do not count this assignment towards final grade
                    </label>
                </div>
            </div>

            <div className="row align-items-top pb-3">
                <div className="col-3 text-end">
                    <label>Assign</label>
                </div>
                <div className="col-9">
                    <div className="wd-assign-container" style={{border:"1px solid lightgray", borderRadius: "4px", width: "500px", padding:"20px"}}>
                        <b>Assign to</b>
                        <div className="wd-assign-to-container" style={{border:"1px solid lightgray", borderRadius: "4px", width: "400px", padding:"2px"}}>
                            <button className="btn" style={{border: "1px solid lightgray"}}>
                                Everyone <span className="p-2">X</span>
                            </button>
                        </div>
                        <b style={{paddingTop: "4px"}}>Due</b>
                        <input className="form-control" type="date" name="" id=""/>
                        <div className="row">
                            <div className="col-6">
                                <b style={{paddingTop: "4px"}}>Available from</b>
                                <input className="form-control" type="date" name="" id=""/>
                            </div>
                            <div className="col-6">
                                <b style={{paddingTop: "4px"}}>Until</b>
                                <input className="form-control" type="date" name="" id=""/>
                            </div>
                        </div>
                        <div className="row p-2">
                            <button className="btn btn-secondary w-100">
                                + Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
      </div>
  );
}
export default AssignmentEditor;