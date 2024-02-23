import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsClockHistory } from "react-icons/bs";
import { MdAirplay } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { GiHelp } from "react-icons/gi";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label:"Inbox", icon: <IoIosMail className="fs-2" />},
    { label:"History", icon: <BsClockHistory className="fs-2" />},
    { label:"Studio", icon: <MdAirplay className="fs-2" />},
    { label:"Commons", icon: <TbSocial className="fs-2" />},
    { label:"Help", icon: <GiHelp className="fs-2 m-1" />},


  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
      <li><h1 className="wd-logo"><a href="http://northeastern.edu">N</a></h1></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : link.label.includes("Account") ? "wd-acc-ic": ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;