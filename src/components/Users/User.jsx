const User = ({ user }) => {
  return (
    <div className={"userContainer"}>
      <p>{`${user.name} (${user.age} years old)`}</p>
    </div>
  );
};

export default User;
