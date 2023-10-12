import React, { useState } from 'react'
import './StdCourses.css'
import Navbar from '../../navbar/Navbar'
import AdminCourseCard from '../course/AdminCourseCard'

const StdCourses = ({userDetail}) => {
  const[CoursesArr,setCoursesArr]=useState([{course_name:userDetail.std_course}])
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
              <h2 className="main_heading">My Courses</h2>
              {/* <div className="inner-Content-Add-New-btn">
              <i class='bx bx-plus'></i>
              </div> */}
            </div>
            <div className="stdCourseCardDiv">
            <AdminCourseCard CoursesArr={CoursesArr} />

              
            </div>
          </div>
     </div>
    </div>
  </div>
  </div>
  )
}

export default StdCourses