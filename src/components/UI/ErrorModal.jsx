import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";
import ReactDOM from "react-dom";

/**
 * React Portals are used to render elements like Overlays, Modals at a different position in the Dom rather than inside root.
 * This helps to keep the code structure clean.
 * The react-dom package is imported and the create portal method is made use of.
 * The create portal method takes two arguments.
 * First is the component that needs to be rendered.
 * Second is the location where it has to be rendered. The location can be obtained by using DOM getElementById method.
 */

const BackDrop = ({ onConfirm }) => {
  return <div className="backdrop" onClick={onConfirm}></div>;
};

const Modal = ({ error, onConfirm }) => {
  return (
    <Card className={"modalCard"}>
      <header className={"modalHeader"}>
        <h2>{error.title}</h2>
      </header>
      <section className="wrapper">
        <section className={"modalContent"}>
          <p>{error.message}</p>
        </section>
        <footer className={"modalFooter"}>
          <Button className={"errorBtn"} onClick={onConfirm}>
            Close
          </Button>
        </footer>
      </section>
    </Card>
  );
};

const ErrorModal = ({ error, onConfirm }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <BackDrop onConfirm={onConfirm} />,
        document.getElementById("backdrop-portal")
      )}

      {ReactDOM.createPortal(
        <Modal error={error} onConfirm={onConfirm} />,
        document.getElementById("modal-portal")
      )}
    </Fragment>
  );
};

export default ErrorModal;
