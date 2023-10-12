 const stdSidebarNavItems = [
    {
      display: "Dashboard",
      icon: <i className="bx bx-home"></i>,
      to: "/",
      section: "",
    },
    {
      display: "Coueses",
      icon: <i className="bx bx-book"></i>,
      to: "/stdCourse",
      section: "coueses",
    },
    {
      display: "Quiz",
      icon: <i className="bx bx-edit"></i>,
      to: "/stdQuiz",
      section: "teacher",
    },
    {
      display: "Grade",
      icon: <i className="bx bx-user"></i>,
      to: "/studentGrade",
      section: "student",
    },
    {
      display: "Announcements",
      icon: <i className="bx bx-user"></i>,
      to: "/stdAnnouncements",
      section: "student",
    },
    {
      display: "Logout",
      icon: <i className="bx bx-log-out"></i>,
      to: "/",
      section: "logout",
    },
  ];

  const adminSidebarNavItems = [
    {
      display: "Dashboard",
      icon: <i className="bx bx-home"></i>,
      to: "/",
      section: "",
    },
    {
      display: "Coueses",
      icon: <i className="bx bx-book"></i>,
      to: "/addCourse",
      section: "coueses",
    },
    {
      display: "Teacher",
      icon: <i className="bx bx-edit"></i>,
      to: "/addTeacher",
      section: "teacher",
    },
    {
      display: "Student",
      icon: <i className="bx bx-user"></i>,
      to: "/addStudent",
      section: "student",
    },
    {
      display: "Logout",
      icon: <i className="bx bx-log-out"></i>,
      to: "/",
      section: "logout",
    },
  ];

  
  const teacherSidebarNavItems = [
    {
      display: "Dashboard",
      icon: <i className="bx bx-home"></i>,
      to: "/",
      section: "",
    },
    {
      display: "Coueses",
      icon: <i className="bx bx-book"></i>,
      to: "/teacherCourse",
      section: "coueses",
    },
    {
      display: "Quiz",
      icon: <i className="bx bx-edit"></i>,
      to: "/teacherQuiz",
      section: "teacher",
    },
    {
      display: "Grade",
      icon: <i className="bx bx-user"></i>,
      to: "/TeacherGrade",
      section: "student",
    },
    {
      display: "Announcements",
      icon: <i className="bx bx-user"></i>,
      to: "/teacherAnnouncements",
      section: "student",
    },
    {
      display: "Logout",
      icon: <i className="bx bx-log-out"></i>,
      to: "/",
      section: "logout",
    },
  ];
  export {
   
    stdSidebarNavItems,adminSidebarNavItems,teacherSidebarNavItems
}
