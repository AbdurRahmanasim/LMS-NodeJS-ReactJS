// import "./App.css";
// import "boxicons/css/boxicons.min.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AppLayout from "../src/component/layout/AppLayout";
// import Dashboard from "./component/pages/dashboard/Dashboard";
// import AddCourses from "./component/pages/course/AddCourses";
// import AddStudents from "./component/pages/student/AddStudents";
// import AddTeachers from "./component/pages/teacher/AddTeachers";
// import Sidebar from "./component/sidebar/Sidebar";
// import StdDashboard from "./component/pages/stdDashboard/StdDashboard";
// import StdCourses from "./component/pages/stdCourses/StdCourses";
// import StdQuiz from "./component/pages/stdQuiz/StdQuiz";
// import StudentGrade from "./component/pages/stdGrade/StudentGrade";
// import StdAnnouncements from "./component/pages/stdAnnouncements/StdAnnouncements";
// import TeacherDashboard from "./component/pages/teacherDashboard/TeacherDashboard";
// import TeacherCourse from "./component/pages/teacherCourse/TeacherCourse";
// import TeacherAnnouncements  from "./component/pages/teacherAnnouncement/TeacherAnnouncements";
// import TeacherGrade from "./component/pages/teacherGrade/TeacherGrade";
// import TeacherQuiz from "./component/pages/teacherQuiz/TeacherQuiz";
// import { useState } from "react";
// import {stdSidebarNavItems, adminSidebarNavItems,teacherSidebarNavItems} from './component/data'
// import LoginForm from "./component/pages/login/LogInForm";

// function App() {
//   const [user, setUser] = useState("");
//   // console.log(adminSidebarNavItems,' app.js')
//   return (
//     <BrowserRouter>
//       {user === 'admin' ? (
//         <div>
//           <Sidebar sidebarNavItems={adminSidebarNavItems} />
//           <Routes>
//             {/* <Route path='/' element={<AppLayout />}> */}
//             <Route index element={<Dashboard />} />
//             <Route path="/addCourse" element={<AddCourses />} />
//             <Route path="/addStudent" element={<AddStudents />} />
//             <Route path="/addTeacher" element={<AddTeachers />} />
//             <Route path="/logout" element={<Dashboard />} />
//             {/* </Route> */}
//           </Routes>
//         </div>
//       ) : user === 'student' ? (
//         <div>
//         <Sidebar sidebarNavItems={stdSidebarNavItems} />
//         <Routes>
//           {/* <Route path='/' element={<AppLayout />}> */}
//           <Route index element={<StdDashboard/>} />
//           <Route path="/stdCourse" element={<StdCourses />} />
//           <Route path="/stdQuiz" element={<StdQuiz />} />
//           <Route path="/studentGrade" element={<StudentGrade />} />
//           <Route path="/stdAnnouncements" element={<StdAnnouncements />} />
//           <Route path="/logout" element={<Dashboard />} />
//           {/* </Route> */}
//         </Routes>
//       </div>
//       ) : user === 'teacher' ? (
//         <div>
//         <Sidebar sidebarNavItems={teacherSidebarNavItems} />
//         <Routes>
//           {/* <Route path='/' element={<AppLayout />}> */}
//           <Route index element={<TeacherDashboard />} />
//           <Route path="/teacherCourse" element={<TeacherCourse />} />
//           <Route path="/teacherAnnouncements" element={<TeacherAnnouncements />} />
//           <Route path="/teacherQuiz" element={<TeacherQuiz />} />
//           <Route path="/TeacherGrade" element={<TeacherGrade />} />
//           <Route path="/logout" element={<Dashboard />} />

//           {/* </Route> */}
//         </Routes>
//       </div>
//       ) : (
//         <div>
//         {/* <Sidebar sidebarNavItems={teacherSidebarNavItems} /> */}
//         <Routes>
         
//           <Route index element={<LoginForm />} />

//           {/* </Route> */}
//         </Routes>
//       </div>
//       )}
//     </BrowserRouter>
//   );
// }

// export default App;



