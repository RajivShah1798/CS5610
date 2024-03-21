import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addAssignment, deleteAssignment, updateAssignment, selectAssignment } from "./assignmentsReducer";
import { KanbasState } from "../../store";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = useSelector((state: KanbasState) =>
  state.assignmentsReducer.assignments).filter(
    (assignment) => assignment.course === courseId);
  return (
    <>
    <div className="row justify-content-end align-items-center p-2">
        <div className="col-auto">      
            <input className="form-control" type="text" placeholder="Search for Assignments" />
        </div>
        <div className="col-auto"> 
            <button className="btn btn-secondary wd-secondary-btn" type="button">+ Group</button>
        </div>
        <div className="col-auto"> 
            <button  className="btn btn-danger" type="button">+ Assignment</button>
        </div>
        <div className="col-auto"> 
            <select className="form-select">
                <option value="editAssignDates" selected>Edit Assignment Dates</option>
            </select>
        </div>
    </div>
      <hr />
      <ul className="list-group wd-modules">
        
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" /> ASSIGNMENTS
            <span className="float-end">
            <span className="badge p-2 rounded-pill bg-light text-dark">40% of Total</span>
              <FaCheckCircle className="text-success m-1" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaEllipsisV className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{color:"black"}}>{assignment.title}</Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
    </>
);}
export default Assignments;