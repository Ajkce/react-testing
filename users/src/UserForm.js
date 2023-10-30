import React, { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    onUserAdd({ name, email });
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="email"
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
