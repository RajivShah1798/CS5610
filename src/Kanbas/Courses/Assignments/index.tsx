import { useState } from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { Modal } from "react-bootstrap";
import { deleteAssignment, selectAssignment } from "./assignmentsReducer";
function Assignments() {

  const { courseId } = useParams();
  const dispatch = useDispatch();
  const assignmentList = useSelector((state: KanbasState) =>
  state.assignmentsReducer.assignments).filter(
    (assignment) => assignment.course === courseId);

  const assignment = useSelector((state: KanbasState) => state.assignmentsReducer.assignment);
    
  const navigate = useNavigate();
  function createAssignment() {
    const newAssignmentId = new Date().getTime().toString();
    console.log(newAssignmentId);
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${newAssignmentId}`);
  }

  console.log(assignmentList);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <button  className="btn btn-danger" type="button"
            onClick={createAssignment}>+ Assignment</button>
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
                  <button className="btn btn-danger"
                  onClick={() => {handleShow();
                  dispatch(selectAssignment(assignment))}}>Delete Assignment</button>
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>
        </li>
      </ul>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Assignment {assignment?._id}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this Assignment?</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-danger" onClick={() => {
            handleClose();
            dispatch(deleteAssignment(assignment._id));
          }}>
            Delete
          </button>
          <button className="btn btn-secondary" onClick={handleClose}>
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
);}
export default Assignments;