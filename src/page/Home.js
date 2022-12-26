import React, { useState, useRef, useEffect } from "react";
const Home = () => {
  const [username, setUsername] = useState(null);
  const userRef = useRef();
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: username }),
    };
    fetch("https://localhost:5000/add-user", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [username]);

  const submitHandler = () => {
    setUsername(userRef.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Enter User | Users</label>
        <input type="text" ref={userRef} />
        <button>Add User</button>
      </form>
    </div>
  );
};
export default Home;
