import React, { useEffect, useState } from 'react'
import './stdAnnouncements.css';
import Navbar from '../../navbar/Navbar';
import DashAnnouncements from '../teacherDashboard/DashAnnouncements';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import loadingGif from '../../assets/images/loading.gif';

const StdAnnouncements = ({userDetail}) => {

  // let announcementArr = [
  //   {
  //     name: "Saims Burg",
  //    message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',
  //     time: "2 days ago",
  //     courseName: "Blockchain",
  //   },
  //   {
  //     name: "Alex Burg",
  //     message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',
  
  //     time: "1 days ago",
  //     courseName: "React Native",
  //   },
  //   {
  //     name: "Alex Burg",
  //     message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',
  
  //     time: "1 days ago",
  //     courseName: "React Native",
  //   },
  //   {
  //     name: "Alex Burg",
  //     message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',
  
  //     time: "1 days ago",
  //     courseName: "React Native",
  //   },
  //   {
  //     name: "Saims Burg",
  //     message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',
  
  //     time: "2 days ago",
  //     courseName: "Blockchain",
  //   },]

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [announcement, setAnnouncement] = useState('');
  const [courses, setCourses] = useState([]);
  const [announcementArr, setAnnouncementArr] = useState([]);

    const fetchCourses = () => {
      setLoading(true)
      fetch('http://localhost:8000/api/courses')
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.data);
          setLoading(false)
          const filteredCourses = data.data.filter(course => course.course_name === userDetail.std_course);
          setCourses(filteredCourses);
          console.log('filteredCourses ',filteredCourses)
          const announcements = filteredCourses.length > 0 ? filteredCourses[0].course_Announcements.map((announcement) => ({
            name: announcement.announcementBy,
            message: announcement.announcement,
            time: 'Few minutes ago',
            courseName: userDetail.std_course,
          })) : [];
          
          setAnnouncementArr(announcements);            // setAnnouncementArr(announcements);
          console.log('announcements ',announcements)
         
        })
        .catch((error) => {
          console.error('Error fetching courses:', error);
          setLoading(false)
        });
    };
    

    useEffect(() => {
      
      fetchCourses(); //for announcements
    }, []);
  return (
    <div>
    <div>
    {/* <Sidebar /> */}
    <Navbar />
    <div className="right-page">
     <div className="content">
     <div className="Content-inner-Content">
            <div className="inner-Content-head-icon-div">
              <h2 className="main_heading">My Announcements</h2>
              {/* <div className="inner-Content-Add-New-btn">
              <i class='bx bx-plus'></i>
              </div> */}
            </div>
            <div className="student-list-Div">
                {loading ? (
                  <div className="loading-spinner">
                    <img src={loadingGif} alt="Loading" />
                  </div>
                ) : ( 
                  <div className="dashAnnouncements"> <DashAnnouncements heading={" "} announcementArr={announcementArr} /></div>
                 )} 
              </div>
          </div>
     </div>
    </div>
  </div>
  </div>
  )
}

export default StdAnnouncements