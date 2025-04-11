import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Drinks from './components/Drinks';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/booking" element={<Main />} />
          <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;