import Modules from "../Modules";


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
                  <i className="fa fa-ban"></i> Unpublish
                </button>
              </div>
              <div className="col">
                <button
                  className="btn btn-success w-100"
                  type="button"
                >
                  <i className="fa fa-check-circle text-success"></i> Published
                </button>
              </div>
            </div>
            <div className="row p-2 m-2">
              <ul id="wd-course-status">
                <li className="btn btn-secondary wd-secondary-btn w-100">
                  <i className="fa fa-file-image-o"></i>
                  <a href="#">Import Existing Content</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                  <i className="fa fa-file-image-o"></i>
                  <a href="#">Import From Commons</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                  <i className="fa fa-bullseye"></i>
                  <a href="#">Choose Home Page</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                  <i className="fa fa-bar-chart"></i>
                  <a href="#">View Course Stream</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                  <i className="fa fa-microphone"></i>
                  <a href="#">New Announcement</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                  <i className="fa fa-bar-chart"></i>
                  <a href="#">New Analytics</a>
                </li>
                <li className="btn btn-secondary wd-secondary-btn w-100">
                  <i className="fa fa-bell"></i>
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