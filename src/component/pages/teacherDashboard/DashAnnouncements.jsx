import React from 'react'
import './dashAnnouncements.css'
const DashAnnouncements = ({announcementArr,heading}) => {
   
  return (
    <div>
      <div className="req-main-head">
        <h2>{heading ? heading : "Announcements"}</h2>
      </div>
      {announcementArr.map((x, i) => {
        return (
          <div key={i} className="main-req-div">
            <div className="main-req-div1">
              <div className="req-div-icon">
              <i class='bx bx-chat'></i>
                </div>
              <div className="req-div-content">
                <div className="req-div-content-top">
                  <div className="req-div-head">
                    <p>{x.name}</p>
                  </div>
                  {/* <div className="req-div-badges">
                    <div className="badge">not Active</div>
                    <div className="badge">not Approved</div>
                  </div> */}
                </div>
                <div className="req-div-content-bottom">
                  <div className="req-div-content-bottom-course">
                  Course <div className="line"></div> {x.courseName}
                  </div>
                </div>
                <div className='text'>{x.message}</div>
              </div>
            </div>
            <div className="main-Ann-div2">
              {/* <div className="req-div-Action-div">
                <span className="req-div-Action-head">Approve</span>
                <div href="" className="req-div-Action-icon">
                  <i class="bx bx-right-arrow-alt"></i>
                </div>
              </div> */}
              <div className="req-div-date">{x.time}</div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default DashAnnouncements