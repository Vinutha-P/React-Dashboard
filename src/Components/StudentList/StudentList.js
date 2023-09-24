import React from 'react';

const StudentList = () => {
  // Generate random student data for the table
  const studentData = [
    { id: 1, name: 'Student 1', grade: 'A' },
    { id: 2, name: 'Student 2', grade: 'B' },
    { id: 3, name: 'Student 3', grade: 'A' },
    { id: 4, name: 'Student 4', grade: 'B' },
    // Add more students here...
  ];

  return (
    <div style={{ padding: '10px', overflow: 'hidden',backgroundColor: "lightyellow",height:'100%' }}>
    <h2>Students List</h2>
    <div style={{ overflowY: 'auto'}}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
