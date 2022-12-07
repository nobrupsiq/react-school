import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Link } from "react-router-dom";
import Page1 from "./Page/Page1";
import Page2 from "./Page/Page2";
import Page3 from "./Page/Page3";

function App() {
  return (
    <div className="App">
      <header>
        <Link to={"/"}>
          <Button variant="outline-success">Home</Button>{" "}
        </Link>
        <Link to={"/usuario"}>
          <Button variant="outline-success">Usuario</Button>{" "}
        </Link>
        <Link to={"/contato"}>
          <Button variant="outline-success">Contato</Button>{" "}
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/usuario" element={<Page2 />}></Route>
        <Route path="/contato" element={<Page3 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
