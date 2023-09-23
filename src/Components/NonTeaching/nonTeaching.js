import React from 'react';

const nonTeaching = () => {
  // Generate random teacher data for the table
  const teacherData = [
    { id: 1, name: 'technician' },
    { id: 2, name: 'PT' },
    { id: 3, name: 'Files'},
    { id: 4, name: 'So on' },
    // Add more teachers here...
  ];

  return (
    <div style={{ padding: '10px', overflow: 'hidden' }}>
      <h2>Non Teaching Staff</h2>
      <div style={{ overflowY: 'auto', maxHeight: '400px' }}>
        <table style={{ width: '100%' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teacherData.map((teacher) => (
              <tr key={teacher.id}>
                <td>{teacher.id}</td>
                <td>{teacher.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default nonTeaching;
