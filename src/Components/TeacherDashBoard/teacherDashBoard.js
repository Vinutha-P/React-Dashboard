import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Header from "../Header/Header";
import TeacherList from "../TeacherList/TeacherList";
import StudentList from "../StudentList/StudentList";
import Calenderwidget from "../Sidebar/calenderwidget";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const TeacherDashBoard = () => {
  const initialLayout = [
    { i: "widget1", x: 0, y: 2, w: 2, h: 4 },
    { i: "widget2", x: 2, y: 0, w: 2, h: 4 },
    { i: "widget3", x: 0, y: 2, w: 2, h: 4 },
    { i: "widget4", x: 2, y: 0, w: 2, h: 4 },
    // Add more initial widgets as needed
  ];
  const [layout, setLayout] = useState(initialLayout);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showWidget5, setShowWidget5] = useState(
    JSON.parse(localStorage.getItem("calenderWidgetTeacher")) || false
  );

  useEffect(() => {
    // Retrieve the saved layout from local storage
    const savedLayout = localStorage.getItem("teacherDashboardLayout");

    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
  }, []);

  const updateImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
  };

  useEffect(() => {
    const intervalId = setInterval(updateImage, 2000);
    return () => clearInterval(intervalId);
  }, []);


  const imagePaths = [
    require("../../images/school.jpeg"),
    require("../../images/classroom.jpeg"),
    require("../../images/student.jpeg"),
    require("../../images/teacher.jpeg"),
    require("../../images/students.jpeg"),
  ];

  return (
    <div>
      <Header />
      <h1 style={{textAlign:'center'}}>Teacher Dashboard</h1>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480}}
        cols={{ lg: 4, md: 4, sm: 4, xs: 4}}
        rowHeight={300}
        width={1000}
        isResizable={false}
        isDraggable={false}
      >
        <div key="widget1" style={{ backgroundColor: "lightblue" }}>
        <img style={{width:'100%',height:"100%"}} src={imagePaths[currentImageIndex]} alt="Widget 1" />
        </div>
        <div key="widget2" style={{ backgroundColor: "lightcoral" }}>
        <img style={{ width: '100%', height: '100%' }} src={require('../../images/chart.png')} alt="Chart" />
        </div>
        <div key="widget3" >
        <TeacherList />
        </div>
        <div key="widget4" >
        <StudentList />
        </div>
        {showWidget5 && (
          <div key="widget5"  >
            <Calenderwidget />
          </div>
        )}
      </ResponsiveGridLayout>
    </div>
  );
};

export default TeacherDashBoard;
