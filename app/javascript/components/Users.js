import React from "react";

const Users = ({ users }) => {
  const renderUsers = () => {
    return users.map((user) => {
      return (
        <div
          style={{
            border: "1px solid",
            margin: "20px",
            background: "lightpink",
          }}
        >
          <h6>{user.name}</h6>
          <p>{user.skill}</p>
          <a href={`/users/${user.id}/quotes`}>
            quotes index method(get all quotes) for {user.name}
          </a>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Users</h1>
      {renderUsers()}
    </div>
  );
};
export default Users;
