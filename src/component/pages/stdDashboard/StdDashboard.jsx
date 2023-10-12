import React from 'react'
import './StdDashboard';
import Requests from '../dashboard/Requests';
import Navbar from '../../navbar/Navbar';
import Cards from '../dashboard/Cards';
import Book from "../../assets/images/book2.png";
import DashAnnouncements from '../teacherDashboard/DashAnnouncements';

const cardArr = [
  { img: Book, title: "Blockchain", navigate: "" },
  { img: Book, title: "AI", navigate: "" },
  { img: Book, title: "Dart", navigate: "" },
  { img: Book, title: "Blockchain", navigate: "" },
  { img: Book, title: "AI", navigate: "" },
  { img: Book, title: "Dart", navigate: "" },
];
let announcementArr = [
  {
    name: "Saims Burg",
   message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',
    time: "2 days ago",
    courseName: "Blockchain",
  },
  {
    name: "Alex Burg",
    message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',

    time: "1 days ago",
    courseName: "React Native",
  },
  {
    name: "Saims Burg",
    message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',

    time: "2 days ago",
    courseName: "Blockchain",
  },]
const StdDashboard = () => {
  
  return (
    <div>
    {/* <Sidebar /> */}
    <Navbar />
    <div className="right-page">
     <div className="content">
      <div className="dashboardContent">
      <div className="cards">
      <Cards cardArr={cardArr.slice(0,4)}/>
              </div>
      {/* <div className="calender"> <Calander /></div> */}
      <div className="dashAnnouncements"> <DashAnnouncements announcementArr={announcementArr.slice(0,3)} /></div>

      </div>
      
     </div>
    </div>
  </div>  )
}

export default StdDashboard