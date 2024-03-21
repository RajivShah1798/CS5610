import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as db from "../Database";
import { Modal } from "react-bootstrap";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const [show, setShow] = useState(false);
  const [addUpdateFlag, setAddUpdateFlag] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="p-4">
      <h1>
        Dashboard
        <button className="btn btn-success float-end" onClick={() =>{
          setAddUpdateFlag(true);
          handleShow();
        }}>
          Add New Course
        </button>
      </h1>
      <hr />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ addUpdateFlag === false ? "Update " : "Add New " } Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <button
          { ...addUpdateFlag === false ? { disabled: true } : {} }
            className="btn btn-success w-25 m-2"
            onClick={() => {
              addNewCourse();
              setShow(false);
            }}
          >
            Add
          </button>
          <button
          { ...addUpdateFlag ? { disabled: true } : {} }
            className="btn btn-primary float-end w-25 m-2"
            onClick={() => {
              updateCourse();
              setShow(false);
            }}
          >
            Update
          </button>
        </Modal.Footer>
      </Modal>
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map(
            (course: {
              _id: string;
              image: string;
              name: string;
              number: string;
              startDate: string;
              endDate: string;
            }) => (
              <div key={course._id} className="col" style={{ width: 300 }}>
                <div className="card">
                  <img
                    src={course.image}
                    className="card-img-top"
                    style={{ height: 150 }}
                  />
                  <div className="card-body">
                    <Link
                      className="card-title"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      style={{
                        textDecoration: "none",
                        color: "navy",
                        fontWeight: "bold",
                      }}
                    >
                      {course.name}
                      <br />
                      <button
                        className="btn btn-warning m-2 p-2"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                          setAddUpdateFlag(false);
                          handleShow();
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger m-2 p-2 float-end"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
                    </Link>
                    <p className="card-text">{course.name}</p>
                    <Link
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      className="btn btn-primary w-100"
                    >
                      Go{" "}
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
