// import React from "react";
// import "./addCourses.css";
// import Sidebar from "../../sidebar/Sidebar";
// import Navbar from "../../navbar/Navbar";
// import AdminCourseCard from "./AdminCourseCard";

// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';


// const AddCourses = () => {

//   const adminCoursesArr = [
//     { title: "Blockchain", navigate: "" },
//     {  title: "AI", navigate: "" },
//     {  title: "Dart", navigate: "" },
//     { title: "React", navigate: "" },
//     {  title: "Solidity", navigate: "" },
//   ];

// // ==============        form         ==============================
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
// // ==============                ==============================
//   return ( 
//     <div>
//       <div>
//         {/* <Sidebar /> */}
//         <Navbar />
//         <div className="right-page">  
//           <div className="content">
//             <div className="Content-inner-Content">
//               <div className="inner-Content-head-icon-div">
//                 <h2 className="main_heading">Courses</h2>
//                 <div className="inner-Content-Add-New-btn" onClick={()=>{setOpen(true)}}>
//                 <i class='bx bx-plus'></i>
//                 </div>
//               </div>
//               <div className="AdminCourseCardDiv">
//                 <AdminCourseCard CoursesArr={adminCoursesArr} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//         {/* ======================================================= */}

//         {/* ========================  form        =============================== */}
//         <div>
     
//       <Dialog maxWidth='xl' open={open} onClose={handleClose}>
//       <div className="dialog-div">
//         <div className="dialog-head">
//         <h1 className="main_heading">Add Course</h1>
//         </div>
//         <div className="dialog-fields">

//        <div className="dialog-field">
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </div>
//        <div className="dialog-field">
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </div>
//        <div className="dialog-field">
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </div>
//        <div className="dialog-field">
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </div>
//        <div className="dialog-field">
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Email Address"
//             type="email"
//             fullWidth
//             variant="standard"
//           />
//         </div>
//         </div>
//         <div className="dialog-action">
//           <div className="cancel-btn btn" onClick={handleClose}>Cancel</div>
//           <div className="save-btn btn" onClick={handleClose}>Save</div>
//           </div>
//         </div>
//       </Dialog>
      
//     </div>
//         {/* ======================================================= */}
//     </div>
//   );
// };

// export default AddCourses;

// ===================================================================
// ===================================================================
// ===================================================================

import React, { useState, useEffect } from "react";
import "./addCourses.css";
import Sidebar from "../../sidebar/Sidebar";
import Navbar from "../../navbar/Navbar";
import AdminCourseCard from "./AdminCourseCard";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import loadingGif from '../../assets/images/loading.gif';

const AddCourses = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');

  var fetchCourses=()=>{
    fetch("https://tiny-pullover-goat.cyclic.app/api/courses")
      .then((response) => response.json())
      .then((data) => {
        console.log("data ",data)

        setCourses(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setLoading(false);
      });

      }
  useEffect(() => {

   
      fetchCourses();

  }, []);

  console.log("Courses ",courses)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      const response = await fetch('https://tiny-pullover-goat.cyclic.app/api/course', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courseName }),
      });
      const data = await response.json();
  
      // Handle the response data
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  
    handleClose();
    fetchCourses();
  };
  
  
  // const adminCoursesArr = courses.map(course => ({
  //   title: course.course_name,
  //   navigate: ""
  // }));
// console.log("adminCoursesArr " )
  return (
    <div>
      <div>
        {/* <Sidebar /> */}
        <Navbar />
        <div className="right-page">
          <div className="content">
            <div className="Content-inner-Content">
              <div className="inner-Content-head-icon-div">
                <h2 className="main_heading">Courses</h2>
                <div className="inner-Content-Add-New-btn" onClick={handleClickOpen}>
                  <i class='bx bx-plus'></i>
                </div>
              </div>
              <div className="AdminCourseCardDiv">
                {loading ? loading && (
        <div className="loading-spinner">
          <img src={loadingGif} alt="Loading" />
        </div>
      ) : (
                  <AdminCourseCard CoursesArr={courses} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================  form        =============================== */}
      <div>
        <Dialog maxWidth='xl' open={open} onClose={handleClose}>
          <div className="dialog-div">
            <div className="dialog-head">
              <h1 className="main_heading">Add Course</h1>
            </div>
            <div className="dialog-fields">
              {/* Render the form fields */}
              
              <div className="dialog-field">
              <TextField
  autoFocus
  margin="dense"
  id="courseName"
  label="Course Name"
  type="text"
  fullWidth
  variant="standard"
  value={courseName}
  onChange={(e) => setCourseName(e.target.value)}
/>

         </div>
         

            </div>
            <div className="dialog-action">
              <div className="cancel-btn btn" onClick={handleClose}>Cancel</div>
              <div className="save-btn btn" onClick={handleSave}>Save</div>

            </div>
          </div>
        </Dialog>
      </div>
      {/* ======================================================= */}
    </div>
  );
};

export default AddCourses;
