import React from 'react'
import './adminTeachersList.css'
const AdminTeachersList = ({teachersArr}) => {
    let teacherListArr = [
      
        {
          name: "Saims Burg",
          active: false,
          approved: false,
          time: "2 days ago",
          courseName: "Blockchain",
        },
        {
          name: "Saims Burg",
          active: false,
          approved: false,
          time: "2 days ago",
          courseName: "Blockchain",
        },
      ];

      console.log('teachers in',teachersArr)
  return (
    <div>
         {teachersArr.map((x, i) => { 
        return (
          <div key={i} className="main-tch-list-div"> 
            <div className="main-tch-list-div1">
              <div className="tch-list-div-icon">
              <i class='bx bx-user' ></i>
                            </div>
              <div className="tch-list-div-content">
                <div className="tch-list-div-content-top">
                  <div className="tch-list-div-head">
                    <p>{x.teacher_name}</p>
                  </div>
                  <div className="tch-list-div-badges">
                    <div className="badge">Active</div>
                    <div className="badge">Approved</div>
                  </div>
                </div>
                <div className="tch-list-div-content-bottom">
                  <div className="tch-list-div-content-bottom-course">
                  Course <div className="line"></div> {x.teacher_course}
                  </div>
                </div>
              </div>
            </div>
            <div className="main-tch-list-div2">
              <div className="tch-list-div-Action-div">
                <span className="tch-list-div-Action-head">Manage</span>
                <div href="" className="tch-list-div-Action-icon">
                  <i class="bx bx-right-arrow-alt"></i>
                </div>
              </div>
              <div className="tch-list-div-date">{x.time}</div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default AdminTeachersList