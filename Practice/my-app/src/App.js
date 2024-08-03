import { Card, Col, Container, Row, Button } from "react-bootstrap";
import "./App.css";
import Footer from "./Footer";
import { Header } from "./Header";
import { blog } from "./Data/blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faSearch } from "@fortawesome/free-solid-svg-icons";

function App() {
  let headerInfo = {
    email: "talha@gmail.com",
    phone: "090078601",
  };
  // let name = "Talha";
  // let l = [10, 20, 30, 40];
  // let obj = {
  //   name: "TR",
  //   cName: "MERN",
  //   desc: "React.JS",
  // };
  // let status = true;
  return (
    <div className="main">
      {/* <Header /> */}
      <Header headerInfo={headerInfo} cname="Leed">
        <h1 className="text-center">Welcome to Leed</h1>
      </Header>
      <FontAwesomeIcon icon={faFacebookMessenger} className="text-danger" />
      <FontAwesomeIcon icon={faWhatsapp} className="text-danger px-5" />
      <FontAwesomeIcon icon={faSearch} className="text-danger" />
      <FontAwesomeIcon icon={faPhone} className="text-danger" />
      <div className="container">
        <h1 className="text-danger">welcome to home</h1>
      </div>
      {/* <Container fluid>
        <Row>
          <Col className="col-12 text-center">
            <h1>Our Courses</h1>
          </Col>
        </Row>
        <Row>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="3" md="6">

          </Col>
        </Row>
      </Container> */}

      <Container>
        <Row>
          {blog.map((v, i) => {
            return <ProductsItems pitems={v} key={i} />;
          })}
        </Row>
      </Container>

      {/* <Card /> */}
      <Footer>
        <h1>hello</h1>
      </Footer>

      {/* <h1>hello</h1>
      <h1>{name}</h1>
      {l.map((v) => {
        return <div>{v}</div>;
      })}
      <div>
        {obj.cName}
        {obj.desc}
        {obj.name}
      </div>
      <div>{10 + 20}</div>
      {(status) ?
        <h1 style={{color:"red",backgroundColor:"yellowgreen"}}>Welcome</h1>
        :
        "hello"
      } */}
    </div>
  );
}

export default App;

function ProductsItems({ pitems }) {
  return (
    <Col lg="3" md="6" className="my-2">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{pitems.title}</Card.Title>
          <Card.Text>{pitems.body}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
