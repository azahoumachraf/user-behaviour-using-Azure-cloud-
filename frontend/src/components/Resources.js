import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Resources() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/resources`, {
          headers: { Authorization: token }
        });
        setResources(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResources();
  }, []);

  return (
    <div>
      <h2>Resources</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource._id}>{resource.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Resources;