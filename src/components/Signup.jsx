import React from "react";
import { useState } from "react";

const Signup = async () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          value={username}
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          value={password}
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
