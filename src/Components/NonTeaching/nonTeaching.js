import React from 'react';

const nonTeaching = ({teacherData}) => {
  // Generate random teacher data for the table


  return (
    <div style={{ padding: '10px', overflow: 'hidden' }}>
      <h2>Non Teaching Staff</h2>
      <div style={{ overflowY: 'auto'}}>
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
