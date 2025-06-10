import { Container } from 'react-bootstrap';
import MyNavBar from './components/MyNavBar';
import AboutList from './components/AboutList';

function About() {
  return (
    <Container>
      <MyNavBar />
      <h1>Про нас</h1>
      <AboutList />
    </Container>
  );
}

export default About;
