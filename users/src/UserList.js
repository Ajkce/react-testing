import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      <div>Users</div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody data-testid="users">
          {users.map((user) => {
            return (
              <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
