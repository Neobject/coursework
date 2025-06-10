import React from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import FilterPanel from './components/FilterPanel';

function HomePage({ filteredProducts, handleAddToCart, alertText, alertVisible, setAlertVisible, handleFilter }) {
  return (
    <Container className="app mt-3">
      {alertVisible && (
        <Alert variant="success" dismissible onClose={() => setAlertVisible(false)} className="mt-3">
          {alertText}
        </Alert>
      )}
      <Row className="mt-4">
        <Col md={9}>
          {filteredProducts.map(phone => (
            <Card key={phone.id} className="product-card mb-4">
              <Row className="align-items-center g-0">
                <Col md={4}>
                  <div className="phone-image-container">
                    <img
                      src={phone.image}
                      alt={phone.title}
                    />
                  </div>
                </Col>
                <Col md={8}>
                  <Card.Body>
                    <Card.Title>{phone.title}</Card.Title>
                    <Card.Text>
                      <b>Ціна:</b> {phone.price} грн<br />
                      <b>Бренд:</b> {phone.brand}<br />
                      <b>Діагональ:</b> {phone.diagonal}"<br />
                      <b>ОЗП:</b> {phone.ram} ГБ<br />
                      <b>Пам'ять:</b> {phone.storage} ГБ<br />
                      <b>Колір:</b> {phone.color}<br />
                      <b>Процесор:</b> {phone.cpu}<br />
                      <b>Камера:</b> {phone.camera} Мп<br />
                    </Card.Text>
                    <Button variant="primary" onClick={() => handleAddToCart(phone.id)}>
                      Додати в кошик
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Col>
        <Col md={3}>
          <FilterPanel onFilter={handleFilter} />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
