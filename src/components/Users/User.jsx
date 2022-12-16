const User = ({ user }) => {
  return (
    <div className={"userContainer"}>
      {/* <p>Max (31 years old)</p> */}
      <p>{`${user.name} (${user.age} years old)`}</p>
    </div>
  );
};

export default User;
