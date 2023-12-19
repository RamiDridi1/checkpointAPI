import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setListOfUsers(response.data);
    };

    fetchData();
  }, []);

  return (
        <div className="container">
          <h1>List of Users</h1>
          <ul>
            {listOfUsers.map(user => (
              <li key={user.id}>
                <span>{user.name}</span>
                <span>{user.email}</span>
                <span>{user.website}</span>
                <span>{user.phone}</span>
              </li>
            ))}
          </ul>
        </div>
      
  );
};

export default UserList;
