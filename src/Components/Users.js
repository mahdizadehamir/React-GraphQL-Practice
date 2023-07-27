import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      data {
        id
        email
        phone
      }
    }
  }
`;
const Users = () => {
  const { loading, data, error } = useQuery(GET_USERS);
  if (loading) return <h1>...Loading...</h1>;
  if (error) return <h2>{error.message}</h2>;

  return (
    <div>
      {data.users.data.map((user) => (
        <div style={{ margin: "20px", padding: "30px" }} key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
