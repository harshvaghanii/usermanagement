const Button = (props) => {
  let classes = "buttonComponent " + props.className;
  return (
    <button
      className={classes}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
