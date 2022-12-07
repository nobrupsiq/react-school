import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

function BasicExample() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="../img/react.png" />
      <Card.Body>
        <Card.Title>Nossa aplicação em React</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Clique aqui!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
