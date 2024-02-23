import { Link, useLocation } from "react-router-dom";
import "./index.css";

const CourseNavigation = () => {
    const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];
    const { pathname } = useLocation();
    return (
    <ul className="wd-course-navigation">
        {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
            <Link to={link}>{link}</Link>
        </li>
        ))}
    </ul>
    );
};

export default CourseNavigation;