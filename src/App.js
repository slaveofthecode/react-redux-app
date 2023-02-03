import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './components/common/menu';
import Footer from './components/common/footer';
import Header from './components/common/header';
import Content from './components/common/content';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <Menu />
      <hr />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Content>
      <hr />
      <Footer />
    </div>
  );
}

export default App;
