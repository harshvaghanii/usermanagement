import { useState } from "react";
import UserInput from "./components/UserInput/UserInput";
import Users from "./components/Users/Users";

const App = () => {
  const DUMMY_USERS = [
    {
      id: "u1",
      name: "Harsh",
      age: 18,
    },
    {
      id: "u2",
      name: "Rocky",
      age: 27,
    },
  ];

  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (user) => {
    const newUser = {
      id: Math.random().toString(),
      ...user,
    };
    setUsers((prevUsers) => {
      return [newUser, ...prevUsers];
    });
  };

  return (
    <div>
      <UserInput onAdd={addUserHandler} />
      <Users users={users} />
    </div>
  );
};

export default App;
