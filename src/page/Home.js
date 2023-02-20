import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";

import classes from "./Home.module.css";
const Home = () => {
  const [user, setUser] = useState("");
  const userRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userName: user }),
    };

    fetch("http://localhost:5000/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser(userRef.current.value);
    console.log(user);
    navigate("/users");
  };

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
