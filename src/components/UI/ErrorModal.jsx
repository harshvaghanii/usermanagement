import Card from "./Card";
import Button from "./Button";
const ErrorModal = ({ error, onConfirm }) => {
  return (
    <div>
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
    </div>
  );
};

export default ErrorModal;
