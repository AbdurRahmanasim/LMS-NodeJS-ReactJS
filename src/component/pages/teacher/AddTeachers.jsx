import React, { useEffect, useState } from 'react';
import './addTeachers.css';
import Sidebar from '../../sidebar/Sidebar';
import Navbar from '../../navbar/Navbar';
import AdminTeachersList from './AdminTeachersList';

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

const AddTeachers = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [teachers, setTeachers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [teacherData, setTeacherData] = useState({
    teacherName: '',
    teacherEmail: '',
    teacherPassword: '',
    teacherCourse: '',
  });

  const fetchTeachers = () => {
    fetch('http://localhost:8000/api/teachers')
      .then((response) => response.json())
      .then((data) => {
        setTeachers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching teachers:', error);
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
    fetchTeachers();
    fetchCourses();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTeacherData((prevData) => ({
      ...prevData,
      teacherCourse: event.target.value,
    }));
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    console.log('teacher data ',teacherData)
  };

  const handleSave = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(teacherData),
      });
      const data = await response.json();

      // Handle the response data
      console.log(data);
    } catch (error) {
      console.error(error);
    }

    handleClose();
    fetchTeachers();
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
                <h2 className="main_heading">Teachers</h2>
                <div className="inner-Content-Add-New-btn" onClick={handleClickOpen}>
                  <i className="bx bx-plus"></i>
                </div>
              </div>

              <div className="teacher-list-Div">
                {loading ? (
                  <div className="loading-spinner">
                    <img src={loadingGif} alt="Loading" />
                  </div>
                ) : (
                  <AdminTeachersList teachersArr={teachers} />
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
              <h1 className="main_heading">Add Teacher</h1>
            </div>

            <div className="dialog-dropdown">
              <InputLabel id="demo-simple-select-filled-label">Assign Course</InputLabel>
              <Select
                labelId="demo-simple-select-filled-label"
                id="demo-simple-select-filled"
                value={teacherData.teacherCourse}
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
                  id="teacherName"
                  label="Teacher Name"
                  value={teacherData.teacherName}
                  onChange={handleInputChange}
                  fullWidth
                  variant="standard"
                />
              </div>
              <div className="dialog-field">
                <TextField
                  autoFocus
                  margin="dense"
                  id="teacherEmail"
                  label="Teacher Email"
                  type="email"
                  value={teacherData.teacherEmail}
                  onChange={handleInputChange}
                  fullWidth
                  variant="standard"
                />
              </div>
              <div className="dialog-field">
                <TextField
                  autoFocus
                  margin="dense"
                  id="teacherPassword"
                  label="Teacher Password"
                  type="password"
                  value={teacherData.teacherPassword}
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
  );
};

export default AddTeachers;