// ==========================================================================================
// ==========================================================================================
// ==========================================================================================

import './App.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"; 
// import Chatpage from './components/Chatpage';
import { useState } from 'react';
import {stdSidebarNavItems, adminSidebarNavItems,teacherSidebarNavItems} from './component/data'
import "boxicons/css/boxicons.min.css";

import AppLayout from "../src/component/layout/AppLayout";
import Dashboard from "./component/pages/dashboard/Dashboard";
import AddCourses from "./component/pages/course/AddCourses";
import AddStudents from "./component/pages/student/AddStudents";
import AddTeachers from "./component/pages/teacher/AddTeachers";
import Sidebar from "./component/sidebar/Sidebar";
import StdDashboard from "./component/pages/stdDashboard/StdDashboard";
import StdCourses from "./component/pages/stdCourses/StdCourses";
import StdQuiz from "./component/pages/stdQuiz/StdQuiz";
import StudentGrade from "./component/pages/stdGrade/StudentGrade";
import StdAnnouncements from "./component/pages/stdAnnouncements/StdAnnouncements";
import TeacherDashboard from "./component/pages/teacherDashboard/TeacherDashboard";
import TeacherCourse from "./component/pages/teacherCourse/TeacherCourse";
import TeacherAnnouncements  from "./component/pages/teacherAnnouncement/TeacherAnnouncements";
import TeacherGrade from "./component/pages/teacherGrade/TeacherGrade";
import TeacherQuiz from "./component/pages/teacherQuiz/TeacherQuiz";
import LoginForm from "./component/pages/login/LogInForm";


function App() {

  const[user,setUser]=useState((null));
  const[userDetail,setUserDetail]=useState((null));
  
console.log('user ',user)
console.log('user detail ',userDetail)

  const signOut=()=>{
    
      setUser(null);
      
    }

  return (
    <Router>
    <div className="App">
      {user === 'admin' ? (
        <div>
          <Sidebar sidebarNavItems={adminSidebarNavItems} setUser={setUser} />
          <Routes>
            {/* <Route path='/' element={<AppLayout />}> */}
            <Route index element={<Dashboard />} />
            <Route path="/addCourse" element={<AddCourses />} />
            <Route path="/addStudent" element={<AddStudents />} />
            <Route path="/addTeacher" element={<AddTeachers />} />
            
            {/* </Route> */}
          </Routes>
        </div>
      ) : user === 'student' ? (
        <div>
        <Sidebar sidebarNavItems={stdSidebarNavItems} setUser={setUser}/>
        <Routes>
          {/* <Route path='/' element={<AppLayout />}> */}
          <Route index element={<StdDashboard/>} />
          <Route path="/stdCourse" element={<StdCourses userDetail={userDetail} />} />
          <Route path="/stdQuiz" element={<StdQuiz />} />
          <Route path="/studentGrade" element={<StudentGrade />} />
          <Route path="/stdAnnouncements" element={<StdAnnouncements userDetail={userDetail}/>} />
          {/* <Route path="/logout" element={<LoginForm />} /> */}
          {/* </Route> */}
        </Routes>
      </div>
      ) : user === 'teacher' ? (
        <div>
        <Sidebar sidebarNavItems={teacherSidebarNavItems} setUser={setUser} />
        <Routes>
          {/* <Route path='/' element={<AppLayout />}> */}
          <Route index element={<TeacherDashboard />} />
          <Route path="/teacherCourse" element={<TeacherCourse userDetail={userDetail} />} />
          <Route path="/teacherAnnouncements" element={<TeacherAnnouncements userDetail={userDetail} />} />
          <Route path="/teacherQuiz" element={<TeacherQuiz />} />
          <Route path="/TeacherGrade" element={<TeacherGrade />} />
          {/* <Route path="/logout" element={<LoginForm />} /> */}

          {/* </Route> */}
        </Routes>
      </div>
      ) :  (
        <LoginForm setUser={setUser} setUserDetail={setUserDetail} />
      )}
    
    </div>
    </Router>
  );
}

export default App;