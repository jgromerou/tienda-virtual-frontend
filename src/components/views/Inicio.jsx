import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Inicio = () => {
  return (
    <section className="mainSection">
      <Container>
        <h1 className="display-4 my-2 text-center">Comprar productos</h1>
        <h4 className=" my-2 text-center text-secondary">
          El futuro de la realidad virtual y la realidad aumentada ya está aquí.
        </h4>
        <hr />
        <Row>
          <Col md={6} lg={4} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                className="imgCard"
                src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1688264563/tienda-virtual/metaquestpro-removebg-preview_tuixaq.png"
              />
              <Card.Body>
                <Card.Title className="alturaTitulo">Meta Quest Pro</Card.Title>
                <Card.Text className="mb-4">Categoria: quest</Card.Text>

                <Card.Text className="mb-4 text-secondary">
                  $1499.99 USD
                </Card.Text>

                <Button className="btn btn-primary">Más Informarción</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                className="imgCard"
                src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1688264563/tienda-virtual/metaquestpro-removebg-preview_tuixaq.png"
              />
              <Card.Body>
                <Card.Title className="alturaTitulo">Meta Quest Pro</Card.Title>
                <Card.Text className="mb-4">Categoria: quest</Card.Text>

                <Card.Text className="mb-4 text-secondary">
                  $1499.99 USD
                </Card.Text>

                <Button className="btn btn-primary">Más Informarción</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                className="imgCard"
                src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1688264563/tienda-virtual/metaquestpro-removebg-preview_tuixaq.png"
              />
              <Card.Body>
                <Card.Title className="alturaTitulo">Meta Quest Pro</Card.Title>
                <Card.Text className="mb-4">Categoria: quest</Card.Text>

                <Card.Text className="mb-4 text-secondary">
                  $1499.99 USD
                </Card.Text>

                <Button className="btn btn-primary">Más Informarción</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                className="imgCard"
                src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1688264563/tienda-virtual/metaquestpro-removebg-preview_tuixaq.png"
              />
              <Card.Body>
                <Card.Title className="alturaTitulo">Meta Quest Pro</Card.Title>
                <Card.Text className="mb-4">Categoria: quest</Card.Text>

                <Card.Text className="mb-4 text-secondary">
                  $1499.99 USD
                </Card.Text>

                <Button className="btn btn-primary">Más Informarción</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card>
              <Card.Img
                variant="top"
                className="imgCard"
                src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1688264563/tienda-virtual/metaquestpro-removebg-preview_tuixaq.png"
              />
              <Card.Body>
                <Card.Title className="alturaTitulo">Meta Quest Pro</Card.Title>
                <Card.Text className="mb-4">Categoria: quest</Card.Text>

                <Card.Text className="mb-4 text-secondary">
                  $1499.99 USD
                </Card.Text>

                <Button className="btn btn-primary">Más Informarción</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
