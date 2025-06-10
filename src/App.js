import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Container, Alert, Row, Col, Card, Navbar, Nav, Form, Button } from 'react-bootstrap';

import About from './About';
import News from './News';
import './App.css';

// Базовий FilterPanel (заміни своїм, якщо є)
function FilterPanel({ onFilter }) {
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    diagonal: '',
    brand: '',
    ram: '',
    storage: '',
    color: '',
    cpu: '',
    camera: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filters);
  };

  const handleReset = () => {
    const empty = {
      minPrice: '',
      maxPrice: '',
      diagonal: '',
      brand: '',
      ram: '',
      storage: '',
      color: '',
      cpu: '',
      camera: '',
    };
    setFilters(empty);
    onFilter(empty);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h5>Фільтр</h5>
      <Form.Group className="mb-2">
        <Form.Label>Мінімальна ціна</Form.Label>
        <Form.Control
          type="number"
          name="minPrice"
          value={filters.minPrice}
          onChange={handleChange}
          placeholder="Від"
          min={0}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Максимальна ціна</Form.Label>
        <Form.Control
          type="number"
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleChange}
          placeholder="До"
          min={0}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Діагональ (дюйми)</Form.Label>
        <Form.Control
          type="number"
          name="diagonal"
          value={filters.diagonal}
          onChange={handleChange}
          step="0.1"
          min={0}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Бренд</Form.Label>
        <Form.Control
          type="text"
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          placeholder="Samsung, Apple..."
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>ОЗП (ГБ)</Form.Label>
        <Form.Control
          type="number"
          name="ram"
          value={filters.ram}
          onChange={handleChange}
          min={0}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Пам'ять (ГБ)</Form.Label>
        <Form.Control
          type="number"
          name="storage"
          value={filters.storage}
          onChange={handleChange}
          min={0}
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Колір</Form.Label>
        <Form.Control
          type="text"
          name="color"
          value={filters.color}
          onChange={handleChange}
          placeholder="Black, Silver..."
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Процесор</Form.Label>
        <Form.Control
          type="text"
          name="cpu"
          value={filters.cpu}
          onChange={handleChange}
          placeholder="Snapdragon, Exynos..."
        />
      </Form.Group>

      <Form.Group className="mb-2">
        <Form.Label>Камера (Мп)</Form.Label>
        <Form.Control
          type="number"
          name="camera"
          value={filters.camera}
          onChange={handleChange}
          min={0}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="me-2">Фільтрувати</Button>
      <Button variant="secondary" onClick={handleReset}>Скинути</Button>
    </Form>
  );
}

const smartphones = [
  { id: 0, image: '/phones/Samsung.jpg', title: 'Samsung Galaxy S21', price: 25000, brand: 'Samsung', diagonal: 6.2, ram: 8, storage: 128, color: 'Black', cpu: 'Exynos 2100', camera: 64 },
  { id: 1, image: '/phones/iPhone.jpg', title: 'iPhone 13 Pro', price: 38000, brand: 'Apple', diagonal: 6.1, ram: 6, storage: 256, color: 'Silver', cpu: 'A15 Bionic', camera: 12 },
  { id: 2, image: '/phones/google.jpg', title: 'Google Pixel 6', price: 29000, brand: 'Google', diagonal: 6.4, ram: 8, storage: 128, color: 'Black', cpu: 'Google Tensor', camera: 50 },
  { id: 3, image: '/phones/OnePlus 9 Pro.jpg', title: 'OnePlus 9 Pro', price: 27000, brand: 'OnePlus', diagonal: 6.7, ram: 12, storage: 256, color: 'Silver', cpu: 'Snapdragon 888', camera: 48 },
  { id: 4, image: '/phones/Xiaomi Mi 11.jpg', title: 'Xiaomi Mi 11', price: 22000, brand: 'Xiaomi', diagonal: 6.8, ram: 8, storage: 128, color: 'Black', cpu: 'Snapdragon 888', camera: 108 },
  { id: 5, image: '/phones/Sony Xperia 1 III.jpg', title: 'Sony Xperia 1 III', price: 35000, brand: 'Sony', diagonal: 6.5, ram: 12, storage: 256, color: 'Black', cpu: 'Snapdragon 888', camera: 12 },
  { id: 6, image: '/phones/Huawei P50 Pro.jpg', title: 'Huawei P50 Pro', price: 31000, brand: 'Huawei', diagonal: 6.6, ram: 8, storage: 256, color: 'Black', cpu: 'Kirin 9000', camera: 50 },
  { id: 7, image: '/phones/Motorola Edge.jpg', title: 'Motorola Edge 20', price: 20000, brand: 'Motorola', diagonal: 6.7, ram: 8, storage: 128, color: 'Gray', cpu: 'Snapdragon 778G', camera: 108 },
  { id: 8, image: '/phones/Nokia X20.jpg', title: 'Nokia X20', price: 15000, brand: 'Nokia', diagonal: 6.67, ram: 6, storage: 128, color: 'Midnight Sun', cpu: 'Snapdragon 480', camera: 64 },
];

