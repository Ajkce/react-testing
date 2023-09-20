import React, { useState } from "react";

const UserForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name, email)
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">name</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
