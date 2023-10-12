import React from 'react'
import './adminStudentsList.css'
const AdminStudentsList = ({studentsArr}) => {
    let stdListArr = [
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
      console.log("studentsArr in ",studentsArr)
  return (
    <div>
         {studentsArr.map((x, i) => { 
        return (
          <div key={i} className="main-std-list-div"> 
            <div className="main-std-list-div1">
              <div className="std-list-div-icon">
              <i class='bx bx-user' ></i>
                            </div>
              <div className="std-list-div-content">
                <div className="std-list-div-content-top">
                  <div className="std-list-div-head">
                    <p>{x.std_name}</p>
                  </div>
                  <div className="std-list-div-badges">
                    <div className="badge">Active</div>
                    <div className="badge">Approved</div>
                  </div>
                </div>
                <div className="std-list-div-content-bottom">
                  <div className="std-list-div-content-bottom-course">
                  Course <div className="line"></div> {x.std_course}
                  </div>
                </div>
              </div>
            </div>
            <div className="main-std-list-div2">
              <div className="std-list-div-Action-div">
                <span className="std-list-div-Action-head">Approve</span>
                <div href="" className="std-list-div-Action-icon">
                  <i class="bx bx-right-arrow-alt"></i>
                </div>
              </div>
              <div className="std-list-div-date">{x.time}</div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default AdminStudentsList