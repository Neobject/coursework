import React from 'react';
import { Container } from 'react-bootstrap';
import MyNavBar from './components/MyNavBar';
import Slider from './components/Slider';

function News() {
  const news = [
    {
      image: '/slides/slide3.jpg',
      title: 'Запуск нової колекції смартфонів',
      desc: 'Нова колекція смартфонів із сучасним дизайном і потужними функціями вже доступна в нашому магазині.',
    },
    {
      image: '/slides/slide1.jpg',
      title: 'Оновлення сайту',
      desc: 'Ми покращили дизайн сайту та підвищили швидкодію, щоб ваш досвід покупок був максимально комфортним.',
    },
    {
      image: '/slides/slide2.jpg',
      title: 'Акція на Xiaomi Mi 11',
      desc: 'Отримайте знижку 15% на Xiaomi Mi 11 — потужний смартфон з яскравим дисплеєм та відмінною камерою.',
    },
  ];

  return (
    <Container className="my-4">
      <MyNavBar />
      <h1 className="mb-4">Новини</h1>

      <ul>
        <li>🔹 18 травня — Запуск нової колекції смартфонів.</li>
        <li>🔹 15 травня — Оновлення сайту: покращено дизайн і швидкодію.</li>
        <li>🔹 10 травня — Акція на Xiaomi Mi 11: знижка 15% до кінця місяця.</li>
      </ul>

      <section className="mt-5">
        <Slider slides={news} />
      </section>
    </Container>
  );
}

export default News;
