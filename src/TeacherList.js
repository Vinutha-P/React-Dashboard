import React from 'react';

const TeacherList = () => {
  // Generate random teacher data for the table
  const teacherData = [
    { id: 1, name: 'Teacher 1', subject: 'Math' },
    { id: 2, name: 'Teacher 2', subject: 'Science' },
    { id: 3, name: 'Teacher 3', subject: 'History' },
    { id: 4, name: 'Teacher 4', subject: 'English' },
    // Add more teachers here...
  ];

  return (
    <div style={{ padding: '10px', overflow: 'hidden' }}>
      <h2>Teachers List</h2>
      <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            {teacherData.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
                <td>{teacher.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeacherList;
