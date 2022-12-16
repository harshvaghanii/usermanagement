import Card from "../UI/Card";
import UserList from "./UserList";
const Users = ({ users, onAdd }) => {
  return (
    <Card>
      <UserList users={users} />
    </Card>
  );
};

export default Users;
