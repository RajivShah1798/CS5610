import ModuleList from "./List";
import { FaEllipsisV } from "react-icons/fa";
function Modules() {
  return (
    <div className="flex-fill">
      <div className="row justify-content-end align-items-center p-2">
              <div className="col-auto">
                <button
                  className="btn btn-secondary wd-secondary-btn"
                  type="button"
                >
                  Collapse All
                </button>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-secondary wd-secondary-btn"
                  type="button"
                >
                  View Progress
                </button>
              </div>
              <div className="col-auto">
                <select className="form-select">
                  <option value="default" selected>Select an Option</option>
                  <option value="publishAll">Publish All</option>
                </select>
              </div>
              <div className="col-auto">
                <button className="btn btn-danger" type="button">+ Module</button>
              </div>
              <div className="col-auto">
                <button
                  className="btn btn-secondary wd-secondary-btn"
                  type="button"
                >
                  <FaEllipsisV/>
                </button>
              </div>
            </div>
            <hr />
      <ModuleList />
    </div>
  );
}
export default Modules;