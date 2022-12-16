import { useState } from "react";

const UserForm = ({ onAdd }) => {
  const [userInput, setUserInput] = useState({
    name: "",
    age: "",
  });

  const changeNameHandler = (event) => {
    setUserInput({
      ...userInput,
      name: event.target.value,
    });
  };

  const changeAgeHandler = (event) => {
    setUserInput({
      ...userInput,
      age: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onAdd(userInput);
    setUserInput({
      name: "",
      age: "",
    });
  };

  return (
    <form action="" className="inputForm" onSubmit={submitHandler}>
      <div className="userInputSection">
        <label htmlFor="">Username</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter username"
          required
          value={userInput.name}
          onChange={changeNameHandler}
        />
      </div>

      <div className="userInputSection">
        <label htmlFor="">Age (Years)</label>
        <input
          type="number"
          name=""
          id=""
          placeholder="Enter Age"
          required
          min={10}
          value={userInput.age}
          onChange={changeAgeHandler}
        />
      </div>

      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
