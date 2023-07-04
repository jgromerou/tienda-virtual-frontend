import { Container, Image } from 'react-bootstrap';

const Detalles = () => {
  return (
    <Container fluid>
      <Image
        src="https://res.cloudinary.com/dvcq6vatc/image/upload/v1688437512/tienda-virtual/questpro-src1_lpliff.jpg"
        fluid
        className="img-fluid"
        alt="imagen_producto"
      />
      <h1 className="text-overlay text-center">Texto encima de la imagen</h1>
    </Container>
  );
};

export default Detalles;
