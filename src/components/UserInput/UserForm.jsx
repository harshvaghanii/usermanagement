import { useState } from "react";
import Button from "../UI/Button";
const UserForm = ({ onAdd, onError }) => {
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

    if (userInput.name.trim() === "" || userInput.age.trim() === "") {
      onError({
        title: "OOPS :(",
        message: "Values cannot be Empty!!",
      });
      return;
    }

    if (+userInput.age < 1) {
      onError({
        title: "OOPS :(",
        message: "Please enter a valid age!",
      });
      return;
    }

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
          value={userInput.age}
          onChange={changeAgeHandler}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default UserForm;
