import { Footer, Header, Content } from './components';
import { Routes } from './routes';

function App() {
  return (
    <div className="container my-2 ">
      <Header />
      <Content>
        <Routes />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
