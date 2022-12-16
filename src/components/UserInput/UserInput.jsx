import Card from "../UI/Card";
import UserForm from "./UserForm";
const UserInput = ({ onAdd }) => {
  return (
    <Card>
      <UserForm onAdd={onAdd} />
    </Card>
  );
};

export default UserInput;