function App() {
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertText, setAlertText] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(smartphones);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (id) => {
    const product = smartphones.find(p => p.id === id);
    if (!product) return;

    if (cartItems.find(item => item.id === id)) {
      setAlertText(`"${product.title}" вже в кошику`);
      setAlertVisible(true);
      return;
    }

    setCartItems([...cartItems, product]);
    setAlertText(`"${product.title}" додано в кошик`);
    setAlertVisible(true);
  };

  const handleRemoveFromCart = (id) => {
    const product = cartItems.find(item => item.id === id);
    if (!product) return;

    setCartItems(cartItems.filter(item => item.id !== id));
    setAlertText(`"${product.title}" видалено з кошика`);
    setAlertVisible(true);
  };

  const handleFilter = (filters) => {
    const filtered = smartphones.filter(phone => {
      const minPriceCheck = !filters.minPrice || phone.price >= Number(filters.minPrice);
      const maxPriceCheck = !filters.maxPrice || phone.price <= Number(filters.maxPrice);
      const diagonalCheck = !filters.diagonal || phone.diagonal === Number(filters.diagonal);
      const brandCheck = !filters.brand || phone.brand.toLowerCase().includes(filters.brand.toLowerCase());
      const ramCheck = !filters.ram || phone.ram === Number(filters.ram);
      const storageCheck = !filters.storage || phone.storage === Number(filters.storage);
      const colorCheck = !filters.color || phone.color.toLowerCase().includes(filters.color.toLowerCase());
      const cpuCheck = !filters.cpu || phone.cpu.toLowerCase().includes(filters.cpu.toLowerCase());
      const cameraCheck = !filters.camera || phone.camera === Number(filters.camera);

      return minPriceCheck && maxPriceCheck && diagonalCheck && brandCheck && ramCheck && storageCheck && colorCheck && cpuCheck && cameraCheck;
    });
    setFilteredProducts(filtered);
  };

  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="md">
        <Container>
          <Navbar.Brand as={Link} to="/">Магазин смартфонів</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/news">Новини</Nav.Link>
              <Nav.Link as={Link} to="/about">Про нас</Nav.Link>
              <Nav.Link as={Link} to="/cart">Кошик ({cartItems.length})</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-3">
        {alertVisible && (
          <Alert variant="info" onClose={() => setAlertVisible(false)} dismissible>
            {alertText}
          </Alert>
        )}
      </Container>

      <Routes>
        <Route path="/" element={
          <HomePage
            filteredProducts={filteredProducts}
            handleAddToCart={handleAddToCart}
            handleFilter={handleFilter}
          />
        } />
        <Route path="/news" element={<News />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />} />
        <Route path="/checkout" element={<CheckoutPage setCartItems={setCartItems} />} />
      </Routes>
    </Router>
  );
}

