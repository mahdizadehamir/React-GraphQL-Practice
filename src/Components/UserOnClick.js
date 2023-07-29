import React from "react";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_USER } from "./GraphQL/queries";
function UserOnClick() {
  const [id, setId] = useState(2);
  const [getUser, { loading, data, error, called }] = useLazyQuery(GET_USER, {
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
      <button onClick={() => getUser()}>Get User</button>
      {loading && <h1>Loading ...</h1>}
      {error && <h1>An Error Occured!!</h1>}
      {data && (
        <>
          <h2>{data.user.name}</h2>
          <p>{data.user.email}</p>
          <p>{data.user.phone}</p>
        </>
      )}
    </div>
  );
}

export default UserOnClick;
