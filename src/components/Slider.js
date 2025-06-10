import Carousel from 'react-bootstrap/Carousel';

function Slider({ slides }) {
  return (
    <Carousel>
      {slides.map((s, index) => (
        <Carousel.Item key={index}>
          <img src={s.image} alt="Background" className="slide-image" />
          <Carousel.Caption>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;
