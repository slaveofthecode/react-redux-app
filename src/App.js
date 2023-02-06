import { Routes, Route } from 'react-router-dom';
import { Home, About, Contact } from './pages';
import { Footer, Header, Content } from './components';

function App() {
  return (
    <div className="container my-2 ">
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
