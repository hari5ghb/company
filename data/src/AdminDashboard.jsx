import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
  const [workerData, setWorkerData] = useState([]);

  useEffect(() => {
    // Fetch worker data from the backend
    axios.get('http://localhost:5000/admin/workers')
      .then(response => {
        setWorkerData(response.data);
      })
      .catch(error => {
        console.error('Error fetching worker data', error);
      });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Worker</th>
            <th>Date</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {workerData.map(entry => (
            <tr key={entry._id}>
              <td>{entry.worker_id.username}</td>
              <td>{new Date(entry.date).toLocaleDateString()}</td>
              <td>
                <ul>
                  {entry.data.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
