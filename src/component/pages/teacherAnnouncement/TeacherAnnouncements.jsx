import React, { useEffect, useState } from 'react'
import './teacherAnnouncements.css'
import Navbar from '../../navbar/Navbar'
import DashAnnouncements from '../teacherDashboard/DashAnnouncements'
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


  // let announcementArr = [
  //   {
  //     name: "Saims Burg",
  //    message:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam similique excepturi quaerat sint dolore eius fugit, nam cupiditate distinctio amet',
  //     time: "2 days ago",
  //     courseName: "Blockchain",
  //   },
  //   ]

    const TeacherAnnouncements = ({ userDetail }) => {
      const [open, setOpen] = useState(false);
      const [loading, setLoading] = useState(true);
      const [announcement, setAnnouncement] = useState('');
      const [courses, setCourses] = useState([]);
      const [announcementArr, setAnnouncementArr] = useState([]);
    
      const handleAnnouncementChange = (e) => {
        setAnnouncement(e.target.value);
      };

      const fetchCourses = () => {
        setLoading(true)
        fetch('https://tiny-pullover-goat.cyclic.app/api/courses')
          .then((response) => response.json())
          .then((data) => {
            // console.log(data.data);
            setLoading(false)
            const filteredCourses = data.data.filter(course => course.course_name === userDetail.teacher_course);
            setCourses(filteredCourses);
            console.log('filteredCourses ',filteredCourses)
            const announcements = filteredCourses.length > 0 ? filteredCourses[0].course_Announcements.map((announcement) => ({
              name: announcement.announcementBy,
              message: announcement.announcement,
              time: 'Few minutes ago',
              courseName: userDetail.teacher_course,
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
     
      const handleSave = () => {
        const announcementData = {
          courseName: userDetail.teacher_course,
          announcementBy:userDetail.teacher_name ,
          announcement: announcement,
        };
    
        fetch('https://tiny-pullover-goat.cyclic.app/api/announcement', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(announcementData),
        })
          .then(response => response.json())
          .then(data => {
            console.log(data);
            console.error('in announcements',announcementData);
            // Handle the response data if needed
          })
          .catch(error => {
            console.error(error);
            console.error('in announcements',announcementData);
            
            // Handle the error if needed
          });
          handleClose();
          fetchCourses()
        
      };
    
      const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    

  return (
    <div>
    <div>
    {/* <Sidebar /> */}
    <Navbar />
    <div className="right-page">
     <div className="content">
     <div className="Content-inner-Content">
            <div className="inner-Content-head-icon-div">
              <h2 className="main_heading">Announcements</h2>
              <div className="inner-Content-Add-New-btn" onClick={handleClickOpen}>
              <i className='bx bx-plus'></i>
              </div>
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
            {/* <div className="student-list-Div">
            
            <div className="dashAnnouncements"> <DashAnnouncements heading={" "} announcementArr={announcementArr} /></div>

            </div> */}
          </div>
     </div>
    </div>
  </div>

   {/* ========================  form        =============================== */}
   <div>
        <Dialog maxWidth="xl" open={open} onClose={handleClose}>
        <div className="dialog-div">
        <div className="dialog-head">
              <h1 className="main_heading">Add Announcement</h1>
            </div>
          <div className="dialog-fields">
            <div className="dialog-field">
              <TextField
                autoFocus
                margin="dense"
                id="Announcement"
                label="Announcement"
                value={announcement}
                onChange={handleAnnouncementChange}
                fullWidth
                variant="standard"
              />
            </div>
          </div>
          {/* Rest of your dialog code... */}
          <div className="dialog-action">
            <div className="cancel-btn btn" onClick={handleClose}>
              Cancel
            </div>
            <div className="save-btn btn" onClick={handleSave}>
              Save
            </div>
          </div>
          </div>
        </Dialog>
      </div>
      {/* ======================================================= */}

  </div>
  )
}

export default TeacherAnnouncements;