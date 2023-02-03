import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact } from './pages';
import { Header, Menu, Content, Footer } from './components';

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
