import Card from "../UI/Card";
import UserForm from "./UserForm";
import ErrorModal from "../UI/ErrorModal";
import { useState, Fragment } from "react";

const UserInput = ({ onAdd }) => {
  const [error, setError] = useState();
  const showErrorHandler = (error) => {
    setError((prevError) => error);
  };

  const disableErrorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && <ErrorModal error={error} onConfirm={disableErrorHandler} />}

      <Card>
        <UserForm onAdd={onAdd} onError={showErrorHandler} />
      </Card>
    </Fragment>
  );
};

export default UserInput;
