import React, { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import Header from "../Header/Header";
import TeacherList from "../TeacherList/TeacherList";
import StudentList from "../StudentList/StudentList";
import NonTeaching from "../NonTeaching/nonTeaching";
import Calenderwidget from "../Sidebar/calenderwidget";

const PrincipalDashboard = () => {
  const [layout, setLayout] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    // Retrieve the saved layout from local storage
    const savedLayout = localStorage.getItem("dashboardLayout");

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

  const teacherData = [
    { id: 1, name: 'technician' },
    { id: 2, name: 'PT' },
    { id: 3, name: 'Files'},
    { id: 4, name: 'So on' },
    // Add more teachers here...
  ];

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
      <h1 style={{textAlign:'center'}}>Principal Dashboard</h1>
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        rowHeight={100}
        width={1430}
        isResizable={false}
        isDraggable={false}
      >
        <div key="widget1" style={{ backgroundColor: "lightblue" }}>
        <img style={{width:'100%',height:"100%"}} src={imagePaths[currentImageIndex]} alt="Widget 1" />
        </div>
        <div key="widget2" style={{ backgroundColor: "lightcoral" }}>
        <NonTeaching teacherData={teacherData}/>
        </div>
        <div key="widget3" >
        <TeacherList />
        </div>
        <div key="widget4" >
        <StudentList />
        </div>
        <div key="widget5" style={{ backgroundColor: "purple" }}>
        <Calenderwidget />
        </div>
      </GridLayout>
    </div>
  );
};

export default PrincipalDashboard;
