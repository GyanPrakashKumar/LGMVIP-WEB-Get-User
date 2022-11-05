import React, { useState } from "react";
import './index.css';

function App() {
  // API: https://reqres.in/api/users?page=1
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1")
    const users = await response.json();
    setUsers(users.data);
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const callApi = () => {
    getUsers();
  };
  return (
    <div className="App">
      <nav>
        <h1>User-Lists</h1>
        <button onClick={callApi}>Get User</button>
      </nav>
      <div className="grid">
        {
          users.map((user) => {
            return (
              <div key={user.id} >
                <div className="users">
                  <div>
                    <img src={user.avatar} alt="user-img" />
                  </div>
                  <div className="details">
                    <p className="id">
                      <span>ID: </span>
                      {user.id}
                    </p>
                    <div className="name">
                      <p className="f_name">
                        <span>First Name: </span>
                        {user.first_name}
                      </p>
                      <p className="l_name">
                        <span>Last Name: </span>
                        {user.last_name}
                      </p>
                    </div>
                    <p className="email">
                      <span>E-mail: </span>
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
