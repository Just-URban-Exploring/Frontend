import React, { useState } from 'react';
import axios from 'axios';
import connection from "../connection.json";

const deleteOneUser = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const configuration = {
    method: "delete",
    url: `${connection.URI}/users/${userId}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Content-Type': 'application/json',
    },
  };

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios(configuration)
      .then((result) => {
        setMessage("Account erfolgreich gelöscht")
        console.log(result);
      })
      .catch((error) => {
        console.log(error)
      });
      setUserId("");
  }

  return (
    <div>
      <h2>Delete User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          User ID:
          <input type="text" value={userId} onChange={handleInputChange} />
        </label>
        <button type="submit">Delete Profile</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default deleteOneUser;
