import React from "react";
import './Dashboard.css'
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import Requests from './Requests';
import Calander from './Calander';
import Cards from './Cards';
import Book from "../../assets/images/book2.png";
import Std from "../../assets/images/std.png";
import Teach from "../../assets/images/teach.png";

const cardArr = [
  { img: Book, title: "Courses", navigate: "" },
  { img: Std, title: "Students", navigate: "" },
  { img: Teach, title: "Teachers", navigate: "" },
  
  // { img: Teach, title: "Teachers", navigate: "" },
];
const Dashboard = () => {
  console.log(cardArr,' dash ')

  return (
    <div>
      {/* <Sidebar /> */}
      <Navbar /> 
      <div className="right-page">
       <div className="content">
        <div className="dashboardContent">
        <div className="cards"> 
        <Cards cardArr={cardArr} />
        </div>
        {/* <div className="calender"> <Calander /></div> */}
        <div className="requests"> <Requests /></div>
        </div>
        
       </div>
      </div>
    </div>
  );
};

export default Dashboard;
