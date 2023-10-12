import React, { useState } from 'react'
import './teacherCourse.css'
import Navbar from '../../navbar/Navbar'
import AdminCourseCard from '../course/AdminCourseCard';
const TeacherCourse = ({userDetail}) => {
  
    const[CoursesArr,setCoursesArr]=useState([{course_name:userDetail.teacher_course}])
console.log(CoursesArr.course_name)
  
  return (
    <div>
    <div>
    {/* <Sidebar /> */}
    <Navbar />
    <div className="right-page">
     <div className="content">
     <div className="Content-inner-Content">
            <div className="inner-Content-head-icon-div">
              <h2 className="main_heading">Course</h2>
              {/* <div className="inner-Content-Add-New-btn">
              <i class='bx bx-plus'></i>
              </div> */}
            </div>
            <AdminCourseCard CoursesArr={CoursesArr} userDetail={userDetail}/>

          </div>
     </div>
    </div>
  </div>
  </div>
  )
}

export default TeacherCourse