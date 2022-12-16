import User from "./User";

const UserList = ({ users }) => {
  return (
    <div className={"listcontainer"}>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
