// import React from 'react'
// import './adminCourseCard.css'
// import Book from '../../assets/images/bookCouese.png'
// const AdminCourseCard = ({CoursesArr}) => {
   
//   return (
//     <div>
//         <div class="admin-card-container">
//         {CoursesArr.map((x, i) => {
//           return (
//             <div key={i} class="card">
//               <div className="imgBx">
//               {/* <i class='bx bx-book'></i> */}
//                 <img src={Book} alt="" />
//               </div>
//               <div className="contentBx">
//                 <h2>{x.title}</h2>

//                 <a href="#">
//                   <i className="bx bx-right-arrow-alt"></i>
//                 </a>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   )
// }

// export default AdminCourseCard

// ========================================================
// ========================================================
// ========================================================

import React from 'react'
import './adminCourseCard.css'
import Book from '../../assets/images/bookCouese.png'

const AdminCourseCard = ({ CoursesArr ,userDetail }) => {
  console.log(CoursesArr)
  return (
    <div>
      
      <div className="admin-card-container">
        {
CoursesArr && CoursesArr.map((x, i) => {
          return (
            <div key={i} className="card">
              <div className="imgBx">
                
                <img src={Book} alt="" />
              </div>
              <div className="contentBx">
                <h2>{x.course_name
}</h2>
                <a href="#">
                  <i className="bx bx-right-arrow-alt"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
      
      
     
    </div>
  )
}

export default AdminCourseCard

