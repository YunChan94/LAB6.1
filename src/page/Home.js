import React, { useRef } from "react";
import classes from "./Home.module.css";
const Home = () => {
  const userRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    console.log(user);
    addUserHandler(user);
  };

  async function addUserHandler(user) {
    const response = await fetch("http://localhost:5000/", {
      method: "POST",
      body: JSON.stringify({ user: user }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.form_control}>
        <label>Enter User | Users</label>
        <input type="text" ref={userRef} />
        <button>Add User</button>
      </form>
    </div>
  );
};
export default Home;