function HomePage({ filteredProducts, handleAddToCart, handleFilter }) {
  return (
    <Container className="app mt-3">
      <Row className="mt-4">
        <Col md={9}>
          {filteredProducts.length === 0 ? (
            <p>Телефони за вашим запитом не знайдені.</p>
          ) : (
            filteredProducts.map(phone => (
              <Card key={phone.id} className="product-card mb-4">
                <Row className="g-0 align-items-center">
                  <Col md={4}>
                    <div className="phone-image-container">
                      <img
                        src={phone.image}
                        alt={phone.title}
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                      />
                    </div>
                  </Col>
                  <Col md={8}>
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
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
                      </div>
                      <Button variant="primary" onClick={() => handleAddToCart(phone.id)}>
                        Додати в кошик
                      </Button>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))
          )}
        </Col>
        <Col md={3}>
          <FilterPanel onFilter={handleFilter} />
        </Col>
      </Row>
    </Container>
  );
}

function CartPage({ cartItems, handleRemoveFromCart }) {
  return (
    <Container className="mt-4">
      <h3>Кошик</h3>
      {cartItems.length === 0 ? (
        <p>Ваш кошик порожній.</p>
      ) : (
        <Row xs={1} md={2} lg={3} className="g-4">
          {cartItems.map(item => (
            <Col key={item.id}>
              <Card className="product-card">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>Ціна: {item.price} грн</Card.Text>
                  <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Видалити</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
      {cartItems.length > 0 && (
        <div className="mt-3">
          <Button variant="success" href="/checkout">Оформити замовлення</Button>
        </div>
      )}
    </Container>
  );
}

function CheckoutPage({ setCartItems }) {
  const navigate = useNavigate();

  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Валідація номера телефону: +380XXXXXXXXX (Український формат)
    const phoneRegex = /^\+380\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError('Введіть коректний номер телефону у форматі +380XXXXXXXXX');
      return;
    }

    // Валідація імені і прізвища: два слова (ім'я та прізвище) з літер, дефісів, апострофів, розділені пробілом
    const nameRegex = /^[а-яА-ЯіїєґІЇЄҐa-zA-Z'-]+\s[а-яА-ЯіїєґІЇЄҐa-zA-Z'-]+$/;
    if (!nameRegex.test(name.trim())) {
      setError('Введіть ім\'я та прізвище через пробіл (тільки літери, дефіси, апострофи)');
      return;
    }

    // Валідація адреси доставки (допустимі літери, цифри, пробіли, коми, крапки, тире)
    const addressRegex = /^[а-яА-ЯёЁїЇіІєЄґҐa-zA-Z0-9\s.,'’\-№]+$/u;
if (!addressRegex.test(address.trim()) || address.trim() === '') {
  setError('Введіть коректну адресу доставки');
  return;
}


    alert(`Дякуємо, ${name}! Ваше замовлення прийнято.\nНомер телефону: ${phone}\nАдреса: ${address}`);

    setCartItems([]); // Очистити кошик після замовлення
    navigate('/'); // Повернути на головну
  };

  return (
    <Container className="mt-4">
      <h3>Оформлення замовлення</h3>
      <Form onSubmit={handleSubmit} style={{ maxWidth: '400px' }}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Ім'я та прізвище</Form.Label>
          <Form.Control
            type="text"
            placeholder="Введіть ваше ім'я і прізвище"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPhone">
          <Form.Label>Номер телефону</Form.Label>
          <Form.Control
            type="tel"
            placeholder="+380XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            Формат: +380XXXXXXXXX
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Адреса доставки</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Введіть адресу доставки"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </Form.Group>

        {error && <Alert variant="danger">{error}</Alert>}

        <Button variant="primary" type="submit">Підтвердити замовлення</Button>
      </Form>
    </Container>
  );
}


export default App;
