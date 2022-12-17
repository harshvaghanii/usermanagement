import Card from "./Card";
import Button from "./Button";
import { Fragment } from "react";
const ErrorModal = ({ error, onConfirm }) => {
  return (
    <Fragment>
      <div className="backdrop" onClick={onConfirm}></div>
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
    </Fragment>
  );
};

export default ErrorModal;
