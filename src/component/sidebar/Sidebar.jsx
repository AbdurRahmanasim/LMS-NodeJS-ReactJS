import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./sidebar.css";

// const sidebarNavItemsMain = [
//   {
//     display: "Dashboard",
//     icon: <i className="bx bx-home"></i>,
//     to: "/",
//     section: "",
//   },
//   {
//     display: "Coueses",
//     icon: <i className="bx bx-book"></i>,
//     to: "/addCourse",
//     section: "coueses",
//   },
//   {
//     display: "Teacher",
//     icon: <i className="bx bx-edit"></i>,
//     to: "/addTeacher",
//     section: "teacher",
//   },
//   {
//     display: "Student",
//     icon: <i className="bx bx-user"></i>,
//     to: "/addStudent",
//     section: "student",
//   },
//   {
//     display: "Logout",
//     icon: <i className="bx bx-log-out"></i>,
//     to: "/logout",
//     section: "logout",
//   },
// ];

const Sidebar = ({sidebarNavItems,setUser}) => {
  // console.log(sidebarNavItems,'sidebar.js')
  // console.log(sidebarNavItemsMain,'Main  sidebar.js')
  const [activeIndex, setActiveIndex] = useState(0);
 useEffect(()=>{
  console.log("useEffect  ",activeIndex);
 });
  // change active index

  return (
    <div className="sidebar">
      <div className="sidebar__logo">Animate</div>
      <div className="sidebar__menu">
      
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index}>
            <div
                onClick={()=>{
                  setActiveIndex(index)
                console.log(index)
                if(index == sidebarNavItems.length - 1){
                  console.log('length -1')
                  setUser(null);

                }
                }}
              className={`sidebar__menu__item ${activeIndex === index ? "active" : ""}`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
