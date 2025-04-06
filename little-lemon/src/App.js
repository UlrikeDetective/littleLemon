import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Nav />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
