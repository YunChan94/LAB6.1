import React, { useState, useEffect } from "react";

const Users = () => {
  const [usersArr, setUserArr] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    };

    fetch("http://localhost:5000/users", requestOptions)
      .then((response) => response.json())
      .then((data) => setUserArr(data.users));
  }, []);
  console.log(usersArr);
  let content;
  if (usersArr.length === 0) {
    content = <p>No user Found! </p>;
  } else {
    content = (
      <ul>
        {usersArr.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    );
  }
  return (
    <div>
      <h1>User</h1>
      {content}
    </div>
  );
};

export default Users;
