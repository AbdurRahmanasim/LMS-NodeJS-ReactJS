import React from 'react'
import './teacherQuiz.css'
import Navbar from '../../navbar/Navbar'
const TeacherQuiz = () => {
  return (
    <div>
    <div>
    {/* <Sidebar /> */}
    <Navbar />
    <div className="right-page">
     <div className="content">
     <div className="Content-inner-Content">
            <div className="inner-Content-head-icon-div">
              <h2 className="main_heading">Quizez</h2>
              <div className="inner-Content-Add-New-btn">
              <i class='bx bx-plus'></i>
              </div>
            </div>
            <div className="student-list-Div">
            
              
            </div>
          </div>
     </div>
    </div>
  </div>
  </div>
  )
}

export default TeacherQuiz