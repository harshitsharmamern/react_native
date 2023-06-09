import React, { useState } from 'react';
import './css/signup.css'; // Import the CSS file

const MyForm = () => {
  const [user, setUser] = useState({ name: '', id: '', password: '' });

  const handleChange = (e) => {
    setUser((prevUser) => ({
      ...prevUser,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform fetch POST request to send data to the backend
    fetch('backend/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from the backend
        console.log("success");

        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };

  return (
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="id">ID:</label>
        <input
          type="text"
          name="id"
          id="id"
          value={user.id}
          onChange={handleChange}
          placeholder="Enter ID"
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
