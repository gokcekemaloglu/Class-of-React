
import Header from "./components/Header";
import Container from "react-bootstrap/Container"
// import {Container,Button} from "react-bootstrap"

import "bootstrap/dist/css/bootstrap.min.css"
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <Container className="text-center">
      <Header/>
      <CardContainer/>
      
    </Container>
  );
}

export default App;
