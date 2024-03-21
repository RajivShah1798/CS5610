import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import { Modal } from "react-bootstrap";

function ModuleList() {
  const { courseId } = useParams();
  const [addUpdateFlag, setAddUpdateFlag] = useState(true);
  const modulesList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="flex-fill">
      <div className="row justify-content-end align-items-center p-2">
        <div className="col-auto">
          <button className="btn btn-secondary wd-secondary-btn" type="button">
            Collapse All
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary wd-secondary-btn" type="button">
            View Progress
          </button>
        </div>
        <div className="col-auto">
          <select className="form-select">
            <option value="default" selected>
              Select an Option
            </option>
            <option value="publishAll">Publish All</option>
          </select>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger" type="button" onClick={handleShow}>
            + Module
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Module</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <input
                className="form-control"
                value={module.name}
                onChange={(e) =>
                  dispatch(
                    setModule({
                      ...module,
                      name: e.target.value,
                    })
                  )
                }
              />
              <textarea
                className="form-control"
                value={module.description}
                onChange={(e) =>
                  dispatch(
                    setModule({ ...module, description: e.target.value })
                  )
                }
              ></textarea>
            </Modal.Body>
            <Modal.Footer>
              <button
              { ...addUpdateFlag === false ? { disabled: true } : {} }
                className="btn btn-success m-2 p-2"
                style={{ borderRadius: "6px" }}
                onClick={() => {
                  dispatch(addModule({ ...module, course: courseId }));
                  setShow(false);
                  }
                }
              >
                Add
              </button>
              <button
                { ...addUpdateFlag ? { disabled: true } : {} }
                className="btn btn-primary m-2 p-2"
                style={{ borderRadius: "6px" }}
                onClick={() => {
                  dispatch(updateModule(module));
                  setShow(false);
                }}
              >
                Update
              </button>
            </Modal.Footer>
          </Modal>
        </div>
        <div className="col-auto">
          <button className="btn btn-secondary wd-secondary-btn" type="button">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <hr />
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
        {modulesList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <button
                  className=" btn btn-danger m-2 p-2"
                  style={{ borderRadius: "6px" }}
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
                <button
                  className="btn btn-success m-2 p-2"
                  style={{ borderRadius: "6px" }}
                  onClick={(event) => {
                    dispatch(setModule(module));
                    setAddUpdateFlag(false);
                    setShow(true);
                  }}
                >
                  Edit
                </button>
                <span className="float-end m-2 p-2">
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map(
                    (lesson: { name: string }, index: string) => (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    )
                  )}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
