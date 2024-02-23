import { FaBan, FaBell, FaCheckCircle, FaFileImport } from "react-icons/fa";
import Modules from "../Modules";
import { GiBullseye } from "react-icons/gi";
import { MdBarChart } from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";


function Home() {
  return (
    <div className="d-flex">
      <Modules />
      <div className="flex-grow-0 d-none d-lg-block p-2" style={{width: "300px"}}>
            <div className="row p-2">
              <h3>Course Status</h3>
              <div className="col">
                <button
                  className="btn btn-secondary wd-secondary-btn w-100"
                  type="button"
                >
                  <FaBan size={12}/> Unpublish
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-success w-100"
                  type="button"
                >
                  <FaCheckCircle /> Published
                </button>
              </div>
            </div>
            <div className="row p-2 m-2">
              <ul id="wd-course-status">
                <li className="btn btn-secondary wd-secondary-btn w-100">
                <FaFileImport className="m-1" />
                  <a href="#">Import Existing Content</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                <FaFileImport className="m-1" />
                  <a href="#">Import From Commons</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                <GiBullseye className="m-1" />
                  <a href="#">Choose Home Page</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                <MdBarChart className="m-1" />
                  <a href="#">View Course Stream</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                <TfiAnnouncement className="m-1" />
                  <a href="#">New Announcement</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                <MdBarChart className="m-1" />
                  <a href="#">New Analytics</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                <FaBell className="m-1"/>
                  <a href="#">View Course Notifications</a>
                </li>
              </ul>
            </div>

            <div className="wd-coming-up-section">
              <h2>Coming Up</h2>
              <hr />
              <a href="#">View Calender</a>
              <ul className="">
                <li>
                  <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
                </li>
                <li>
                  <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
                </li>
                <li><a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a></li>
              </ul>
            </div>
      </div>
    </div>
  );
}
export default Home;