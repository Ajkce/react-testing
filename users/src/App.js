import React, { useState } from "react";
import UserForm from "./UserForm";
import UserList from "./UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };
  return (
    <div>
      <UserForm onUserAdd={onUserAdd}></UserForm>
      <hr />
      <UserList users={users}></UserList>
      <h1>Testing</h1>
    </div>
  );
};

export default App;
