import React from "react";
import { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      name
      email
      phone
    }
  }
`;
function User() {
  const [id, setId] = useState(2);
  const { loading, data, error } = useQuery(GET_USER, {
    variables: { id: id },
  });
  console.log(loading, data, error);
  return (
    <div>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter ID"
      />
    </div>
  );
}

export default User;
