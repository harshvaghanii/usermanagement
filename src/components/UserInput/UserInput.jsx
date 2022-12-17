import Card from "../UI/Card";
import UserForm from "./UserForm";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

const UserInput = ({ onAdd }) => {
  const [error, setError] = useState();
  const showErrorHandler = (error) => {
    setError((prevError) => error);
  };

  const disableErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal error={error} onConfirm={disableErrorHandler} />}

      <Card>
        <UserForm onAdd={onAdd} onError={showErrorHandler} />
      </Card>
    </div>
  );
};

export default UserInput;
