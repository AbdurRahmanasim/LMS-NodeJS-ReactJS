import React, { useState, useEffect, useRef } from 'react';

import './stdQuiz.css'
import Navbar from '../../navbar/Navbar'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
const StdQuiz = () => {
      // =====================       grades arr       =================================

let gradesArr=[
  {
    courseName: "Course 1",
    quizzes: [
      {
        quizName: "Quiz 1",
        totalMarks: 10,
        gainedMarks: 8,
      },
      {
        quizName: "Quiz 2",
        totalMarks: 15,
        gainedMarks: 12,
      },
      {
        quizName: "Quiz 1",
        totalMarks: 100,
        gainedMarks: 8,
      },
      {
        quizName: "Quiz 2",
        totalMarks: 50,
        gainedMarks: 25,
      },
      {
        quizName: "Quiz 1",
        totalMarks: 76,
        gainedMarks: 56,
      },
      {
        quizName: "Quiz 2",
        totalMarks: 15,
        gainedMarks: 5,
      },
      {
        quizName: "Quiz 1",
        totalMarks: 34,
        gainedMarks: 32,
      },
      {
        quizName: "Quiz 2",
        totalMarks: 90,
        gainedMarks: 80,
      },
    ],
  },
  {
    courseName: "Course 2",
    quizzes: [
      {
        quizName: "Quiz 1",
        totalMarks: 20,
        gainedMarks: 18,
      },
      {
        quizName: "Quiz 2",
        totalMarks: 12,
        gainedMarks: 10,
      },
    ],
  },
]
  const[grades,setGrades]=useState(gradesArr);

  // =====================       select course       =================================
  // const [course, setCourse] = React.useState('');

  // const handleChange = (event) => {
  //   setCourse(event.target.value);
  // };
  // ======================================================

  // ======================  select quiz  ================================
  const [selectedQuizzes, setSelectedQuizzes] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
 
  const handleChange = (event) => {
    const selectedCourseIndex = event.target.value;
    setSelectedCourse(selectedCourseIndex);

    if (selectedCourseIndex !== '') {
      setSelectedQuizzes(grades[selectedCourseIndex].quizzes);
    } else {
      setSelectedQuizzes([]);
    }
  };

  const startQuiz = (quizIndex) => {
    // Implement quiz starting functionality here
    console.log('Quiz started:', selectedQuizzes[quizIndex]);
    // You can update the gained marks for the quiz using setGrades function
    // For example, to update the gained marks to 10:
    // const updatedGrades = [...grades];
    // updatedGrades[selectedCourse].quizzes[quizIndex].gainedMarks = 10;
    // setGrades(updatedGrades);
  };
  // ======================================================
  return (
    <div>
    <div>
    {/* <Sidebar /> */}
    <Navbar />
    <div className="right-page">
     <div className="content">
     <div className="Content-inner-Content">
            <div className="inner-Content-head-icon-div">
              <h2 className="main_heading">My Quizez</h2>
              {/* <div className="inner-Content-Add-New-btn">
              <i class='bx bx-plus'></i>
              </div> */}
            </div>
            <div className="student-list-Div">
             {/* // =====================       select course       ================================= */}
<div className='select-div'>
<FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedCourse}
                    label="Select Course"
                    onChange={handleChange}
                    sx={{
                      color: 'var(--grey)',
                    }}
                  >
                    <MenuItem value="">Select a course</MenuItem>
                    {grades.map((course, index) => (
                      <MenuItem key={index} value={index}>
                        {course.courseName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
      </div>
            {/* // ====================================================== */}
            
            {/* // ======================== select  Quiz  ============================== */}
            {selectedQuizzes.length > 0 && (
                <div className='quiz-list'>
                  <h3 className='main_heading' style={{marginTop:'1.5rem',marginBottom:'2.5rem'}}>Select a Quiz:</h3>
                  <ul>
                    {selectedQuizzes.map((quiz, index) => (
                      <div className='single-quiz-div' key={index} onClick={() => startQuiz(index)}>
                        <div>{quiz.quizName}</div> 
                        <div><i class='bx bxs-chevron-right'></i></div>
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            
            {/* // ====================================================== */}


              
            </div>
          </div>
     </div>
    </div>
  </div>
  </div>
  )
}

export default StdQuiz