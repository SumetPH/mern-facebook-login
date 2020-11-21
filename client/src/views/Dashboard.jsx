import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/test")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  const usersList = users.map((user, index) => (
    <div
      key={index}
      style={{ border: "1px solid gray", borderRadius: "8px", padding: "10px" }}
    >
      <p>userId : {user.userId}</p>
      <p>userName : {user.userName}</p>
    </div>
  ));

  return (
    <div>
      <h2>Dashboard</h2>
      <div>{usersList}</div>
    </div>
  );
}

export default Dashboard;
