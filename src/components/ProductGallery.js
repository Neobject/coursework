import { Row, Col, Container } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductGallery({ products, click }) {
  return (
    <Container>
      <Row xs={1} sm={2} md={2} lg={3} xl={4} className="g-4">
        {products.map(p => (
          <Col key={p.id}>
            <ProductCard
              image={p.image}
              title={p.title}
              click={() => click(p.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductGallery;
