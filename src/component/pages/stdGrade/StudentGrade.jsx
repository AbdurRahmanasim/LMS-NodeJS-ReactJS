import React, { useState, useEffect, useRef } from 'react';
import './studentGrade.css'
import Navbar from '../../navbar/Navbar'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import './studentGrade.css'
import { Chart } from 'chart.js/auto';



const StudentGrade = () => {

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
  const [course, setCourse] = React.useState('');

  const handleChange = (event) => {
    setCourse(event.target.value);
  };
  // ======================================================

  // =================    graph    =====================================
  const chartRef = useRef(null);
  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (course !== '') {
      const canvas = document.getElementById('chart');
      const ctx = canvas.getContext('2d');

      const selectedCourse = grades[course];
      const quizNames = selectedCourse.quizzes.map((quiz) => quiz.quizName);
      const totalMarks = selectedCourse.quizzes.map((quiz) => quiz.totalMarks);
      const gainedMarks = selectedCourse.quizzes.map((quiz) => quiz.gainedMarks);

      chartRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: quizNames,
          datasets: [
            {
              label: 'Total Marks',
              backgroundColor: '#7650E0',
              borderColor: '#7650E0',
              borderWidth: 1,
              data: totalMarks,
            },
            {
              label: 'Gained Marks',
              backgroundColor: 'rgba(118, 80, 224, 0.2)',
              borderColor: 'rgba(118, 80, 224, 1)',
              borderWidth: 1,
              data: gainedMarks,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [course]);

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
              <h2 className="main_heading">My Grades</h2>
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
        value={course}
        label="Select Course"
        onChange={handleChange}
        sx={{
          color: 'var(--grey)',
        }}
      >
        {grades.map((course, index) => (
          <MenuItem key={index} value={index}>
            {course.courseName}
          </MenuItem>
        ))}
      </Select>
      </FormControl>
      </div>
            {/* // ====================================================== */}

            {/* // =================     graph      ===================================== */}
            {course !== '' && (
                  <div style={{ marginTop: '3rem' }}>
                    {/* <canvas id="chart"  width="400" height="200"></canvas> */}
                    {/* <canvas id="chart" ref={chartRef} width="400" height="200"></canvas> */}
                    <canvas id='chart' key={course} width="400" height="400"></canvas>

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

export default StudentGrade