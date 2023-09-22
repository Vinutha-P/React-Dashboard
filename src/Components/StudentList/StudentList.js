import React from 'react';

const StudentList = () => {
  // Generate random student data for the table
  const studentData = [
    { id: 1, name: 'Student 1', grade: 'A' },
    { id: 2, name: 'Student 2', grade: 'B' },
    { id: 1, name: 'Student 1', grade: 'A' },
    { id: 2, name: 'Student 2', grade: 'B' },
    { id: 1, name: 'Student 1', grade: 'A' },
    { id: 2, name: 'Student 2', grade: 'B' },
    { id: 1, name: 'Student 1', grade: 'A' },
    { id: 2, name: 'Student 2', grade: 'B' },
    // Add more students here...
  ];

  return (
    <div style={{ padding: '10px', overflow: 'hidden' }}>
    <h2>Students List</h2>
    <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
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
