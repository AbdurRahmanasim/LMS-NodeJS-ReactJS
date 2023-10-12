import React, { useEffect, useState } from 'react'
import './addStudents.css'
import Sidebar from '../../sidebar/Sidebar'
import Navbar from '../../navbar/Navbar'
import AdminStudentsList from './AdminStudentsList'

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

const AddStudents = () => { 

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);
  const [courses, setCourses] = useState([]);
  const [studentData, setStudentData] = useState({
    stdName: '',
    stdEmail: '',
    stdPassword: '',
    stdCourse: '',
  });
  const fetchStudents = () => {
    fetch('http://localhost:8000/api/students')
      .then((response) => response.json())
      .then((data) => {
        setStudents(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching Students:', error);
        setLoading(false);
      });
  };

  const fetchCourses = () => {
    fetch('http://localhost:8000/api/courses')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.data);
      })
      .catch((error) => {
        console.error('Error fetching courses:', error);
      });
  };

  useEffect(() => {
    fetchStudents();
    fetchCourses();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setStudentData((prevData) => ({
      ...prevData,
      stdCourse: event.target.value,
    }));
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setStudentData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    console.log('Student data ',studentData)
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/student', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentData),
      });
      const data = await response.json();

      // Handle the response data
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    handleClose();
    fetchStudents();
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
                <h2 className="main_heading">Students</h2>
                <div className="inner-Content-Add-New-btn" onClick={handleClickOpen}>
                <i class='bx bx-plus'></i>
                </div>
              </div>

              <div className="student-list-Div">
                {loading ? (
                  <div className="loading-spinner">
                    <img src={loadingGif} alt="Loading" />
                  </div>
                ) : (
                  <AdminStudentsList studentsArr={students} />
                )}
              </div>
             
            </div>
       </div>
      </div>
    </div>

     {/* ========================  form        =============================== */}
     <div>
        <Dialog maxWidth="xl" open={open} onClose={handleClose}>
          <div className="dialog-div">
            <div className="dialog-head">
              <h1 className="main_heading">Add Student</h1>
            </div>

            <div className="dialog-dropdown">
              <InputLabel id="demo-simple-select-filled-label">Register Course</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={studentData.stdCourse}
                onChange={handleChange}
                style={{ width: '100%' }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {courses.map((course) => (
                  <MenuItem key={course._id} value={course.course_name}>
                    {course.course_name}
                  </MenuItem>
                ))}
              </Select>
            </div>

            <div className="dialog-fields">
              {/* Render the form fields */}
              <div className="dialog-field">
                <TextField
                  autoFocus
                  margin="dense"
                  id="stdName"
                  label="Student Name"
                  value={studentData.stdName}
                  onChange={handleInputChange}
                  fullWidth
                  variant="standard"
                />
              </div>
              <div className="dialog-field">
                <TextField
                  autoFocus
                  margin="dense"
                  id="stdEmail"
                  label="Student Email"
                  type="email"
                  value={studentData.stdEmail}
                  onChange={handleInputChange}
                  fullWidth
                  variant="standard"
                />
              </div>
              <div className="dialog-field">
                <TextField
                  autoFocus
                  margin="dense"
                  id="stdPassword"
                  label="Student Password"
                  type="password"
                  value={studentData.stdPassword}
                  onChange={handleInputChange}
                  fullWidth
                  variant="standard"
                />
              </div>
             
            </div>
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

export default AddStudents