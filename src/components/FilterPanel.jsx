import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import './FilterPanel.css';

const brands = ['', 'Samsung', 'Apple', 'Xiaomi', 'Huawei', 'OnePlus', 'Google', 'Nokia', 'Sony','Motorola' ];
const colors = ['', 'Black', 'Silver', 'Midnight Sun', 'Gray'];

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
    // Фільтруємо тільки активні поля, включно з minPrice і maxPrice
    const activeFilters = Object.entries(filters).reduce((acc, [key, value]) => {
      if (value !== '') acc[key] = value;
      return acc;
    }, {});
    onFilter(activeFilters);
  };

  const handleReset = () => {
    const emptyFilters = {
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
    setFilters(emptyFilters);
    onFilter(emptyFilters);
  };

  return (
    <Card className="filter-card">
      <Card.Title className="filter-card-title">Пошук телефонів</Card.Title>
      <Form onSubmit={handleSubmit} className="filter-form">
        <div className="filter-grid">
          {/* Мінімальна ціна */}
          <div className="filter-item">
            <Form.Label className="filter-label">Мінімальна ціна</Form.Label>
            <Form.Control
              name="minPrice"
              type="number"
              min={0}
              placeholder="10000"
              value={filters.minPrice}
              onChange={handleChange}
              className="filter-input"
            />
          </div>

          {/* Максимальна ціна */}
          <div className="filter-item">
            <Form.Label className="filter-label">Максимальна ціна</Form.Label>
            <Form.Control
              name="maxPrice"
              type="number"
              min={0}
              placeholder="50000"
              value={filters.maxPrice}
              onChange={handleChange}
              className="filter-input"
            />
          </div>

          {/* Діагональ */}
          <div className="filter-item">
            <Form.Label className="filter-label">Діагональ (дюйми)</Form.Label>
            <Form.Control
              name="diagonal"
              type="number"
              min={0}
              step="0.1"
              placeholder="6.5"
              value={filters.diagonal}
              onChange={handleChange}
              className="filter-input"
            />
          </div>

          {/* Бренд */}
          <div className="filter-item">
            <Form.Label className="filter-label">Бренд</Form.Label>
            <Form.Select
              name="brand"
              value={filters.brand}
              onChange={handleChange}
              className="filter-input"
            >
              {brands.map((b, i) => (
                <option key={i} value={b}>
                  {b === '' ? 'Всі' : b}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* RAM */}
          <div className="filter-item">
            <Form.Label className="filter-label">RAM (ГБ)</Form.Label>
            <Form.Control
              name="ram"
              type="number"
              min={0}
              placeholder="8"
              value={filters.ram}
              onChange={handleChange}
              className="filter-input"
            />
          </div>

          {/* Пам'ять */}
          <div className="filter-item">
            <Form.Label className="filter-label">Пам'ять (ГБ)</Form.Label>
            <Form.Control
              name="storage"
              type="number"
              min={0}
              placeholder="128"
              value={filters.storage}
              onChange={handleChange}
              className="filter-input"
            />
          </div>

          {/* Колір */}
          <div className="filter-item">
            <Form.Label className="filter-label">Колір</Form.Label>
            <Form.Select
              name="color"
              value={filters.color}
              onChange={handleChange}
              className="filter-input"
            >
              {colors.map((c, i) => (
                <option key={i} value={c}>
                  {c === '' ? 'Всі' : c}
                </option>
              ))}
            </Form.Select>
          </div>

          {/* Процесор */}
          <div className="filter-item">
            <Form.Label className="filter-label">Процесор</Form.Label>
            <Form.Control
              name="cpu"
              type="text"
              placeholder="Snapdragon, Apple..."
              value={filters.cpu}
              onChange={handleChange}
              className="filter-input"
            />
          </div>

          {/* Камера */}
          <div className="filter-item">
            <Form.Label className="filter-label">Камера (Мп)</Form.Label>
            <Form.Control
              name="camera"
              type="number"
              min={0}
              placeholder="12"
              value={filters.camera}
              onChange={handleChange}
              className="filter-input"
            />
          </div>
        </div>

        <div className="filter-buttons">
          <Button type="submit" variant="primary" className="filter-button">
            Пошук
          </Button>
          <Button variant="outline-secondary" onClick={handleReset} className="filter-button">
            Очистити
          </Button>
        </div>
      </Form>
    </Card>
  );
}

export default FilterPanel;
