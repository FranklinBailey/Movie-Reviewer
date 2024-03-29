import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav } from 'react-bootstrap';

import Home from "./views/home";
import Discover from "./views/discover";
import TopRated from './views/topRated';
import Upcoming from './views/upcoming';

function App() {
  return (
    <Router>
      <Container
        className='fixed-top'
        style={{
          backgroundImage: 'linear-gradient(92.83deg, #4B0082 0%, #000000 100%)'
        }}
      >

        <Nav justify variant="tabs,dark" defaultActiveKey="/home" bg="dark">

          <Nav.Item>
            <Nav.Link href="/">
              <Link className='homeLink' to="/" style={{ textDecoration: 'none' }}></Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Nav.Item>
          <Nav.Link href='/'>
            <Link className='discoverLink' to="/" style={{textDecoration: 'none'}}/>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/'>
            <Link className='topRatedLink' to="/" style={{textDecoration: 'none'}}/>
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href='/'>
            <Link className='upcomingLink' to="/" style={{textDecoration: 'none'}}/>
          </Nav.Link>
        </Nav.Item>

      </Container>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/TopRated" element={<TopRated />} />
        <Route path="/Upcoming" element={<Upcoming />} />
      </Routes>
    </Router>
  );
}

export default App;
